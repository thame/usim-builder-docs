let scenario = {
  collection: 'scenario',
  groups: ['basics', 'education', 'logistics'],
  fields: {
    basics: ['title', 'description', 'diagnosis', 'patient', 'timeline'],
    education: ['audience', 'objective', 'debrief'],
    logistics: [
      'room',
      'manikin',
      'monitors',
      'setup_duration',
      'scenario_duration',
      'debrief_duration',
    ],
  },
}

let patient = {
  collection: 'patient',
  groups: [
    'demographic',
    { history: ['clinical_presentation', 'background', 'review_of_systems_template'] },
    { diagnostic: ['vital_signs_template', 'physical_exam_template'] },
  ],
  fields: {
    demographic: [
      'name',
      'medical_record_number',
      'date_of_birth',
      'sex',
      'race',
      'photo',
      'height_value',
      'height_unit',
      'weight_value',
      'weight_unit',
    ],
    history: {
      clinical_presentation: ['chief_complaint', 'history_of_present_illness'],
      background: [
        'past_medical_history',
        'past_surgical_history',
        'medications',
        'allergies',
        'family_history',
        'social_history',
      ],
      review_of_systems_template: ['review_of_systems_template'],
    },
    diagnostic: {
      vital_signs_template: ['vital_signs_template'],
      physical_exam_template: ['physical_exam_template'],
    },
  },
}

let action = {
  collection: 'action',
  parent: 'scenario',
  fields: ['title', 'types', 'medication', 'lab', 'imaging', 'diagnostic', 'nursing'],
}

let review_of_systems = {
  collection: 'review_of_systems',
  parent: 'patient',
  fields: [
    'title',
    'constitutional',
    'eyes',
    'ears',
    'nose',
    'mouth',
    'throat',
    'cardiovascular',
    'respiratory',
    'gastrointestinal',
    'genitourinary',
    'musculoskeletal',
    'integumentary',
    'neurological',
  ],
}

let vital_signs = {
  collection: 'vital_signs',
  parent: 'patient',
  fields: [
    'title',
    'temperature',
    'heart_rate',
    'respiratory_rate',
    'systolic_blood_pressure',
    'diastolic_blood_pressure',
    'oxygen_saturation',
  ],
}

let physical_exam = {
  collection: 'physical_exam',
  parent: 'patient',
  fields: [
    'title',
    'general_appearance',
    'head',
    'eyes',
    'ears',
    'nose',
    'throat',
    'mouth',
    'neck',
    'pulmonary',
    'cardiovascular',
    'abdomen',
    'genitourinary',
    'rectal',
    'extremities',
    'musculoskeletal',
    'neurological',
  ],
}

module.exports = {
  scenario,
  patient,
  action,
  review_of_systems,
  vital_signs,
  physical_exam,
}
