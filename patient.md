# Patient

## Demographic

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
## History

### Clinical_presentation

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| chief_complaint | input | The patient's chief complaint. | No |
| history_of_present_illness | input-rich-text-html | The history of present illness, accepts HTML formatting. | No |
### Background

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| past_medical_history | list | An array of past medical history items.  | No |
| past_surgical_history | list | An array of past surgical history items.  | No |
| medications | list | An array of current medications. | No |
| allergies | list | An array of patient allergies (consider including reaction in parentheses). | No |
| family_history | list | An array of family history elements (consider adding relation in parentheses). | No |
| social_history | list | An array of free text elements for social history. | No |
### Review_of_systems

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| title | input | A title for the Vital Signs template object. This is required for the template to be available for selection in the interface. | No |
| [constitutional](#constitutional) | select-multiple-checkbox | null | No |
| [eyes](#eyes) | select-multiple-checkbox | null | No |
| [ears](#ears) | select-multiple-checkbox | null | No |
| [nose](#nose) | select-multiple-checkbox | null | No |
| [mouth](#mouth) | select-multiple-checkbox | null | No |
| [throat](#throat) | select-multiple-checkbox | null | No |
| [cardiovascular](#cardiovascular) | select-multiple-checkbox | null | No |
| [respiratory](#respiratory) | select-multiple-checkbox | null | No |
| [gastrointestinal](#gastrointestinal) | select-multiple-checkbox | null | No |
| [genitourinary](#genitourinary) | select-multiple-checkbox | null | No |
| [musculoskeletal](#musculoskeletal) | select-multiple-checkbox | null | No |
| [integumentary](#integumentary) | select-multiple-checkbox | null | No |
| [neurological](#neurological) | select-multiple-checkbox | null | No |

### constitutional

- Fevers
- Chills
- Weight Loss
- Appetite Loss
- Night Sweats
- Fatigue

### eyes

- Blurred Vision
- Double Vision
- Eye Pain

### ears

- Hearing Loss
- Ear Pain
- Ear Fullness
- Ringing

### nose

- Runny Nose
- Nose Bleeds

### mouth

- Toothache
- Gum Bleeding

### throat

- Sore Throat
- Painful Swallowing
- Voice Hoarseness

### cardiovascular

- Chest Pain
- Palpitations
- Extremity Swelling
- Exercise Intolerance
- Difficulty Sleeping Flat

### respiratory

- Cough
- Sputum Production
- Bloody Sputum
- Wheezing
- Shortness of Breath
- Snoring

### gastrointestinal

- Abdominal Pain
- Nausea/Vomiting
- Diarrhea
- Constipation
- Blood in Stool

### genitourinary

- Painful Urination
- Urgency
- Frequency
- Blood in Urine
- Vaginal Bleeding
- Vaginal Discharge

### musculoskeletal

- Joint Pain
- Joint Swelling
- Muscle Pain

### integumentary

- Rash
- Itching

### neurological

- Headache
- Dizziness
- Seizure
- Weakness
- Numbness
- Tingling
## Diagnostic

### Vital_signs

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| vital_signs_template | select-dropdown-m2o | A reference to a Vital Signs object. | No |
### Physical_exam

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| physical_exam_template | select-dropdown-m2o | A reference to a Physical Exam object. | No |
