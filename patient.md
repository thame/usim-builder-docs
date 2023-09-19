# Patient

## Demographic

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| [Name](Name) | input | The patient's full name (first and last). | No |
| [Medical Record Number](Medical-Record-Number) | input | An assigned medical record number. | No |
| [Date Of Birth](Date-Of-Birth) | datetime | The patient's date of birth. | No |
| [Sex](Sex) | select-dropdown | N/A | No |
| [Race](Race) | select-dropdown | The patient's race or ethnicity. | No |
| [Photo](Photo) | file-image | A reference to a media object containing the patient's photo. | No |
| [Height Value](Height-Value) | input | The patient's height in the units specified in Height Unit. | No |
| [Height Unit](Height-Unit) | select-dropdown | The unit of the Height Value specified. | No |
| [Weight Value](Weight-Value) | input | The patient's weight in the units specified in Weight Unit. | No |
| [Weight Unit](Weight-Unit) | select-dropdown | The unit of the Weight Value specified. | No |

---

#### Sex



##### Options

- Male
- Female

---

#### Race

The patient's race or ethnicity.

##### Options

- American Indian or Alaska Native
- Asian
- Black or African American
- Hispanic or Latino
- Native Hawaiian or Other Pacific Islander
- White

---

#### Height Unit

The unit of the Height Value specified.

##### Options

- Inches
- Centimeters

---

#### Weight Unit

The unit of the Weight Value specified.

##### Options

- Pounds (lb)
- Kilograms (kg)
## History

### Clinical Presentation

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| [Chief Complaint](Chief-Complaint) | input | The patient's chief complaint. | No |
| [History Of Present Illness](History-Of-Present-Illness) | input-rich-text-html | The history of present illness, accepts HTML formatting. | No |
### Background

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| [Past Medical History](Past-Medical-History) | list | An array of past medical history items.  | No |
| [Past Surgical History](Past-Surgical-History) | list | An array of past surgical history items.  | No |
| [Medications](Medications) | list | An array of current medications. | No |
| [Allergies](Allergies) | list | An array of patient allergies (consider including reaction in parentheses). | No |
| [Family History](Family-History) | list | An array of family history elements (consider adding relation in parentheses). | No |
| [Social History](Social-History) | list | An array of free text elements for social history. | No |
### Review Of Systems

| Name | Type | Description | Required |
| --- | --- | --- | --- |
## Diagnostic

### Vital Signs

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| [Vital Signs Template](Vital-Signs-Template) | select-dropdown-m2o | A reference to a Vital Signs object. | No |
### Physical Exam

| Name | Type | Description | Required |
| --- | --- | --- | --- |
| [Physical Exam Template](Physical-Exam-Template) | select-dropdown-m2o | A reference to a Physical Exam object. | No |
