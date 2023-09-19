# scenario

## basics

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| title | input | The title of the scenario, can reference the diagnosis or key objectives. | Yes |
| description | input-rich-text-html | Describe the events in the scenario, field can include HTML for formatting. | No |
| diagnosis | input-autocomplete-api | The key diagnosis addressed, can be free text or an ICD diagnosis. | No |
| patient | select-dropdown-m2o | A reference to the associated patient. | Yes |
| timeline | list-m2a | A list of events using the junction table "scenario_timeline". | No |
## education

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| [audience](#audience) | select-dropdown | Select the learner level you are targetting. | No |
| objective | list | List the learner objectives for the scenario. | No |
| debrief | input-rich-text-html | Describe questions to ask and topics to cover during the post-scenario debrief session. Accepts HTML for formatting. | No |
## logistics

| Field | Type | Description | Required |
| --- | --- | --- | --- |
| [room](#room) | select-dropdown | The setting of the scenario. | No |
| manikin | collection-item-dropdown | Reference a specific manikin device if required. | No |
| [monitors](#monitors) | select-multiple-checkbox | Select all monitor devices required for the scenario. | No |
| setup_duration | input | Estimated duration in minutes for scenario setup. | No |
| scenario_duration | input | Estimated duration in minutes for running the scenario. | No |
| debrief_duration | input | Estimated duration in minutes for the post-scenario debrief. | No |
