require('dotenv').config();
const fs = require('fs');
const yaml = require('js-yaml');

// Convert a string to Start Case
const toStartCase = str => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

// Read YAML file
const readYAML = filePath => {
  try {
    return yaml.load(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    console.error(err);
  }
};

// Read JSON file
const readJSON = filePath => {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    console.error(err);
  }
};

// Generate Markdown table from rows
const generateMarkdownTable = rows => {
  let md = '| Field | Type | Description | Required |\n| --- | --- | --- | --- |\n';
  rows.forEach(row => {
    const fieldName = row.options ? `[${row.field}](#${row.field})` : row.field;
    md += `| ${fieldName} | ${row.type} | ${row.description} | ${row.required} |\n`;
  });
  return md;
};

// Recursive function to process each group or subgroup
const processGroup = (groupFields, fieldToCollectionMap, parentItem) => {
  let markdownContent = '';
  
  if (Array.isArray(groupFields)) {
    const rows = [];
    groupFields.forEach(fieldName => {
      const fieldData = fieldToCollectionMap[`${parentItem}.${fieldName}`] || fieldToCollectionMap[fieldName];
      if (!fieldData) {
        console.warn(`Skipped ${fieldName} due to missing field data`);
        return;
      }
      const meta = fieldData.meta;
      rows.push({
        field: fieldName,
        type: meta.interface,
        description: meta.note,
        required: meta.required ? 'Yes' : 'No',
        options: meta.options && meta.options.choices
      });
    });
    markdownContent += generateMarkdownTable(rows);

    // Add expanded choices
    rows.forEach(row => {
      if (row.options) {
        markdownContent += `\n### ${row.field}\n\n`;
        markdownContent += '- ' + row.options.map(choice => choice.text).join('\n- ') + '\n';
      }
    });
  } else {
    Object.keys(groupFields).forEach(subGroupName => {
      markdownContent += `### ${toStartCase(subGroupName)}\n\n`;
      markdownContent += processGroup(groupFields[subGroupName], fieldToCollectionMap, `${parentItem}.${subGroupName}`);
    });
  }

  return markdownContent;
};

const snapshotPath = process.env.SNAPSHOT_PATH || './snapshot.yaml';
const schemaData = readYAML(snapshotPath);
const structureData = readJSON('./structure.json');

const fieldToCollectionMap = {};
schemaData.fields.forEach(field => {
  if (field.collection && field.field) {
    fieldToCollectionMap[`${field.collection}.${field.field}`] = field;
  }
  // Add fields without collection for more flexibility
  fieldToCollectionMap[field.field] = field;
});

Object.keys(structureData).forEach(parentItem => {
  let markdownContent = `# ${toStartCase(parentItem)}\n\n`;

  if (Array.isArray(structureData[parentItem])) {
    markdownContent += processGroup(structureData[parentItem], fieldToCollectionMap, parentItem);
  } else {
    Object.keys(structureData[parentItem]).forEach(groupName => {
      markdownContent += `## ${toStartCase(groupName)}\n\n`;
      markdownContent += processGroup(structureData[parentItem][groupName], fieldToCollectionMap, parentItem);
    });
  }

  fs.writeFileSync(`./${parentItem}.md`, markdownContent);
});
