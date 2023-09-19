# Patient

## Demographic

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| Name | input | The patient's full name (first and last). | No |
| Medical Record Number | input | An assigned medical record number. | No |
| Date Of Birth | datetime | The patient's date of birth. | No |
| [Sex](#sex) | select-dropdown | The patient's sex. | No |
| [Race](#race) | select-dropdown | The patient's race or ethnicity. | No |
| Photo | file-image | A reference to a media object containing the patient's photo. | No |
| Height Value | input | The patient's height in the units specified in Height Unit. | No |
| [Height Unit](#height_unit) | select-dropdown | The unit of the Height Value specified. | No |
| Weight Value | input | The patient's weight in the units specified in Weight Unit. | No |
| [Weight Unit](#weight_unit) | select-dropdown | The unit of the Weight Value specified. | No |

### Sex

Options:

- Male
- Female

### Race

Options:

- American Indian or Alaska Native
- Asian
- Black or African American
- Hispanic or Latino
- Native Hawaiian or Other Pacific Islander
- White

### Height Unit

Options:

- Inches
- Centimeters

### Weight Unit

Options:

- Pounds (lb)
- Kilograms (kg)

## History

### Clinical Presentation

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| Chief Complaint | input | The patient's chief complaint. | No |
| History Of Present Illness | input-rich-text-html | The history of present illness, accepts HTML formatting. | No |

### Background

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| Past Medical History | list | An array of past medical history items.  | No |
| Past Surgical History | list | An array of past surgical history items.  | No |
| Medications | list | An array of current medications. | No |
| Allergies | list | An array of patient allergies (consider including reaction in parentheses). | No |
| Family History | list | An array of family history elements (consider adding relation in parentheses). | No |
| Social History | list | An array of free text elements for social history. | No |

### Review Of Systems Template

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| Review Of Systems Template | select-dropdown-m2o | A reference to a Review of Systems object. | No |

## Diagnostic

### Vital Signs Template

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| Vital Signs Template | select-dropdown-m2o | A reference to a Vital Signs object. | No |

### Physical Exam Template

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| Physical Exam Template | select-dropdown-m2o | A reference to a Physical Exam object. | No |

