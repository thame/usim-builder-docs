const fs = require('fs');
const yaml = require('js-yaml');

// Load YAML file and convert it to JSON
const loadYamlFile = (filePath) => {
  try {
    const file = fs.readFileSync(filePath, 'utf8');
    return yaml.safeLoad(file);
  } catch (e) {
    console.log(e);
  }
};

// Load JSON file
const loadJsonFile = (filePath) => {
  try {
    const file = fs.readFileSync(filePath);
    return JSON.parse(file);
  } catch (e) {
    console.log(e);
  }
};

// Generate markdown documentation
const generateMarkdown = (yamlData, jsonData) => {
  let markdown = '';

  for (const key in jsonData) {
    markdown += `# ${key}\n\n`;

    for (const subKey in jsonData[key]) {
      markdown += `## ${subKey}\n\n`;

      markdown += '| Name | Description | Type | Required |\n';
      markdown += '| ---- | ----------- | ---- | -------- |\n';

      jsonData[key][subKey].forEach((field) => {
        const fieldData = yamlData.collections.find((collection) => collection.collection === key).fields.find((f) => f.field === field);
        markdown += `| ${fieldData.field} | ${fieldData.meta.note} | ${fieldData.schema.data_type} | ${fieldData.meta.required ? 'Yes' : 'No'} |\n`;
      });

      markdown += '\n';
    }
  }

  return markdown;
};

// Main function
const main = () => {
  const yamlFilePath = process.argv[2];
  const jsonFilePath = process.argv[3];

  const yamlData = loadYamlFile(yamlFilePath);
  const jsonData = loadJsonFile(jsonFilePath);

  const markdown = generateMarkdown(yamlData, jsonData);

  console.log(markdown);
};

main();
