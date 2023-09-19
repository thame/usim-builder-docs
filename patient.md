# patient

## demographic

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| name | input | The patient's full name (first and last). | No |
| medical_record_number | input | An assigned medical record number. | No |
| date_of_birth | datetime | The patient's date of birth. | No |
| [sex](#sex) | select-dropdown | null | No |
| [race](#race) | select-dropdown | The patient's race or ethnicity. | No |
| photo | file-image | A reference to a media object containing the patient's photo. | No |
| height_value | input | The patient's height in the units specified in Height Unit. | No |
| [height_unit](#height_unit) | select-dropdown | The unit of the Height Value specified. | No |
| weight_value | input | The patient's weight in the units specified in Weight Unit. | No |
| [weight_unit](#weight_unit) | select-dropdown | The unit of the Weight Value specified. | No |
## history

### clinical_presentation

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| chief_complaint | input | The patient's chief complaint. | No |
| history_of_present_illness | input-rich-text-html | The history of present illness, accepts HTML formatting. | No |
### background

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| past_medical_history | list | An array of past medical history items.  | No |
| past_surgical_history | list | An array of past surgical history items.  | No |
| medications | list | An array of current medications. | No |
| allergies | list | An array of patient allergies (consider including reaction in parentheses). | No |
| family_history | list | An array of family history elements (consider adding relation in parentheses). | No |
| social_history | list | An array of free text elements for social history. | No |
### review_of_systems

| Field | Type | Description | Required |
| --- | --- | --- | --- |
## diagnostic

### vital_signs

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| vital_signs_template | select-dropdown-m2o | A reference to a Vital Signs object. | No |
### physical_exam

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| physical_exam_template | select-dropdown-m2o | A reference to a Physical Exam object. | No |
