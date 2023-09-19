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

### sex

- Male
- Female

### race

- American Indian or Alaska Native
- Asian
- Black or African American
- Hispanic or Latino
- Native Hawaiian or Other Pacific Islander
- White

### height_unit

- Inches
- Centimeters

### weight_unit

- Pounds (lb)
- Kilograms (kg)
## history

| Field | Type | Description | Required |
| --- | --- | --- | --- |
## diagnostic

| Field | Type | Description | Required |
| --- | --- | --- | --- |
