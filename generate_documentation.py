
import yaml
import json

# Function to convert to title case and replace underscores
def to_title_case(text):
    return text.replace('_', ' ').title()

# Function to generate markdown content for a given parent and its structure
def generate_parent_markdown(fields_data, structure_data, parent_name):
    markdown_content = f"# {to_title_case(parent_name)}\n\n"
    
    if isinstance(structure_data[parent_name], dict):
        for section, fields in structure_data[parent_name].items():
            if isinstance(fields, dict):
                for subsection, subfields in fields.items():
                    markdown_content += f"## {to_title_case(subsection)}\n\n"
                    markdown_content += generate_table(fields_data, subfields)
                    markdown_content += "\n---\n\n"
            else:
                markdown_content += f"## {to_title_case(section)}\n\n"
                markdown_content += generate_table(fields_data, fields)
                markdown_content += "\n---\n\n"
    else:
        markdown_content += generate_table(fields_data, structure_data[parent_name])
        markdown_content += "\n---\n\n"
            
    return markdown_content

# Function to generate markdown table for given fields
def generate_table(fields_data, fields):
    table_content = "| Name | Type | Description | Required |\n"
    table_content += "| ---- | ---- | ----------- | -------- |\n"
    
    for field_name in fields:
        field_data = next((item for item in fields_data if item['field'] == field_name), None)
        if field_data:
            table_content += f"| {field_data['field']} | {field_data['type']} | {field_data['meta']['note']} | {field_data['meta']['required']} |\n"
    
    return table_content

# Read structure.json
with open("structure.json", 'r') as f:
    structure_data = json.load(f)

# Read snapshot.yaml
with open("snapshot.yaml", 'r') as f:
    snapshot_data = yaml.safe_load(f)

fields_data = snapshot_data['fields']

# Generate markdown content for each parent item ("scenario", "patient", "action")
for parent_name in structure_data.keys():
    markdown_content = generate_parent_markdown(fields_data, structure_data, parent_name)
    with open(f"{parent_name}.md", 'w') as f:
        f.write(markdown_content)
