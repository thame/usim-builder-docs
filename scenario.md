# Scenario

## Basics

| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| title | The title of the scenario, can reference the diagnosis or key objectives. | string | Yes |
| description | Describe the events in the scenario, field can include HTML for formatting. | text | No |
| diagnosis | The key diagnosis addressed, can be free text or an ICD diagnosis. | string | No |
| patient | A reference to the associated patient. | string | Yes |
| timeline | A list of events using the junction table "scenario_timeline". | alias | No |
## Education

| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| [audience](#audience) | Select the learner level you are targetting. | string | No |
| objective | List the learner objectives for the scenario. | json | No |
| debrief | Describe questions to ask and topics to cover during the post-scenario debrief session. Accepts HTML for formatting. | text | No |
### Audience

Select the learner level you are targetting.

#### Options
- Medical Student
- Resident (PGY1-PGY2)
- Resident (≥ PGY-3)
- Fellow
- Attending
- Advanced Practice Provider (APP)
- Nursing Student
- Nurse


## Logistics

| Name | Description | Type | Required |
| ---- | ----------- | ---- | -------- |
| [room](#room) | The setting of the scenario. | string | No |
| manikin | Reference a specific manikin device if required. | json | No |
| [monitors](#monitors) | Select all monitor devices required for the scenario. | json | No |
| setup_duration | Estimated duration in minutes for scenario setup. | integer | No |
| scenario_duration | Estimated duration in minutes for running the scenario. | integer | No |
| debrief_duration | Estimated duration in minutes for the post-scenario debrief. | integer | No |
### Room

The setting of the scenario.

#### Options
- Operating Room (OR)
- Emergency Department (ED)
- Ward
- ICU


### Monitors

Select all monitor devices required for the scenario.

#### Options
- Telemetry
- Pulse Oximetry (SpO2)
- Blood Pressure (NIBP)
- Arterial Blood Pressure (invasive)
- Central Venous Pressure (CVP)
- End-Tidal CO2
- Temperature


