require('dotenv').config()
const fs = require('fs')
const yaml = require('js-yaml')
const _ = require('lodash')

const toStartCase = (str) => _.startCase(_.toLower(str.replace(/_/g, ' ')))

const generateMarkdown = (obj, fieldsData) => {
  if (!obj) return ''

  let markdown = `# ${toStartCase(obj.collection)}\n\n`

  const processFields = (fields, level) => {
    let content = ''
    let details = ''
    if (!fields || !Array.isArray(fields)) return { content: '', details: '' }

    fields.forEach((field) => {
      const fieldData = fieldsData.find((f) => f.collection === obj.collection && f.field === field)

      if (fieldData) {
        const { meta, schema } = fieldData
        const defaultVal = schema?.default_value ? `Default: ${schema.default_value}` : ''
        const desc = meta.note ? meta.note : defaultVal
        const required = meta.required ? '**Yes**' : 'No'

        let fieldName = toStartCase(field)
        if (meta.options?.choices) {
          fieldName = `[${fieldName}](#${field})`
          details += `${'#'.repeat(level + 1)} ${toStartCase(
            field
          )}\n\nOptions:\n\n${meta.options.choices
            .map((choice) => `- ${choice.text}`)
            .join('\n')}\n\n`
        }

        content += `| ${fieldName} | ${meta.interface} | ${desc} | ${required} |\n`
      }
    })

    return {
      content: `| Field | Type | Description | Required |\n| --- | --- | --- | --- |\n${content}\n`,
      details,
    }
  }

  const processGroup = (group, level, fields) => {
    if (!group) return ''

    let content = ''
    let groupDetails = ''
    if (typeof group === 'string') {
      const { content: fieldContent, details } = processFields(fields[group], level)
      content += `${'#'.repeat(level)} ${toStartCase(group)}\n\n${fieldContent}${details}`
    } else {
      for (const [key, subgroups] of Object.entries(group)) {
        const { content: fieldContent, details } = processFields(fields[key], level)
        content += `${'#'.repeat(level)} ${toStartCase(key)}\n\n${fieldContent}${details}`
        subgroups.forEach((subgroup) => {
          content += processGroup(subgroup, level + 1, fields[key] || {})
        })
      }
    }
    return content
  }

  if (obj.groups) {
    obj.groups.forEach((group) => {
      markdown += processGroup(group, 2, obj.fields)
    })
  } else {
    const { content, details } = processFields(obj.fields, 2)
    markdown += content + details
  }

  return markdown
}

const main = () => {
  const structure = require('./structure.js')
  const snapshotPath = process.env.SNAPSHOT_PATH || './snapshot.yaml'
  const fieldsData = yaml.load(fs.readFileSync(snapshotPath, 'utf8')).fields

  Object.keys(structure).forEach((key) => {
    const obj = structure[key]
    let outputPath = key

    if (obj.parent) {
      if (!fs.existsSync(obj.parent)) {
        fs.mkdirSync(obj.parent)
      }
      outputPath = `${obj.parent}/${key}.md`
    } else {
      if (!fs.existsSync(key)) {
        fs.mkdirSync(key)
      }
      outputPath = `${key}/index.md`
    }

    const content = generateMarkdown(obj, fieldsData)
    fs.writeFileSync(outputPath, content)
  })
}

main()
