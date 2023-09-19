# Scenario

## Basics

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| Title | input | The title of the scenario, can reference the diagnosis or key objectives. | **Yes** |
| Description | input-rich-text-html | Describe the events in the scenario, field can include HTML for formatting. | No |
| Diagnosis | input-autocomplete-api | The key diagnosis addressed, can be free text or an ICD diagnosis. | No |
| Patient | select-dropdown-m2o | A reference to the associated patient. | **Yes** |
| Timeline | list-m2a | A list of events using the junction table "scenario_timeline". | No |

## Education

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| [Audience](#audience) | select-dropdown | Select the learner level you are targetting. | No |
| Objective | list | List the learner objectives for the scenario. | No |
| Debrief | input-rich-text-html | Describe questions to ask and topics to cover during the post-scenario debrief session. Accepts HTML for formatting. | No |

### Audience

Options:

- Medical Student
- Resident (PGY1-PGY2)
- Resident (≥ PGY-3)
- Fellow
- Attending
- Advanced Practice Provider (APP)
- Nursing Student
- Nurse

## Logistics

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| [Room](#room) | select-dropdown | The setting of the scenario. | No |
| Manikin | collection-item-dropdown | Reference a specific manikin device if required. | No |
| [Monitors](#monitors) | select-multiple-checkbox | Select all monitor devices required for the scenario. | No |
| Setup Duration | input | Estimated duration in minutes for scenario setup. | No |
| Scenario Duration | input | Estimated duration in minutes for running the scenario. | No |
| Debrief Duration | input | Estimated duration in minutes for the post-scenario debrief. | No |

### Room

Options:

- Operating Room (OR)
- Emergency Department (ED)
- Ward
- ICU

### Monitors

Options:

- Telemetry
- Pulse Oximetry (SpO2)
- Blood Pressure (NIBP)
- Arterial Blood Pressure (invasive)
- Central Venous Pressure (CVP)
- End-Tidal CO2
- Temperature

