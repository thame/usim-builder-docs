
import yaml
import json
import sys
from collections import defaultdict

def to_start_case(s):
    return ' '.join([w[0].upper() + w[1:] for w in s.replace('_', ' ').split()])

def generate_table(fields_dict, parent_name, field_names):
    table_content = "| Name | Description | Type | Required |\n"
    table_content += "| ---- | ----------- | ---- | -------- |\n"
    additional_content = ""
    
    for field_name in field_names:
        field_info = next((field for field in fields_dict[parent_name] if field['field'] == field_name), None)
        
        if field_info is None:
            continue
        
        name = field_info['field']
        description = field_info['note'] if field_info['note'] else 'N/A'
        field_type = field_info['type'] if field_info['type'] else 'N/A'
        required = "Yes" if field_info['required'] else "No"
        
        if field_info.get('options') and field_info['options'].get('choices'):
            name = f"[{field_info['field']}](#{field_info['field']})"
            
            additional_content += f"### {to_start_case(field_info['field'])}\n\n"
            additional_content += f"{description}\n\n"
            additional_content += "#### Options\n"
            for choice in field_info['options']['choices']:
                additional_content += f"- {choice['text']}\n"
            additional_content += "\n\n"
        
        table_content += f"| {name} | {description} | {field_type} | {required} |\n"
            
    return table_content, additional_content

def generate_parent_markdown(fields_dict, structure, parent_name):
    markdown_content = f"# {to_start_case(parent_name)}\n\n"
    
    if isinstance(structure, dict):
        for subsection, field_names_or_subsections in structure.items():
            markdown_content += f"## {to_start_case(subsection)}\n\n"
            
            if isinstance(field_names_or_subsections, list):
                table_content, additional_content = generate_table(fields_dict, parent_name, field_names_or_subsections)
                markdown_content += table_content
                markdown_content += additional_content
                
            elif isinstance(field_names_or_subsections, dict):
                for sub_subsection, field_names in field_names_or_subsections.items():
                    markdown_content += f"### {to_start_case(sub_subsection)}\n\n"
                    table_content, additional_content = generate_table(fields_dict, parent_name, field_names)
                    markdown_content += table_content
                    markdown_content += additional_content
                    markdown_content += "\n\n"
    elif isinstance(structure, list):
        table_content, additional_content = generate_table(fields_dict, parent_name, structure)
        markdown_content += table_content
        markdown_content += additional_content
    
    return markdown_content

# Main script starts here

if len(sys.argv) < 2:
    print("Usage: python script.py <path_to_snapshots.yaml>")
    sys.exit(1)

snapshot_file_path = sys.argv[1]

with open(snapshot_file_path, 'r') as file:
    snapshot_data = yaml.safe_load(file)

fields_dict = defaultdict(list)
for field in snapshot_data.get('fields', []):
    collection = field.get('collection')
    field_name = field.get('field')
    meta = field.get('meta', {})
    field_data = {
        'field': field_name,
        'type': field.get('type'),
        'interface': meta.get('interface'),
        'note': meta.get('note'),
        'required': meta.get('required', False),
        'options': meta.get('options')
    }
    fields_dict[collection].append(field_data)

with open('structure.json', 'r') as file:
    structure_data = json.load(file)

for parent_name, structure in structure_data.items():
    markdown_content = generate_parent_markdown(fields_dict, structure, parent_name)
    output_file_path = f"{parent_name}.md"
    with open(output_file_path, 'w') as f:
        f.write(markdown_content)
