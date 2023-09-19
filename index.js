require('dotenv').config();
const fs = require('fs');
const yaml = require('js-yaml');

// Read YAML file
const readYAML = (filePath) => {
  try {
    return yaml.load(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    console.error(err);
  }
};

// Read JSON file
const readJSON = (filePath) => {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    console.error(err);
  }
};

// Generate Markdown table from rows
const generateMarkdownTable = (rows) => {
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
      const fieldData = fieldToCollectionMap[`${parentItem}.${fieldName}`];
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
  } else {
    Object.keys(groupFields).forEach(subGroupName => {
      markdownContent += `### ${subGroupName}\n\n`;
      markdownContent += processGroup(groupFields[subGroupName], fieldToCollectionMap, parentItem);
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
});

Object.keys(structureData).forEach(parentItem => {
  let markdownContent = `# ${parentItem}\n\n`;

  if (Array.isArray(structureData[parentItem])) {
    markdownContent += processGroup(structureData[parentItem], fieldToCollectionMap, parentItem);
  } else {
    Object.keys(structureData[parentItem]).forEach(groupName => {
      markdownContent += `## ${groupName}\n\n`;
      markdownContent += processGroup(structureData[parentItem][groupName], fieldToCollectionMap, parentItem);
    });
  }

  fs.writeFileSync(`./${parentItem}.md`, markdownContent);
});
