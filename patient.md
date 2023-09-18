# Patient

## Demographic

| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| name | The patient's full name (first and last). | string | No |
| medical_record_number | An assigned medical record number. | integer | No |
| date_of_birth | The patient's date of birth. | date | No |
| [sex](#sex) | N/A | string | No |
| [race](#race) | The patient's race or ethnicity. | string | No |
| photo | A reference to a media object containing the patient's photo. | uuid | No |
| height_value | The patient's height in the units specified in Height Unit. | integer | No |
| [height_unit](#height_unit) | The unit of the Height Value specified. | string | No |
| weight_value | The patient's weight in the units specified in Weight Unit. | integer | No |
| [weight_unit](#weight_unit) | The unit of the Weight Value specified. | string | No |
### Sex

N/A

#### Options
- Male
- Female


### Race

The patient's race or ethnicity.

#### Options
- American Indian or Alaska Native
- Asian
- Black or African American
- Hispanic or Latino
- Native Hawaiian or Other Pacific Islander
- White


### Height Unit

The unit of the Height Value specified.

#### Options
- Inches
- Centimeters


### Weight Unit

The unit of the Weight Value specified.

#### Options
- Pounds (lb)
- Kilograms (kg)


## History

### Clinical Presentation

| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| chief_complaint | The patient's chief complaint. | string | No |
| history_of_present_illness | The history of present illness, accepts HTML formatting. | text | No |


### Background

| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| past_medical_history | An array of past medical history items.  | json | No |
| past_surgical_history | An array of past surgical history items.  | json | No |
| medications | An array of current medications. | json | No |
| allergies | An array of patient allergies (consider including reaction in parentheses). | json | No |
| family_history | An array of family history elements (consider adding relation in parentheses). | json | No |
| social_history | An array of free text elements for social history. | json | No |


### Review Of Systems Template

| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |


## Diagnostic

### Vital Signs

| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| vital_signs_template | A reference to a Vital Signs object. | string | No |


### Physical Exam

| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| physical_exam_template | A reference to a Physical Exam object. | string | No |


