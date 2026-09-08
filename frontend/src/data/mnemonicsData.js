// High-yield NCLEX Nursing Mnemonics Dataset
// Categorized across the 6 major nursing domains based on standard NCLEX clinical preparation.

export const MNEMONICS_CATEGORIES = [
  { id: 'fundamentals', name: 'Fundamentals in Nursing', iconKey: 'fundamentals', count: 14 },
  { id: 'maternal', name: 'Maternal & Child Nursing', iconKey: 'maternal', count: 10 },
  { id: 'med-surg', name: 'Medical & Surgical Nursing', iconKey: 'surgical', count: 31 },
  { id: 'psych', name: 'Psychiatric Nursing', iconKey: 'psych', count: 5 },
  { id: 'pharmacology', name: 'Pharmacology Nursing', iconKey: 'pharmacology', count: 6 },
  { id: 'communicable', name: 'Communicable Diseases', iconKey: 'communicable', count: 4 },
];

export const mnemonicsList = [
  // ==========================================
  // FUNDAMENTALS IN NURSING
  // ==========================================
  {
    id: 'nursing-process-adpie',
    shortCode: 'ADPIE',
    title: 'The 5 Phases of the Nursing Process',
    category: 'fundamentals',
    categoryName: 'Fundamentals in Nursing',
    summary: 'The systematic, client-centered, problem-solving framework that directs all clinical nursing care.',
    memoryTip: '"A Delicious Pie Is Eaten" — Always assess first before taking clinical action on NCLEX!',
    highYield: true,
    tags: ['Clinical Framework', 'NCLEX Priority', 'Assessment'],
    letters: [
      {
        letter: 'A',
        term: 'Assessment',
        description: 'Systematic collection of subjective (client statements) and objective (vital signs, lab values, physical exam) data. Always the first step unless in immediate life-threatening arrest.',
        highlight: 'Assess first before intervening!'
      },
      {
        letter: 'D',
        term: 'Diagnosis',
        description: 'Clinical judgment analyzing assessment findings to identify actual or potential health problems using NANDA-I format (Problem, Etiology, Signs/Symptoms).',
        highlight: 'Prioritize airway, breathing, circulation, and Maslow hierarchy.'
      },
      {
        letter: 'P',
        term: 'Planning',
        description: 'Establishing measurable, realistic, client-centered goals (SMART goals) and selecting specific nursing interventions to achieve expected outcomes.',
        highlight: 'Client-focused with clear timeframes.'
      },
      {
        letter: 'I',
        term: 'Implementation',
        description: 'Executing the planned nursing interventions: administering medications, performing wound care, teaching, and delegating appropriate tasks.',
        highlight: 'Follow five rights of delegation and safety protocols.'
      },
      {
        letter: 'E',
        term: 'Evaluation',
        description: 'Determining client progress toward goal attainment. The care plan is maintained, modified, or discontinued based on outcome response.',
        highlight: 'Continuous and dynamic reassessment.'
      }
    ],
    clinicalContext: 'On the NCLEX exam, questions frequently test whether the nurse should "Assess" or "Implement". If the question gives incomplete assessment data, the priority is to ASSESS. If the client is in respiratory distress, acute anaphylaxis, or CPR, immediate LIFE-SAVING IMPLEMENTATION is prioritized.',
    nclexPearls: [
      'Gold Rule: Never choose an implementation option when further assessment is needed to determine the cause of distress.',
      'Validation: Subjective data like pain must always be validated with a standardized rating scale.',
      'Documentation: Findings must be factual, non-judgmental, and documented contemporaneously.'
    ],
    practiceQuestion: {
      question: 'A postoperative client complains of sudden severe abdominal pain rated 9/10 with nausea. What is the priority nursing action?',
      options: [
        'Administer the prescribed PRN intravenous opioid analgesic immediately.',
        'Assess the surgical dressing, abdomen for distension/rigidity, and vital signs.',
        'Reposition the client into semi-Fowler position and apply a warm compress.',
        'Notify the surgeon immediately about the increased pain level.'
      ],
      correctIndex: 1,
      rationale: 'According to the nursing process (ADPIE), the nurse must first assess the client to determine the etiology of sudden acute pain (e.g., dehiscence, internal hemorrhage, rigid abdomen) before implementing pain medications or calling the provider with incomplete data.'
    }
  },
  {
    id: 'eye-abbreviations-od-os-ou',
    shortCode: 'OD / OS / OU',
    title: 'Ophthalmic & Otic Prescriptions',
    category: 'fundamentals',
    categoryName: 'Fundamentals in Nursing',
    summary: 'Deciphering Latin abbreviations for Right, Left, and Both Eyes (and Ears).',
    memoryTip: 'OD = Oculus Dexter (Dexterity = Right hand); OS = Oculus Sinister (Sinister = Left hand); OU = Oculus Uterque (Union = Both Eyes).',
    highYield: true,
    tags: ['Medication Safety', 'Ophthalmology', 'Abbreviations'],
    letters: [
      {
        letter: 'OD',
        term: 'Oculus Dexter',
        description: 'Right eye. Remember that "Dexterous" traditionally refers to the right hand.',
        highlight: 'Right eye'
      },
      {
        letter: 'OS',
        term: 'Oculus Sinister',
        description: 'Left eye. "Sinister" is derived from the Latin word for left-sided.',
        highlight: 'Left eye'
      },
      {
        letter: 'OU',
        term: 'Oculus Uterque',
        description: 'Both eyes (each eye). Think of "U" for "Universal" or "Union of both eyes".',
        highlight: 'Both eyes'
      },
      {
        letter: 'AD',
        term: 'Auris Dextra',
        description: 'Right ear. "Auris" is the Latin root for acoustic / auditory (ear).',
        highlight: 'Right ear'
      },
      {
        letter: 'AS',
        term: 'Auris Sinistra',
        description: 'Left ear. Latin "sinistra" means left.',
        highlight: 'Left ear'
      },
      {
        letter: 'AU',
        term: 'Auris Uterque',
        description: 'Both ears (each ear). Uterque means "each of two" or both.',
        highlight: 'Both ears'
      }
    ],
    clinicalContext: 'The Joint Commission (TJC) and ISMP place OD, OS, and OU on the "Do Not Use" list due to medication error potential with ears (AD, AS, AU). However, NCLEX candidates must still recognize and verify these abbreviations on medical charts and questions.',
    nclexPearls: [
      'Eye drop administration: Instill drops into the lower conjunctival sac, never directly onto the cornea.',
      'Systemic absorption prevention: Apply gentle pressure to the nasolacrimal duct (inner canthus) for 1-2 minutes.',
      'Ointments vs Drops: Always instill liquid eye drops first, wait 3-5 minutes, then apply ointment to avoid blocking absorption.'
    ],
    practiceQuestion: {
      question: 'The provider prescribes timolol ophthalmic drops 1 drop OD twice daily. When administering this medication, what action should the nurse take?',
      options: [
        'Instill 1 drop into the left eye and have the client squeeze eyelids tightly.',
        'Instill 1 drop into the right eye and apply pressure to the inner canthus.',
        'Instill 1 drop into each ear canal and maintain head tilt for 5 minutes.',
        'Instill 1 drop into both eyes and wipe from outer canthus to inner canthus.'
      ],
      correctIndex: 1,
      rationale: 'OD stands for Oculus Dexter (Right Eye). The nurse instills the medication into the lower conjunctival sac of the right eye and applies digital pressure to the lacrimal punctum (inner canthus) to reduce systemic beta-blocker absorption.'
    }
  },
  {
    id: 'heart-sounds-ape-to-man',
    shortCode: 'APE To Man',
    title: 'Cardiac Auscultation Landmarks',
    category: 'fundamentals',
    categoryName: 'Fundamentals in Nursing',
    summary: 'The standard anatomical landmarks for auscultating all 5 cardiac valve areas.',
    memoryTip: '"All People Enjoy Time Magazine" or "All Physicians Eagerly Take Money".',
    highYield: true,
    tags: ['Cardiovascular', 'Physical Assessment', 'Heart Valves'],
    letters: [
      {
        letter: 'A',
        term: 'Aortic Valve Area',
        description: '2nd Intercostal Space (ICS) at the Right Sternal Border. S2 sound is louder than S1 here.',
        highlight: '2nd ICS Right'
      },
      {
        letter: 'P',
        term: 'Pulmonic Valve Area',
        description: '2nd Intercostal Space (ICS) at the Left Sternal Border. S2 is loudest here.',
        highlight: '2nd ICS Left'
      },
      {
        letter: 'E',
        term: "Erb's Point",
        description: '3rd Intercostal Space (ICS) at the Left Sternal Border. S1 and S2 are equal in intensity. Ideal for murmurs.',
        highlight: '3rd ICS Left'
      },
      {
        letter: 'T',
        term: 'Tricuspid Valve Area',
        description: '4th or 5th Intercostal Space (ICS) at the Left Sternal Border. S1 is louder than S2.',
        highlight: '4th-5th ICS Left Sternal'
      },
      {
        letter: 'M',
        term: 'Mitral Area (Apical / PMI)',
        description: '5th Intercostal Space (ICS) at the Left Midclavicular Line (MCL). Point of Maximal Impulse (PMI). Listen for 60 seconds before Digoxin.',
        highlight: '5th ICS Midclavicular Line'
      }
    ],
    clinicalContext: 'S1 represents closure of the atrioventricular (mitral and tricuspid) valves ("lub"). S2 represents closure of the semilunar (aortic and pulmonic) valves ("dub"). A third heart sound (S3) can indicate congestive heart failure and volume overload.',
    nclexPearls: [
      'Apical Pulse: Must be counted for a FULL 60 SECONDS at the Mitral area before administering cardiac glycosides (Digoxin). Hold if pulse < 60 bpm in adults, < 70 bpm in children, or < 90-110 bpm in infants.',
      'Bell vs. Diaphragm: Use the diaphragm for high-pitched normal S1 and S2; use the bell lightly for low-pitched S3, S4, and gallops.'
    ],
    practiceQuestion: {
      question: 'Where should the nurse place the stethoscope diaphragm to auscultate the Point of Maximal Impulse (PMI) and apical pulse?',
      options: [
        '2nd intercostal space at the right sternal border',
        '3rd intercostal space at the left sternal border',
        '4th intercostal space at the left midclavicular line',
        '5th intercostal space at the left midclavicular line'
      ],
      correctIndex: 3,
      rationale: 'The Point of Maximal Impulse (PMI) and apical pulse are auscultated at the mitral area, located at the 5th intercostal space at the left midclavicular line.'
    }
  },
  {
    id: 'emergency-history-sample',
    shortCode: 'SAMPLE',
    title: 'Rapid Emergency Health History',
    category: 'fundamentals',
    categoryName: 'Fundamentals in Nursing',
    summary: 'A rapid, structured checklist to gather essential health history in emergent and trauma situations.',
    memoryTip: 'Take a "SAMPLE" of the client\'s history in emergency intake!',
    highYield: true,
    tags: ['Triage', 'Emergency', 'Health History'],
    letters: [
      {
        letter: 'S',
        term: 'Signs & Symptoms',
        description: 'What is the chief complaint? What observable signs and client-reported symptoms triggered this visit?',
        highlight: 'Chief complaint'
      },
      {
        letter: 'A',
        term: 'Allergies',
        description: 'Allergies to medications, latex, foods (shellfish/iodine for radiopaque dyes), and the nature of previous reactions (rash vs anaphylaxis).',
        highlight: 'Medications, latex, iodine'
      },
      {
        letter: 'M',
        term: 'Medications',
        description: 'Prescription drugs, OTC medications, herbal supplements (e.g., St. John\'s wort, Ginkgo), anticoagulants, and illicit substances.',
        highlight: 'Current drug regimen'
      },
      {
        letter: 'P',
        term: 'Past Medical History',
        description: 'Underlying chronic illnesses (diabetes, hypertension, CAD, asthma), surgical history, and immunization status.',
        highlight: 'Co-morbidities & surgeries'
      },
      {
        letter: 'L',
        term: 'Last Oral Intake',
        description: 'Time and type of last solid food and liquid consumed. Vital for anticipating aspiration risk if emergency surgery or anesthesia is required.',
        highlight: 'NPO status & aspiration risk'
      },
      {
        letter: 'E',
        term: 'Events Leading to Injury/Illness',
        description: 'Mechanisms of injury, timeline, sequence of symptoms, and environmental hazards involved in the emergency.',
        highlight: 'Mechanism & timeline'
      }
    ],
    clinicalContext: 'Used by triage and ED nurses to rapidly ascertain critical contraindications before procedures (e.g. contrast CT scans, surgery requiring general anesthesia, or thrombolytic administration for stroke/STEMI).',
    nclexPearls: [
      'Contrast Dye Allergy: Always screen for allergy to iodine, shellfish, and check BUN/Creatinine plus Metformin use (hold Metformin 48 hrs after contrast).',
      'Surgery Prep: If last meal was less than 6-8 hours ago, anesthesiology must be warned of increased aspiration risk.'
    ],
    practiceQuestion: {
      question: 'A trauma client who was in a motor vehicle collision arrives at the ED. The nurse asks when the client last ate or drank. What is the primary clinical rationale?',
      options: [
        'To calculate intravenous fluid infusion requirements.',
        'To assess the client level of thirst and dehydration status.',
        'To determine potential aspiration risk if emergency anesthesia or surgery is needed.',
        'To schedule when oral medications should be administered.'
      ],
      correctIndex: 2,
      rationale: 'Knowing the last oral intake (L in SAMPLE) is critical because a full stomach dramatically increases the risk of vomiting and pulmonary aspiration during endotracheal intubation and emergency surgical anesthesia.'
    }
  },
  {
    id: 'eye-assessment-perrla',
    shortCode: 'PERRLA',
    title: 'Pupillary Assessment & Cranial Nerves',
    category: 'fundamentals',
    categoryName: 'Fundamentals in Nursing',
    summary: 'Standard neurological assessment of pupillary reaction assessing Cranial Nerves II (Optic) and III (Oculomotor).',
    memoryTip: 'Pupils Equal, Round, Reactive to Light and Accommodation.',
    highYield: true,
    tags: ['Neurology', 'Cranial Nerves', 'Physical Assessment'],
    letters: [
      {
        letter: 'P',
        term: 'Pupils',
        description: 'Inspect pupil anatomy, symmetry, and baseline diameter (normal resting: 3 to 5 mm).',
        highlight: 'Size 3-5 mm baseline'
      },
      {
        letter: 'E',
        term: 'Equal',
        description: 'Both pupils should be identical in diameter. Anisocoria (unequal pupils) can signal elevated ICP or herniation.',
        highlight: 'Symmetry check'
      },
      {
        letter: 'R',
        term: 'Round',
        description: 'Pupil shape should be circular. Irregular or oval pupils may indicate prior surgery, trauma, or increased intracranial pressure.',
        highlight: 'Circular contour'
      },
      {
        letter: 'RL',
        term: 'Reactive to Light',
        description: 'Direct response: illuminated pupil constricts briskly. Consensual response: simultaneous constriction in opposite eye.',
        highlight: 'Direct & consensual constriction'
      },
      {
        letter: 'A',
        term: 'Accommodation',
        description: 'Have client focus on a distant object (pupils dilate), then follow a penlight inward toward the nose (pupils constrict and axes converge).',
        highlight: 'Convergence & constriction'
      }
    ],
    clinicalContext: 'Sudden development of a unilateral fixed and dilated pupil ("blown pupil") is an ominous neurological emergency indicating uncal herniation compressing CN III, requiring immediate intervention.',
    nclexPearls: [
      'Normal pupil size: 3 to 5 mm in ambient light.',
      'Pinpoint pupils (<2 mm): Suspect opioid overdose, pontine stroke, or organophosphate poisoning.',
      'Fixed & dilated (>6 mm): Suspect brainstem herniation, severe anoxia, or anticholinergic toxicity.'
    ],
    practiceQuestion: {
      question: 'During a neurological assessment of a head trauma client, the nurse notes the right pupil has become 6 mm, fixed, and non-reactive to light, while the left is 3 mm and reactive. What does this finding indicate?',
      options: [
        'Normal consensual reaction to ambient lighting.',
        'Compression of Cranial Nerve III due to increased intracranial pressure.',
        'Temporary ocular fatigue from repeated light stimulation.',
        'Detached retina in the right eye.'
      ],
      correctIndex: 1,
      rationale: 'A unilaterally dilated, fixed pupil in a head trauma client is a critical neurological indicator of increasing intracranial pressure causing tentorial herniation and compression of the oculomotor nerve (CN III).'
    }
  },
  {
    id: 'pain-assessment-pqrst',
    shortCode: 'PQRST',
    title: 'Comprehensive Pain Assessment',
    category: 'fundamentals',
    categoryName: 'Fundamentals in Nursing',
    summary: 'The 5 essential dimensions to systematically characterize acute and chronic pain.',
    memoryTip: 'Provokes, Quality, Radiates, Severity, Timing — Never assume; pain is what the client says it is!',
    highYield: true,
    tags: ['Pain Management', 'Vital Signs', 'Assessment'],
    letters: [
      {
        letter: 'P',
        term: 'Provoking / Palliating Factors',
        description: 'What triggers or exacerbates the pain? What relieves it (rest, heat, ice, position)?',
        highlight: 'Triggers & relief'
      },
      {
        letter: 'Q',
        term: 'Quality of Pain',
        description: 'How does the pain feel? Sharp, dull, throbbing, burning, aching, shooting, or stabbing?',
        highlight: 'Somatic vs visceral vs neuropathic'
      },
      {
        letter: 'R',
        term: 'Region & Radiation',
        description: 'Where is the pain located precisely? Does it travel or radiate elsewhere (e.g., chest pain to left arm or jaw)?',
        highlight: 'Location & referral'
      },
      {
        letter: 'S',
        term: 'Severity Scale',
        description: 'Quantify intensity using an evidence-based scale: 0-10 Numeric, Wong-Baker FACES, or FLACC for nonverbal/pediatric.',
        highlight: 'Standardized 0-10 score'
      },
      {
        letter: 'T',
        term: 'Timing',
        description: 'When did it start? Is it continuous, intermittent, or episodic? How long does an episode last?',
        highlight: 'Onset, duration, frequency'
      }
    ],
    clinicalContext: 'Pain is recognized as the "fifth vital sign". Always reassess pain within 30 minutes of IV analgesics and within 60 minutes of oral analgesics.',
    nclexPearls: [
      'Subjective Gold Standard: The client self-report is always the most reliable indicator of pain.',
      'Nonverbal scales: Use the FLACC scale (Face, Legs, Activity, Cry, Consolability) for infants and non-verbal clients.'
    ],
    practiceQuestion: {
      question: 'A nurse administers oral morphine sulfate 10 mg to an adult post-surgical client. At what time should the nurse systematically reassess the client pain severity?',
      options: [
        'Within 10 to 15 minutes of administration.',
        'Within 45 to 60 minutes of administration.',
        'Only when the client calls to request another dose.',
        'At the end of the 12-hour shift during handoff.'
      ],
      correctIndex: 1,
      rationale: 'For oral opioid analgesics, peak absorption and onset typically occur around 45 to 60 minutes; nursing standards dictate pain reassessment within 60 minutes for oral routes (and 15-30 minutes for IV medications).'
    }
  },
  {
    id: 'rlq-pain-appendicitis',
    shortCode: 'APPENDICITIS',
    title: 'RLQ Pain Differential Diagnosis',
    category: 'fundamentals',
    categoryName: 'Fundamentals in Nursing',
    summary: 'A comprehensive clinical framework to systematically evaluate and differentiate the numerous causes of acute right lower quadrant abdominal pain.',
    memoryTip: '"APPENDICITIS" — Think beyond the appendix! Rule out gynecologic emergencies (ectopic, torsion), bowel pathology, and stones before surgery.',
    highYield: true,
    tags: ['Abdominal Assessment', 'Triage', 'Differential Diagnosis', 'GI Emergencies'],
    letters: [
      {
        letter: 'A',
        term: 'Appendicitis / Abscess',
        description: "Acute inflammation of the vermiform appendix or localized intra-abdominal/psoas abscess. Manifests with periumbilical pain shifting to McBurney's point, low-grade fever, and anorexia.",
        highlight: "McBurney's point tenderness"
      },
      {
        letter: 'P',
        term: 'PID / Period (Mittelschmerz)',
        description: 'Pelvic Inflammatory Disease (cervical motion tenderness, purulent discharge) or mid-cycle ovulatory pain (Mittelschmerz) / dysmenorrhea.',
        highlight: 'Pelvic inflammatory disease or ovulatory pain'
      },
      {
        letter: 'P',
        term: 'Pancreatitis',
        description: 'Although typically epigastric radiating to the back, inflammatory exudate can track down the right paracolic gutter and mimic acute right lower quadrant pathology.',
        highlight: 'Referred tracking or atypical presentation'
      },
      {
        letter: 'E',
        term: 'Ectopic Pregnancy / Endometriosis',
        description: 'Life-threatening ruptured tubal pregnancy in women of childbearing age (positive hCG, sudden unilateral pelvic pain, syncopal hypotension) or chronic cyclic endometriosis implants.',
        highlight: 'Mandatory STAT urine hCG in childbearing age'
      },
      {
        letter: 'N',
        term: 'Neoplasia',
        description: 'Cecal adenocarcinoma, appendiceal carcinoid tumors, or lymphoma presenting with subacute or localized RLQ masses, bowel obstruction, and microcytic anemia.',
        highlight: 'Cecal / colonic tumors or masses'
      },
      {
        letter: 'D',
        term: 'Diverticulitis',
        description: "Right-sided colonic diverticulitis (more prevalent in Asian populations) or Meckel's diverticulitis presenting with localized peritoneal irritation mimicking appendicitis.",
        highlight: "Cecal or Meckel's diverticulitis"
      },
      {
        letter: 'I',
        term: 'Intussusception',
        description: 'Telescoping of a proximal bowel segment into an adjacent distal segment. Classic pediatric presentation includes colicky abdominal pain, "currant jelly" stools, and a sausage-shaped mass.',
        highlight: 'Sausage-shaped mass & currant jelly stool'
      },
      {
        letter: 'C',
        term: "Crohn's Disease / Cyst (Ovarian)",
        description: 'Terminal ileitis exacerbation with transmural inflammation and skip lesions, or ruptured/hemorrhagic ovarian follicular or corpus luteum cyst.',
        highlight: 'Terminal ileitis or ruptured ovarian cyst'
      },
      {
        letter: 'I',
        term: 'IBD (Inflammatory Bowel Disease)',
        description: "Inflammatory bowel exacerbation, particularly Crohn's disease affecting the ileocecal region, resulting in diarrhea, fistulae, cramping, and weight loss.",
        highlight: 'Terminal ileum involvement & fistulae'
      },
      {
        letter: 'T',
        term: 'Torsion (Ovary / Testicle)',
        description: 'Ovarian torsion (twisting of the ovary on its ligamentous pedicle causing arterial compromise) or referred pain from right testicular torsion.',
        highlight: 'Surgical emergency: ischemia & infarction'
      },
      {
        letter: 'I',
        term: 'Irritable Bowel Syndrome (IBS)',
        description: 'Functional bowel disorder characterized by chronic abdominal discomfort, cramping, bloating, and altered bowel habits (IBS-C, IBS-D, or mixed) relieved by defecation.',
        highlight: 'Diagnosis of exclusion; normal labs/imaging'
      },
      {
        letter: 'S',
        term: 'Stones (Renal / Ureteral Calculi)',
        description: 'Nephrolithiasis / urolithiasis with acute ureteral colic. Severe sharp flank pain radiating into the right groin/labia/testicles accompanied by hematuria, nausea, and costovertebral tenderness.',
        highlight: 'Flank-to-groin radiation & hematuria'
      }
    ],
    clinicalContext: 'On the NCLEX and in clinical triage, evaluating acute RLQ pain requires differentiating surgical emergencies from self-limiting medical conditions. In any female of childbearing age with acute lower abdominal pain, pregnancy status (STAT hCG) must be verified immediately to exclude ruptured ectopic pregnancy before radiology or surgical intervention.',
    nclexPearls: [
      'Appendicitis Rupture Warning: Sudden, complete cessation of acute pain in a client with appendicitis is an ominous indicator of appendiceal perforation, leading to diffuse peritonitis and septic shock.',
      'Heat Application Contraindication: Never apply a heating pad, warm blanket, or enema to a client with undiagnosed RLQ pain, as heat increases blood flow, inflammation, and the risk of appendiceal rupture.',
      "Peritoneal Signs: Assess for Rovsing's sign (palpation of LLQ causes pain in RLQ), Psoas sign (pain on right hip extension), and Obturator sign (pain on internal rotation of flexed right hip)."
    ],
    practiceQuestion: {
      question: 'A 22-year-old female client presents to the emergency department reporting acute, sharp right lower quadrant abdominal pain rated 9/10, nausea, and dizziness. Which diagnostic order should the nurse prioritize first?',
      options: [
        'Urine pregnancy test (human chorionic gonadotropin - hCG)',
        'Abdominal ultrasound for appendiceal diameter',
        'Intravenous administration of hydromorphone 1 mg',
        'Stool sample for occult blood and fecal calprotectin'
      ],
      correctIndex: 0,
      rationale: 'In any female client of childbearing age presenting with acute lower abdominal pain, ruling out a ruptured ectopic pregnancy via a STAT urine or serum hCG test is the first priority. Ruptured ectopic pregnancy is a life-threatening hemorrhagic emergency requiring immediate gynecologic surgical intervention.'
    }
  },
  {
    id: 'resuscitation-steps-abcde',
    shortCode: 'ABCDE',
    title: 'Basic Steps of Resuscitation & Primary Survey',
    category: 'fundamentals',
    categoryName: 'Fundamentals in Nursing',
    summary: 'The universal, sequential clinical protocol for conducting a rapid primary assessment, identifying immediate life threats, and stabilizing emergency resuscitation clients.',
    memoryTip: '"Airway, Breathing, Circulation, Drugs, Environment" — Systematically address life-threatening priorities from oxygen delivery to systemic stability.',
    highYield: true,
    tags: ['Emergency Resuscitation', 'NCLEX Priority', 'Primary Survey', 'Life Support'],
    letters: [
      {
        letter: 'A',
        term: 'Airway (with Cervical Spine Protection)',
        description: 'Verify patency. Check for tongue obstruction, secretions, blood, vomit, or foreign bodies. Suction airway, open using modified jaw-thrust if trauma/c-spine injury suspected, and secure with oral/nasal airway or endotracheal intubation.',
        highlight: 'Patency & cervical spine stabilization'
      },
      {
        letter: 'B',
        term: 'Breathing & Ventilation',
        description: 'Assess respiratory rate, depth, chest symmetry, bilateral breath sounds, work of breathing, and SpO2. Provide high-flow 100% O2 via non-rebreather mask or bag-valve-mask (BVM) ventilatory support. Decompress tension pneumothorax if indicated.',
        highlight: 'Adequate gas exchange & chest expansion'
      },
      {
        letter: 'C',
        term: 'Circulation & Hemorrhage Control',
        description: 'Assess central pulses (carotid/femoral for rate and quality), skin temperature/capillary refill, blood pressure, and heart rhythm. Control active external hemorrhage with direct pressure. Establish 2 large-bore peripheral IV lines (16-18 gauge) or intraosseous (IO) access.',
        highlight: 'Pulse, hemorrhage control, & 2 large-bore IVs'
      },
      {
        letter: 'D',
        term: 'Drugs & Neurological Disability',
        description: 'Administer emergency resuscitation pharmacotherapy (e.g., epinephrine, amiodarone, naloxone, atropine, 50% dextrose). Simultaneously evaluate neurological status using Glasgow Coma Scale (GCS) or AVPU scale and pupillary reflexes (PERRLA).',
        highlight: 'Emergency ACLS medications & GCS/pupils'
      },
      {
        letter: 'E',
        term: 'Environment & Exposure Control',
        description: 'Completely expose the client to inspect for occult injuries, bleeding, rashes, or trauma while vigorously preventing hypothermia. Apply warm blankets, warm IV fluids, and maintain ambient room warmth to avoid the lethal triad of trauma.',
        highlight: 'Full exposure while preventing hypothermia'
      }
    ],
    clinicalContext: 'On the NCLEX, prioritizing emergency stabilization follows the ABCDE primary survey when a client has a palpable pulse. However, in pulseless cardiac arrest, the American Heart Association (AHA) mandates transitioning immediately to CAB (Chest Compressions, Airway, Breathing) to maintain vital coronary and cerebral perfusion.',
    nclexPearls: [
      'Pulse Present vs. Absent: If a client is unresponsive with NO palpable pulse, immediately initiate CAB (chest compressions first!). If a pulse is present, systematically follow ABCDE.',
      'Cervical Spine Protection: In all trauma clients, use the modified jaw-thrust technique to open the airway; never use the head-tilt/chin-lift maneuver until the cervical spine has been radiologically cleared.',
      'The Lethal Triad: In trauma resuscitation, hypothermia disrupts coagulation enzymes; keeping the client warm (E: Environment) is vital to prevent coagulopathy and irreversible acidosis.'
    ],
    practiceQuestion: {
      question: 'A trauma client arrives in the emergency department following a high-speed vehicular collision. The client is unresponsive, has loud gurgling respirations at 8 breaths/min, a palpable rapid carotid pulse, and severe facial trauma. What is the nurse\'s immediate priority action?',
      options: [
        'Perform a jaw-thrust maneuver and suction the oral airway.',
        'Begin closed chest compressions at a rate of 100 to 120 per minute.',
        'Infuse 2 liters of warmed 0.9% normal saline through a large-bore IV.',
        'Log-roll the client to inspect the posterior thoracic spine for wounds.'
      ],
      correctIndex: 0,
      rationale: 'Because the client has a palpable pulse, the primary survey sequence is ABCDE. Gurgling respirations indicate fluid/blood obstructing the upper airway. The nurse must immediately stabilize the cervical spine using the jaw-thrust maneuver and clear the obstruction via gentle suctioning before addressing breathing, circulation, or posterior exposure.'
    }
  },
  {
    id: 'malignant-hyperthermia-treatment',
    shortCode: 'SOME HOT DUDE',
    title: 'Malignant Hyperthermia (MH) Emergency Treatment',
    category: 'fundamentals',
    categoryName: 'Fundamentals in Nursing',
    summary: 'The life-saving emergency protocol to halt the hypermetabolic calcium cascade triggered by volatile anesthetics and depolarizing muscle relaxants.',
    memoryTip: '"Some Hot Dude Better Give Iced Fluids Fast!" — Stop triggers, 100% O2, Dantrolene, Bicarbonate, Glucose/Insulin, Iced fluids, Fluid/Furosemide, Fast tachycardia control!',
    highYield: true,
    tags: ['Perioperative', 'Pharmacology', 'Emergency Protocol', 'Anesthesia Complication'],
    letters: [
      {
        letter: 'S',
        term: 'Stop Triggering Agents ("Some")',
        description: 'Immediately discontinue all volatile inhalational anesthetics (sevoflurane, desflurane, isoflurane) and depolarizing neuromuscular blockers (succinylcholine). Notify surgeon to halt procedure and call the Malignant Hyperthermia hotline.',
        highlight: 'Halt volatile gases & succinylcholine immediately'
      },
      {
        letter: 'H',
        term: 'Hyperventilate / 100% Oxygen ("Hot")',
        description: 'Hyperventilate the client with 100% oxygen at high flows (10-15 L/min or 2-3 times minute ventilation) to wash out volatile agents and eliminate massive carbon dioxide buildup caused by extreme hypermetabolism.',
        highlight: '100% FiO2 high-flow hyperventilation'
      },
      {
        letter: 'D',
        term: 'Dantrolene (2.5 mg/kg) ("Dude")',
        description: 'Administer IV Dantrolene sodium STAT (initial dose 2.5 mg/kg IV push, repeating every 5-10 minutes up to 10 mg/kg until symptoms subside). Dantrolene is the ONLY specific antidote; it binds to ryanodine receptors (RYR1) to block sarcoplasmic calcium release.',
        highlight: 'Specific antidote: 2.5 mg/kg IV push STAT'
      },
      {
        letter: 'B',
        term: 'Bicarbonate ("Better")',
        description: 'Administer sodium bicarbonate (1-2 mEq/kg IV) guided by arterial blood gas (ABG) results to correct life-threatening mixed metabolic and respiratory acidosis.',
        highlight: 'Sodium bicarbonate for profound acidosis'
      },
      {
        letter: 'G',
        term: 'Glucose and Insulin ("Give")',
        description: 'Administer 10 units regular insulin IV with 50 mL of 50% Dextrose (D50W) to shift extracellular potassium back into cells, combating lethal hyperkalemia resulting from massive skeletal muscle rhabdomyolysis.',
        highlight: 'Regular insulin + D50W to shift potassium'
      },
      {
        letter: 'I',
        term: 'IV Fluids and Cooling Blanket ("Iced")',
        description: 'Infuse cold iced 0.9% normal saline IV (1000 mL every 10 min up to 3000 mL) and apply hypothermia cooling blankets, ice packs to the axillae, groin, and neck, and cold stomach/bladder lavages. Cease cooling when core temp reaches 38°C (100.4°F) to avoid hypothermia overshoot.',
        highlight: 'Cold iced saline IV & active body cooling'
      },
      {
        letter: 'F',
        term: 'Fluid Output & Furosemide ("Fluids")',
        description: 'Place an indwelling urinary catheter to monitor hourly urine output (goal > 1-2 mL/kg/hr). Administer furosemide or mannitol to maintain brisk diuresis and flush out myoglobin, preventing acute tubular necrosis and renal failure.',
        highlight: 'Urinary output goal > 1-2 mL/kg/hr & diuresis'
      },
      {
        letter: 'F',
        term: 'Fast Heart / Tachycardia Management ("Fast!")',
        description: 'Continuously monitor for refractory sinus tachycardia, ventricular arrhythmias, and temperature spikes up to 43°C (109.4°F). Treat dysrhythmias with amiodarone, beta-blockers, or lidocaine. NEVER administer calcium channel blockers with dantrolene!',
        highlight: 'Avoid calcium channel blockers with dantrolene!'
      }
    ],
    clinicalContext: 'Malignant hyperthermia is an autosomal dominant pharmacogenetic crisis involving skeletal muscle ryanodine receptors (RYR1). Triggered by inhalational anesthetics and succinylcholine, uncontrolled calcium flooding produces severe muscle rigidity (often masseter jaw spasm), explosive metabolic acidosis, hyperkalemia, and late dramatic hyperthermia.',
    nclexPearls: [
      'Earliest Sign: Rising end-tidal carbon dioxide (ETCO2 / PETCO2) unresponsive to hyperventilation, along with masseter muscle spasm and unexplained sinus tachycardia, is the earliest clinical sign; high fever is a LATE sign!',
      'Dantrolene Reconstitution: Each 20 mg vial of dantrolene must be reconstituted with 60 mL of sterile water for injection WITHOUT bacteriostatic preservatives.',
      'Lethal Drug Interaction: NEVER administer calcium channel blockers (e.g., verapamil, diltiazem) in malignant hyperthermia when giving dantrolene, as this combination can trigger catastrophic hyperkalemic cardiac arrest.'
    ],
    practiceQuestion: {
      question: 'During general anesthesia for an exploratory laparotomy, the nurse anesthetist notes an abrupt rise in end-tidal CO2 from 35 to 70 mmHg, generalized muscle rigidity, and sinus tachycardia of 145 beats/min. Which action must the circulating nurse take immediately?',
      options: [
        'Apply warming blankets to maintain normothermia during surgery.',
        'Administer intravenous diltiazem to control the rapid heart rate.',
        'Retrieve the emergency malignant hyperthermia cart and prepare IV dantrolene sodium.',
        'Draw blood for a repeat complete blood count and coagulation profile.'
      ],
      correctIndex: 2,
      rationale: 'The rapid elevation of end-tidal CO2, muscle rigidity, and tachycardia are hallmark signs of Malignant Hyperthermia (MH). The circulating nurse must immediately alert the surgical team, call for the MH crisis cart, and prepare IV dantrolene sodium (2.5 mg/kg). Calcium channel blockers such as diltiazem are contraindicated with dantrolene due to risk of fatal hyperkalemia.'
    }
  },
  {
    id: 'afib-causes-the-atrial-fibs',
    shortCode: 'THE ATRIAL FIBS',
    title: 'Causes of New-Onset Atrial Fibrillation',
    category: 'fundamentals',
    categoryName: 'Fundamentals in Nursing',
    summary: 'A structured diagnostic checklist to investigate and identify reversible triggers, underlying structural abnormalities, and secondary etiologies of new-onset atrial fibrillation.',
    memoryTip: '"THE ATRIAL FIBS" — Thyroid, Hypothermia, Embolism, Alcohol, Trauma, Recent surgery, Ischemia, Atrial enlargement, Lone, Fever/anemia, Infarct, Bad valves, Stimulants.',
    highYield: true,
    tags: ['Cardiovascular', 'ECG Assessment', 'Dysrhythmias', 'Etiology'],
    letters: [
      {
        letter: 'T',
        term: 'Thyroid (Hyperthyroidism / Thyrotoxicosis)',
        description: 'Elevated circulating thyroid hormones (free T3 and T4) increase beta-adrenergic receptor sensitivity in atrial myocytes, frequently precipitating rapid supraventricular tachyarrhythmias and afib.',
        highlight: 'Hyperthyroidism & elevated T3/T4'
      },
      {
        letter: 'H',
        term: 'Hypothermia',
        description: 'Core body temperature dropping below 32°C (89.6°F) increases myocardial irritability, slowing intra-atrial conduction and triggering atrial fibrillation or classic Osborn (J) waves.',
        highlight: 'Core body temperature < 32°C'
      },
      {
        letter: 'E',
        term: 'Embolism (Pulmonary Embolism - PE)',
        description: 'Acute pulmonary thromboembolism obstructs pulmonary vasculature, acutely increasing right ventricular afterload and right atrial stretch, provoking atrial ectopy and flutter/fibrillation.',
        highlight: 'Acute right heart strain & atrial dilation'
      },
      {
        letter: 'A',
        term: 'Alcohol ("Holiday Heart Syndrome")',
        description: 'Binge drinking or acute alcohol withdrawal triggers adrenergic surges, dehydration, and transient electrolyte shifts, inducing paroxysmal atrial fibrillation in healthy individuals.',
        highlight: '"Holiday Heart" binge drinking & withdrawal'
      },
      {
        letter: 'T',
        term: 'Trauma (Cardiac Contusion)',
        description: 'Blunt thoracic trauma (e.g., steering wheel impact in motor vehicle collision) causing myocardial contusion, edema, and localized inflammation of atrial conduction pathways.',
        highlight: 'Myocardial contusion from blunt chest injury'
      },
      {
        letter: 'R',
        term: 'Recent Surgery (Post-CABG / Thoracotomy)',
        description: 'Atrial fibrillation occurs in 30-50% of clients after cardiac surgery (peaking on postoperative days 2-4) due to pericardial inflammation, autonomic imbalance, and fluid shifts.',
        highlight: 'Post-op cardiac/thoracic surgery (peaks days 2-4)'
      },
      {
        letter: 'I',
        term: 'Ischemia (Coronary Artery Disease / Angina)',
        description: 'Compromised coronary perfusion depriving atrial tissue and the sinoatrial/atrioventricular nodal arteries of oxygenated blood, predisposing to electrical instability.',
        highlight: 'Coronary artery disease & hypoperfusion'
      },
      {
        letter: 'A',
        term: 'Atrial Enlargement / Dilation',
        description: 'Structural remodeling from chronic hypertension, congestive heart failure, or cardiomyopathy stretches atrial fibers, creating multiple re-entrant electrical wavelets.',
        highlight: 'Chronic atrial stretching & remodeling'
      },
      {
        letter: 'L',
        term: 'Lone or Idiopathic',
        description: 'Atrial fibrillation occurring in clients under age 60 without clinical, echocardiographic, or hypertensive evidence of cardiopulmonary disease.',
        highlight: 'Absence of structural heart disease'
      },
      {
        letter: 'F',
        term: 'Fever, Anemia, High-Output States',
        description: 'Hyperdynamic circulatory states (severe sepsis, pyrexia, thyrotoxicosis, profound anemia) increase cardiac workload, metabolic demands, and sympathetic tone.',
        highlight: 'Hyperdynamic high-output demands'
      },
      {
        letter: 'I',
        term: 'Infarct (Acute Myocardial Infarction)',
        description: 'Acute ST-elevation or non-ST-elevation myocardial infarction, particularly involving right coronary or left circumflex branches supplying the sinus node.',
        highlight: 'Acute coronary syndrome involving atrial blood supply'
      },
      {
        letter: 'B',
        term: 'Bad Valves (Mitral Valve Disease)',
        description: 'Rheumatic mitral stenosis or severe mitral regurgitation increases left atrial pressure and causes massive atrial dilation, predisposing to mural thrombi and chronic afib.',
        highlight: 'Mitral stenosis / regurgitation & thrombus risk'
      },
      {
        letter: 'S',
        term: 'Stimulants (Cocaine, Caffeine, Theophylline)',
        description: 'Sympathomimetic agents (cocaine, methamphetamine, theophylline, energy drinks, high-dose amphetamines) trigger excessive catecholamine release and atrial irritability.',
        highlight: 'Sympathomimetics & catecholamine surges'
      }
    ],
    clinicalContext: 'Atrial fibrillation features disorganized, rapid atrial electrical activity (350-600 bpm) with an irregularly irregular ventricular response and absent P waves. The loss of atrial systole ("atrial kick") reduces cardiac output by 20-30%, while blood stasis in the left atrial appendage creates a high risk of thromboembolic stroke. Management focuses on rate control (beta-blockers, diltiazem), rhythm conversion, and systemic anticoagulation.',
    nclexPearls: [
      'The 48-Hour Anticoagulation Rule: If atrial fibrillation has lasted longer than 48 hours (or of unknown duration), elective cardioversion must be preceded by at least 3-4 weeks of therapeutic anticoagulation (or transesophageal echocardiogram [TEE] to rule out left atrial appendage clot) to prevent embolic stroke!',
      'Pulse Deficit Assessment: Detect a pulse deficit by simultaneously auscultating the apical pulse and palpating the radial pulse for a full 60 seconds; unperfused contractions create a lower radial count.',
      'Rate vs. Rhythm Control: For stable clients with rapid ventricular response (RVR), initial medical management focuses on ventricular rate control (< 100-110 bpm) before attempting rhythm conversion.'
    ],
    practiceQuestion: {
      question: 'A 58-year-old client with no prior cardiac history is admitted to the medical unit with sudden palpitations, fatigue, and an irregularly irregular pulse of 132 bpm. An ECG confirms new-onset atrial fibrillation. Which laboratory evaluation should the nurse anticipate to investigate a reversible endocrine etiology?',
      options: [
        'Serum amylase and lipase levels',
        'Serum thyroid-stimulating hormone (TSH) and free thyroxine (free T4)',
        'Erythrocyte sedimentation rate (ESR) and C-reactive protein (CRP)',
        'Serum troponin I and creatine kinase-MB every 8 hours'
      ],
      correctIndex: 1,
      rationale: 'Checking serum TSH and free T4 (Thyroid in THE ATRIAL FIBS) is a standard diagnostic priority in new-onset atrial fibrillation because occult hyperthyroidism or thyrotoxicosis is a frequent, treatable, and reversible underlying trigger for supraventricular tachyarrhythmias.'
    }
  },
  {
    id: 'stool-assessment-acct',
    shortCode: 'ACCT',
    title: 'Stool Assessment & Elimination Evaluation',
    category: 'fundamentals',
    categoryName: 'Fundamentals in Nursing',
    summary: 'The foundational 4-point clinical assessment framework for systematically observing, evaluating, and documenting bowel elimination patterns and fecal characteristics.',
    memoryTip: '"ACCT" — Always Account for Bowel Movements: Amount, Color, Consistency, Timing!',
    highYield: true,
    tags: ['Bowel Elimination', 'Gastrointestinal', 'Assessment', 'Documentation'],
    letters: [
      {
        letter: 'A',
        term: 'Amount',
        description: 'Quantify bowel output objectively (small, moderate, large, or weight in grams for strict pediatric/infant intake and output monitoring, ostomy management, or severe diarrhea).',
        highlight: 'Volume estimation or precise gram weight'
      },
      {
        letter: 'C',
        term: 'Color',
        description: 'Observe fecal pigmentation: Normal brown (stercobilin / bile); Clay / pale white (biliary tract obstruction / absence of bile); Black tarry / melena (upper GI bleed, bismuth, oral iron); Bright red / hematochezia (lower GI bleed, hemorrhoids); Yellow greasy / steatorrhea (malabsorption, cystic fibrosis, chronic pancreatitis).',
        highlight: 'Brown, black tarry, clay-colored, red, or yellow'
      },
      {
        letter: 'C',
        term: 'Consistency',
        description: 'Characterize stool form using the Bristol Stool Form Scale: Type 1-2 (hard lumps/nuts; indicates severe constipation/slow transit); Type 3-4 (smooth, sausage-shaped; normal healthy stool); Type 5-7 (soft blobs, mushy, or liquid watery diarrhea; indicates hypermotility, infection, or malabsorption).',
        highlight: 'Bristol Stool Form Scale (Type 1 to 7)'
      },
      {
        letter: 'T',
        term: 'Timing',
        description: 'Assess frequency, regularity, relationship to meals (gastrocolic reflex), and duration since last bowel movement. Vital for detecting postoperative paralytic ileus, bowel obstruction, or C. difficile infection.',
        highlight: 'Frequency, last movement, & relation to meals'
      }
    ],
    clinicalContext: 'Bowel assessment is a primary fundamental nursing responsibility. Subtle changes in stool amount, color, consistency, and timing can serve as early warning signs of life-threatening complications such as gastrointestinal hemorrhage, bowel obstruction, biliary atresia in neonates, and hospital-acquired Clostridioides difficile colitis.',
    nclexPearls: [
      'Upper vs. Lower GI Bleed: Melena (black, tarry, foul-smelling stool) typically reflects bleeding of ≥ 50-100 mL from the upper GI tract (esophagus, stomach, duodenum); hematochezia (bright red blood) indicates lower bowel bleeding or massive brisk upper bleed.',
      'Acholic (Clay-Colored) Stool: Clay-colored stool indicates lack of bile pigment (urobilin/stercobilin) entering the duodenum due to common bile duct obstruction (gallstones, pancreatic cancer, or biliary atresia).',
      'C. Difficile Hand Hygiene: When dealing with infectious watery diarrhea suspected or confirmed as Clostridioides difficile, the nurse MUST wash hands with soap and water; alcohol-based hand gels do not kill spores!'
    ],
    practiceQuestion: {
      question: 'A postoperative client who underwent open common bile duct exploration passes stool that appears pale, clay-colored, and chalky. What physiological mechanism explains this assessment finding?',
      options: [
        'Digestive degradation of blood pigments from an upper gastrointestinal bleed.',
        'Absence of bile pigments reaching the intestinal tract due to biliary duct obstruction.',
        'Rapid small-bowel transit time causing poor fat and carbohydrate absorption.',
        'Normal temporary discoloration caused by oral prophylactic broad-spectrum antibiotics.'
      ],
      correctIndex: 1,
      rationale: 'Normal brown stool pigmentation is produced by stercobilin (derived from bilirubin excreted in bile). When bile flow is blocked or obstructed from entering the duodenum, stercobilin cannot form, causing stools to appear pale, chalky, or clay-colored (acholic).'
    }
  },
  {
    id: 'manipulation-nursing-plan-3cs',
    shortCode: "The 3 C's",
    title: "Manipulation Nursing Plan: The 3 C's",
    category: 'fundamentals',
    categoryName: 'Fundamentals in Nursing',
    summary: 'A core behavioral management framework to address and diffuse manipulative behaviors by fostering Cooperation, Compromise, and Collaboration.',
    memoryTip: 'Promote the "3 C\'s" — Cooperation, Compromise, Collaboration. Set clear limits while channeling clients toward constructive partnership!',
    highYield: true,
    tags: ['Behavioral Management', 'Communication', 'Therapeutic Relationship', 'Limit Setting'],
    letters: [
      {
        letter: 'C',
        term: 'Cooperation',
        description: 'Foster mutual cooperation by establishing clear, non-negotiable unit rules and consistent boundaries across all shifts. Prevent staff splitting by ensuring all team members adhere strictly to the unified plan of care.',
        highlight: 'Consistent unit rules & staff cohesion'
      },
      {
        letter: 'C',
        term: 'Compromise',
        description: 'Teach adaptive negotiation and realistic compromise within established safety parameters. Reinforce that therapeutic relationships require give-and-take rather than demanding or coercive tactics to achieve one-sided demands.',
        highlight: 'Healthy negotiation within safe boundaries'
      },
      {
        letter: 'C',
        term: 'Collaboration',
        description: 'Actively involve the client in formulating their therapeutic goals, schedules, and treatment plan. Providing legitimate choices gives the client a healthy sense of control and autonomy, reducing the urge to manipulate.',
        highlight: 'Joint goal setting & shared decision-making'
      }
    ],
    clinicalContext: 'Manipulative behaviors frequently occur when clients experience severe anxiety, loss of control, personality disorders (e.g., borderline or antisocial), or substance use disorders. The primary nursing interventions include setting firm, clear, non-punitive limits, avoiding power struggles, and maintaining continuous team communication to prevent "splitting". Promoting the 3 C\'s transforms destructive behavioral patterns into therapeutic cooperation.',
    nclexPearls: [
      'Firm Limit Setting: When establishing boundaries, state rules calmly and matter-of-factly without anger, moralizing, or entering debates.',
      'Staff Splitting Prevention: Conduct regular shift huddles so all staff members enforce the exact same behavioral boundaries 24/7.',
      'Positive Reinforcement: Directly praise and reinforce instances where the client utilizes open, honest communication rather than manipulative schemes.'
    ],
    practiceQuestion: {
      question: 'A hospitalized client with a history of manipulative behavior approaches the evening nurse and says, "The day nurse promised I could stay up 2 hours past curfew because I\'ve been good, but the charge nurse is being cruel. You\'re the only nurse who understands me, so please let me stay up tonight." What is the nurse\'s best response?',
      options: [
        '"I will grant you 1 extra hour tonight if you promise not to tell the charge nurse."',
        '"The unit curfew is 10:00 PM for all clients. We can collaborate on scheduling your free time for tomorrow afternoon."',
        '"Why are you always trying to cause conflicts between the day and evening staff?"',
        '"You must go to your room immediately, or your privileges will be revoked tomorrow."'
      ],
      correctIndex: 1,
      rationale: 'The nurse must maintain consistent, objective boundaries to prevent staff splitting while offering collaboration within acceptable unit parameters (the 3 C\'s: Cooperation, Compromise, Collaboration). Stating the rule calmly and offering a collaborative plan channels the client toward direct, adaptive behaviors without confrontation or appeasement.'
    }
  },
  {
    id: 'pain-history-older-saab',
    shortCode: 'OLDER SAAB',
    title: 'Comprehensive Pain History Checklist',
    category: 'fundamentals',
    categoryName: 'Fundamentals in Nursing',
    summary: 'A thorough 9-point clinical mnemonic checklist for systematically obtaining an in-depth pain history and characterizing discomfort.',
    memoryTip: '"OLDER SAAB" — Onset, Location, Description, Exacerbating, Radiation, Severity, Associated symptoms, Alleviating, Before. Don\'t let pain go unassessed!',
    highYield: true,
    tags: ['Pain Assessment', 'Health History', 'Symptom Analysis', 'Vital Signs'],
    letters: [
      {
        letter: 'O',
        term: 'Onset',
        description: 'When did the pain first begin? Was the onset abrupt and sudden (suggesting acute vascular event, rupture, or infarction) or insidious and gradual (suggesting chronic inflammation or progressive disease)?',
        highlight: 'Start time & sudden vs. gradual'
      },
      {
        letter: 'L',
        term: 'Location',
        description: 'Where is the pain situated anatomically? Ask the client to point with one finger to the exact focal point. Differentiate well-localized somatic pain from diffuse visceral pain.',
        highlight: 'Exact anatomical site & localization'
      },
      {
        letter: 'D',
        term: 'Description (What Does It Feel Like)',
        description: 'Quality and character of the pain in the client\'s own words: sharp, stabbing, burning (neuropathic), aching, throbbing (vascular), cramping, or crushing (ischemic).',
        highlight: 'Sensory quality (burning, sharp, dull)'
      },
      {
        letter: 'E',
        term: 'Exacerbating Factors',
        description: 'What actions, movements, or conditions aggravate the pain? Inquire about deep inspiration (pleuritic), eating/meals (GI ulcer vs cholecystitis), physical activity, or coughing.',
        highlight: 'Triggers, motion, respiration, & meals'
      },
      {
        letter: 'R',
        term: 'Radiation',
        description: 'Does the pain radiate or travel anywhere else? Classic examples include cardiac pain radiating to jaw/left arm, renal colic radiating to groin, or sciatica radiating down the leg.',
        highlight: 'Referral path & dermatomal pattern'
      },
      {
        letter: 'S',
        term: 'Severity',
        description: 'Quantify intensity using an evidence-based scale: Numeric Rating Scale (0-10), Wong-Baker FACES, or FLACC scale for nonverbal or pediatric clients at rest and during movement.',
        highlight: 'Validated scale rating (0 to 10)'
      },
      {
        letter: 'A',
        term: 'Associated Symptoms',
        description: 'What other symptoms accompany the pain episode? Check for autonomic signs like nausea, vomiting, diaphoresis, dizziness, shortness of breath, palpitations, or pallor.',
        highlight: 'Nausea, diaphoresis, dyspnea, pallor'
      },
      {
        letter: 'A',
        term: 'Alleviating Factors',
        description: 'What interventions reduce or eliminate the pain? Note pharmacological relief (analgesics, antacids) and non-pharmacological methods (repositioning, rest, heat, cold, elevation).',
        highlight: 'Relief methods & effective interventions'
      },
      {
        letter: 'B',
        term: 'Before (Ever Experienced This Before)',
        description: 'Has the client ever experienced identical or similar pain in the past? If yes, what was the established medical diagnosis, and what therapies proved most effective?',
        highlight: 'Previous episodes & recurrence history'
      }
    ],
    clinicalContext: 'Pain is recognized as the "fifth vital sign" and is fundamentally subjective. A thorough pain history using OLDER SAAB enables the nurse to systematically investigate acute visceral or ischemic emergencies versus chronic neuropathic and musculoskeletal conditions, facilitating rapid, targeted clinical decision-making.',
    nclexPearls: [
      'Self-Report Priority: The client\'s self-report is always the most reliable indicator of pain intensity, even when physiological vital signs appear completely normal.',
      'Reassessment Standard: Always reassess pain within 15-30 minutes after IV analgesic administration and within 45-60 minutes after oral analgesic administration.',
      '"Before" Red Flag: A symptom that is "new, different, or more severe than ever experienced before" requires immediate provider notification to rule out acute life threats.'
    ],
    practiceQuestion: {
      question: 'A 60-year-old client reports severe mid-epigastric discomfort. When the nurse asks, "Have you ever experienced pain like this in the past?", which component of the comprehensive pain history is being assessed?',
      options: [
        'Associated symptoms',
        'Before (prior experience)',
        'Exacerbating factors',
        'Description of sensory quality'
      ],
      correctIndex: 1,
      rationale: 'Asking whether the client has ever had this discomfort before assesses the "B" (Before) dimension of the OLDER SAAB checklist. Establishing whether pain is recurrent or unprecedented helps differentiate chronic recurrent disorders from emergent, acute pathological events.'
    }
  },
  {
    id: 'pain-management-abcde',
    shortCode: 'ABCDE',
    title: 'Core Principles of Pain Management',
    category: 'fundamentals',
    categoryName: 'Fundamentals in Nursing',
    summary: 'A client-centered ethical and clinical framework directing the nurse\'s approach to pain assessment, advocacy, and collaborative management.',
    memoryTip: '"ABCDE" — Ask, Believe, Choices, Deliver, Empower. Pain is what the client says it is; build therapeutic trust through timely intervention!',
    highYield: true,
    tags: ['Pain Management', 'Client Advocacy', 'Nursing Ethics', 'Therapeutic Communication'],
    letters: [
      {
        letter: 'A',
        term: 'Ask About the Pain',
        description: 'Routinely and systematically screen for pain using standardized, validated assessment tools during initial intake, with routine vital signs, and following any procedure.',
        highlight: 'Systematic, routine screening'
      },
      {
        letter: 'B',
        term: 'Believe the Client',
        description: 'Always believe the client and family reports of pain and what relieves it. Absence of objective signs (e.g., normal vitals in chronic pain) does not invalidate subjective pain reports.',
        highlight: 'Client report is the gold standard'
      },
      {
        letter: 'C',
        term: 'Choices (Inform Options)',
        description: 'Educate clients regarding all available pain relief choices, including multimodal pharmacotherapy (opioids, NSAIDs, acetaminophen) and non-pharmacologic interventions (heat/cold, repositioning, distraction).',
        highlight: 'Multimodal choices & client preferences'
      },
      {
        letter: 'D',
        term: 'Deliver Interventions Timely',
        description: 'Deliver pain management interventions safely, coordinate care promptly, and administer medications when promised. Timely intervention builds trust and prevents severe breakthrough pain.',
        highlight: 'Prompt delivery & trust building'
      },
      {
        letter: 'E',
        term: 'Empower & Enable Client Control',
        description: 'Empower and enable clients and families to take active control of their pain management, including education on patient-controlled analgesia (PCA) and setting personal comfort goals.',
        highlight: 'PCA education & client empowerment'
      }
    ],
    clinicalContext: 'Pain management is a fundamental ethical and clinical nursing obligation. Overcoming personal biases, recognizing physiological habituation to chronic pain, preventing undertreatment, and fostering trust through prompt, coordinated delivery of analgesics are high-frequency NCLEX concepts.',
    nclexPearls: [
      'Vital Signs Adaptation: In chronic persistent pain, autonomic signs (tachycardia, hypertension) habituate and return to baseline. Never withhold analgesics because vital signs appear normal.',
      'PCA Safety Rule: Only the CLIENT is permitted to push the button on a Patient-Controlled Analgesia (PCA) device. Family members or staff pushing the button ("PCA by proxy") is dangerous and contraindicated.',
      'Preemptive Administration: Administer prescribed analgesics 30-45 minutes before painful activities (e.g., physical therapy, wound dressing changes) to ensure peak comfort.'
    ],
    practiceQuestion: {
      question: 'A client with chronic sickle cell vaso-occlusive crisis reports pain rated 9/10 while calmly reading a magazine. Vital signs show blood pressure 124/76 mmHg and pulse 72 bpm. Guided by the ABCDE pain management framework, what is the nurse\'s priority action?',
      options: [
        'Withhold the prescribed opioid analgesic because the client does not exhibit autonomic signs of severe distress.',
        'Believe the client\'s self-report and administer the prescribed analgesic promptly.',
        'Encourage the client to continue reading since distraction appears sufficient.',
        'Instruct the client that medication is reserved for when pain disrupts normal activity.'
      ],
      correctIndex: 1,
      rationale: 'Under the ABCDE pain management framework, the nurse must Believe (B) the client\'s self-report. Pain is subjective; clients with chronic pain or recurrent crises adapt physiologically (normal vital signs) and develop behavioral coping strategies (such as reading). Pain must be treated according to the reported rating.'
    }
  },

  // ==========================================
  // MATERNAL & CHILD NURSING
  // ==========================================
  {
    id: 'obstetric-history-gtpal',
    shortCode: 'GTPAL',
    title: 'Obstetric History Classification',
    category: 'maternal',
    categoryName: 'Maternal & Child Nursing',
    summary: 'The precise 5-digit scoring system used to quantify a woman\'s complete pregnancy and birth history.',
    memoryTip: '"Good Tidings Parents Always Love" — Gravida, Term, Preterm, Abortions, Living.',
    highYield: true,
    tags: ['Obstetrics', 'Maternity', 'Calculations'],
    letters: [
      {
        letter: 'G',
        term: 'Gravida',
        description: 'Total number of times the woman has been pregnant, including current pregnancy, miscarriages, and abortions. Multiples (twins/triplets) count as 1 pregnancy.',
        highlight: 'Total pregnancies count'
      },
      {
        letter: 'T',
        term: 'Term Births',
        description: 'Number of pregnancies carried to 37 weeks 0 days or beyond. Multiples delivered together count as 1 birth event.',
        highlight: '≥ 37 weeks gestation'
      },
      {
        letter: 'P',
        term: 'Preterm Births',
        description: 'Number of pregnancies delivered between 20 weeks 0 days and 36 weeks 6 days (viable or stillborn).',
        highlight: '20 to 36 6/7 weeks'
      },
      {
        letter: 'A',
        term: 'Abortions',
        description: 'Number of pregnancies ending before 20 weeks gestation, including both spontaneous miscarriages and elective therapeutic abortions.',
        highlight: '< 20 weeks termination'
      },
      {
        letter: 'L',
        term: 'Living Children',
        description: 'Number of children currently alive. In multiple births (twins/triplets), EACH individual living child is counted individually!',
        highlight: 'Count each child individually'
      }
    ],
    clinicalContext: 'Distinguish between Gravidity (pregnancies) and Parity (deliveries reaching viability ≥ 20 weeks). A woman pregnant for the first time is primigravida (G1P0).',
    nclexPearls: [
      'Twin Rule: For G, T, P, and A, a twin pregnancy counts as 1 event. But for Living (L), each twin is counted individually (e.g. 2 living children).',
      'Current Pregnancy: Don\'t forget to include the CURRENT pregnancy in the Gravida (G) count!'
    ],
    practiceQuestion: {
      question: 'A client is currently pregnant at 16 weeks. She has an 8-year-old born at 39 weeks, twin 4-year-olds born at 34 weeks, and had an elective abortion at 8 weeks. What is her GTPAL?',
      options: [
        'G4 T1 P1 A1 L3',
        'G4 T1 P2 A1 L3',
        'G3 T1 P1 A1 L2',
        'G4 T2 P1 A1 L2'
      ],
      correctIndex: 0,
      rationale: 'Gravida = 4 (current + 8yo + twins + abortion). Term = 1 (the 8yo born at 39 weeks). Preterm = 1 (the twin birth at 34 weeks counts as 1 delivery event). Abortion = 1 (at 8 weeks). Living = 3 (the 8yo plus both living twins = 3).'
    }
  },
  {
    id: 'newborn-assessment-apgar',
    shortCode: 'APGAR',
    title: 'Newborn Immediate Assessment Score',
    category: 'maternal',
    categoryName: 'Maternal & Child Nursing',
    summary: 'The vital 5-parameter score evaluated at 1 minute and 5 minutes post-delivery to assess neonatal transition.',
    memoryTip: 'Appearance, Pulse, Grimace, Activity, Respiration (scored 0, 1, or 2 per category; Max = 10).',
    highYield: true,
    tags: ['Newborn', 'Neonatal', 'Postpartum'],
    letters: [
      {
        letter: 'A',
        term: 'Appearance (Skin Color)',
        description: '0 = Completely pale/blue; 1 = Acrocyanosis (pink body, blue extremities - common and normal at 1 min); 2 = Completely pink body and extremities.',
        highlight: '0: Blue | 1: Acrocyanosis | 2: All Pink'
      },
      {
        letter: 'P',
        term: 'Pulse (Heart Rate)',
        description: '0 = Absent; 1 = Slow (< 100 bpm); 2 = Normal (≥ 100 bpm). Count apical pulse with stethoscope.',
        highlight: '0: None | 1: <100 | 2: ≥100 bpm'
      },
      {
        letter: 'G',
        term: 'Grimace (Reflex Irritability)',
        description: '0 = Flaccid, no response to stimulation; 1 = Minimal grimace or weak movement; 2 = Vigorous cry, sneeze, cough, or pulls away.',
        highlight: '0: None | 1: Grimace | 2: Vigorous Cry'
      },
      {
        letter: 'A',
        term: 'Activity (Muscle Tone)',
        description: '0 = Limp, flaccid; 1 = Some flexion of extremities; 2 = Well-flexed, active voluntary motion.',
        highlight: '0: Flaccid | 1: Some Flexion | 2: Active'
      },
      {
        letter: 'R',
        term: 'Respiration (Respiratory Effort)',
        description: '0 = Absent (apnea); 1 = Slow, irregular, weak gasp/cry; 2 = Good, robust, vigorous crying.',
        highlight: '0: Absent | 1: Weak/Slow | 2: Robust Cry'
      }
    ],
    clinicalContext: 'Scores 7-10 indicate good transition requiring routine supportive care. Scores 4-6 indicate moderate difficulty requiring gentle stimulation and oxygen. Scores 0-3 signify severe distress requiring immediate resuscitation.',
    nclexPearls: [
      'Timing: Done at 1 minute and 5 minutes after birth. If the 5-minute score is < 7, continue scoring every 5 minutes up to 20 minutes.',
      'Acrocyanosis: Very common at 1 minute; most newborns score 8 or 9 due to 1 point deduction for blue hands/feet.'
    ],
    practiceQuestion: {
      question: 'At 1 minute after birth, a neonate has a pink body with blue hands and feet, a heart rate of 124 bpm, grimaces when suctioned, keeps arms and legs flexed with some motion, and has a vigorous cry. What is the APGAR score?',
      options: [
        '10',
        '9',
        '8',
        '7'
      ],
      correctIndex: 1,
      rationale: 'Appearance = 1 (pink trunk, blue extremities / acrocyanosis); Pulse = 2 (HR > 100 bpm); Grimace = 2 (vigorous cry when suctioned); Activity = 2 (well-flexed and active motion); Respiration = 2 (vigorous cry). Total APGAR = 1 + 2 + 2 + 2 + 2 = 9.'
    }
  },
  {
    id: 'preeclampsia-hellp-syndrome',
    shortCode: 'HELLP',
    title: 'Severe Preeclampsia Complication',
    category: 'maternal',
    categoryName: 'Maternal & Child Nursing',
    summary: 'A life-threatening obstetric complication of preeclampsia characterized by liver damage and coagulopathy.',
    memoryTip: 'Hemolysis, Elevated Liver enzymes, Low Platelets — Epigastric or Right Upper Quadrant pain is the cardinal symptom!',
    highYield: true,
    tags: ['High-Risk Pregnancy', 'Hypertension', 'Emergency'],
    letters: [
      {
        letter: 'H',
        term: 'Hemolysis',
        description: 'Microangiopathic hemolytic anemia caused by RBC fragmentation as they pass through damaged, vasospastic blood vessels (schistocytes, elevated bilirubin).',
        highlight: 'RBC destruction & jaundice'
      },
      {
        letter: 'EL',
        term: 'Elevated Liver Enzymes',
        description: 'Obstructed hepatic blood flow caused by fibrin deposits leads to hepatic tissue ischemia, distension of Glisson capsule, and marked elevation of AST & ALT.',
        highlight: 'AST, ALT > 2x normal'
      },
      {
        letter: 'LP',
        term: 'Low Platelets',
        description: 'Thrombocytopenia (< 100,000/mm³) caused by consumption of platelets at sites of vascular endothelial damage, predisposing to severe hemorrhage and DIC.',
        highlight: 'Platelets < 100,000 /mm³'
      }
    ],
    clinicalContext: 'Often mistaken for gallbladder disease, gastritis, or flu due to nausea, vomiting, malaise, and RUQ or epigastric pain. Definitive treatment is delivery of the fetus and placenta.',
    nclexPearls: [
      'Seizure Prophylaxis: Administer IV Magnesium Sulfate. Always keep the antidote CALCIUM GLUCONATE at the bedside!',
      'Deep Tendon Reflexes: Monitor DTRs closely. Loss of patellar reflexes is the earliest sign of magnesium toxicity.',
      'Platelet Alert: Platelets < 50,000/mm³ contraindicates epidural anesthesia due to epidural hematoma risk.'
    ],
    practiceQuestion: {
      question: 'A 34-week pregnant client with preeclampsia reports new onset right upper quadrant pain, nausea, and severe headache. Which laboratory finding confirms HELLP syndrome?',
      options: [
        'Hemoglobin 14 g/dL, AST 25 U/L, Platelets 220,000/mm³',
        'Schistocytes on blood smear, AST 180 U/L, Platelets 72,000/mm³',
        'Serum creatinine 0.6 mg/dL, WBC 9,500/mm³, Platelets 160,000/mm³',
        'Serum potassium 5.2 mEq/L, Sodium 138 mEq/L, Platelets 300,000/mm³'
      ],
      correctIndex: 1,
      rationale: 'HELLP syndrome is confirmed by Hemolysis (schistocytes / fragmented RBCs), Elevated Liver enzymes (AST 180 U/L is markedly elevated), and Low Platelets (72,000/mm³ is < 100,000/mm³).'
    }
  },
  {
    id: 'postpartum-episiotomy-reeda',
    shortCode: 'REEDA',
    title: 'Perineal & Episiotomy Wound Healing',
    category: 'maternal',
    categoryName: 'Maternal & Child Nursing',
    summary: 'The systematic nursing assessment tool for episiotomies, perineal tears, and Cesarean incisions.',
    memoryTip: 'Redness, Edema, Ecchymosis, Discharge, Approximation.',
    highYield: false,
    tags: ['Postpartum', 'Wound Assessment', 'Infection Control'],
    letters: [
      {
        letter: 'R',
        term: 'Redness (Erythema)',
        description: 'Mild inflammatory redness is normal initially, but increasing redness with warmth indicates cellulitis or localized infection.',
        highlight: 'Check color & warmth'
      },
      {
        letter: 'E',
        term: 'Edema (Swelling)',
        description: 'Excessive swelling can delay healing and indicate hematoma formation or deep tissue infection.',
        highlight: 'Assess swelling & hematoma'
      },
      {
        letter: 'E',
        term: 'Ecchymosis (Bruising)',
        description: 'Superficial bruising is common after birth trauma; progressive expansion indicates an active perineal hematoma.',
        highlight: 'Bruising progression'
      },
      {
        letter: 'D',
        term: 'Discharge',
        description: 'Wound should have no drainage. Purulent, foul-smelling, or serosanguinous drainage indicates infection or dehiscence.',
        highlight: 'No purulent drainage'
      },
      {
        letter: 'A',
        term: 'Approximation',
        description: 'Skin edges should be aligned and closed tightly together. Gapping or separation indicates wound dehiscence.',
        highlight: 'Well-aligned skin edges'
      }
    ],
    clinicalContext: 'To examine a postpartum client episiotomy, place her in the Sims (side-lying) position with the upper leg flexed and gently lift the upper buttock with good direct lighting.',
    nclexPearls: [
      'Pain out of proportion: Severe perineal pain unrelieved by analgesics with rectal pressure suggests a hidden perineal hematoma!',
      'Comfort measures: Ice packs for the first 24 hours to reduce edema; warm sitz baths starting after 24 hours to promote healing.'
    ],
    practiceQuestion: {
      question: 'A postpartum client 18 hours after vaginal delivery with midline episiotomy reports severe, increasing rectal pressure and deep pelvic pain not relieved by ibuprofen. What is the priority nursing action?',
      options: [
        'Offer a warm sitz bath and encourage ambulation.',
        'Inspect the perineal area for swelling, discoloration, and a hematoma.',
        'Reassure the client that perineal stretching causes intense pressure.',
        'Administer a prescribed stool softener for constipation.'
      ],
      correctIndex: 1,
      rationale: 'Severe, unrelenting perineal pain or rectal pressure out of proportion to expectations is the hallmark sign of a postpartum hematoma, which requires immediate visual inspection and prompt provider notification.'
    }
  },
  {
    id: 'pregnancy-infections-torch',
    shortCode: 'TORCH',
    title: 'Teratogenic Perinatal Infections',
    category: 'maternal',
    categoryName: 'Maternal & Child Nursing',
    summary: 'A group of infectious organisms capable of crossing the placenta and causing fetal anomalies or demise.',
    memoryTip: 'Toxoplasmosis, Other, Rubella, Cytomegalovirus, Herpes Simplex.',
    highYield: true,
    tags: ['Infection Control', 'Teratogens', 'Perinatal'],
    letters: [
      {
        letter: 'T',
        term: 'Toxoplasmosis',
        description: 'Parasite transmitted via ingestion of undercooked meats or contact with contaminated cat feces (cleaning cat litter boxes). Causes chorioretinitis, hydrocephalus, and intracranial calcifications.',
        highlight: 'Cat litter & raw meats'
      },
      {
        letter: 'O',
        term: 'Other (Syphilis, Varicella, Parvo, HIV)',
        description: 'Syphilis (causes copper-colored rash, saddle nose, stillbirth), Parvovirus B19 (hydrops fetalis), Varicella zoster, and Hepatitis B.',
        highlight: 'Syphilis, Varicella, Parvo B19'
      },
      {
        letter: 'R',
        term: 'Rubella (German Measles)',
        description: 'Greatest danger in 1st trimester. Causes congenital rubella syndrome (microcephaly, cataracts, sensorineural deafness, patent ductus arteriosus). Vaccine is live and contraindicated in pregnancy!',
        highlight: 'Live vaccine contraindicated'
      },
      {
        letter: 'C',
        term: 'Cytomegalovirus (CMV)',
        description: 'Most common cause of congenital viral infection. Transmitted via bodily fluids (saliva/urine of young children). Causes microcephaly, hearing loss, and periventricular calcifications.',
        highlight: 'Leading cause of hearing loss'
      },
      {
        letter: 'H',
        term: 'Herpes Simplex Virus (HSV)',
        description: 'Vertical transmission during vaginal birth. If active genital herpes lesions or prodromal symptoms are present at labor onset, Cesarean section is mandatory within 4 hours of membrane rupture.',
        highlight: 'Active lesions = C-section'
      }
    ],
    clinicalContext: 'Pregnant women should never change cat litter boxes, eat raw meat, or receive live attenuated vaccines (MMR, Varicella). If non-immune to Rubella (titer < 1:8), the vaccine is administered postpartum prior to discharge.',
    nclexPearls: [
      'MMR Vaccine Rule: Administered subcutaneously in postpartum; educate to avoid pregnancy for at least 4 weeks (28 days) following vaccination.',
      'Acyclovir Prophylaxis: Given to pregnant women with recurrent genital HSV starting at 36 weeks gestation to prevent active outbreaks at delivery.'
    ],
    practiceQuestion: {
      question: 'A prenatal client at 10 weeks gestation tests non-immune to rubella (titer 1:6). What should the nurse explain to the client?',
      options: [
        'The rubella immunization will be administered immediately during this prenatal visit.',
        'The rubella immunization is given subcutaneously at 28 weeks along with RhoGAM.',
        'The rubella immunization cannot be given now because it is a live virus; it will be given postpartum.',
        'No immunization is required because natural antibodies will develop during the second trimester.'
      ],
      correctIndex: 2,
      rationale: 'The Rubella vaccine is a live attenuated virus and is teratogenic, making it contraindicated during pregnancy. The non-immune mother must avoid infected individuals and receive the vaccine in the immediate postpartum period before discharge.'
    }
  },
  {
    id: 'oral-contraceptives-aches',
    shortCode: 'ACHES',
    title: 'Warning Signs of Oral Contraceptives',
    category: 'maternal',
    categoryName: 'Maternal & Child Nursing',
    summary: 'The life-threatening thromboembolic and vascular complications of combined estrogen-progestin pills.',
    memoryTip: 'Remember "ACHES" — Any of these requires stopping the pill and seeking immediate medical care!',
    highYield: true,
    tags: ['Family Planning', 'Pharmacology', 'Thromboembolism'],
    letters: [
      {
        letter: 'A',
        term: 'Abdominal Pain (Severe)',
        description: 'May indicate mesenteric or pelvic vein thrombosis, liver tumors (hepatic adenoma), or gallbladder disease.',
        highlight: 'Liver/mesenteric thrombosis'
      },
      {
        letter: 'C',
        term: 'Chest Pain or Dyspnea',
        description: 'May indicate pulmonary embolism (PE) or myocardial infarction (MI) secondary to hypercoagulability.',
        highlight: 'PE or Myocardial Infarction'
      },
      {
        letter: 'H',
        term: 'Headache (Severe, Sudden)',
        description: 'May signal an impending cerebrovascular accident (CVA/stroke), severe hypertension, or retinal artery thrombosis.',
        highlight: 'Stroke / TIA / Hypertension'
      },
      {
        letter: 'E',
        term: 'Eye Problems (Visual Disturbances)',
        description: 'Blurring, partial or total loss of vision, diplopia, or flashing lights caused by retinal vascular thrombosis or papilledema.',
        highlight: 'Retinal artery thrombosis'
      },
      {
        letter: 'S',
        term: 'Severe Leg Pain or Swelling',
        description: 'Unilateral calf pain, swelling, warmth, and erythema indicating Deep Vein Thrombosis (DVT).',
        highlight: 'Deep Vein Thrombosis (DVT)'
      }
    ],
    clinicalContext: 'Estrogen increases clotting factors VII, VIII, X, and fibrinogen while decreasing antithrombin III. Women who smoke and are over 35 years old are strictly contraindicated from taking combined oral contraceptives due to exponentially high risk of MI and stroke.',
    nclexPearls: [
      'Strict Contraindication: Smoking + Age ≥ 35 years old + Estrogen pill = Massive Thromboembolism Risk.',
      'Antibiotic Interaction: Rifampin, St. John\'s Wort, and certain anticonvulsants decrease contraceptive efficacy; backup barrier methods are mandatory.'
    ],
    practiceQuestion: {
      question: 'A 28-year-old client taking combined oral contraceptives calls the clinic reporting sudden unilateral right calf warmth, swelling, and ache when walking. What instruction should the nurse give?',
      options: [
        'Elevate the leg, apply a heating pad, and massage the muscle thoroughly.',
        'Take ibuprofen and schedule a routine follow-up appointment next week.',
        'Stop taking the contraceptive immediately and proceed to the nearest emergency department.',
        'Soak the calf in an Epsom salt bath and decrease daily salt intake.'
      ],
      correctIndex: 2,
      rationale: 'Unilateral calf swelling and tenderness represents the S in ACHES (Severe leg pain), signaling a probable Deep Vein Thrombosis (DVT). The client must avoid massaging the leg (which could dislodge an embolus) and seek emergency evaluation immediately.'
    }
  },
  {
    id: 'placenta-crossing-want-my-hot-dog',
    shortCode: 'Want My Hot Dog',
    title: 'Substances Crossing the Placental Barrier',
    category: 'maternal',
    categoryName: 'Maternal & Child Nursing',
    summary: 'A high-yield maternal-fetal mnemonic detailing the essential physiological and pathological substances that cross the human placenta.',
    memoryTip: '"Want My Hot Dog": Wastes, Antibodies, Nutrients, Teratogens, Microorganisms, Hormones/HIV, Drugs. Protect the fetus from hazardous crossings!',
    highYield: true,
    tags: ['Maternal-Fetal Physiology', 'Teratology', 'Placenta', 'Pharmacology in Pregnancy'],
    letters: [
      {
        letter: 'W',
        term: 'Wastes',
        description: 'Fetal metabolic wastes (carbon dioxide, urea, uric acid, creatinine, conjugated bilirubin) diffuse down concentration gradients across placental syncytiotrophoblasts into maternal circulation for maternal elimination.',
        highlight: 'CO2, urea, uric acid, creatinine'
      },
      {
        letter: 'A',
        term: 'Antibodies (Maternal IgG)',
        description: 'Maternal Immunoglobulin G (IgG) is the ONLY antibody class that actively crosses the placenta via Fc receptor transport, granting the fetus passive immunity during the third trimester that persists for 3-6 months postpartum.',
        highlight: 'Maternal IgG provides passive immunity'
      },
      {
        letter: 'N',
        term: 'Nutrients',
        description: 'Glucose (via facilitated diffusion using GLUT transporters), essential amino acids, fatty acids, water, electrolytes, minerals, vitamins, and oxygen cross from maternal intervillous spaces into the umbilical vein.',
        highlight: 'Glucose, amino acids, O2, & electrolytes'
      },
      {
        letter: 'T',
        term: 'Teratogens',
        description: 'Chemical and environmental agents that cause structural, functional, or developmental anomalies (e.g., alcohol, ionizing radiation, ACE inhibitors, isotretinoin, thalidomide, lithium, valproic acid). Most destructive during organogenesis (weeks 3-8).',
        highlight: 'Critical vulnerability in weeks 3 to 8'
      },
      {
        letter: 'M',
        term: 'Microorganisms (TORCH / Treponema)',
        description: 'Pathogens that breach the chorionic villi barrier: Toxoplasmosis, Other (Syphilis, Parvovirus B19, Varicella), Rubella, Cytomegalovirus, and Herpes Simplex virus (TORCH complex), causing severe congenital malformations or fetal demise.',
        highlight: 'TORCH complex & Treponema pallidum'
      },
      {
        letter: 'H',
        term: 'Hormones & HIV',
        description: 'Maternal steroid hormones (estrogens, progesterone, synthetic progestins) and viral pathogens such as Human Immunodeficiency Virus (HIV). Antiretroviral therapy (ART) during pregnancy dramatically reduces perinatal transmission to < 1-2%.',
        highlight: 'Steroids & perinatal HIV transmission'
      },
      {
        letter: 'D',
        term: 'Drugs (Prescription, OTC, Illicit)',
        description: 'Lipophilic, un-ionized, low-molecular-weight substances (< 500 Da) readily cross: opioids (neonatal abstinence syndrome), benzodiazepines, warfarin (teratogenic; use heparin/LMWH instead!), cocaine, nicotine, and NSAIDs (premature ductus arteriosus closure).',
        highlight: 'Warfarin, opioids, NSAIDs, cocaine'
      }
    ],
    clinicalContext: 'Understanding placental permeability is a cornerstone of antenatal nursing. The placenta is not an impermeable barrier; most lipid-soluble, low-molecular-weight compounds diffuse easily. Nurses must advocate for medication safety by identifying teratogens, verifying maternal antibody titers (e.g., Rh(D) status and rubella immunity), and preventing perinatal pathogen transmission.',
    nclexPearls: [
      'IgG vs. IgM/IgA: Maternal IgG is the ONLY immunoglobulin that crosses the placenta. Fetal IgM or IgA detected in cord blood indicates active congenital intra-uterine infection!',
      'Anticoagulation Choice: Heparin and low-molecular-weight heparin (enoxaparin) do NOT cross the placenta and are safe during pregnancy; Warfarin readily crosses and is strictly teratogenic.',
      'Organogenesis Window: The embryo is most vulnerable to gross morphological teratogens during weeks 3 through 8 of gestation (the embryonic stage).'
    ],
    practiceQuestion: {
      question: 'A client at 12 weeks gestation asks the nurse why she must transition from oral warfarin to daily subcutaneous enoxaparin to manage her mechanical heart valve during pregnancy. What is the nurse\'s best response?',
      options: [
        '"Warfarin is unable to maintain adequate anticoagulation with the increased blood volume of pregnancy."',
        '"Warfarin readily crosses the placenta and causes severe congenital fetal malformations, whereas enoxaparin does not cross."',
        '"Enoxaparin enhances the fetal liver\'s synthesis of vitamin K-dependent clotting factors for birth."',
        '"Warfarin increases the risk of premature rupture of membranes and early precipitous labor."'
      ],
      correctIndex: 1,
      rationale: 'Warfarin is a low-molecular-weight lipophilic drug that readily crosses the placental barrier ("D" in "Want My Hot Dog"), causing fetal warfarin syndrome (nasal hypoplasia, chondrodysplasia, CNS anomalies, and hemorrhage). Enoxaparin (low-molecular-weight heparin) consists of large polar molecules that cannot cross the placental barrier, making it safe for the developing fetus.'
    }
  },
  {
    id: 'preterm-infant-problems-tries',
    shortCode: 'TRIES',
    title: 'Anticipated Problems of the Preterm Infant',
    category: 'maternal',
    categoryName: 'Maternal & Child Nursing',
    summary: 'A high-yield neonatal framework outlining the 5 major clinical vulnerabilities and organ immaturities confronting the premature newborn.',
    memoryTip: '"TRIES" — The fragile preterm infant TRIES hard to survive: Temperature (cold stress), Resistance (infection), Immature liver (jaundice), Elimination (NEC), Sensory (ROP)!',
    highYield: true,
    tags: ['Neonatal Care', 'Prematurity', 'NICU', 'Pediatrics'],
    letters: [
      {
        letter: 'T',
        term: 'Temperature Regulation (Poor / Cold Stress)',
        description: 'Preterm infants have scarce brown adipose tissue (BAT), thin permeable skin, lack of insulating subcutaneous fat, and high body-surface-area-to-mass ratio. Cold stress triggers pulmonary vasoconstriction, hypoxia, anaerobic metabolism, and severe hypoglycemia.',
        highlight: 'Lack of brown fat & cold stress cascade'
      },
      {
        letter: 'R',
        term: 'Resistance to Infections (Poor / Neonatal Sepsis)',
        description: 'Impaired transplacental IgG transfer (which occurs primarily in the third trimester), deficient phagocytosis, and invasive lines (umbilical catheters, endotracheal tubes) make the premature infant acutely susceptible to fulminant neonatal sepsis and meningitis.',
        highlight: 'Low maternal IgG & high sepsis risk'
      },
      {
        letter: 'I',
        term: 'Immature Liver (Hyperbilirubinemia & Bleeding)',
        description: 'Hepatic enzyme glucuronyl transferase deficiency leads to poor bilirubin conjugation and unconjugated hyperbilirubinemia (kernicterus risk). Inadequate glycogen storage causes hypoglycemia, and low prothrombin synthesis increases hemorrhagic disease risk.',
        highlight: 'Hyperbilirubinemia, hypoglycemia, & bleeding'
      },
      {
        letter: 'E',
        term: 'Elimination Problems (Necrotizing Enterocolitis [NEC])',
        description: 'Immature gastrointestinal motility, mucosal barrier weakness, and gut hypoxia make the infant highly vulnerable to Necrotizing Enterocolitis (NEC). Hallmark signs include abdominal distension, feeding intolerance, gastric residuals, and bloody stools.',
        highlight: 'Necrotizing enterocolitis (NEC) & bilious residuals'
      },
      {
        letter: 'S',
        term: 'Sensory-Perceptual (Retinopathy of Prematurity [ROP])',
        description: 'Incompletely vascularized retina exposed to high or fluctuating oxygen tensions develops abnormal neovascular proliferation and fibrous scarring, leading to retinal detachment (Retinopathy of Prematurity - ROP). Auditory deficits from ototoxic drugs are also common.',
        highlight: 'Retinopathy of prematurity (ROP) & oxygen control'
      }
    ],
    clinicalContext: 'Preterm infants (< 37 weeks gestation) require comprehensive multi-system neonatal intensive care. Clinical management focuses on maintaining a neutral thermal environment (incubators / radiant warmers), strict hand hygiene to prevent sepsis, phototherapy for physiological jaundice, trophic breast milk feedings to ward off NEC, and tight oxygen saturation targets (usually 90-95%) to protect retinal vessels.',
    nclexPearls: [
      'The Cold Stress Domino Effect: Hypothermia triggers peripheral vasoconstriction and tachypnea -> increased anaerobic glucose consumption -> rapid hypoglycemia and metabolic acidosis. Always keep the infant warm!',
      'NEC Early Warning Sign: Increasing abdominal circumference, bilious (green) gastric residuals before feedings, lethargy, and gross or occult blood in the stool indicate NEC. Hold feeds immediately and notify the neonatologist.',
      'Target Oxygen Saturation in ROP: Preterm infants on supplemental oxygen must have carefully titrated FiO2 to prevent hyperoxia-induced retinal vasospasm and irreversible blindness.'
    ],
    practiceQuestion: {
      question: 'A nurse in the neonatal intensive care unit (NICU) is assessing a 29-week preterm newborn receiving enteral gavage feedings. Which assessment finding indicates a potential onset of necrotizing enterocolitis (NEC) and requires immediate nursing action?',
      options: [
        'Total serum bilirubin of 5.8 mg/dL with mild facial jaundice.',
        'Persistent axillary temperature of 36.8°C (98.2°F) inside the servo-controlled isolette.',
        'Abdominal distension with a 2.5 cm increase in girth and 4 mL of bilious green gastric aspirate.',
        'Mild acrocyanosis of the bilateral feet during active crying.'
      ],
      correctIndex: 2,
      rationale: 'The "E" in TRIES represents Elimination problems, specifically Necrotizing Enterocolitis (NEC). Hallmark clinical signs include abdominal distension with increasing girth, bilious (green-stained) gastric residuals, feeding intolerance, and occult or visible blood in the stool. The nurse must withhold feedings immediately, place a nasogastric tube to low intermittent suction, and notify the provider.'
    }
  },
  {
    id: 'iud-complications-pains',
    shortCode: 'PAINS',
    title: 'Intrauterine Device (IUD) Complications',
    category: 'maternal',
    categoryName: 'Maternal & Child Nursing',
    summary: 'The essential 5-point patient education and clinical warning signs mnemonic for complications associated with Intrauterine Devices (IUDs).',
    memoryTip: '"PAINS" — Period irregular, Abdominal pain/dyspareunia, Infection, Not feeling well (fever/chills), String missing. Any PAINS require urgent clinical evaluation!',
    highYield: true,
    tags: ['Family Planning', 'Contraception', 'Gynecology', 'Client Teaching'],
    letters: [
      {
        letter: 'P',
        term: 'Period (Menstrual: Late, Spotting, Heavy Bleeding)',
        description: 'A missed or late menstrual period may signify unintended pregnancy or life-threatening ectopic pregnancy. Unusually heavy, prolonged bleeding or severe intermenstrual spotting can indicate IUD displacement, uterine perforation, or adenomyosis.',
        highlight: 'Late period (ectopic risk) or heavy bleeding'
      },
      {
        letter: 'A',
        term: 'Abdominal Pain & Dyspareunia',
        description: 'Severe, sharp, or persistent pelvic cramping, lower abdominal pain, or painful sexual intercourse (dyspareunia). Suggests uterine perforation during insertion, partial expulsion into the cervical canal, or developing pelvic inflammatory disease.',
        highlight: 'Severe pelvic cramping or dyspareunia'
      },
      {
        letter: 'I',
        term: 'Infection (Abnormal Vaginal Discharge)',
        description: 'Unusual, foul-smelling, purulent, or copious yellow-green vaginal discharge. Indicates pelvic inflammatory disease (PID) or endometritis (the highest risk of insertion-related infection occurs within the first 20 days post-placement).',
        highlight: 'Purulent or foul-smelling discharge'
      },
      {
        letter: 'N',
        term: 'Not Feeling Well (Systemic Fever or Chills)',
        description: 'Malaise, generalized myalgias, unexplained rigors, or temperature > 38°C (100.4°F). Signifies ascending pelvic infection, pelvic cellulitis, or systemic bacteremia requiring immediate antimicrobial therapy.',
        highlight: 'Unexplained fever, chills, & malaise'
      },
      {
        letter: 'S',
        term: 'String Missing (Shortened or Lengthened)',
        description: 'The client cannot palpate the IUD monofilament strings, or the strings feel significantly longer or shorter than baseline. Suggests partial expulsion into the vagina or silent perforation through the myometrium into the abdominal cavity.',
        highlight: 'Missing, shortened, or elongated strings'
      }
    ],
    clinicalContext: 'Intrauterine devices (copper [ParaGard] or levonorgestrel-releasing [Mirena/Kyleena]) provide superior long-acting reversible contraception. However, clients must be empowered with self-assessment skills—such as checking strings once a month after menses—and must recognize the "PAINS" warning signs that necessitate immediate clinical assessment and alternative barrier contraception.',
    nclexPearls: [
      'Monthly String Check: Instruct clients to check their IUD strings once monthly after every menstrual period with a clean finger inserted toward the external os.',
      'Missing String Protocol: If strings cannot be located, instruct the client to use a backup barrier method (e.g., condoms) or abstain from sexual intercourse until an in-office exam and pelvic ultrasound confirm the device\'s location.',
      'Ectopic Pregnancy Risk: While IUDs are over 99% effective, if conception does occur with an IUD in place, the relative likelihood of an ectopic pregnancy is significantly increased.'
    ],
    practiceQuestion: {
      question: 'A 24-year-old client who had a levonorgestrel-releasing IUD inserted 2 weeks ago calls the triage nurse reporting inability to feel the IUD strings and mild lower abdominal cramping. What instruction is most appropriate for the nurse to provide?',
      options: [
        '"Perform warm vaginal douches twice daily until your follow-up appointment."',
        '"Use a barrier contraceptive method like condoms and schedule an in-person evaluation."',
        '"Take an over-the-counter NSAID and re-check for the strings in 4 weeks."',
        '"Bear down firmly while sitting on the toilet to assist the strings in descending."'
      ],
      correctIndex: 1,
      rationale: 'A missing string (the "S" in PAINS) suggests that the device may have been expelled unnoticed, displaced into the cervical canal, or perforated the uterine wall. The client must not rely on the IUD for contraception and should immediately use a barrier backup method (condoms) or abstain from intercourse until an office examination and pelvic ultrasound confirm intrauterine placement.'
    }
  },
  {
    id: 'dystocia-causes-3ps',
    shortCode: "The 3 P's",
    title: "Etiology of Dystocia: The 3 P's of Labor Dysfunction",
    category: 'maternal',
    categoryName: 'Maternal & Child Nursing',
    summary: 'The core obstetric triad classifying the underlying biomechanical causes of difficult, prolonged, or obstructed labor (dystocia).',
    memoryTip: '"The 3 P\'s of Labor Dystocia" — Power (uterine contractions & pushing), Passageway (maternal pelvis & birth canal), Passenger (fetal size, presentation, & lie).',
    highYield: true,
    tags: ['Intrapartum', 'Labor & Delivery', 'Obstetric Complications', 'Dystocia'],
    letters: [
      {
        letter: 'P',
        term: 'Power (Uterine Forces & Maternal Pushing)',
        description: 'Primary powers: Ineffective, hypotonic, or hypertonic uterine contractions that fail to achieve progressive cervical effacement and dilation. Secondary powers: Ineffective maternal voluntary bearing-down efforts due to maternal exhaustion, regional epidural motor block, or analgesia.',
        highlight: 'Hypotonic/hypertonic contractions & pushing effort'
      },
      {
        letter: 'P',
        term: 'Passageway (Maternal Pelvis & Birth Canal)',
        description: 'Mechanical impedance caused by the bony pelvis (contracted pelvic inlet/outlet, android or platypelloid architecture) or maternal soft tissues (full distended urinary bladder, cervical edema, large uterine fibroids, or rigid perineal musculature).',
        highlight: 'Pelvic architecture & full bladder obstruction'
      },
      {
        letter: 'P',
        term: 'Passenger (Fetal Size, Presentation, & Lie)',
        description: 'Fetal factors impeding descent through the pelvic canal: Fetal macrosomia (> 4000-4500 g), malpresentation (breech, face, brow, transverse lie), malposition (persistent occiput posterior [OP] producing intense back labor), cephalopelvic disproportion (CPD), or multifetal gestation.',
        highlight: 'Macrosomia, breech, occiput posterior, & CPD'
      }
    ],
    clinicalContext: 'Labor dystocia (arrest of dilation or descent) is the leading indication for primary cesarean delivery. By systematically analyzing the 3 P\'s, labor nurses can pinpoint reversible causes and implement targeted interventions: augmenting "Power" with IV oxytocin or maternal repositioning, removing "Passageway" barriers (e.g., straight catheterization for bladder distension), and managing "Passenger" malpositions (hands-and-knees positioning for occiput posterior).',
    nclexPearls: [
      'Distended Bladder (Passageway): A full maternal bladder is the most frequent and easily correctable soft-tissue obstacle to fetal descent. The nurse should encourage voiding every 2 hours or perform straight catheterization if the bladder is palpated suprapubically.',
      'Occiput Posterior (Passenger): Persistent occiput posterior (OP) causes severe, continuous lower back pain ("back labor"). The nurse should reposition the client into hands-and-knees (all-fours) or lateral Sims position and apply firm sacral counterpressure.',
      'Hypotonic vs. Hypertonic Dysfunction (Power): Hypotonic contractions (infrequent, weak during active labor) are treated with amniotomy and IV oxytocin augmentation; hypertonic contractions (frequent, painful, uncoordinated during latent labor) are treated with therapeutic rest and analgesia.'
    ],
    practiceQuestion: {
      question: 'A laboring primigravida at 5 cm dilation has made no cervical progress for 3 hours despite regular contractions. Upon abdominal palpation, the nurse notes a rounded, fluctuant mass protruding above the maternal symphysis pubis, and the fetal vertex remains at -1 station. What is the nurse\'s priority action?',
      options: [
        'Prepare the client for an immediate emergent cesarean delivery.',
        'Assist the client to void or perform straight catheterization.',
        'Increase the infusion rate of intravenous oxytocin.',
        'Administer a prescribed subcutaneous dose of terbutaline.'
      ],
      correctIndex: 1,
      rationale: 'A rounded, fluctuant suprapubic mass indicates a distended urinary bladder, which acts as a soft-tissue obstruction within the Passageway (one of the 3 P\'s of dystocia). A full bladder elevates the uterus and physically impedes fetal descent into the pelvis. Emptying the bladder clears the passageway and frequently allows labor progress to resume without medications or surgery.'
    }
  },

  // ==========================================
  // MEDICAL & SURGICAL NURSING
  // ==========================================
  {
    id: 'hypoxia-signs-rat-bed',
    shortCode: 'RAT vs BED',
    title: 'Early vs. Late Signs of Hypoxia',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Distinguishing early subtle clinical warning signs of hypoxemia from late, life-threatening decompensation.',
    memoryTip: '"Early RAT is restless; Late BED is bradycardic." Restlessness is ALWAYS the earliest sign of hypoxia!',
    highYield: true,
    tags: ['Respiratory', 'Oxygenation', 'Emergency'],
    letters: [
      {
        letter: 'R',
        term: 'Restlessness (Early Sign)',
        description: 'Agitation, apprehension, irritability, and unexplained anxiety caused by early cerebral oxygen deprivation.',
        highlight: 'Earliest indicator of hypoxia!'
      },
      {
        letter: 'A',
        term: 'Anxiety (Early Sign)',
        description: 'Sense of impending doom, fidgeting, and altered mental status as sympathetic nervous system activates.',
        highlight: 'Sympathetic arousal'
      },
      {
        letter: 'T',
        term: 'Tachycardia / Tachypnea (Early Sign)',
        description: 'Increased heart rate and respiratory rate as compensatory mechanisms to circulate oxygenated blood.',
        highlight: 'Compensatory vitals rise'
      },
      {
        letter: 'B',
        term: 'Bradycardia (Late Sign)',
        description: 'Heart rate slows down drastically as cardiac myocardium becomes exhausted and acidotic.',
        highlight: 'Ominous sign of arrest'
      },
      {
        letter: 'E',
        term: 'Extreme Restlessness to Stupor (Late Sign)',
        description: 'Progressing from severe agitation to confusion, lethargy, stupor, and unresponsiveness.',
        highlight: 'Profound neurological depression'
      },
      {
        letter: 'D',
        term: 'Dyspnea & Cyanosis (Late Sign)',
        description: 'Severe air hunger, accessory muscle retraction, and central cyanosis (blue lips, tongue, and mucous membranes).',
        highlight: 'Central cyanosis = Late!'
      }
    ],
    clinicalContext: 'Cyanosis is a LATE and unreliable sign of hypoxia, especially in clients with anemia or dark skin tones (where buccal mucosa, conjunctiva, and nailbeds must be examined).',
    nclexPearls: [
      'Elderly Confusion: In older adults, new-onset confusion or acute restlessness is the primary presentation of hypoxemia or pneumonia.',
      'Pediatrics (FINES): Feeding difficulty, Inspiratory stridor, Nares flaring, Expiratory grunting, Sternal retractions.'
    ],
    practiceQuestion: {
      question: 'A postoperative client with a history of asthma becomes increasingly restless, fidgety, and irritable. Pulse oximetry reads 91% on room air. What is the priority nursing action?',
      options: [
        'Administer a prescribed PRN sedative to reduce anxiety.',
        'Elevate the head of the bed and apply supplemental oxygen via nasal cannula.',
        'Place the client in Trendelenburg position and call code blue.',
        'Document the restlessness as typical postoperative emergence delirium.'
      ],
      correctIndex: 1,
      rationale: 'Restlessness is the cardinal earliest sign of hypoxia (R in RAT). The priority is airway and breathing: elevating the head of the bed (Fowler position) optimizes lung expansion, and administering supplemental oxygen addresses hypoxemia.'
    }
  },
  {
    id: 'cancer-signs-caution',
    shortCode: 'CAUTION',
    title: 'The 7 Warning Signs of Cancer',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The American Cancer Society\'s classic screening mnemonic for early detection of malignancy.',
    memoryTip: 'Exercise CAUTION when assessing persistent, unexplained physiological changes!',
    highYield: true,
    tags: ['Oncology', 'Health Screening', 'Early Detection'],
    letters: [
      {
        letter: 'C',
        term: 'Change in bowel or bladder habits',
        description: 'Persistent constipation, diarrhea, pencil-thin stools (colorectal cancer), or hematuria and urinary frequency (bladder/prostate cancer).',
        highlight: 'Bowel / bladder changes'
      },
      {
        letter: 'A',
        term: 'A sore that does not heal',
        description: 'Ulcerations in oral cavity (leukoplakia/oral cancer) or non-healing cutaneous sores (basal or squamous cell carcinoma).',
        highlight: 'Non-healing skin / oral lesion'
      },
      {
        letter: 'U',
        term: 'Unusual bleeding or discharge',
        description: 'Postmenopausal vaginal bleeding (endometrial cancer), hemoptysis (lung cancer), blood in stool/melena, or nipple discharge.',
        highlight: 'Postmenopausal bleeding = Red Flag'
      },
      {
        letter: 'T',
        term: 'Thickening or lump',
        description: 'Painless, hard, fixed solitary mass in the breast, testicle, lymph node, or soft tissue.',
        highlight: 'Painless hard fixed mass'
      },
      {
        letter: 'I',
        term: 'Indigestion or difficulty swallowing',
        description: 'Chronic dysphagia, persistent gastric fullness, or early satiety (esophageal or gastric cancer).',
        highlight: 'Dysphagia / Early satiety'
      },
      {
        letter: 'O',
        term: 'Obvious change in wart or mole',
        description: 'Changes in size, color, shape, border, or elevation of pigmented skin lesions (malignant melanoma - ABCDE).',
        highlight: 'Pigmented lesion changes'
      },
      {
        letter: 'N',
        term: 'Nagging cough or hoarseness',
        description: 'Persistent dry cough lasting > 3 weeks, voice changes, or hoarseness (laryngeal or bronchogenic carcinoma).',
        highlight: 'Cough / hoarseness > 3 weeks'
      }
    ],
    clinicalContext: 'Any single sign lasting longer than 2 weeks without clear benign explanation requires prompt diagnostic workup (biopsy, endoscopy, imaging). Postmenopausal bleeding is always treated as endometrial cancer until proven otherwise.',
    nclexPearls: [
      'Painless Hematuria: Painless gross hematuria is the most common early sign of bladder cancer.',
      'Postmenopausal Bleeding: A postmenopausal woman with ANY vaginal bleeding must undergo an endometrial biopsy immediately.'
    ],
    practiceQuestion: {
      question: 'A 62-year-old postmenopausal client tells the clinic nurse she noticed light pink vaginal spotting for the past 3 days. What is the most important response by the nurse?',
      options: [
        '"Light spotting is a normal part of hormone fluctuations as you age."',
        '"Postmenopausal vaginal bleeding requires prompt evaluation by your healthcare provider."',
        '"Increase your intake of calcium and vitamin D to support pelvic bone density."',
        '"You should use a vaginal lubricant and avoid strenuous physical activity."'
      ],
      correctIndex: 1,
      rationale: 'Unusual bleeding (U in CAUTION), specifically any postmenopausal vaginal bleeding, is a critical warning sign for endometrial (uterine) carcinoma and mandates immediate diagnostic evaluation.'
    }
  },
  {
    id: 'melanoma-screening-abcde',
    shortCode: 'ABCDE',
    title: 'Malignant Melanoma Assessment',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The dermatological criteria used to screen cutaneous lesions for high suspicion of melanoma.',
    memoryTip: 'Asymmetry, Border, Color, Diameter, Evolving.',
    highYield: true,
    tags: ['Integumentary', 'Oncology', 'Dermatology'],
    letters: [
      {
        letter: 'A',
        term: 'Asymmetry',
        description: 'One half of the mole or pigmented lesion does not match the other half in shape or size.',
        highlight: 'Non-matching halves'
      },
      {
        letter: 'B',
        term: 'Border Irregularity',
        description: 'The edges are irregular, scalloped, notched, ragged, or poorly defined.',
        highlight: 'Scalloped or notched borders'
      },
      {
        letter: 'C',
        term: 'Color Variation',
        description: 'Non-uniform pigmentation; shades of tan, dark brown, jet black, or areas of red, white, or blue within the same lesion.',
        highlight: 'Multicolor / variegated'
      },
      {
        letter: 'D',
        term: 'Diameter > 6 mm',
        description: 'Lesion size is greater than 6 mm (approximate diameter of a standard pencil eraser).',
        highlight: '> 6 mm (pencil eraser size)'
      },
      {
        letter: 'E',
        term: 'Evolving / Elevation',
        description: 'The lesion is changing over time in size, shape, surface elevation, bleeding, itching, or crusting. The single most important factor!',
        highlight: 'Any change over time'
      }
    ],
    clinicalContext: 'Melanoma is the deadliest form of skin cancer due to rapid metastatic potential. Risk factors include light skin, fair hair, blue eyes, excessive sun/tanning bed exposure, and severe blistering sunburns in childhood.',
    nclexPearls: [
      'Prevention: Broad-spectrum sunscreen SPF ≥ 30, reapplied every 2 hours and immediately after swimming.',
      'Peak Sun Hours: Avoid sun exposure between 10:00 AM and 4:00 PM.'
    ],
    practiceQuestion: {
      question: 'Which skin assessment finding on an adult client back requires the most immediate referral to a dermatologist?',
      options: [
        'A round, uniformly light-brown 4 mm macule with smooth, regular borders.',
        'A raised 3 mm flesh-colored papule on the chest that has remained unchanged for 10 years.',
        'An asymmetrical 8 mm dark lesion with variegated black and blue hues and irregular notched borders.',
        'Multiple small yellowish-tan freckles across the bridge of the nose and cheeks.'
      ],
      correctIndex: 2,
      rationale: 'The lesion in option 3 meets multiple ABCDE criteria: Asymmetry, Border irregularity, Color variation (black and blue), and Diameter > 6 mm, indicating high probability of malignant melanoma.'
    }
  },
  {
    id: 'parkinsons-disease-trap',
    shortCode: 'TRAP',
    title: 'Parkinson\'s Cardinal Motor Symptoms',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The hallmark tetrad of motor manifestations caused by dopamine depletion in the substantia nigra.',
    memoryTip: 'Trapped by Parkinson\'s: Tremor, Rigidity, Akinesia, Postural Instability.',
    highYield: true,
    tags: ['Neurology', 'Movement Disorders', 'Gerontology'],
    letters: [
      {
        letter: 'T',
        term: 'Tremor (Resting)',
        description: 'Classic "pill-rolling" resting tremor of the hands and fingers. Present at rest, decreases with purposeful movement and during sleep.',
        highlight: 'Pill-rolling resting tremor'
      },
      {
        letter: 'R',
        term: 'Rigidity',
        description: 'Increased muscle resistance to passive motion described as "cogwheel" (jerky, ratchet-like) or "lead-pipe" rigidity in extremities.',
        highlight: 'Cogwheel / lead-pipe rigidity'
      },
      {
        letter: 'A',
        term: 'Akinesia / Bradykinesia',
        description: 'Extreme slowness of movement. Manifests as masked blank facial expression, infrequent blinking, soft monotone voice, and difficulty initiating motion.',
        highlight: 'Mask-like facies & slow gait'
      },
      {
        letter: 'P',
        term: 'Postural Instability',
        description: 'Stooped, forward-leaning posture with shuffling, propulsive gait (festinating gait) and impaired balance, resulting in significant fall risk.',
        highlight: 'Shuffling gait & fall hazard'
      }
    ],
    clinicalContext: 'Treated with Carbidopa-Levodopa. Levodopa converts to dopamine in the brain; Carbidopa prevents peripheral breakdown of Levodopa. High-protein meals can impair medication absorption.',
    nclexPearls: [
      'Gait Training: Teach the client to march in place, lift toes, look straight ahead rather than at feet, and imagine stepping over an imaginary line to overcome "freezing" episodes.',
      'Diet Tip: Space protein intake evenly throughout the day, avoiding large protein loads during morning medication doses.'
    ],
    practiceQuestion: {
      question: 'A client with Parkinson\'s disease experiences "freezing" of gait when attempting to walk through doorways. What strategy should the nurse teach the client to overcome this?',
      options: [
        'Push the wheelchair forward quickly to force momentum.',
        'Rock gently side to side or visualize stepping over an imaginary line on the floor.',
        'Take smaller, rapid shuffling steps while looking down at the shoes.',
        'Drink cold liquids immediately when feeling frozen.'
      ],
      correctIndex: 1,
      rationale: 'Clients experiencing motor freezing can initiate stepping by using sensory cues, such as rocking side-to-side, marching in place, or visualizing stepping over an imaginary obstacle or laser line on the floor.'
    }
  },
  {
    id: 'myocardial-infarction-mona',
    shortCode: 'MONA (O-A-N-M)',
    title: 'Acute Myocardial Infarction Protocol',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The 4 primary emergent medications for acute coronary syndrome, given in prioritized clinical sequence.',
    memoryTip: 'MONA is the classic acronym, but give it in order: O-A-N-M (Oxygen, Aspirin, Nitro, Morphine)!',
    highYield: true,
    tags: ['Cardiovascular', 'Emergency', 'Pharmacology'],
    letters: [
      {
        letter: 'O',
        term: 'Oxygen',
        description: 'Indicated if SpO2 < 90% or client is in respiratory distress. Optimizes myocardial tissue oxygen delivery without causing hyperoxic vasoconstriction.',
        highlight: 'Give if SpO2 < 90%'
      },
      {
        letter: 'A',
        term: 'Aspirin (162 - 325 mg)',
        description: 'Antiplatelet agent chewed immediately to prevent further coronary platelet aggregation and thrombus propagation.',
        highlight: 'Chew 162-325 mg immediately'
      },
      {
        letter: 'N',
        term: 'Nitroglycerin (Sublingual)',
        description: 'Potent coronary and systemic vasodilator that reduces preload, afterload, and myocardial oxygen demand. Given 1 tab q5min x 3 doses.',
        highlight: 'Sublingual q5min x 3 doses'
      },
      {
        letter: 'M',
        term: 'Morphine Sulfate (IV)',
        description: 'Indicated for refractory chest pain unrelieved by nitroglycerin. Decreases pain, sympathetic stimulation, preload, and myocardial workload.',
        highlight: 'IV for refractory chest pain'
      }
    ],
    clinicalContext: 'Contraindication Alert: Never give Nitroglycerin or Morphine if systolic blood pressure is < 90 mmHg or if the client took phosphodiesterase-5 inhibitors (Sildenafil/Tadalafil) in the past 24-48 hours (causes fatal refractory hypotension).',
    nclexPearls: [
      'Diagnostic Gold Standard: Cardiac Troponin I and T are the most sensitive and specific biomarkers for myocardial necrosis.',
      'STEMI Door-to-Balloon Time: Goal is percutaneous coronary intervention (PCI) within 90 minutes of hospital arrival.'
    ],
    practiceQuestion: {
      question: 'A client with crushing substernal chest pain is being evaluated for acute myocardial infarction. Which assessment finding is an absolute contraindication to administering sublingual nitroglycerin?',
      options: [
        'Blood pressure 144/88 mmHg and pulse 92 bpm.',
        'ST-segment elevation in leads II, III, and aVF with BP 130/80 mmHg.',
        'Use of sildenafil (Viagra) 12 hours ago for erectile dysfunction.',
        'History of chronic acid reflux taking omeprazole daily.'
      ],
      correctIndex: 2,
      rationale: 'Phosphodiesterase-5 inhibitors (such as sildenafil or tadalafil) taken within 24 to 48 hours cause severe, profound, refractory hypotension when combined with nitrates, making concurrent administration an absolute contraindication.'
    }
  },
  {
    id: 'hypocalcemia-cats',
    shortCode: 'CATS',
    title: 'Signs & Symptoms of Hypocalcemia',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Clinical manifestations of low serum calcium (< 8.5 mg/dL) causing neuromuscular excitability.',
    memoryTip: '"CATS go Numb" — Convulsions, Arrhythmias, Tetany, Spasms. Look for Chvostek\'s & Trousseau\'s signs!',
    highYield: true,
    tags: ['Electrolytes', 'Endocrine', 'Thyroidectomy'],
    letters: [
      {
        letter: 'C',
        term: 'Convulsions / Seizures',
        description: 'Increased neuronal membrane permeability to sodium causes spontaneous repetitive firing and generalized seizures.',
        highlight: 'Neuromuscular irritability'
      },
      {
        letter: 'A',
        term: 'Arrhythmias (Prolonged QT)',
        description: 'Cardiac dysrhythmias, prolonged ST segment, and prolonged QT interval, predisposing to fatal Torsades de Pointes.',
        highlight: 'Prolonged QT interval'
      },
      {
        letter: 'T',
        term: 'Tetany & Trousseau\'s Sign',
        description: 'Painful sustained muscle contractions and carpopedal spasm induced by inflating a BP cuff above systolic for 3 minutes.',
        highlight: 'Trousseau: Carpopedal spasm'
      },
      {
        letter: 'S',
        term: 'Spasms, Stridor & Chvostek\'s',
        description: 'Laryngeal stridor (airway obstruction hazard!) and facial nerve twitching elicited by tapping anterior to the earlobe.',
        highlight: 'Chvostek: Facial twitch & Stridor'
      }
    ],
    clinicalContext: 'Commonly occurs following total thyroidectomy due to accidental excision or trauma to the parathyroid glands. Normal calcium is 8.5 - 10.5 mg/dL. Emergency antidote is IV CALCIUM GLUCONATE.',
    nclexPearls: [
      'Post-Thyroidectomy Bedside Equipment: Must keep an emergency tracheostomy tray, suction, oxygen, and IV Calcium Gluconate at the bedside!',
      'Circumoral Paresthesia: Numbness and tingling around the mouth, lips, and fingertips are the earliest subjective symptoms.'
    ],
    practiceQuestion: {
      question: 'A client 12 hours post-subtotal thyroidectomy reports tingling around the lips and fingers. When taking the blood pressure, the client hand undergoes sudden carpal spasm. How should the nurse document this sign?',
      options: [
        'Positive Kernig sign indicating meningeal irritation.',
        'Positive Trousseau sign indicating hypocalcemia.',
        'Positive Chvostek sign indicating hypokalemia.',
        'Positive Babinski reflex indicating motor neuron disease.'
      ],
      correctIndex: 1,
      rationale: 'Carpal spasm elicited by inflating a blood pressure cuff above systolic pressure is a positive Trousseau sign, a hallmark manifestation of hypocalcemia resulting from accidental parathyroid damage during thyroid surgery.'
    }
  },
  {
    id: 'hyperkalemia-murder',
    shortCode: 'MURDER',
    title: 'Signs & Symptoms of Hyperkalemia',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'High serum potassium (> 5.0 mEq/L) causing deadly cardiac conduction disturbances and muscle weakness.',
    memoryTip: 'Potassium can MURDER the heart! Watch out for tall peaked T-waves!',
    highYield: true,
    tags: ['Electrolytes', 'Renal', 'ECG Changes'],
    letters: [
      {
        letter: 'M',
        term: 'Muscle Weakness',
        description: 'Ascending muscle weakness, flaccid paralysis, and loss of muscle tone as resting membrane potential remains depolarized.',
        highlight: 'Ascending flaccid paralysis'
      },
      {
        letter: 'U',
        term: 'Urine (Oliguria or Anuria)',
        description: 'Often caused by acute kidney injury or chronic renal failure where the kidneys cannot excrete excess potassium.',
        highlight: 'Renal impairment cause'
      },
      {
        letter: 'R',
        term: 'Respiratory Distress',
        description: 'Weakness and paralysis of respiratory muscles (diaphragm and intercostals) leading to hypoventilation and arrest.',
        highlight: 'Diaphragm paralysis risk'
      },
      {
        letter: 'D',
        term: 'Decreased Cardiac Contractility',
        description: 'Bradycardia, hypotension, and impaired cardiac output.',
        highlight: 'Bradycardia & hypotension'
      },
      {
        letter: 'E',
        term: 'ECG Changes (Tall Peaked T Waves)',
        description: 'Tall, tented, peaked T waves -> prolonged PR interval -> widening QRS -> sine wave -> ventricular fibrillation or asystole.',
        highlight: 'Tall peaked T waves & wide QRS'
      },
      {
        letter: 'R',
        term: 'Reflexes (Hyperactive then Flaccid)',
        description: 'Hyperactive deep tendon reflexes initially, progressing to complete flaccidity and paresthesias.',
        highlight: 'Hyperactive DTRs progressing to none'
      }
    ],
    clinicalContext: 'Never give Potassium IV Push — it causes immediate fatal cardiac arrest! Emergency stabilization of hyperkalemia with ECG changes: 1. IV Calcium Gluconate (protects myocardium); 2. Regular Insulin + Dextrose 50% (shifts K+ into cells); 3. Sodium Polystyrene Sulfonate (Kayexalate) or hemodialysis (removes K+ from body).',
    nclexPearls: [
      'Membrane Stabilizer: Calcium gluconate does NOT lower serum potassium; it temporarily stabilizes cardiac cell membranes to prevent lethal arrhythmias.',
      'Potassium Sparing Diuretics: Spironolactone can cause hyperkalemia; caution when combined with ACE inhibitors (-prils).'
    ],
    practiceQuestion: {
      question: 'A client with end-stage renal disease has a serum potassium of 6.9 mEq/L and telemetry shows tall, peaked T waves and a widened QRS. Which medication should the nurse administer first?',
      options: [
        'Sodium polystyrene sulfonate (Kayexalate) orally.',
        'Intravenous Calcium Gluconate.',
        'Regular insulin with 50% Dextrose intravenously.',
        'Spironolactone 25 mg orally.'
      ],
      correctIndex: 1,
      rationale: 'While insulin and Kayexalate lower potassium levels, IV Calcium Gluconate is the immediate PRIORITY when cardiac conduction abnormalities (tall peaked T waves, widened QRS) exist because it immediately stabilizes myocardial cell membranes, preventing fatal arrhythmias.'
    }
  },
  {
    id: 'cranial-nerves-names-functions',
    shortCode: 'CN I - XII',
    title: 'The 12 Cranial Nerves: Names & Types',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The classic mnemonics for memorizing the names and sensory/motor functions of all 12 cranial nerves.',
    memoryTip: 'Names: "On Old Olympus Towering Top, A Fin And German Viewed Some Hops." Types: "Some Say Marry Money, But My Brother Says Big Brains Matter More."',
    highYield: true,
    tags: ['Neurology', 'Anatomy', 'Cranial Nerves'],
    letters: [
      {
        letter: 'I',
        term: 'CN I: Olfactory',
        description: 'Smell identification (coffee, vanilla). Tested one nostril at a time.',
        highlight: 'Sensory (Smell)'
      },
      {
        letter: 'II',
        term: 'CN II: Optic',
        description: 'Visual acuity (Snellen chart) and visual fields (confrontation test).',
        highlight: 'Sensory (Vision)'
      },
      {
        letter: 'III',
        term: 'CN III: Oculomotor',
        description: 'Extraocular eye movements, pupil constriction, upper eyelid elevation.',
        highlight: 'Motor (Pupils & EOM)'
      },
      {
        letter: 'IV',
        term: 'CN IV: Trochlear',
        description: 'Down and inward eye movement (superior oblique muscle).',
        highlight: 'Motor (Down & In)'
      },
      {
        letter: 'V',
        term: 'CN V: Trigeminal',
        description: 'Sensory: Corneal reflex, facial sensations. Motor: Mastication (chewing).',
        highlight: 'Both (Chewing & Face)'
      },
      {
        letter: 'VI',
        term: 'CN VI: Abducens',
        description: 'Lateral eye movement (lateral rectus muscle).',
        highlight: 'Motor (Lateral Gaze)'
      },
      {
        letter: 'VII',
        term: 'CN VII: Facial',
        description: 'Motor: Facial expressions (smile, puff cheeks). Sensory: Taste anterior 2/3 tongue. Damaged in Bell palsy.',
        highlight: 'Both (Expressions & Taste)'
      },
      {
        letter: 'VIII',
        term: 'CN VIII: Vestibulocochlear',
        description: 'Acoustic / Hearing (whisper test) and balance / vestibular function.',
        highlight: 'Sensory (Hearing & Balance)'
      },
      {
        letter: 'IX',
        term: 'CN IX: Glossopharyngeal',
        description: 'Taste posterior 1/3 tongue, swallowing, gag reflex.',
        highlight: 'Both (Swallowing & Gag)'
      },
      {
        letter: 'X',
        term: 'CN X: Vagus',
        description: 'Parasympathetic visceral function, vocal cords, palate elevation, gag reflex ("say ahh").',
        highlight: 'Both (Parasympathetic & Palate)'
      },
      {
        letter: 'XI',
        term: 'CN XI: Accessory (Spinal)',
        description: 'Trapezius and sternocleidomastoid strength (shoulder shrug, turning head against resistance).',
        highlight: 'Motor (Shoulder Shrug)'
      },
      {
        letter: 'XII',
        term: 'CN XII: Hypoglossal',
        description: 'Tongue movement and speech articulation (stick out tongue midline).',
        highlight: 'Motor (Tongue Midline)'
      }
    ],
    clinicalContext: 'Testing CN IX (Glossopharyngeal) and CN X (Vagus) together ensures a client has a protective gag and swallow reflex before initiating oral intake post-endoscopy or stroke.',
    nclexPearls: [
      'Dysphagia / Aspiration: Damage to CN IX and X creates high risk for pulmonary aspiration.',
      'Bell Palsy: Unilateral facial droop without extremity weakness indicates Cranial Nerve VII lesion.'
    ],
    practiceQuestion: {
      question: 'Following an upper endoscopy (EGD) with local pharyngeal anesthesia, what is the priority assessment before offering the client water?',
      options: [
        'Check for presence of bowel sounds in all 4 quadrants.',
        'Assess gag reflex and ability to swallow safely (Cranial Nerves IX and X).',
        'Verify that the client blood pressure is back to baseline.',
        'Evaluate shoulder shrug strength against manual resistance (Cranial Nerve XI).'
      ],
      correctIndex: 1,
      rationale: 'Topical pharyngeal anesthesia temporarily abolishes the protective gag and swallowing reflexes mediated by cranial nerves IX (Glossopharyngeal) and X (Vagus). The nurse must verify return of the gag reflex prior to administering oral fluids to prevent pulmonary aspiration.'
    }
  },
  {
    id: 'body-systems-mr-dice-runs',
    shortCode: 'MR DICE RUNS',
    title: 'Human Body Systems: Complete Organ Overview',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'A foundational 10-system anatomy and medical-surgical framework organizing the major human organ systems for systematic head-to-toe clinical assessment.',
    memoryTip: '"MR DICE RUNS" — Muscle, Respiratory, Digestive, Integumentary, Circulatory, Endocrine, Reproductive, Urinary, Nervous, Skeletal. Roll the dice on comprehensive systemic assessment!',
    highYield: true,
    tags: ['Anatomy & Physiology', 'Comprehensive Assessment', 'Organ Systems', 'Head-to-Toe'],
    letters: [
      {
        letter: 'M',
        term: 'Muscular System',
        description: 'Facilitates voluntary body movement, biomechanical stability, posture maintenance, and thermogenesis. Encompasses skeletal, smooth, and cardiac muscular tissues.',
        highlight: 'Movement, posture, & thermogenesis'
      },
      {
        letter: 'R',
        term: 'Respiratory System',
        description: 'Facilitates pulmonary ventilation, external alveolar gas exchange (oxygen uptake and carbon dioxide release), systemic acid-base balance, and vocal phonation.',
        highlight: 'Alveolar gas exchange & acid-base regulation'
      },
      {
        letter: 'D',
        term: 'Digestive System',
        description: 'Performs mechanical processing, chemical enzymatic hydrolysis, nutrient and water absorption, and elimination of solid alimentary waste products.',
        highlight: 'Hydrolysis, absorption, & solid elimination'
      },
      {
        letter: 'I',
        term: 'Integumentary System',
        description: 'The body\'s primary physical, chemical, and biological barrier against environmental pathogens, ultraviolet radiation, and water loss; mediates perspirative cooling and Vitamin D synthesis.',
        highlight: 'Barrier defense, thermoregulation, & Vitamin D'
      },
      {
        letter: 'C',
        term: 'Circulatory System',
        description: 'Cardiovascular distribution network (heart, arterial tree, capillary beds, and venous capacitance) providing systemic tissue perfusion, oxygen transport, and metabolic clearance.',
        highlight: 'Tissue perfusion & hemodynamic transport'
      },
      {
        letter: 'E',
        term: 'Endocrine System',
        description: 'Glandular regulatory axis (hypothalamus, pituitary, thyroid, adrenals, islets of Langerhans, gonads) secreting circulating hormones to coordinate cellular metabolism and homeostasis.',
        highlight: 'Hormonal regulation & homeostasis'
      },
      {
        letter: 'R',
        term: 'Reproductive System',
        description: 'Gonads, gametogenic pathways, and accessory organs producing haploid gametes (ova and spermatozoa), sex hormones, and supporting fetal gestation and parturition.',
        highlight: 'Gamete generation, sex steroids, & gestation'
      },
      {
        letter: 'U',
        term: 'Urinary System',
        description: 'Renal, ureteral, and vesical apparatus filtering blood plasma to regulate fluid volume, electrolytes, acid-base equilibrium, blood pressure, and excretion of nitrogenous wastes.',
        highlight: 'Plasma ultrafiltration & fluid-electrolyte balance'
      },
      {
        letter: 'N',
        term: 'Nervous System',
        description: 'Central and peripheral neural structures (encephalon, spinal cord, cranial/peripheral nerves) coordinating rapid sensory transduction, cognitive processing, and autonomic motor impulses.',
        highlight: 'Neural integration & bioelectrical signaling'
      },
      {
        letter: 'S',
        term: 'Skeletal System',
        description: 'Osteoarticular framework of 206 bones, cartilaginous plates, and ligamentous capsules providing structural leverage, vital visceral protection, mineral storage, and hematopoiesis.',
        highlight: 'Structural support & marrow hematopoiesis'
      }
    ],
    clinicalContext: 'In Medical & Surgical nursing, conducting a comprehensive Review of Systems (ROS) requires a methodical checklist. Pathological insults (such as sepsis, septic shock, or multiple organ dysfunction syndrome [MODS]) trigger sequential system failures. Recognizing how body systems interrelate enables nurses to intervene before irreversible decompensation occurs.',
    nclexPearls: [
      'Priority System Triad: On NCLEX clinical prioritization, the ABC systems—Circulatory (C), Respiratory (R), and Nervous (N)—always take precedence over other body systems.',
      'Cross-System Pathology: Renal (Urinary) failure causes secondary Circulatory failure (fluid overload and left ventricular hypertrophy), Skeletal failure (renal osteodystrophy and calcium-phosphate imbalances), and Endocrine failure (erythropoietin deficiency and anemia).',
      'Systemic Compensation: In metabolic acidosis (Digestive/Urinary), the Respiratory system immediately compensates via deep, rapid breathing (Kussmaul respirations) to blow off carbon dioxide.'
    ],
    practiceQuestion: {
      question: 'A medical-surgical nurse is admitting a client with end-stage renal disease (ESRD). The client has a hemoglobin of 7.9 g/dL, blood pressure of 172/98 mmHg, and generalized severe pruritus with excoriations. Which body systems are directly exhibiting clinical manifestations of this disease process?',
      options: [
        'Circulatory, Endocrine, and Integumentary systems',
        'Muscular, Skeletal, and Reproductive systems only',
        'Respiratory and Digestive systems only',
        'Nervous and Muscular systems only'
      ],
      correctIndex: 0,
      rationale: 'End-stage renal disease directly impacts multiple interrelated body systems: the Endocrine system (impaired erythropoietin production leading to severe normocytic anemia), the Circulatory system (sodium and fluid retention causing hypertension and volume overload), and the Integumentary system (uremic toxin accumulation causing pruritus and uremic frost).'
    }
  },
  {
    id: 'cholelithiasis-risk-four-fs',
    shortCode: "The 4 F's",
    title: "Cholelithiasis Risk Factors: The 4 F's of Gallstones",
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The classic clinical epidemiological profile characterizing individuals at high risk for cholesterol gallstone formation (cholelithiasis).',
    memoryTip: '"The 4 F\'s of Gallstones" — Fat, Forty, Female, Fertile. Estrogen increases biliary cholesterol secretion, while obesity supersaturates bile!',
    highYield: true,
    tags: ['Gastrointestinal', 'Hepatobiliary', 'Risk Assessment', 'Surgical Prep'],
    letters: [
      {
        letter: 'F',
        term: 'Fat (Obesity / BMI ≥ 30)',
        description: 'Adiposity and metabolic syndrome accelerate hepatic cholesterol synthesis and biliary secretion, supersaturating bile. High cholesterol-to-phospholipid ratios lead to microcrystal precipitation and gallstone formation.',
        highlight: 'Obesity & cholesterol-supersaturated bile'
      },
      {
        letter: 'F',
        term: 'Forty (Age ≥ 40 Years)',
        description: 'Risk increases with advancing age due to diminished hepatic conversion of cholesterol into bile acids, reduced gallbladder contractile responsiveness to cholecystokinin (CCK), and prolonged lithogenic exposure.',
        highlight: 'Age ≥ 40 & decreased gallbladder motility'
      },
      {
        letter: 'F',
        term: 'Female (Female Gender)',
        description: 'Biological females experience more than double the incidence of cholelithiasis compared to males. Estrogen stimulates hepatic lipoprotein receptors, significantly increasing cholesterol secretion into bile.',
        highlight: 'Estrogen elevates biliary cholesterol'
      },
      {
        letter: 'F',
        term: 'Fertile (Multiparity / Estrogen Exposure)',
        description: 'Multiparity, pregnancy, oral contraceptive pills (OCPs), and hormone replacement therapy (HRT) elevate circulating progesterone and estrogen levels. Progesterone suppresses gallbladder emptying, promoting prolonged biliary stasis.',
        highlight: 'Multiparity, pregnancy, & oral contraceptives'
      }
    ],
    clinicalContext: 'Cholelithiasis affects up to 20% of adults. Symptomatic gallstones cause acute biliary colic—sudden, severe right upper quadrant (RUQ) or epigastric pain radiating to the right infrascapular region or shoulder, typically precipitated by high-fat meals. Complete cystic duct obstruction produces acute cholecystitis with fever, leukocytosis, and positive Murphy\'s sign.',
    nclexPearls: [
      'Postprandial Biliary Colic: Biliary colic typically peaks 30 minutes to 2 hours following fatty meals because ingested lipids trigger cholecystokinin (CCK) release, causing the gallbladder to contract forcefully against an obstructed cystic duct.',
      "Murphy's Sign: Inspiratory arrest elicited upon deep palpation of the right upper quadrant beneath the costal margin is pathognomonic for acute cholecystitis.",
      'Post-Cholecystectomy Dietary Teaching: Clients must follow a low-fat diet for 4 to 6 weeks postoperatively, gradually reintroducing healthy fats as the liver and common bile duct adapt to continuous bile drainage.'
    ],
    practiceQuestion: {
      question: 'A 42-year-old multiparous female with a BMI of 33 kg/m² presents to the emergency department with severe, colicky right upper quadrant abdominal pain radiating to her right shoulder after eating fried chicken. Which diagnostic evaluation should the nurse prepare the client for first?',
      options: [
        'Colonoscopy with biopsy',
        'Abdominal ultrasound of the right upper quadrant',
        'Barium swallow study',
        'Serum cardiac troponin and 12-lead ECG'
      ],
      correctIndex: 1,
      rationale: 'The client presents with the classic "4 F\'s" profile for cholelithiasis (Female, Forty, Fertile, Fat). Right upper quadrant pain radiating to the right scapula triggered by fatty food intake is classic for acute biliary colic/cholecystitis. A right upper quadrant abdominal ultrasound is the gold standard, non-invasive initial imaging modality to visualize gallstones and gallbladder wall thickening.'
    }
  },
  {
    id: 'minor-bleeding-signs-beep',
    shortCode: 'BEEP',
    title: 'Signs of Minor Bleeding & Thrombocytopenia',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'A vital bedside nursing assessment mnemonic to quickly detect early, subtle signs of mucocutaneous bleeding in clients on anticoagulants or with thrombocytopenia.',
    memoryTip: '"BEEP" — Bleeding gums, Ecchymoses, Epistaxis, Petechiae. Sound the alarm on minor bleeds before they become major hemorrhagic shocks!',
    highYield: true,
    tags: ['Hematology', 'Anticoagulation Safety', 'Medication Safety', 'Bleeding Precautions'],
    letters: [
      {
        letter: 'B',
        term: 'Bleeding Gums (Gingival Hemorrhage)',
        description: 'Spontaneous oozing or bleeding after oral hygiene. Indicates impaired primary hemostasis and capillary fragility. Instruct the client to use soft-bristled toothbrushes, avoid flossing, and avoid alcohol-containing mouthwashes.',
        highlight: 'Gingival bleeding & soft-bristle toothbrush'
      },
      {
        letter: 'E',
        term: 'Ecchymoses (Bruises)',
        description: 'Large subcutaneous extravasations of blood (> 1 cm) occurring spontaneously or after minor bumping. Routinely inspect dependent extremities, pressure points, and venipuncture sites for expanding hematomas.',
        highlight: 'Spontaneous subcutaneous bruising'
      },
      {
        letter: 'E',
        term: 'Epistaxis (Nosebleed)',
        description: 'Unilateral or bilateral bleeding from the nasal Kiesselbach plexus. Position client sitting upright, leaning forward (never tilt backward to avoid swallowing blood and aspiration), and apply steady compression for 10-15 minutes.',
        highlight: 'Anterior nasal bleeding; lean forward'
      },
      {
        letter: 'P',
        term: 'Petechiae (Tiny Purplish Spots)',
        description: 'Pinpoint, non-blanching red or purplish macules (1-3 mm) resulting from intradermal capillary extravasation. Classic hallmark of severe thrombocytopenia (platelets < 50,000/mcL).',
        highlight: 'Pinpoint non-blanching intradermal macules'
      }
    ],
    clinicalContext: 'Clients receiving systemic anticoagulants (heparin, enoxaparin, warfarin, DOACs), antiplatelet therapy, or undergoing chemotherapy with bone marrow suppression are at high risk of hemorrhagic complications. Prompt identification of superficial "BEEP" signs prevents occult evolution into fatal gastrointestinal, retroperitoneal, or intracranial bleeding.',
    nclexPearls: [
      'Platelet Thresholds: Normal platelets are 150,000-400,000/mcL. Bleeding precautions are initiated when platelets drop < 50,000/mcL; spontaneous, life-threatening intracranial or GI bleeding risk surges when platelets fall < 10,000-20,000/mcL.',
      'Bleeding Precautions Checklist: Electric razors only, soft toothbrush, avoid intramuscular injections, avoid rectal temperatures/enemas, gentle nose blowing, and apply prolonged pressure (≥ 5 min) after venipuncture.',
      'Petechiae Assessment: Always apply digital or glass slide pressure (diascopy); petechiae do NOT blanch, distinguishing them from allergic erythema or telangiectasias.'
    ],
    practiceQuestion: {
      question: 'A client with severe aplastic anemia receiving packed red blood cells has a morning platelet count of 22,000/mcL. During the head-to-toe assessment, the nurse discovers multiple pinpoint, non-blanching purple macules on the lower legs and bleeding gingiva. What is the priority nursing action?',
      options: [
        'Advise the client to use a firm toothbrush to stimulate healthy gum healing.',
        'Institute strict bleeding precautions and immediately notify the healthcare provider.',
        'Administer a prescribed dose of oral aspirin for generalized discomfort.',
        'Apply tight elastic compression stockings over the lower leg macules.'
      ],
      correctIndex: 1,
      rationale: 'Petechiae and bleeding gums are classic superficial signs of minor bleeding (BEEP) signifying severe thrombocytopenia (< 50,000/mcL). The nurse must initiate strict bleeding precautions (soft toothbrush, electric razor, avoid IM injections, prevent falls) and alert the provider to anticipate an immediate platelet transfusion and evaluate for internal hemorrhage.'
    }
  },
  {
    id: 'sickle-cell-crisis-hopia',
    shortCode: 'HOPIA',
    title: 'Sickle Cell Disease: Vaso-Occlusive Crisis Management',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The 5-step prioritized clinical protocol to reverse sickling, relieve ischemic pain, treat precipitating triggers, and protect clients with sickle cell anemia.',
    memoryTip: '"HOPIA" — Hydration, Oxygenation, Pain, Infection, Avoid high places. Reverse sickle aggregation and restore capillary microcirculation!',
    highYield: true,
    tags: ['Hematology', 'Sickle Cell Crisis', 'Pain Management', 'Vaso-Occlusive Crisis'],
    letters: [
      {
        letter: 'H',
        term: 'Hydration (Aggressive IV & Oral Fluids)',
        description: 'Vigorous intravenous fluid infusion (hypotonic solutions like 0.45% normal saline at 1.5-2 times maintenance) dilutes blood viscosity, corrects cellular hemoconcentration, and mobilizes rigid sickled erythrocytes out of occluded microvessels.',
        highlight: 'High-rate IV fluids reduce blood viscosity'
      },
      {
        letter: 'O',
        term: 'Oxygenation (Supplemental O2 Delivery)',
        description: 'Administer supplemental oxygen to correct hypoxemia. Hypoxemia causes deoxygenated hemoglobin S (HbS) to polymerize into rigid crescent sickles; oxygenation halts the cycle of sickling and tissue ischemia.',
        highlight: 'Prevents further HbS polymerization'
      },
      {
        letter: 'P',
        term: 'Pain Relief (Scheduled IV Opioids)',
        description: 'Severe ischemic vaso-occlusive pain requires aggressive, round-the-clock or patient-controlled analgesia (PCA) with IV opioids (morphine or hydromorphone). Avoid meperidine (Demerol) due to normeperidine neurotoxicity and seizures!',
        highlight: 'Scheduled IV opioids; avoid meperidine!'
      },
      {
        letter: 'I',
        term: 'Infection Prevention & Treatment',
        description: 'Functional asplenia (caused by repetitive splenic infarctions) leaves clients highly vulnerable to encapsulated organisms (Streptococcus pneumoniae, Haemophilus influenzae). Promptly obtain blood cultures and administer broad-spectrum IV antibiotics for any fever.',
        highlight: 'Prompt antibiotics & pneumococcal vaccines'
      },
      {
        letter: 'A',
        term: 'Avoid High Places & Cold (Triggers)',
        description: 'Educate clients to avoid high altitudes (hypobaric hypoxia), unpressurized flights, cold temperatures (which trigger peripheral vasoconstriction and stasis), extreme physical exhaustion, and dehydration.',
        highlight: 'Avoid high altitudes, cold exposure, & dehydration'
      }
    ],
    clinicalContext: 'Sickle cell disease is an autosomal recessive hemoglobinopathy where mutated beta-globin (HbS) polymerizes under low oxygen tension, dehydration, acidosis, or cold, transforming flexible RBCs into rigid sickles that occlude capillaries. This causes excruciating ischemic pain, acute chest syndrome, stroke, and organ infarction.',
    nclexPearls: [
      'NCLEX Priority Order: On the NCLEX, the priority interventions for sickle cell crisis are often summarized as Hydration, Oxygenation, and Pain control (HOP), with aggressive IV hydration and oxygen being the physiological steps to stop further sickling!',
      'Meperidine Contraindication: Never administer Meperidine (Demerol) for sickle cell pain crises! Repetitive dosing leads to accumulation of the toxic metabolite normeperidine, which causes CNS irritability, tremors, and grand mal seizures.',
      'Fever is a Medical Emergency: Because of functional asplenia, any temperature ≥ 38.3°C (101°F) in a sickle cell client is an emergency requiring STAT blood cultures and immediate IV antibiotics (ceftriaxone).'
    ],
    practiceQuestion: {
      question: 'A 19-year-old client with sickle cell anemia is admitted to the medical-surgical unit in an acute vaso-occlusive crisis, rating pain in the bilateral legs and back as 10/10. The client has an oral temperature of 38.6°C (101.5°F), pulse of 112 bpm, and SpO2 of 89% on room air. Which provider prescription should the nurse implement first?',
      options: [
        'Administer prescribed oral acetaminophen 650 mg for the fever.',
        'Apply supplemental oxygen via nasal cannula at 3 L/min and start intravenous 0.45% normal saline at 175 mL/hr.',
        'Administer intramuscular meperidine 75 mg every 3 hours as needed for severe pain.',
        'Provide passive range-of-motion exercises to the bilateral lower extremities.'
      ],
      correctIndex: 1,
      rationale: 'In a sickle cell vaso-occlusive crisis, hypoxia and dehydration trigger sickle polymerization and capillary obstruction. Implementing Oxygenation (O) to correct hypoxemia (SpO2 89%) and Hydration (H) to decrease blood viscosity and mobilize sickled cells are the physiological priorities (H and O in HOPIA). Meperidine is strictly contraindicated due to normeperidine-induced seizure risk.'
    }
  },
  {
    id: 'mgso4-toxicity-burp',
    shortCode: 'BURP',
    title: 'Magnesium Sulfate (MgSO4) Toxicity Signs',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'A critical bedside safety mnemonic to rapidly recognize life-threatening hypermagnesemia and neuromuscular depression during intravenous magnesium sulfate infusion.',
    memoryTip: '"BURP" — Blood pressure decrease, Urine output decrease, Respiratory rate decrease, Patellar reflex absent. Have Calcium Gluconate at the bedside!',
    highYield: true,
    tags: ['Pharmacology', 'Critical Care', 'Electrolyte Imbalances', 'Emergency Antidote'],
    letters: [
      {
        letter: 'B',
        term: 'Blood Pressure Decrease (Hypotension)',
        description: 'Magnesium causes generalized systemic vasodilation and vascular smooth muscle relaxation, leading to progressive hypotension, cutaneous flushing, and bradyarrhythmias.',
        highlight: 'Hypotension & peripheral vasodilation'
      },
      {
        letter: 'U',
        term: 'Urine Output Decrease (< 30 mL/hr)',
        description: 'Magnesium is excreted exclusively by the kidneys. Oliguria (< 30 mL/hr or < 100 mL/4 hr) causes rapid, toxic accumulation of serum magnesium in the bloodstream.',
        highlight: 'Oliguria (< 30 mL/hr) triggers toxic buildup'
      },
      {
        letter: 'R',
        term: 'Respiratory Rate Decrease (< 12 breaths/min)',
        description: 'Hypermagnesemia inhibits acetylcholine release at the neuromuscular junction, progressively depressing central respiratory drive and diaphragm contraction. Bradypnea (< 12/min) is a late emergency!',
        highlight: 'Bradypnea (< 12/min) & respiratory arrest'
      },
      {
        letter: 'P',
        term: 'Patellar Reflex Absent (Loss of DTRs)',
        description: 'Deep tendon reflexes (DTRs) are the EARLIEST clinical sign of toxicity. Diminished or absent patellar/biceps reflexes (0 rating) occur before respiratory depression and signal imminent toxicity.',
        highlight: 'Loss of DTRs is the EARLIEST sign'
      }
    ],
    clinicalContext: 'Magnesium sulfate is utilized in medical-surgical and critical care settings for refractory hypomagnesemia, life-threatening ventricular dysrhythmias (specifically Torsades de Pointes), severe acute asthma exacerbations, and neuroprotection/eclampsia seizure prophylaxis. Normal serum magnesium is 1.5–2.5 mEq/L (therapeutic level 4–7 mEq/L). Levels > 8–10 mEq/L cause loss of DTRs, and > 12–15 mEq/L trigger respiratory arrest and complete heart block.',
    nclexPearls: [
      'Immediate Antidote: The specific pharmacological antidote is Calcium Gluconate 10% (10 mL / 1 gram administered IV slow push over 3–5 minutes). It must always be kept readily accessible at the client\'s bedside!',
      'Earliest Clinical Indicator: The loss of deep tendon reflexes (patellar reflex) ALWAYS precedes respiratory depression. If DTRs are absent, immediately stop the infusion!',
      'Nursing Action for Toxicity: 1) Stop the magnesium infusion immediately; 2) Administer 100% O2; 3) Administer IV Calcium Gluconate; 4) Notify the healthcare provider.'
    ],
    practiceQuestion: {
      question: 'A client receiving a continuous intravenous infusion of magnesium sulfate for refractory ventricular dysrhythmias has a respiratory rate of 10 breaths/min, blood pressure of 88/54 mmHg, and absent bilateral patellar reflexes. Which nursing intervention is the highest priority?',
      options: [
        'Slow the infusion rate by 50% and re-evaluate in 30 minutes.',
        'Immediately stop the magnesium sulfate infusion and prepare IV calcium gluconate.',
        'Encourage the client to take deep breaths and cough vigorously.',
        'Administer an intravenous bolus of 500 mL normal saline.'
      ],
      correctIndex: 1,
      rationale: 'The client exhibits classic signs of magnesium toxicity (BURP: Bradypnea < 12/min, Hypotension, Absent patellar reflexes). The nurse\'s immediate priority is to stop the magnesium infusion to prevent complete respiratory arrest and administer the specific antidote, intravenous calcium gluconate (10% solution).'
    }
  },
  {
    id: 'chf-management-d-mad-dog',
    shortCode: 'D MAD DOG',
    title: 'Congestive Heart Failure (CHF) Acute Management',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'A classic acute heart failure and pulmonary edema pharmacotherapeutic protocol to optimize cardiac inotropy, decrease preload/afterload, and restore oxygenation.',
    memoryTip: '"D MAD DOG" — Digoxin, Morphine, Aminophylline, Dopamine, Diuretics, O2, Gasses (ABGs). Tame acute heart failure decompensation!',
    highYield: true,
    tags: ['Cardiovascular', 'Heart Failure', 'Pharmacology', 'Acute Pulmonary Edema'],
    letters: [
      {
        letter: 'D',
        term: 'Digoxin (Inotropic Support)',
        description: 'Positive inotrope and negative chronotrope that inhibits myocardial Na+/K+ ATPase, increasing cardiac contractility and stroke volume while slowing ventricular rate in comorbid atrial fibrillation.',
        highlight: 'Increases contractility & slows AV conduction'
      },
      {
        letter: 'M',
        term: 'Morphine Sulfate',
        description: 'Provides venous vasodilation to reduce preload and pooling in pulmonary capillary beds, decreases systemic vascular resistance (afterload), and reduces client anxiety and work of breathing.',
        highlight: 'Venodilation, reduces preload, & eases dyspnea'
      },
      {
        letter: 'A',
        term: 'Aminophylline (Bronchodilator)',
        description: 'Relaxes bronchial smooth muscle to relieve bronchospasm and wheezing associated with "cardiac asthma" and pulmonary vascular congestion.',
        highlight: 'Bronchodilation for cardiac asthma wheezing'
      },
      {
        letter: 'D',
        term: 'Dopamine (Inotropic / Vasopressor Support)',
        description: 'Adrenergic agonist enhancing myocardial contractility, increasing mean arterial pressure, and at renal/inotropic doses improving renal blood flow and glomerular filtration.',
        highlight: 'Inotropic & renal perfusion support'
      },
      {
        letter: 'D',
        term: 'Diuretics (Loop Diuretics / Furosemide)',
        description: 'Potent IV loop diuretics (furosemide/bumetanide) promoting rapid venous dilation within 5 minutes followed by profound diuresis to purge fluid overload and pulmonary congestion.',
        highlight: 'Furosemide rapid venodilation & diuresis'
      },
      {
        letter: 'O',
        term: 'O2 (High-Flow Supplemental Oxygen)',
        description: 'Administer high-flow supplemental oxygen via non-rebreather mask or CPAP/BiPAP to maintain SpO2 > 90-95% and drive fluid out of the alveoli through positive intrathoracic pressure.',
        highlight: 'High-flow O2 & CPAP alveolar recruitment'
      },
      {
        letter: 'G',
        term: 'Gasses (Arterial Blood Gas [ABG] Monitoring)',
        description: 'Serial ABG analysis to evaluate severe hypoxemia (PaO2), acute respiratory acidosis from carbon dioxide retention (PaCO2), and lactic metabolic acidosis from tissue hypoperfusion.',
        highlight: 'Monitor PaO2, PaCO2, & metabolic acidosis'
      }
    ],
    clinicalContext: 'Acute decompensated heart failure (ADHF) frequently manifests as acute cardiogenic pulmonary edema: severe dyspnea, orthopnea, crackles throughout lung fields, pink frothy sputum, and peripheral edema. Interventions aim to unload the failing heart by decreasing circulating volume (diuretics), reducing preload (morphine, nitrates), supporting pump contractility (inotropes), and restoring alveolar gas exchange.',
    nclexPearls: [
      'High-Fowler Position First: Place the client in high-Fowler position with legs dangling over the edge of the bed immediately; gravity promotes peripheral venous pooling and reduces venous return (preload) to the overwhelmed heart.',
      'Digoxin Toxicity Warning: Hypokalemia (common with loop diuretics like furosemide) drastically potentiates digoxin toxicity! Always verify potassium levels and apical pulse (hold if HR < 60 bpm).',
      'Daily Weights Gold Standard: Daily morning weight after first void is the most sensitive and accurate indicator of fluid status. Instruct the client to report weight gains > 2-3 lbs in 1 day or > 5 lbs in 1 week.'
    ],
    practiceQuestion: {
      question: 'A client with severe left-sided heart failure is admitted with acute pulmonary edema, manifesting as tachypnea, diffuse bilateral inspiratory crackles, and productive pink frothy sputum. What should the nurse do first?',
      options: [
        'Place the client in high-Fowler position with the legs dependent.',
        'Administer oral potassium chloride 40 mEq.',
        'Encourage the client to lie flat on the left side to optimize cardiac output.',
        'Perform a 24-hour urine collection for creatinine clearance.'
      ],
      correctIndex: 0,
      rationale: 'In acute cardiogenic pulmonary edema, the immediate priority is to place the client in high-Fowler position with legs dangling (dependent). This reduces venous return to the right heart, lowers preload, pools blood in the lower extremities, and maximizes thoracic expansion for immediate dyspnea relief before initiating IV pharmacotherapy (D MAD DOG).'
    }
  },
  {
    id: 'increased-icp-cushings-triad',
    shortCode: 'HYPERBRADYBRADY',
    title: 'Increased ICP: Cushing\'s Triad Warning',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The ominous, life-threatening physiological triad signifying severe intracranial hypertension and imminent brainstem herniation.',
    memoryTip: '"HYPER-BRADY-BRADY" — Hypertension with widened pulse pressure, Bradycardia, Bradypnea. The opposite of shock; indicates impending brainstem herniation!',
    highYield: true,
    tags: ['Neurology', 'Critical Care', 'Intracranial Pressure', 'Emergency Response'],
    letters: [
      {
        letter: 'HYPER',
        term: 'Hypertension (with Widened Pulse Pressure)',
        description: 'Profound elevation in systolic blood pressure while diastolic blood pressure remains normal or drops, resulting in a marked widening of the pulse pressure (e.g., from 120/80 to 200/60 mmHg).',
        highlight: 'Severe systolic rise & widened pulse pressure'
      },
      {
        letter: 'BRADY',
        term: 'Bradycardia (Bounding Pulse)',
        description: 'Reflex parasympathetic vagal stimulation triggered by high-pressure baroreceptors in the carotid sinuses and aortic arch in response to massive systolic arterial hypertension.',
        highlight: 'Reflex baroreceptor vagal slowing of heart rate'
      },
      {
        letter: 'BRADY',
        term: 'Bradypnea (Irregular / Cheyne-Stokes)',
        description: 'Slow, irregular, or agonal respirations (Cheyne-Stokes breathing) caused by direct compression of the respiratory control centers in the pons and medulla oblongata.',
        highlight: 'Respiratory center brainstem compression'
      }
    ],
    clinicalContext: 'Cushing\'s triad is a LATE and grave neurological sign of critically elevated intracranial pressure (normal ICP is 5–15 mmHg; pathological > 20 mmHg). It indicates that compensatory intracranial mechanisms (Monro-Kellie doctrine) are exhausted and the brain is undergoing transtentorial or foramen magnum herniation. Contrast with hypovolemic shock (hypotension, tachycardia, tachypnea).',
    nclexPearls: [
      'Cushing\'s Triad vs. Shock: Cushing\'s triad features HIGH systolic BP, SLOW pulse, and SLOW respirations. Shock features LOW BP, FAST pulse, and FAST respirations!',
      'Earliest Sign of Elevated ICP: A subtle change in the Level of Consciousness (LOC)—such as restlessness, confusion, irritability, or lethargy—is ALWAYS the earliest sign; Cushing\'s triad is a very LATE sign!',
      'Emergency Interventions: Elevate the head of the bed (HOB) to 30 degrees with head and neck in neutral midline alignment, avoid hip flexion, administer osmotic diuretics (Mannitol or hypertonic 3% saline), and avoid clustering nursing cares.'
    ],
    practiceQuestion: {
      question: 'A client with a traumatic brain injury who had a baseline blood pressure of 124/76 mmHg and heart rate of 84 bpm now has a blood pressure of 188/62 mmHg, heart rate of 48 bpm, and slow, irregular respirations of 8 breaths/min. What does the nurse determine these changes signify?',
      options: [
        'Hypovolemic shock resulting from internal hemorrhage.',
        'Imminent brainstem herniation secondary to severe increased intracranial pressure.',
        'Normal autonomic response to emerging from general anesthesia.',
        'Progression to septic shock from an intracranial catheter infection.'
      ],
      correctIndex: 1,
      rationale: 'The triad of marked systolic hypertension with widened pulse pressure (188/62 mmHg), bradycardia (48 bpm), and bradypnea/irregular respirations (8 breaths/min) represents Cushing\'s triad (HYPERBRADYBRADY). This is an ominous late sign of severe intracranial hypertension signaling impending tentorial or cerebellar tonsillar brainstem herniation.'
    }
  },
  {
    id: 'splenomegaly-causes-3ms',
    shortCode: "The 3 M's",
    title: 'Causes of Massive Splenomegaly: The 3 M\'s',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'A high-yield hematology and infectious disease diagnostic framework identifying the premier causes of massive splenomegaly (spleen extending > 8 cm below costal margin or crossing the umbilicus).',
    memoryTip: '"The 3 M\'s of Huge Spleen" — Myelofibrosis, Malaria, Myelogenous leukemia. Enormous splenic enlargement demands careful abdominal protection against rupture!',
    highYield: true,
    tags: ['Hematology', 'Oncology', 'Infectious Disease', 'Splenomegaly'],
    letters: [
      {
        letter: 'M',
        term: 'Myelofibrosis (Primary Myelofibrosis)',
        description: 'A myeloproliferative neoplasm characterized by progressive bone marrow fibrosis and failure. The spleen undergoes massive extramedullary hematopoiesis (blood cell production outside the marrow), expanding markedly into the pelvis.',
        highlight: 'Extramedullary hematopoiesis & bone marrow scarring'
      },
      {
        letter: 'M',
        term: 'Malaria (Chronic / Hyperreactive Malarial Splenomegaly)',
        description: 'Plasmodium protozoal infection (especially chronic P. falciparum or P. vivax) triggering chronic reticuloendothelial clearance of parasitized red blood cells, excessive immunoglobulin production, and colossal splenic hypertrophy.',
        highlight: 'Parasitized RBC clearance & reticuloendothelial hypertrophy'
      },
      {
        letter: 'M',
        term: 'Myelogenous Leukemia (Chronic Myelogenous Leukemia - CML)',
        description: 'Malignant clonal expansion of myeloid lineage cells driven by the BCR-ABL1 Philadelphia chromosome translocation. Massive leukemic cell infiltration and sequestration dramatically engorge the splenic parenchyma.',
        highlight: 'Philadelphia chromosome & leukemic infiltration'
      }
    ],
    clinicalContext: 'Massive splenomegaly (spleen weight > 1000 g or extending across the midline/into the pelvis) creates severe abdominal fullness, early satiety from gastric compression, left upper quadrant (LUQ) pain, and hypersplenism (pancytopenia from cellular sequestration). Splenic rupture from minor trauma or vigorous palpation is a surgical emergency producing fatal hemoperitoneum.',
    nclexPearls: [
      'Palpation Precaution: NEVER vigorously palpate an enlarged spleen! Deep palpation can rupture the tense splenic capsule, causing catastrophic internal hemorrhage.',
      'Spleen Assessment: An enlarged spleen expands downward and toward the right iliac fossa (toward the umbilicus), with a palpable notch on its anterior border. Dullness to percussion over Traube\'s space is a classic physical finding.',
      'Post-Splenectomy Infection Risk: If splenectomy is performed for massive enlargement, clients have lifelong susceptibility to encapsulated organisms (Streptococcus pneumoniae, Neisseria meningitidis, Haemophilus influenzae); pneumococcal and meningococcal vaccinations are mandatory.'
    ],
    practiceQuestion: {
      question: 'A client with newly diagnosed chronic myelogenous leukemia (CML) reports feeling full after eating small amounts of food and dull left upper quadrant discomfort. The nurse notes the spleen is palpable 9 cm below the left costal margin. Which nursing precaution is most critical?',
      options: [
        'Encourage deep, vigorous abdominal massage to relieve gas pain.',
        'Instruct the client to avoid contact sports and heavy lifting, and avoid repeated deep palpation.',
        'Place the client on a high-protein, high-residue diet with daily enemas.',
        'Maintain the client on absolute bed rest in Trendelenburg position.'
      ],
      correctIndex: 1,
      rationale: 'Massive splenomegaly (the 3 M\'s: Myelofibrosis, Malaria, Myelogenous leukemia) stretches the splenic capsule and dramatically increases the risk of life-threatening splenic rupture and fatal intra-abdominal hemorrhage. The nurse must instruct the client to avoid contact sports, abdominal trauma, or strenuous activities, and healthcare personnel must strictly avoid vigorous or repeated deep abdominal palpation.'
    }
  },
  {
    id: 'scarlet-fever-signs-six-ss',
    shortCode: 'Six "S"',
    title: 'Scarlet Fever: Clinical Manifestations (The Six S\'s)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The classic 6-point clinical presentation of Scarlet Fever (Scarlatina) caused by erythrogenic exotoxin-producing Streptococcus pyogenes.',
    memoryTip: '"Six S\'s of Scarlet Fever" — Streptococci, Sore throat, Swollen tonsils, Strawberry tongue, Sandpaper rash, Sudamina vesicles. Complete the full 10-day penicillin course to prevent rheumatic fever!',
    highYield: true,
    tags: ['Infectious Disease', 'Pediatrics', 'Integumentary', 'Antibiotic Therapy'],
    letters: [
      {
        letter: 'S',
        term: 'Streptococci Causal Organism',
        description: 'Etiological agent is Group A Beta-Hemolytic Streptococcus (GABS / Streptococcus pyogenes) producing pyrogenic (erythrogenic) exotoxins (A, B, or C) in an immunologically non-immune host.',
        highlight: 'Group A Beta-Hemolytic Streptococcus (GABS)'
      },
      {
        letter: 'S',
        term: 'Sore Throat (Pharyngitis)',
        description: 'Sudden onset of severe pharyngitis with odynophagia (painful swallowing), accompanied by high fever, chills, malaise, headache, and anterior cervical lymphadenopathy.',
        highlight: 'Severe pharyngitis & painful swallowing'
      },
      {
        letter: 'S',
        term: 'Swollen Tonsils (Exudative Tonsillitis)',
        description: 'Tonsils and pharyngeal mucosa appear beefy red, edematous, and dotted with confluent yellow-white exudates. Petechiae may dot the soft palate.',
        highlight: 'Beefy red tonsils with purulent exudates'
      },
      {
        letter: 'S',
        term: 'Strawberry Tongue',
        description: 'Initial white strawberry tongue (thick white coating with prominent hyperplastic red fungiform papillae on days 1-2) sheds by day 4-5 to reveal a bright, raw, beefy red strawberry tongue.',
        highlight: 'White coating sheds to beefy red papillae'
      },
      {
        letter: 'S',
        term: 'Sandpaper Rash (Miliary Exanthem)',
        description: 'Finely punctate, erythematous maculopapular rash that blanches and feels rough like fine sandpaper. Accentuated in skin folds as transverse red lines (Pastia\'s lines); spares the perioral area (circumoral pallor).',
        highlight: 'Rough sandpaper texture & Pastia lines'
      },
      {
        letter: 'S',
        term: 'Sudamina Vesicles & Desquamation',
        description: 'Minute vesicular miliary eruptions (sudamina) over hands, feet, and abdomen, followed by characteristic fine sheet-like peeling and desquamation of fingers, toes, and palms 1-3 weeks later.',
        highlight: 'Vesicles followed by palmar/plantar peeling'
      }
    ],
    clinicalContext: 'Scarlet fever typically follows streptococcal pharyngitis. Complications include post-streptococcal glomerulonephritis and acute rheumatic fever (carditis, Sydenham chorea, migratory polyarthritis). Standard treatment is oral penicillin V or amoxicillin for a full 10 days (or macrolides/cephalosporins if penicillin-allergic).',
    nclexPearls: [
      'Droplet Precautions: The client must be placed on Droplet Precautions until 24 hours of effective antimicrobial therapy (penicillin) has been administered.',
      'Complete Antibiotic Course: Emphasize the crucial importance of completing the full 10-day course of prescribed antibiotics even if symptoms rapidly resolve, to prevent autoimmune acute rheumatic fever and permanent valvular damage.',
      'Circumoral Pallor & Pastia Lines: The flushed cheeks contrast with a pale ring around the mouth (circumoral pallor), and linear petechial streaks in the antecubital and axillary skin folds (Pastia\'s sign) are diagnostic hallmarks.'
    ],
    practiceQuestion: {
      question: 'A 7-year-old child is diagnosed with scarlet fever following a rapid streptococcal throat swab. The nurse assesses a rough erythematous rash resembling sandpaper, circumoral pallor, and a swollen, beefy red tongue with prominent papillae. What education is most critical for the nurse to reinforce with the parents?',
      options: [
        'Apply topical hydrocortisone cream to prevent desquamation of the fingers.',
        'Continue the prescribed oral antibiotic for the full 10-day duration even if the rash and fever disappear.',
        'Keep the child home from school for at least 3 weeks until all skin peeling has resolved.',
        'Provide aspirin every 4 hours as needed to control fever and sore throat discomfort.'
      ],
      correctIndex: 1,
      rationale: 'Completing the entire 10-day course of penicillin or prescribed antibiotics is imperative to eradicate Group A beta-hemolytic streptococcus and prevent delayed non-suppurative complications, primarily Acute Rheumatic Fever (which causes permanent heart valve damage) and Post-Streptococcal Glomerulonephritis. Aspirin is strictly contraindicated in children due to Reye\'s syndrome risk.'
    }
  },
  {
    id: 'cor-pulmonale-signs-prht',
    shortCode: 'PRHT',
    title: 'Signs of Cor Pulmonale (Right-Sided Heart Failure)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The 4 cardinal clinical manifestations of Cor Pulmonale—right ventricular hypertrophy and failure secondary to chronic pulmonary arterial hypertension.',
    memoryTip: '"Please Read His Text" (PRHT) — Peripheral edema, Raised JVP, Hepatomegaly, Tricuspid incompetence. Chronic lung disease backing up into systemic circulation!',
    highYield: true,
    tags: ['Cardiovascular', 'Respiratory', 'Right Heart Failure', 'Pulmonary Hypertension'],
    letters: [
      {
        letter: 'P',
        term: 'Peripheral Edema (Dependent Edema)',
        description: 'Bilateral pitting edema of the lower extremities, ankles, and presacral region resulting from high right atrial pressure transmitting backward into systemic capillary beds, causing hydrostatic extravasation.',
        highlight: 'Bilateral dependent pitting edema'
      },
      {
        letter: 'R',
        term: 'Raised JVP (Jugular Venous Distension)',
        description: 'Elevated jugular venous pressure (JVD) visualized as distended internal/external jugular veins at 45 degrees, accompanied by positive hepatojugular reflux (sustained elevation upon RUQ pressure).',
        highlight: 'Jugular venous distension (JVD) at 45°'
      },
      {
        letter: 'H',
        term: 'Hepatomegaly (with Ascites)',
        description: 'Passive hepatic venous congestion ("nutmeg liver") causing tender, palpable liver enlargement below the right costal margin, right upper quadrant tenderness, and abdominal ascites.',
        highlight: 'Tender congestive hepatomegaly & ascites'
      },
      {
        letter: 'T',
        term: 'Tricuspid Incompetence (Regurgitation)',
        description: 'Right ventricular dilation stretches the tricuspid valve annulus, producing functional tricuspid regurgitation (holosystolic murmur loudest at the left lower sternal border that intensifies with inspiration — Carvallo\'s sign).',
        highlight: 'Holosystolic murmur at left lower sternal border'
      }
    ],
    clinicalContext: 'Cor pulmonale results from chronic alveolar hypoxia and destruction of the pulmonary capillary bed (most commonly due to COPD, idiopathic pulmonary arterial hypertension, cystic fibrosis, or pulmonary fibrosis). Hypoxic pulmonary vasoconstriction raises pulmonary vascular resistance, forcing the right ventricle to hypertrophy, dilate, and ultimately fail, producing severe systemic venous congestion.',
    nclexPearls: [
      'Root Etiology: Cor pulmonale is right-sided heart failure caused by a PRIMARY PULMONARY disorder (most often COPD), distinguishing it from right heart failure caused by left-sided failure (e.g., mitral stenosis or left ventricular infarction).',
      'Low-Flow Oxygen Therapy: In clients with COPD-induced cor pulmonale, administer low-flow oxygen (e.g., 1-2 L/min via nasal cannula or Venturi mask 24-28%) to relieve hypoxic vasoconstriction while avoiding suppression of the hypoxic drive.',
      'Left vs. Right Failure: Left failure equals LUNGS (crackles, dyspnea, orthopnea, cough); Right failure equals REST OF BODY (JVD, hepatomegaly, splenomegaly, peripheral edema, ascites).'
    ],
    practiceQuestion: {
      question: 'A client with long-standing end-stage chronic obstructive pulmonary disease (COPD) is admitted with worsening dyspnea, 3+ pitting edema of the bilateral ankles, jugular venous distension to the angle of the jaw at 45 degrees, and a tender liver edge palpated 4 cm below the right costal margin. Which pathophysiology explains these clinical manifestations?',
      options: [
        'Left ventricular failure with reduced systemic cardiac output.',
        'Cor pulmonale resulting from chronic pulmonary arterial hypertension.',
        'Acute nephrotic syndrome with massive proteinuria.',
        'Chronic aortic stenosis leading to concentric left ventricular hypertrophy.'
      ],
      correctIndex: 1,
      rationale: 'The client exhibits classic signs of right-sided heart failure (PRHT: Peripheral edema, Raised JVP, Hepatomegaly, Tricuspid regurgitation). When right ventricular failure occurs secondary to pulmonary disease (such as severe COPD), it is termed Cor Pulmonale. Chronic alveolar hypoxia causes pulmonary vasoconstriction and arterial hypertension, eventually exhausting right ventricular pump function and producing systemic venous congestion.'
    }
  },
  {
    id: 'essential-amino-acids-pvt-tim-hall',
    shortCode: 'PVT. TIM HALL',
    title: 'The 10 Essential Amino Acids',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The classic nutritional biochemistry mnemonic detailing the amino acids that cannot be synthesized de novo by the human body and must be acquired through dietary protein intake.',
    memoryTip: '"PVT. TIM HALL" — Phenylalanine, Valine, Tryptophan, Threonine, Isoleucine, Methionine, Histidine, Arginine, Leucine, Lysine. Private Tim Hall salutes complete protein nutrition!',
    highYield: true,
    tags: ['Nutrition & Metabolism', 'Biochemistry', 'Dietary Management', 'Metabolic Disorders'],
    letters: [
      {
        letter: 'P',
        term: 'Phenylalanine',
        description: 'Aromatic essential amino acid and precursor to tyrosine, dopamine, norepinephrine, and epinephrine. In Phenylketonuria (PKU), deficiency of phenylalanine hydroxylase requires strict lifelong dietary restriction to prevent severe neurocognitive impairment.',
        highlight: 'Precursor to tyrosine & tested in PKU screening'
      },
      {
        letter: 'V',
        term: 'Valine',
        description: 'Branched-chain amino acid (BCAA) essential for muscle tissue repair, glycogen synthesis, and nitrogen balance. Defective BCAA breakdown causes Maple Syrup Urine Disease (MSUD).',
        highlight: 'Branched-chain amino acid (BCAA)'
      },
      {
        letter: 'T',
        term: 'Tryptophan',
        description: 'Aromatic amino acid and biochemical precursor for serotonin (5-HT), melatonin, and niacin (Vitamin B3). Tryptophan deficiency or carcinoid syndrome alters serotonin metabolism.',
        highlight: 'Precursor for serotonin, melatonin, & niacin'
      },
      {
        letter: 'T',
        term: 'Threonine',
        description: 'Polar essential amino acid vital for collagen, elastin, enamel protein synthesis, and gastrointestinal mucin production supporting intestinal barrier integrity.',
        highlight: 'Structural collagen & mucin synthesis'
      },
      {
        letter: 'I',
        term: 'Isoleucine',
        description: 'Branched-chain amino acid concentrated in muscle tissue, involved in hemoglobin synthesis, regulation of blood sugar, and cellular energy production.',
        highlight: 'BCAA involved in hemoglobin synthesis'
      },
      {
        letter: 'M',
        term: 'Methionine',
        description: 'Sulfur-containing essential amino acid and principal donor of methyl groups (via S-adenosylmethionine - SAMe) for DNA methylation; precursor to cysteine and homocysteine.',
        highlight: 'Sulfur-containing methyl donor & SAMe precursor'
      },
      {
        letter: 'H',
        term: 'Histidine (Semi-Essential)',
        description: 'Precursor to histamine (mediator of allergic response, gastric acid secretion, and inflammation); conditionally essential during infancy, rapid growth, and chronic uremia.',
        highlight: 'Histamine precursor & conditionally essential in infants'
      },
      {
        letter: 'A',
        term: 'Arginine (Semi-Essential)',
        description: 'Conditionally essential amino acid in children and severe catabolic states (burns, sepsis, trauma); essential precursor for nitric oxide (NO) vasodilation and urea cycle ammonia clearance.',
        highlight: 'Nitric oxide (NO) & urea cycle intermediate'
      },
      {
        letter: 'L',
        term: 'Leucine',
        description: 'The primary branched-chain amino acid directly stimulating muscle protein synthesis via mammalian target of rapamycin (mTOR) activation and wound healing.',
        highlight: 'Potent mTOR activator & muscle synthesis'
      },
      {
        letter: 'L',
        term: 'Lysine',
        description: 'Basic essential amino acid critical for carnitine synthesis (fatty acid beta-oxidation), calcium absorption, cross-linking of collagen fibers, and antibody formation.',
        highlight: 'Carnitine synthesis & collagen cross-linking'
      }
    ],
    clinicalContext: 'In Medical & Surgical nursing, assessing protein adequacy, nitrogen balance, total parenteral nutrition (TPN) formulations, and inborn errors of metabolism (e.g., PKU, Maple Syrup Urine Disease, hepatic encephalopathy) requires recognizing essential vs. non-essential amino acids. Complete proteins (meat, poultry, fish, eggs, milk, soy, quinoa) contain all essential amino acids in appropriate proportions.',
    nclexPearls: [
      'Complete vs. Incomplete Proteins: Animal proteins and soy/quinoa are complete; plant proteins (legumes, grains, nuts) lack one or more essential amino acids and must be combined (complementary proteins, like rice and beans) to provide all essential amino acids.',
      'Phenylketonuria (PKU) Diet: Newborn screening identifies PKU; management requires a low-phenylalanine diet (avoid meats, dairy, eggs, nuts, and aspartame [NutraSweet]).',
      'Hepatic Encephalopathy Protein Management: In severe cirrhosis with hyperammonemia, protein is not eliminated completely; rather, vegetable-based and branched-chain amino acids (BCAAs: leucine, isoleucine, valine) are preferred over aromatic amino acids to reduce false neurotransmitter generation.'
    ],
    practiceQuestion: {
      question: 'The nurse is providing dietary education to a vegan client recovering from major abdominal surgery who needs to promote optimal wound healing and tissue repair. Which recommendation best ensures the client obtains all essential amino acids (PVT. TIM HALL)?',
      options: [
        'Consume single-grain foods such as white rice exclusively throughout the day.',
        'Combine complementary plant protein sources such as brown rice and black beans or whole-wheat pita with hummus.',
        'Restrict total caloric intake to force mobilization of endogenous muscle tissue.',
        'Rely solely on fruit juices and raw vegetables for protein requirements.'
      ],
      correctIndex: 1,
      rationale: 'Plant-based food sources often lack one or more essential amino acids (PVT. TIM HALL). Combining complementary plant proteins (e.g., grains deficient in lysine but high in methionine combined with legumes high in lysine but lower in methionine, such as rice and beans or wheat bread with peanut butter) provides all essential amino acids necessary for collagen synthesis, immune function, and surgical wound healing.'
    }
  },
  {
    id: 'wbc-differential-nlmeb',
    shortCode: 'NLMEB',
    title: 'Order of White Blood Cell Prevalence (NLMEB)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Normal differential prevalence of circulating leukocytes ordered from most to least abundant.',
    memoryTip: '"Never Let Monkeys Eat Bananas" — Neutrophils (60-70%), Lymphocytes (20-25%), Monocytes (3-8%), Eosinophils (2-4%), Basophils (0.5-1%).',
    highYield: true,
    tags: ['Hematology', 'Complete Blood Count', 'Immunology', 'Infection Control', 'Lab Values'],
    letters: [
      {
        letter: 'N',
        term: 'Neutrophils (60% - 70%)',
        description: 'First responders to acute bacterial invasion and necrotic tissue destruction; phagocytose microbes and release proteolytic enzymes. Immature unsegmented forms are bands ("shift to the left" signals acute severe infection or sepsis).',
        highlight: 'Acute bacterial defense & left shift'
      },
      {
        letter: 'L',
        term: 'Lymphocytes (20% - 25%)',
        description: 'Primary cellular mediators of adaptive immunity comprising B-lymphocytes (humoral antibody production), T-lymphocytes (cell-mediated cytotoxic and helper immunity), and natural killer (NK) cells. Elevated in acute viral illnesses.',
        highlight: 'Viral infections & adaptive immunity'
      },
      {
        letter: 'M',
        term: 'Monocytes (3% - 8%)',
        description: 'Largest circulating leukocytes that extravasate into tissues to become potent phagocytic macrophages (e.g., alveolar macrophages, Kupffer cells, microglia). Predominate in chronic infections (tuberculosis) and dead tissue cleanup.',
        highlight: 'Chronic infection & tissue macrophages'
      },
      {
        letter: 'E',
        term: 'Eosinophils (2% - 4%)',
        description: 'Granulocytes specialized in neutralizing parasitic helminthic infestations and regulating allergic/atopic hypersensitivity reactions (asthma, eczema, drug allergies). Contain major basic protein and eosinophil cationic protein.',
        highlight: 'Parasites & allergic hypersensitivity'
      },
      {
        letter: 'B',
        term: 'Basophils (0.5% - 1%)',
        description: 'Least prevalent circulating granulocytes with prominent granules containing histamine, serotonin, and heparin. Mediate immediate hypersensitivity, systemic anaphylactic shock, and local cutaneous inflammatory cascades.',
        highlight: 'Histamine release & anaphylaxis'
      }
    ],
    clinicalContext: 'In Medical-Surgical and critical care nursing, interpreting a Complete Blood Count with differential (CBC with diff) is essential for diagnosing occult infections, monitoring bone marrow recovery after myelosuppressive chemotherapy, and evaluating allergic or parasitic diseases. Evaluating the Absolute Neutrophil Count (ANC = WBC × [% segmented neutrophils + % bands]) identifies severe neutropenia (ANC < 500/mm³), dictating emergency protective isolation and prompt empiric broad-spectrum antibiotic initiation.',
    nclexPearls: [
      'Left Shift (Bandemia): An elevated proportion of immature neutrophil band forms (>8-10%) indicates the bone marrow is hastily mobilizing reserves to battle severe acute bacterial infection or sepsis.',
      'Neutropenic Fever Protocol: In clients with an ANC < 500/mm³, a single oral temperature ≥ 100.4°F (38.0°C) is an oncologic emergency requiring blood cultures and immediate empiric IV antibiotic administration within 60 minutes.',
      'Causes of Eosinophilia ("NAACP"): Neoplasm, Allergy/Asthma, Addison disease, Collagen vascular diseases, Parasites.'
    ],
    practiceQuestion: {
      question: 'A postoperative medical-surgical client has a complete blood count (CBC) with differential reported as: WBC 16,800/mm³, Neutrophils 76%, Bands 15%, Lymphocytes 6%, Monocytes 2%, Eosinophils 0.8%, Basophils 0.2%. How should the nurse interpret these findings?',
      options: [
        'Expected, benign hematologic response to elective surgical stress.',
        'Acute severe bacterial infection with a "shift to the left" requiring prompt medical intervention.',
        'Primary systemic viral infection reflected by relative lymphopenia.',
        'Severe parasitic helminthic infestation requiring immediate antihelminthic therapy.'
      ],
      correctIndex: 1,
      rationale: 'Normal leukocyte prevalence follows "Never Let Monkeys Eat Bananas" (Neutrophils 60-70%, Lymphocytes 20-25%, Monocytes 3-8%, Eosinophils 2-4%, Basophils 0.5-1%). The combination of leukocytosis (16,800/mm³) with 76% mature neutrophils and 15% immature band forms (normal <5-8%) defines a "shift to the left," indicating acute, overwhelming bacterial infection or surgical site sepsis demanding immediate provider notification and blood cultures.'
    }
  },
  {
    id: 'cell-cycle-stages-ipmat',
    shortCode: 'IPMAT',
    title: 'Stages of Mitosis & Cell Division (IPMAT)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The sequential phases of the cellular cycle and nuclear division in eukaryotic cells.',
    memoryTip: '"In Philippines, Men Are Talented" (IPMAT) — Interphase, Prophase, Metaphase, Anaphase, Telophase. Master the cell division cycle to understand antineoplastic chemotherapy mechanisms!',
    highYield: true,
    tags: ['Cell Biology', 'Oncology', 'Chemotherapy Mechanisms', 'Pathophysiology', 'Pharmacology'],
    letters: [
      {
        letter: 'I',
        term: 'Interphase (G1, S, G2 phases)',
        description: 'The metabolic and synthetic phase preceding mitosis where cell growth, protein synthesis, and organelle replication occur. DNA replication takes place exclusively during the S (synthesis) phase, which is the primary target for antimetabolite chemotherapies (e.g., methotrexate, fluorouracil).',
        highlight: 'DNA replication & cell growth'
      },
      {
        letter: 'P',
        term: 'Prophase',
        description: 'The inaugural stage of mitosis where diffuse chromatin condenses into distinct, microscopic paired chromosomes, the nuclear envelope and nucleoli dissociate, and centrosomes migrate to opposite cellular poles assembling the mitotic spindle.',
        highlight: 'Chromatin condensation & spindle formation'
      },
      {
        letter: 'M',
        term: 'Metaphase',
        description: 'Chromosomes align symmetrically along the equatorial metaphase plate perpendicular to the spindle axis; kinetochores attach each sister chromatid to opposing spindle microtubules. Plant alkaloids (vincristine, paclitaxel) arrest cells in this phase by disrupting microtubule dynamics.',
        highlight: 'Equatorial plate alignment'
      },
      {
        letter: 'A',
        term: 'Anaphase',
        description: 'Centromeres split synchronously and paired sister chromatids are pulled apart into separate daughter chromosomes toward opposing centrosome poles through shortening of kinetochore microtubules.',
        highlight: 'Sister chromatid poleward separation'
      },
      {
        letter: 'T',
        term: 'Telophase (& Cytokinesis)',
        description: 'Nuclear envelopes and nucleoli reconstitute around the two segregated sets of chromosomes at each pole, chromosomes uncoil back into chromatin, and cytokinesis forms a cleavage furrow to partition the cytoplasm into two identical daughter cells.',
        highlight: 'Nuclear envelope reformation & cytokinesis'
      }
    ],
    clinicalContext: 'In Medical-Surgical and Oncology nursing, understanding the cell cycle (IPMAT) is vital for mastering chemotherapy classifications. Cell-cycle-specific (CCS) agents act on designated phases (antimetabolites in S-phase; mitotic spindle poisons like Vincristine/Paclitaxel in M-phase), whereas cell-cycle-nonspecific (CCNS) agents (alkylating agents like cyclophosphamide) kill cells irrespective of cycle phase. Fast-dividing nonmalignant cells (hair follicles, GI mucosa, bone marrow) are also damaged, driving classic toxicities.',
    nclexPearls: [
      'M-Phase Chemotherapy Targets: Plant alkaloids (vincristine, vinblastine) and taxanes (paclitaxel) disrupt tubulin polymers during Metaphase, arresting malignant cell division.',
      'Vincristine Extravasation & Toxicities: Vincristine is a vesicant; if extravasation occurs, warm compresses (NOT cold) and hyaluronidase are used to disperse the drug. Major dose-limiting toxicity is neurotoxicity (numbness, foot drop, constipation/paralytic ileus).',
      'Mitosis vs. Meiosis: Mitosis produces 2 genetically identical diploid (2n) somatic cells; Meiosis produces 4 genetically unique haploid (n) gametes through two sequential cellular divisions.'
    ],
    practiceQuestion: {
      question: 'An oncology medical-surgical nurse is administering IV vincristine to a client with lymphoma. The nurse recognizes that this plant alkaloid exerts its antineoplastic action primarily during which specific phase of cell division (IPMAT)?',
      options: [
        'Interphase (S-phase) by blocking purine and pyrimidine biosynthesis.',
        'Metaphase (M-phase) by inhibiting tubulin polymerization and arresting mitotic spindle formation.',
        'Anaphase by inhibiting topoisomerase II enzymes and preventing chromatid cleavage.',
        'Telophase by blocking cleavage furrow formation during cytokinesis.'
      ],
      correctIndex: 1,
      rationale: 'Vincristine is a cell-cycle-specific mitotic spindle poison (vinca alkaloid) that binds to tubulin and inhibits microtubule assembly, arresting dividing cells during Metaphase (M-phase) of mitosis. Antimetabolites (e.g., methotrexate, 5-fluorouracil) target Interphase (S-phase), while alkylating agents are cell-cycle-nonspecific.'
    }
  },
  {
    id: 'viral-gastroenteritis-acne-car',
    shortCode: 'ACNE CAR',
    title: 'Viruses Causing Diarrhea & Gastroenteritis (ACNE CAR)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The 7 major viral etiologies responsible for acute secretory diarrhea, vomiting, and dehydration.',
    memoryTip: '"ACNE CAR" — Adenovirus, Coronavirus, Norwalk virus (Norovirus), Enterovirus, Calicivirus, Astrovirus, Rotavirus. Prioritize fluid and electrolyte resuscitation and strict contact precautions!',
    highYield: true,
    tags: ['Infectious Disease', 'Gastroenteritis', 'Infection Control', 'Fluid & Electrolytes', 'Pediatrics'],
    letters: [
      {
        letter: 'A',
        term: 'Adenovirus (Enteric serotypes 40 & 41)',
        description: 'Major cause of persistent infantile diarrhea characterized by watery stools lasting 7 to 12 days, frequently accompanied by low-grade fever, nausea, and mild upper respiratory tract symptoms.',
        highlight: 'Prolonged watery diarrhea (1-2 weeks)'
      },
      {
        letter: 'C',
        term: 'Coronavirus (Enteric strains / SARS-CoV-2)',
        description: 'Infects gastrointestinal enterocytes expressing ACE2 receptors throughout the mucosal brush border, leading to malabsorption, secretory diarrhea, nausea, and abdominal cramps.',
        highlight: 'ACE2 enterocyte binding & GI upset'
      },
      {
        letter: 'N',
        term: 'Norwalk Virus (Norovirus)',
        description: 'Leading cause of epidemic nonbacterial gastroenteritis worldwide in schools, cruise ships, hospitals, and long-term care facilities. Manifests with sudden explosive projectile vomiting and watery diarrhea; highly resistant to alcohol hand rubs.',
        highlight: 'Epidemic outbreaks & soap/water handwashing'
      },
      {
        letter: 'E',
        term: 'Enterovirus (Echovirus & Coxsackievirus)',
        description: 'Transmitted via fecal-oral and respiratory routes; replicates extensively in intestinal lymphoid tissue (Peyer patches) causing acute diarrhea, rash, herpangina, or aseptic meningitis.',
        highlight: 'Fecal-oral transmission & systemic viremia'
      },
      {
        letter: 'C',
        term: 'Calicivirus (including Sapovirus)',
        description: 'Small non-enveloped RNA viruses causing acute-onset gastroenteritis, non-bloody diarrhea, and vomiting in both children and adults in congregate healthcare settings.',
        highlight: 'Sudden watery diarrhea & nausea'
      },
      {
        letter: 'A',
        term: 'Astrovirus',
        description: 'Characterized by a five- or six-pointed star appearance on electron microscopy; produces mild-to-moderate watery diarrhea, malaise, and fever primarily in pediatric and immunocompromised hosts.',
        highlight: 'Star-shaped capsid & pediatric diarrhea'
      },
      {
        letter: 'R',
        term: 'Rotavirus',
        description: 'The classic cause of severe, dehydrating watery diarrhea and vomiting in infants and toddlers globally; produces enterotoxin NSP4. Prevented effectively via oral live-attenuated vaccine series.',
        highlight: 'Severe infant dehydration & oral vaccine'
      }
    ],
    clinicalContext: 'In Medical-Surgical, emergency, and pediatric nursing, viral gastroenteritis leads rapidly to hypovolemia, electrolyte deficits (hypokalemia, hyponatremia), and metabolic acidosis due to intestinal bicarbonate wasting ("Base out the butt"). Nurses must enforce strict Contact Precautions, ensure appropriate hand hygiene agents (soap and water for non-enveloped Norovirus), initiate oral rehydration therapy (ORT) with isotonic electrolyte solutions, and avoid antimotility agents that prolong pathogen retention.',
    nclexPearls: [
      'Norovirus Hand Hygiene: Norovirus lacks a lipid envelope, rendering standard alcohol-based hand sanitizers ineffective. Healthcare workers MUST perform hand hygiene with soap and water for at least 20 seconds.',
      'Acid-Base Imbalance in Diarrhea: Severe diarrhea causes significant loss of alkaline intestinal secretions (rich in HCO3- and K+), resulting in normal anion-gap metabolic acidosis and hypokalemia.',
      'Oral Rehydration Therapy (ORT): For mild-to-moderate dehydration, oral rehydration solution (ORS with 2:1 glucose-to-sodium ratio utilizing the SGLT1 co-transporter) is superior to plain water, fruit juices, or sodas, which induce osmotic diarrhea.'
    ],
    practiceQuestion: {
      question: 'A medical-surgical unit is managing an institutional outbreak of acute gastroenteritis characterized by sudden projectile vomiting and watery diarrhea among several clients and healthcare workers. Norwalk virus (Norovirus) is confirmed. Which nursing action is mandatory to prevent nosocomial transmission?',
      options: [
        'Utilize alcohol-based hand rub before and after every client encounter.',
        'Perform mechanical handwashing with antimicrobial soap and water for at least 20 seconds.',
        'Isolate all affected clients in negative-pressure airborne isolation rooms.',
        'Administer prophylactic oral fluoroquinolone antibiotics to all exposed staff members.'
      ],
      correctIndex: 1,
      rationale: 'Norwalk virus (Norovirus, "N" in ACNE CAR) is a non-enveloped virus that is exceptionally resistant to alcohol-based hand sanitizers. Strict hand hygiene using antimicrobial soap and water with friction for at least 20 seconds is mandatory to mechanically remove viral particles from the hands. Clients require Contact Precautions (not Airborne), and antibiotics have no efficacy against viral gastroenteritis.'
    }
  },
  {
    id: 'carpal-bones-anatomy-sltp-ttch',
    shortCode: 'SLTP TTCH',
    title: 'Carpal Bones of the Wrist & Hand (Lateral to Medial)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The 8 carpal bones mapped from lateral (radial/thumb side) to medial (ulnar/pinky side) across proximal and distal rows.',
    memoryTip: '"She Looks Too Proud, Try To Chase Her" — Proximal row (Lateral to Medial): Scaphoid, Lunate, Triquetrum, Pisiform. Distal row (Lateral to Medial): Trapezium, Trapezoid, Capitate, Hamate. Watch out for scaphoid avascular necrosis!',
    highYield: true,
    tags: ['Musculoskeletal', 'Orthopedics', 'Anatomy', 'Assessment', 'Trauma'],
    letters: [
      {
        letter: 'S',
        term: 'Scaphoid (Proximal Row - Lateral)',
        description: 'Boat-shaped bone forming the floor of the anatomical snuffbox. Most commonly fractured carpal bone (FOOSH injury); highly prone to avascular necrosis (AVN) and nonunion due to retrograde distal-to-proximal arterial supply.',
        highlight: 'Anatomical snuffbox & avascular necrosis'
      },
      {
        letter: 'L',
        term: 'Lunate (Proximal Row)',
        description: 'Crescent/moon-shaped bone articulating with the radius. Most frequently dislocated carpal bone; anterior dislocation into the carpal tunnel compresses the median nerve, causing acute carpal tunnel syndrome.',
        highlight: 'Most commonly dislocated & median nerve'
      },
      {
        letter: 'T',
        term: 'Triquetrum (Proximal Row)',
        description: 'Pyramidal, three-cornered bone articulating with the pisiform and triangular fibrocartilage complex (TFCC). Second most commonly fractured carpal bone, typically via dorsal avulsion.',
        highlight: 'Pyramidal bone & TFCC articulation'
      },
      {
        letter: 'P',
        term: 'Pisiform (Proximal Row - Medial)',
        description: 'Small, pea-shaped sesamoid bone embedded within the flexor carpi ulnaris (FCU) tendon; palpated on the palmar-medial margin of the proximal wrist crease.',
        highlight: 'Sesamoid bone in FCU tendon'
      },
      {
        letter: 'T',
        term: 'Trapezium (Distal Row - Lateral)',
        description: 'Four-sided bone with a distinctive saddle-shaped articular facet that articulates directly with the first metacarpal ("Trapezium under the Thumb"); enables thumb opposition and circumduction.',
        highlight: 'Saddle joint with 1st metacarpal (thumb)'
      },
      {
        letter: 'T',
        term: 'Trapezoid (Distal Row)',
        description: 'Small, wedge-shaped bone wedged snugly between the trapezium and capitate; articulates distally with the second metacarpal base (index finger).',
        highlight: 'Articulates with 2nd metacarpal'
      },
      {
        letter: 'C',
        term: 'Capitate (Distal Row)',
        description: 'The largest carpal bone ("head" of the carpus) positioned centrally in the distal row; forms the cornerstone of the transverse carpal arch and articulates distally with the third metacarpal.',
        highlight: 'Largest carpal bone & central keystone'
      },
      {
        letter: 'H',
        term: 'Hamate (Distal Row - Medial)',
        description: 'Wedge-shaped bone featuring a prominent hook-like anterior projection (hamulus). Forms the lateral wall of Guyon canal; hook fractures (golf/baseball impacts) risk ulnar nerve and artery impingement.',
        highlight: 'Hook of hamate & ulnar nerve/Guyon canal'
      }
    ],
    clinicalContext: 'In Medical-Surgical, emergency, and orthopedic nursing, assessing wrist trauma following a Fall Onto an Outstretched Hand (FOOSH) requires anatomical precision. Palpating localized tenderness in the anatomical snuffbox indicates an occult scaphoid fracture requiring prompt thumb spica immobilization to prevent avascular necrosis. Neurovascular checks evaluate radial, median (tested via thumb opposition and sensation at the index fingertip), and ulnar nerves (tested via finger abduction and fifth-digit sensation).',
    nclexPearls: [
      'Occult Scaphoid Fracture Management: A client presenting with anatomical snuffbox pain after a FOOSH injury must be immobilized in a thumb spica splint/cast even if initial X-rays are negative, because fracture lines may not appear until bone reabsorption occurs in 10-14 days.',
      'Retrograde Blood Supply: The scaphoid receives arterial flow from distal branches entering at its waist/tubercle; proximal pole fractures sever this supply, creating high risk for avascular necrosis (AVN) and nonunion.',
      'Carpal Tunnel Assessments: Phalen maneuver (holding wrists in full flexion for 60 seconds) and Tinel sign (percussing over the volar median nerve) reproduce paresthesias in the median nerve distribution (digits 1, 2, 3, and half of 4).'
    ],
    practiceQuestion: {
      question: 'An adult client presents to the emergency department following a fall onto an outstretched hand (FOOSH). Physical assessment reveals localized tenderness upon palpation of the anatomical snuffbox. Initial wrist radiographs show no definitive fracture line. Which nursing action is the priority?',
      options: [
        'Discharge the client with instructions to perform wrist range-of-motion exercises as tolerated.',
        'Immobilize the wrist in a thumb spica splint and arrange for repeat radiographs in 10 to 14 days.',
        'Apply an elastic compression bandage and advise ice application for 24 hours.',
        'Prepare the client for immediate closed reduction and internal screw fixation.'
      ],
      correctIndex: 1,
      rationale: 'Tenderness in the anatomical snuffbox after a FOOSH injury is classic for a scaphoid fracture (the "S" in "She Looks Too Proud"). Scaphoid fractures are frequently radiographically occult initially. Because the scaphoid possesses a retrograde distal-to-proximal blood supply, undiagnosed fractures carry a high risk of nonunion and avascular necrosis (AVN). Standard protocol mandates immobilization in a thumb spica splint or cast and repeat imaging in 10 to 14 days when osteoclastic resorption makes fracture lines visible.'
    }
  },
  {
    id: 'scalp-layers-scalp',
    shortCode: 'SCALP',
    title: 'Layers of the Scalp (SCALP)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The 5 anatomical strata of the scalp from superficial skin to deep cranial pericranium.',
    memoryTip: 'SCALP — Skin, Connective tissue (dense), Aponeurosis (galea), Loose areolar tissue (danger zone), Pericranium (periosteum).',
    highYield: true,
    tags: ['Neurological', 'Trauma', 'Surgical Nursing', 'Head Injury', 'Anatomy'],
    letters: [
      {
        letter: 'S',
        term: 'Skin',
        description: 'Thick, hair-bearing cutaneous layer containing abundant sebaceous and sweat glands; firmly bound to underlying epicranial aponeurosis and common site of sebaceous cysts and traumatic scalp lacerations.',
        highlight: 'Hair-bearing cutaneous layer'
      },
      {
        letter: 'C',
        term: 'Connective Tissue (Dense Subcutaneous)',
        description: 'Richly vascularized and innervated fibrous layer where collagenous septa tether blood vessel walls open; severed blood vessels cannot spontaneously retract or constrict, resulting in profuse arterial bleeding from scalp wounds.',
        highlight: 'Dense vascular layer & profuse bleeding'
      },
      {
        letter: 'A',
        term: 'Aponeurosis (Galea Aponeurotica)',
        description: 'Tough, broad fibrous tendon uniting the occipital and frontal bellies of the occipitofrontalis muscle. Deep lacerations penetrating the galea gape widely under tension and require layered two-stage closure.',
        highlight: 'Epicranial aponeurosis & gaping wounds'
      },
      {
        letter: 'L',
        term: 'Loose Areolar Tissue ("Danger Zone")',
        description: 'Spongy, flexible cleavage plane enabling free scalp mobility over the calvarium. Traversed by valveless emissary veins connecting scalp veins to intracranial dural venous sinuses; infections here can spread directly into the meninges (meningitis, cavernous sinus thrombosis).',
        highlight: 'Danger zone & emissary vein infection spread'
      },
      {
        letter: 'P',
        term: 'Pericranium (Skull Periosteum)',
        description: 'Dense fibrous outer periosteal lining of the cranial calvarial bones; firmly attached at cranial sutures. Subperiosteal bleeding (cephalohematoma) is strictly confined by suture margins, unlike subgaleal hemorrhages.',
        highlight: 'Calvarial periosteum & suture confinement'
      }
    ],
    clinicalContext: 'In Emergency and Medical-Surgical trauma nursing, head and scalp injuries are frequent. The nurse must recognize that dense connective tissue lacerations bleed excessively (risk of hypovolemic shock in pediatric/elderly clients) requiring direct pressure and pressure dressings. Furthermore, understanding the "danger area" (loose areolar layer) and pericranium distinguishes subgaleal hemorrhage (diffuse, crosses sutures, potentially massive blood loss) from cephalohematoma (contained by pericranium, does not cross suture lines), as well as intracranial infection spread via emissary veins.',
    nclexPearls: [
      'Profuse Scalp Bleeding: The dense connective tissue binds blood vessel walls open; lacerations bleed copiously and require rapid direct manual pressure or sterile staple/suture closure to prevent hemorrhagic shock.',
      'The "Danger Area" of the Scalp: The loose areolar connective tissue contains valve-less emissary veins that penetrate the skull to drain into intracranial venous sinuses; scalp infections in this layer can easily seed intracranial abscesses, meningitis, or septic cavernous sinus thrombosis.',
      'Subgaleal Hemorrhage vs. Cephalohematoma: Subgaleal hemorrhage occurs in the loose areolar layer beneath the aponeurosis and crosses cranial suture lines, potentially holding large blood volumes; a cephalohematoma forms under the pericranium and is strictly confined by suture lines.'
    ],
    practiceQuestion: {
      question: 'An emergency department nurse assesses a trauma client who sustained a deep scalp laceration and blunt head trauma. The nurse notes that the wound edges are widely separated and gaping, with bleeding originating from beneath the fibrous epicranial layer. Blood has accumulated across cranial suture lines. Which scalp layer (SCALP) contains the emissary veins and allows fluid or infection to spread freely across suture boundaries?',
      options: [
        'Connective tissue (dense subcutaneous layer)',
        'Aponeurosis (galea aponeurotica)',
        'Loose areolar connective tissue ("danger zone")',
        'Pericranium (skull periosteum)'
      ],
      correctIndex: 2,
      rationale: 'The loose areolar tissue (the "L" in SCALP) is clinically termed the "danger zone of the scalp" because it is a loose, expansive cleavage plane containing valveless emissary veins that connect superficial scalp veins directly to intracranial dural venous sinuses. Hematomas (subgaleal hemorrhages) or infections within this layer can spread unrestricted across cranial sutures from the orbital ridges anteriorly to the nuchal line posteriorly, posing severe risks of massive blood sequestration and intracranial infectious seeding.'
    }
  },
  {
    id: 'joint-movements-feed-pipe-card-sharp',
    shortCode: 'FEED PIPE CARD SHARP',
    title: 'Types of Joint Movements (FEED PIPE CARD SHARP)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Comprehensive classification of all 16 physiological joint motions evaluated during musculoskeletal and range-of-motion (ROM) nursing assessments.',
    memoryTip: 'FEED PIPE CARD SHARP — FEED PIPE (Flexion, Extension, Eversion, Dorsiflexion, Pronation, Inversion, Plantarflexion, Elevation) + CARD SHARP (Circumduction, Abduction, Rotation, Depression, Supination, Hyperextension, Adduction, Retraction, Protraction).',
    highYield: true,
    tags: ['Musculoskeletal', 'Physical Assessment', 'Rehabilitation', 'Mobility', 'Orthopedics'],
    letters: [
      {
        letter: 'F',
        term: 'Flexion',
        description: 'Bending movement that decreases the angle between two articulating bones or body parts (e.g., bending elbow or knee).',
        highlight: 'Decreases joint angle'
      },
      {
        letter: 'E',
        term: 'Extension',
        description: 'Straightening movement that increases the angle between two articulating bones back toward anatomical neutral position (e.g., straightening a bent elbow or knee).',
        highlight: 'Increases joint angle'
      },
      {
        letter: 'E',
        term: 'Eversion',
        description: 'Turning the sole of the foot outward (laterally), away from the sagittal midline of the body.',
        highlight: 'Sole turned outward laterally'
      },
      {
        letter: 'D',
        term: 'Dorsiflexion',
        description: 'Elevating the foot and toes superiorly toward the shin/tibia. Inability to dorsiflex indicates foot drop caused by common peroneal (fibular) nerve injury.',
        highlight: 'Toes pointed toward shin & foot drop indicator'
      },
      {
        letter: 'P',
        term: 'Pronation',
        description: 'Rotating the forearm so the palm faces posteriorly or downward ("pouring out soup"), or inward rolling of the foot arch.',
        highlight: 'Palm facing posteriorly/downward'
      },
      {
        letter: 'I',
        term: 'Inversion',
        description: 'Turning the sole of the foot inward (medially), toward the sagittal midline of the body; the primary mechanism of lateral ankle sprains (ATFL injury).',
        highlight: 'Sole turned inward medially'
      },
      {
        letter: 'P',
        term: 'Plantarflexion',
        description: 'Bending the foot and toes downward toward the ground (pointing the toes; mediated by the tibial nerve, gastrocnemius, and Achilles tendon).',
        highlight: 'Toes pointed downward'
      },
      {
        letter: 'E',
        term: 'Elevation',
        description: 'Lifting or raising a body part superiorly along the frontal plane (e.g., shrugging shoulders upward via the trapezius muscle).',
        highlight: 'Raising body part superiorly'
      },
      {
        letter: 'C',
        term: 'Circumduction',
        description: 'Sequential movement of a distal limb segment in a 360-degree cone (combining flexion, abduction, extension, and adduction) around a ball-and-socket joint (shoulder, hip).',
        highlight: 'Conical 360-degree limb rotation'
      },
      {
        letter: 'A',
        term: 'Abduction',
        description: 'Moving a limb or digit laterally away from the midline of the body in the coronal plane.',
        highlight: 'Moving away from midline'
      },
      {
        letter: 'R',
        term: 'Rotation',
        description: 'Pivoting or twisting a bone around its own longitudinal axis (e.g., turning head side to side at the atlantoaxial joint; internal/external rotation of hip).',
        highlight: 'Pivoting around longitudinal axis'
      },
      {
        letter: 'D',
        term: 'Depression',
        description: 'Lowering an elevated body part inferiorly along the frontal plane (e.g., lowering shrugged shoulders back down or opening the jaw/mandible).',
        highlight: 'Lowering body part inferiorly'
      },
      {
        letter: 'S',
        term: 'Supination',
        description: 'Rotating the forearm so the palm faces anteriorly or upward ("holding a bowl of soup"), restoring anatomical position.',
        highlight: 'Palm facing anteriorly/upward'
      },
      {
        letter: 'H',
        term: 'Hyperextension',
        description: 'Extending a joint past its normal anatomical neutral zero plane (e.g., tilting head backward to look at the ceiling).',
        highlight: 'Extension beyond anatomical neutral'
      },
      {
        letter: 'A',
        term: 'Adduction',
        description: 'Moving a limb or digit medially toward the midline of the body in the coronal plane.',
        highlight: 'Moving toward midline'
      },
      {
        letter: 'R',
        term: 'Retraction',
        description: 'Posterior displacement or backward gliding movement of a body part parallel to the horizontal plane (e.g., pulling jaw backward or pinching scapulae together).',
        highlight: 'Backward gliding movement'
      },
      {
        letter: 'P',
        term: 'Protraction',
        description: 'Anterior displacement or forward gliding movement of a body part parallel to the horizontal plane (e.g., jutting the jaw forward or rounding shoulders).',
        highlight: 'Forward gliding movement'
      }
    ],
    clinicalContext: 'In Medical-Surgical, orthopedic, and rehabilitative nursing, documenting active and passive range of motion (ROM) is foundational for preventing contractures, evaluating stroke recovery, assessing joint mobility in arthritis, monitoring traction, and testing specific nerve roots (e.g., common peroneal nerve injury manifesting as loss of dorsiflexion / foot drop).',
    nclexPearls: [
      'Foot Drop & Dorsiflexion: Compression of the common peroneal (fibular) nerve at the fibular head leads to loss of foot dorsiflexion and eversion, causing "foot drop." Nurses prevent this with high-top sneakers, footboards, or ankle-foot orthoses (AFO).',
      'Inversion Ankle Sprains: The anterior talofibular ligament (ATFL) is the most commonly torn ligament in inversion injuries; managed with RICE (Rest, Ice, Compression, Elevation).',
      'Supination vs. Pronation: "Supination = holding a cup of Soup (palm up); Pronation = Pouring it out (palm down)."',
      'Total Hip Arthroplasty (Posterior Approach) Precautions: Avoid hip flexion > 90°, avoid adduction past midline (use abduction pillow), and avoid internal rotation to prevent prosthesis dislocation!'
    ],
    practiceQuestion: {
      question: 'A medical-surgical nurse is developing a postoperative care plan for a client who underwent a right total hip arthroplasty via a posterior surgical approach. To prevent dislocation of the femoral head prosthesis, which joint movements (FEED PIPE CARD SHARP) must the nurse instruct the client and staff to strictly avoid?',
      options: [
        'Flexion beyond 90 degrees, adduction past the midline, and internal rotation.',
        'Extension beyond anatomical neutral, abduction away from the midline, and supination.',
        'Plantarflexion, eversion, and external rotation of the affected extremity.',
        'Circumduction, elevation of the shoulder girdle, and hyperextension of the knee.'
      ],
      correctIndex: 0,
      rationale: 'Following a posterior-approach total hip arthroplasty, the hip joint capsule is vulnerable to posterior dislocation. The client must strictly avoid: (1) hip flexion beyond 90° (e.g., bending over to tie shoes, sitting in low chairs), (2) adduction of the operated leg across the midline (an abduction wedge/pillow is placed between the legs), and (3) internal rotation.'
    }
  },
  {
    id: 'diaphragm-innervation-c3-c4-c5',
    shortCode: 'CUT C4',
    title: 'Diaphragm Innervation & Spinal Injury (Cut C4, Breathe No More)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Phrenic nerve roots (C3, C4, C5) innervating the diaphragm and mechanical ventilatory dependence in high cervical spinal cord injury.',
    memoryTip: 'Cut C4, breathe no more! ("C3, C4, C5 keep the diaphragm alive") — Phrenic nerve motor control of diaphragmatic respiration.',
    highYield: true,
    tags: ['Neurological', 'Spinal Cord Injury', 'Respiratory', 'Critical Care', 'Emergency Nursing'],
    letters: [
      {
        letter: 'C3',
        term: 'Cervical Root 3',
        description: 'Superior contributing motor branch of the cervical plexus that forms the phrenic nerve; high-cervical trauma involving C3 eliminates cephalic diaphragmatic drive.',
        highlight: 'Phrenic nerve superior branch'
      },
      {
        letter: 'C4',
        term: 'Cervical Root 4 ("Cut C4, Breathe No More")',
        description: 'The major, primary motor root supplying the phrenic nerve. Transection or complete cord transection at or above C4 leads to immediate loss of diaphragmatic excursion, requiring lifelong mechanical ventilatory support.',
        highlight: 'Primary phrenic root & ventilator dependence'
      },
      {
        letter: 'C5',
        term: 'Cervical Root 5',
        description: 'Inferior motor root contributor to the phrenic nerve. Injuries strictly below C4 (e.g. C5-C6) spare primary diaphragmatic motor supply but paralyze intercostal and abdominal respiratory muscles.',
        highlight: 'Inferior phrenic root branch'
      }
    ],
    clinicalContext: 'In Emergency, Trauma, and ICU Medical-Surgical nursing, assessing respiratory function in Spinal Cord Injury (SCI) is prioritized above all else (ABC priority). Transection or severe edema above or at C4 paralyses the diaphragm, leaving the patient completely ventilator-dependent for life. Injuries from C5 through T6 spare the diaphragm but paralyze intercostal and abdominal expiratory muscles, resulting in diaphragmatic/abdominal breathing, inability to cough effectively, and extreme risk for atelectasis and pneumonia.',
    nclexPearls: [
      'Priority Assessment in SCI: Airway, breathing pattern, and vital capacity are top priority in any cervical spine injury. Ascending post-traumatic spinal cord edema during the first 24-48 hours can convert a C5-C6 injury into an emergent respiratory arrest (C3-C4 level impairment).',
      'Quad-Cough (Assisted Cough): Clients with SCI between C5 and T6 retain diaphragmatic breathing but lose abdominal expiratory muscles; the nurse must provide assisted "quad-cough" (inward and upward pressure on the epigastrium during exhalation) to clear bronchial secretions.',
      'Spinal Shock vs. Neurogenic Shock: Neurogenic shock occurs with cervical/high thoracic injuries (T6 and above) causing loss of sympathetic tone: classic triad of hypotension, bradycardia, and hypothermia (warm, dry, flushed skin from vasodilation).'
    ],
    practiceQuestion: {
      question: 'A client is admitted to the neuro-trauma intensive care unit following a diving accident resulting in an acute cervical spinal cord injury at the C4 level. During the initial hours post-injury, which clinical assessment finding demands the nurse\'s immediate priority intervention?',
      options: [
        'Paralysis and loss of sensation in all four extremities (tetraplegia).',
        'Weak, shallow respirations with a dropping tidal volume and paradoxical abdominal movement.',
        'Urinary retention with a palpably distended suprapubic bladder.',
        'Absence of deep tendon reflexes in the lower extremities (flaccidity).'
      ],
      correctIndex: 1,
      rationale: '"Cut C4, breathe no more" (C3, C4, C5 innervate the diaphragm via the phrenic nerve). An injury at or above C4 directly impairs or eliminates phrenic nerve motor transmission, causing diaphragmatic failure. Weak, shallow breathing, decreasing tidal volume, and paradoxical abdominal movement indicate impending acute respiratory failure, requiring immediate endotracheal intubation and mechanical ventilation. Airway and breathing supersede motor, sensory, and urinary deficits.'
    }
  },
  {
    id: 'erection-ejaculation-point-and-shoot',
    shortCode: 'POINT & SHOOT',
    title: 'Autonomic Control of Sexual Function (Point and Shoot)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Differentiating parasympathetic (erection) versus sympathetic (ejaculation) autonomic innervation in reproductive, neurological, and pharmacological nursing.',
    memoryTip: 'Point and Shoot! — Parasympathetic = Point (Erection); Sympathetic = Shoot (Ejaculation).',
    highYield: true,
    tags: ['Neurological', 'Genitourinary', 'Pharmacology', 'Spinal Cord Injury', 'Autonomic Nervous System'],
    letters: [
      {
        letter: 'P',
        term: 'Point (Parasympathetic Nervous System)',
        description: 'Sacral autonomic outflow (pelvic splanchnic nerves S2–S4) releases acetylcholine and nitric oxide (NO), stimulating cGMP production to relax corporal smooth muscle and dilate cavernosal helicine arteries, producing vascular engorgement and Erection.',
        highlight: 'Parasympathetic (S2-S4) = Erection'
      },
      {
        letter: 'S',
        term: 'Shoot (Sympathetic Nervous System)',
        description: 'Thoracolumbar autonomic outflow (T11–L2 via the hypogastric nerve plexus) stimulates rhythmic contractions of the vas deferens, seminal vesicles, and prostate gland, coupled with internal urethral sphincter closure, driving Ejaculation and emission.',
        highlight: 'Sympathetic (T11-L2) = Ejaculation'
      }
    ],
    clinicalContext: 'In Medical-Surgical, neurological, and urological nursing, understanding autonomic sexual physiology is critical when caring for clients with Spinal Cord Injuries (distinguishing upper motor neuron reflexogenic erections via S2-S4 from psychogenic erections via T11-L2), radical prostatectomies (cavernous nerve injury leading to ED), benign prostatic hyperplasia / hypertension (alpha-1 blockers causing retrograde ejaculation), and phosphodiesterase-5 (PDE5) inhibitor therapy (contraindication with nitrates).',
    nclexPearls: [
      'PDE5 Inhibitors & Nitrates: Sildenafil, Tadalafil, and Vardenafil amplify parasympathetic-mediated nitric oxide/cGMP signaling. Concurrent administration of nitroglycerin or isosorbide dinitrate causes profound, life-threatening systemic vasodilation and refractory shock; STRICTLY CONTRAINDICATED!',
      'Autonomic Dysreflexia in SCI: In clients with SCI at T6 or above, sexual stimulation, ejaculation, or bladder/bowel distension can trigger life-threatening autonomic dysreflexia (hypertensive emergency, pounding headache, bradycardia, profuse sweating above lesion).',
      'Alpha-Blockers & Retrograde Ejaculation: Sympathetic tone normally closes the internal urethral sphincter during ejaculation; alpha-1 adrenergic antagonists (e.g., tamsulosin for BPH) prevent sphincter closure, causing harmless retrograde ejaculation into the bladder ("dry ejaculation").'
    ],
    practiceQuestion: {
      question: 'A male client with erectile dysfunction is being evaluated in the urology clinic. The nurse reviews his home medications and observes that he takes isosorbide mononitrate daily for chronic stable angina. The client asks the nurse for a prescription for sildenafil. What is the nurse\'s priority response?',
      options: [
        '"Sildenafil can safely be taken as long as it is scheduled at least 2 hours before your nitrate dose."',
        '"Taking sildenafil with isosorbide mononitrate can precipitate severe, life-threatening hypotension and is strictly contraindicated."',
        '"Sildenafil acts through sympathetic nerves, so it will not interact with your cardiovascular nitrate medications."',
        '"You will require a higher dose of sildenafil to overcome the vascular effects of your nitrate therapy."'
      ],
      correctIndex: 1,
      rationale: 'Erection is mediated by the Parasympathetic nervous system ("Point" in Point and Shoot) via the release of nitric oxide (NO), which stimulates cyclic guanosine monophosphate (cGMP) causing vascular smooth muscle relaxation. Sildenafil inhibits PDE5, preventing cGMP degradation. Nitrates are exogenous nitric oxide donors. Combining nitrates with PDE5 inhibitors causes synergistic, massive vasodilation leading to refractory hypotension, myocardial infarction, and cardiovascular collapse; this combination is absolutely contraindicated.'
    }
  },
  {
    id: 'heart-valves-location-aptm',
    shortCode: 'APTM',
    title: 'Heart Valve Auscultation & Anatomical Order (APTM)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Anatomical order and surface auscultation landmarks of the 4 cardiac valves across the precordium from right to left.',
    memoryTip: '“A Permanently Temperamental Man” (APTM) — Aortic (2nd ICS R), Pulmonic (2nd ICS L), Tricuspid (4th/5th ICS LSB), Mitral (5th ICS MCL / Apex).',
    highYield: true,
    tags: ['Cardiovascular', 'Physical Assessment', 'Heart Murmurs', 'Auscultation', 'Telemetry'],
    letters: [
      {
        letter: 'A',
        term: 'Aortic Valve (2nd ICS, Right Sternal Border)',
        description: 'Primary listening post for aortic valve sounds and closure (contributes to S2). Location where aortic stenosis (crescendo-decrescendo harsh systolic ejection murmur radiating to the carotids) and aortic regurgitation (early blowing diastolic decrescendo murmur) are best heard.',
        highlight: '2nd ICS right sternal border & aortic murmurs'
      },
      {
        letter: 'P',
        term: 'Pulmonic Valve (2nd ICS, Left Sternal Border)',
        description: 'Primary landmark for pulmonic valve sounds and closure. Best auscultatory area for physiological splitting of S2 (widening on inspiration), pulmonary hypertension (accentuated P2), and pulmonic stenosis murmurs.',
        highlight: '2nd ICS left sternal border & S2 splitting'
      },
      {
        letter: 'T',
        term: 'Tricuspid Valve (4th–5th ICS, Lower Left Sternal Border)',
        description: 'Atrioventricular valve between the right atrium and right ventricle. Landmark for detecting tricuspid regurgitation (holosystolic murmur accentuated during inspiration, known as Carvallo sign) and right ventricular heave.',
        highlight: '4th-5th ICS left sternal border & Carvallo sign'
      },
      {
        letter: 'M',
        term: 'Mitral Valve (5th ICS, Left Midclavicular Line / Apex)',
        description: 'Bicuspid atrioventricular valve at the cardiac apex and Point of Maximal Impulse (PMI). Loudest area for S1; site to evaluate apical pulse for 60 seconds (digoxin assessment), mitral stenosis (opening snap and low-pitched diastolic rumble), and mitral regurgitation (holosystolic murmur radiating to the left axilla).',
        highlight: '5th ICS left MCL, apical pulse & PMI'
      }
    ],
    clinicalContext: 'In Cardiovascular and Medical-Surgical nursing, cardiac assessment requires systematic precordial auscultation using both the diaphragm (high-pitched sounds like S1, S2, systolic ejection murmurs) and the bell (low-pitched sounds like S3, S4, and mitral stenosis rumbles). Assessing the apical pulse at the mitral area for a full 60 seconds is mandatory before administering digitalis glycosides (e.g., digoxin, holding if pulse < 60 bpm).',
    nclexPearls: [
      'Precordial Auscultation Order: Follow the path of blood flow across the chest wall: Aortic (2nd ICS Right) → Pulmonic (2nd ICS Left) → [Erb\'s Point at 3rd ICS Left] → Tricuspid (4th–5th ICS Lower Left Sternal Border) → Mitral (5th ICS Left Midclavicular Line).',
      'Apical Pulse & Digoxin: Always auscultate the apical pulse at the Mitral area (5th ICS, left MCL) for 1 full minute prior to administering Digoxin; hold medication and notify the provider if heart rate is < 60 bpm (adults) or < 90–110 bpm (infants).',
      'Bell vs. Diaphragm: Use the Diaphragm with firm pressure for normal high-pitched heart sounds (S1, S2, pericardial rubs); use the Bell with light pressure for low-pitched sounds (S3 gallop in heart failure, S4 in hypertension, mitral stenosis rumble).'
    ],
    practiceQuestion: {
      question: 'A medical-surgical nurse is preparing to administer morning oral digoxin to a client with heart failure and atrial fibrillation. Prior to administration, at which anatomical landmark should the nurse auscultate the client\'s apical pulse for 60 seconds (APTM)?',
      options: [
        'Second intercostal space at the right sternal border',
        'Second intercostal space at the left sternal border',
        'Fourth intercostal space at the lower left sternal border',
        'Fifth intercostal space at the left midclavicular line'
      ],
      correctIndex: 3,
      rationale: 'The apical pulse (point of maximal impulse, PMI) is auscultated over the Mitral valve area (the "M" in "A Permanently Temperamental Man" / APTM), situated at the fifth intercostal space at the left midclavicular line. For clients receiving digoxin, the apical pulse must be auscultated for a full 60 seconds; digoxin must be withheld and the prescriber notified if the apical heart rate is below 60 beats/min in an adult. Options 1, 2, and 3 correspond to the aortic, pulmonic, and tricuspid auscultatory areas, respectively.'
    }
  },
  {
    id: 'cancer-patient-care-focus',
    shortCode: 'CANCER',
    title: 'Focus of Nursing Care in Clients with Cancer (CANCER)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Core nursing priorities for oncology patients undergoing antineoplastic therapy, palliative care, and recovery.',
    memoryTip: 'CANCER — Chemotherapy, Assess body image disturbance, Nutritional needs with N/V, Comfort from pain, Effective response evaluation, Rest for patient and family.',
    highYield: true,
    tags: ['Oncology', 'Chemotherapy', 'Pain Management', 'Palliative Care', 'Nutrition'],
    letters: [
      {
        letter: 'C',
        term: 'Chemotherapy (Administration & Precautions)',
        description: 'Strict adherence to cytotoxic precautions (double chemo gloves, non-permeable gown, face shield during administration and handling bodily fluids for 48 hours). Verify central venous catheter patency and blood return before infusing vesicants to prevent extravasation tissue necrosis; monitor for nadir myelosuppression (ANC < 500 = neutropenic precautions).',
        highlight: 'Cytotoxic precautions & vesicant extravasation prevention'
      },
      {
        letter: 'A',
        term: 'Assess Body Image Disturbance (Alopecia & Surgeries)',
        description: 'Evaluate psychological distress and self-concept alteration stemming from treatment-induced hair loss (alopecia), mastectomy, limb amputation, surgical scars, or ostomies. Provide empathetic counseling, explain that hair loss is temporary with regrowth starting 1–2 months post-chemotherapy, and encourage wig selection prior to total hair shedding.',
        highlight: 'Alopecia coping & body image adaptation'
      },
      {
        letter: 'N',
        term: 'Nutritional Needs (Nausea, Vomiting & Stomatitis)',
        description: 'Combat chemotherapy-induced nausea and vomiting (CINV) and cachexia. Administer prophylactic 5-HT3 receptor antagonists (ondansetron) 30–60 minutes prior to chemotherapy. Provide high-calorie, high-protein small frequent meals at room temperature (avoiding nauseating strong odors); manage mucositis with soft toothbrushes and bland salt-soda rinses (avoid alcohol mouthwashes).',
        highlight: 'Prophylactic antiemetics & high-protein nutrition'
      },
      {
        letter: 'C',
        term: 'Comfort from Pain (Around-the-Clock Analgesia)',
        description: 'Provide proactive, scheduled Around-the-Clock (ATC) analgesia with long-acting opioids (extended-release morphine, transdermal fentanyl) plus fast-acting opioids for breakthrough pain. Do not withhold opioids due to unfounded fear of addiction in malignant disease; aggressively manage opioid-induced constipation with daily stool softeners and stimulant laxatives.',
        highlight: 'Scheduled ATC opioid therapy & breakthrough relief'
      },
      {
        letter: 'E',
        term: 'Effective Response to Treatment (Evaluate Outcomes)',
        description: 'Evaluate clinical, radiological, and laboratory response to antineoplastic therapy (shrinking tumor burden, decreasing tumor markers like CEA/PSA/CA-125, resolving paraneoplastic syndromes). Vigilantly monitor for oncologic emergencies: Tumor Lysis Syndrome (hyperkalemia, hyperuricemia, hyperphosphatemia, hypocalcemia), Superior Vena Cava Syndrome, and Spinal Cord Compression.',
        highlight: 'Monitoring therapeutic response & oncologic emergencies'
      },
      {
        letter: 'R',
        term: 'Rest (Energy Conservation for Patient & Family)',
        description: 'Manage profound cancer-related fatigue (CRF). Implement energy conservation strategies: clustering nursing care, pacing activities, scheduling planned daytime rest intervals without disrupting nocturnal sleep, and connecting exhausted family caregivers with respite services and community oncology support networks.',
        highlight: 'Cancer-related fatigue & caregiver respite'
      }
    ],
    clinicalContext: 'In Medical-Surgical and Oncology nursing, clients with cancer face complex multisystem stressors spanning bone marrow suppression, treatment side effects (CINV, mucositis, neuropathy), debilitating chronic and breakthrough pain, and profound existential fatigue. A structured care plan addressing chemotherapy precautions, nutrition, pain relief, body image, treatment efficacy, and rest delivers holistic, family-centered oncology care.',
    nclexPearls: [
      'Anticipatory Antiemetic Administration: Administer prophylactic 5-HT3 receptor antagonists (ondansetron) 30 to 60 minutes before chemotherapy infusion, not after nausea begins.',
      'Cancer Pain Principle: Severe chronic cancer pain must be managed with around-the-clock (ATC) scheduled dosing of long-acting opioids (e.g., transdermal fentanyl or oral extended-release morphine) with immediate-release opioids available for breakthrough pain. Never withhold opioids due to fear of addiction in advanced cancer.',
      'Stomatitis / Mucositis Nursing Interventions: Use a soft-bristled toothbrush or sponge swabs, rinse mouth with normal saline or sodium bicarbonate rinses every 2 hours, avoid commercial alcohol-based mouthwashes and spicy/citrus foods, and apply prescribed topical anesthetic rinses (viscous lidocaine / "magic mouthwash") before meals.'
    ],
    practiceQuestion: {
      question: 'A medical-surgical nurse is planning care for a client with metastatic colon cancer who is receiving palliative chemotherapy. The client reports severe unrelenting visceral pain rated 8/10, anorexia with significant weight loss, and nausea. Which nursing intervention reflects the highest-standard evidence-based cancer care (CANCER)?',
      options: [
        'Administer prescribed opioid analgesics on an around-the-clock (ATC) scheduled regimen with supplemental immediate-release doses for breakthrough pain.',
        'Administer opioid analgesics only when the client requests them (PRN) to prevent physical dependence and tolerance.',
        'Encourage the client to consume large, dense meals three times daily and rinse the mouth with commercial alcohol mouthwash.',
        'Advise the client that alopecia and body image changes will be permanent following modern chemotherapy regimens.'
      ],
      correctIndex: 0,
      rationale: 'Optimal cancer pain management ("C" in CANCER for Comfort from pain) requires scheduled, around-the-clock (ATC) administration of long-acting analgesics with PRN fast-acting doses for breakthrough pain. Fear of addiction or dependence is never a valid rationale to withhold or delay opioids in cancer pain management. Antiemetics should be given prophylactically, meals should be small and frequent, commercial alcohol mouthwashes should be strictly avoided due to mucosal drying/irritation, and alopecia is typically temporary with hair regrowth following treatment cessation.'
    }
  },
  {
    id: 'focal-neuro-deficits-ten-ss',
    shortCode: '10 S\'s',
    title: 'Etiologies of Focal Neurological Deficits (10 S\'s)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Differential diagnostic causes of acute focal neurological deficits (hemiparesis, aphasia, facial droop, cranial nerve palsies).',
    memoryTip: '10 S’s — Sugar (glucose derangements), Stroke, Seizure (Todd’s paralysis), Subdural hematoma, Subarachnoid hemorrhage, Space-occupying lesion, Spinal cord syndromes, Somatoform, Sclerosis (MS), Some migraines.',
    highYield: true,
    tags: ['Neurological', 'Stroke', 'Emergency Nursing', 'Critical Care', 'Differential Diagnosis'],
    letters: [
      {
        letter: 'S',
        term: 'Sugar (Hypoglycemia & Hyperglycemia)',
        description: 'Severe hypoglycemia (<50–60 mg/dL) or hyperosmolar hyperglycemic state (HHS) frequently produces acute focal neurological deficits (unilateral hemiparesis, facial asymmetry, dysarthria) that precisely mimic acute ischemic stroke. Bedside capillary glucose measurement is the mandatory first diagnostic action!',
        highlight: 'Check blood glucose first to rule out stroke mimic'
      },
      {
        letter: 'S',
        term: 'Stroke (Ischemic or Hemorrhagic CVA)',
        description: 'Acute vascular occlusion or intracranial bleeding causing sudden focal motor/sensory deficits, aphasia, or hemineglect. Emergent non-contrast head CT is performed immediately to exclude hemorrhage before administering IV thrombolytics (tPA/alteplase within 3 to 4.5 hours of symptom onset).',
        highlight: 'Acute stroke & emergent non-contrast head CT'
      },
      {
        letter: 'S',
        term: 'Seizure (Todd\'s Paralysis)',
        description: 'Transient focal motor weakness or paresis (typically unilateral arm or leg weakness) occurring in the post-ictal phase following focal or generalized epileptic seizures; typically resolves spontaneously within 24 to 48 hours without acute vascular intervention.',
        highlight: 'Post-ictal transient unilateral weakness'
      },
      {
        letter: 'S',
        term: 'Subdural Hematoma (SDH)',
        description: 'Venous bleeding from sheared bridging veins between the dura and arachnoid mater, commonly seen in older adults or alcoholics following minor head trauma. Can present subacutely or chronically with fluctuating confusion, headache, and progressive focal hemiparesis.',
        highlight: 'Bridging cortical vein rupture & insidious decline'
      },
      {
        letter: 'S',
        term: 'Subarachnoid Hemorrhage (SAH)',
        description: 'Arterial bleeding into the subarachnoid space, classically caused by a ruptured berry aneurysm. Hallmarked by sudden, excruciating "thunderclap headache" ("worst headache of my life"), meningismus (nuchal rigidity), photophobia, and cranial nerve III palsy.',
        highlight: 'Thunderclap headache & ruptured aneurysm'
      },
      {
        letter: 'S',
        term: 'Space-Occupying Lesion (Tumor, AVM, Aneurysm, Abscess)',
        description: 'Expanding intracranial masses causing progressive localized neurological deficits, increased intracranial pressure (Cushing triad, morning headache with projectile vomiting, papilledema), and focal seizures.',
        highlight: 'Intracranial neoplasm, abscess, or vascular malformation'
      },
      {
        letter: 'S',
        term: 'Spinal Cord Syndromes (Compression / Transection)',
        description: 'Spinal trauma, epidural abscess, or metastatic cord compression presenting with well-demarcated sensory levels, bilateral or asymmetrical limb weakness, hyperreflexia, and acute urinary retention/bowel incontinence.',
        highlight: 'Dermatomal sensory level & cord compression'
      },
      {
        letter: 'S',
        term: 'Somatoform (Conversion Disorder / Functional Deficit)',
        description: 'Acute neurological deficits (paralysis, blindness, aphonia) without an underlying organic or anatomical lesion; often associated with acute emotional trauma, exhibiting clinical inconsistencies (e.g., positive Hoover sign) and classic la belle indifférence.',
        highlight: 'Functional neurological disorder & Hoover sign'
      },
      {
        letter: 'S',
        term: 'Sclerosis (Multiple Sclerosis Exacerbation)',
        description: 'Autoimmune demyelination of central nervous system white matter producing disseminated focal deficits: optic neuritis (sudden unilateral visual loss/pain), internuclear ophthalmoplegia, ataxia, spastic paresis, and Lhermitte sign.',
        highlight: 'Demyelinating CNS relapses & optic neuritis'
      },
      {
        letter: 'S',
        term: 'Some Migraines (Hemiplegic Migraine / Migraine with Aura)',
        description: 'Uncommon neurovascular migraine variants characterized by reversible unilateral motor weakness, sensory paresthesias, or scotomas preceding or accompanying severe throbbing hemicranial cephalalgia.',
        highlight: 'Reversible motor aura & throbbing headache'
      }
    ],
    clinicalContext: 'In Emergency and Medical-Surgical nursing, assessing a patient with acute neurological deficits requires rapid, disciplined differentiation between true cerebrovascular accidents and "stroke mimics." Checking point-of-care capillary blood glucose is the paramount first action, because hypoglycemia instantly impairs focal cerebral metabolism and is completely reversible with rapid dextrose administration.',
    nclexPearls: [
      'Rule Out Sugar First: Always check bedside blood glucose immediately in ANY client presenting with acute stroke-like symptoms (facial droop, hemiparesis, slurred speech). Severe hypoglycemia can identically mimic an acute stroke!',
      'Non-Contrast Head CT Priority: The definitive emergency imaging test for acute focal neuro deficits is an emergent non-contrast head CT to distinguish ischemic stroke from acute intracranial hemorrhage before administering thrombolytics (tPA).',
      'Todd\'s Paralysis: Post-ictal transient focal motor weakness usually resolves within 24–48 hours; obtain collateral history to determine whether seizure activity (tonic-clonic movements, tongue biting, incontinence) preceded the weakness.'
    ],
    practiceQuestion: {
      question: 'A 68-year-old client with type 2 diabetes mellitus is brought to the emergency department by family with sudden-onset right facial droop, right arm weakness, and expressive dysarthria that began 45 minutes ago. According to emergency stroke protocols (10 S\'s), which action should the triage nurse perform first?',
      options: [
        'Transport the client immediately for non-contrast brain CT scan.',
        'Obtain a point-of-care capillary blood glucose measurement.',
        'Infuse an intravenous bolus of recombinant tissue plasminogen activator (tPA).',
        'Perform a complete 12-lead electrocardiogram to evaluate for atrial fibrillation.'
      ],
      correctIndex: 1,
      rationale: 'Point-of-care capillary blood glucose check (the first "S" in the 10 S\'s for Sugar) is the paramount first diagnostic step in any client presenting with acute focal neurological deficits. Hypoglycemia (<60 mg/dL) frequently presents with focal neurological deficits that identically mimic acute ischemic stroke and must be rapidly identified and treated with IV dextrose before initiating stroke thrombolytic pathways. Once hypoglycemia is ruled out, emergent non-contrast CT is performed.'
    }
  },
  {
    id: 'diabetic-ketoacidosis-king-ufc',
    shortCode: 'KING UFC',
    title: 'Diabetic Ketoacidosis Management Protocol (KING UFC)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Systematic emergency protocol for fluid resuscitation, insulin titration, electrolyte correction, and monitoring in Diabetic Ketoacidosis (DKA).',
    memoryTip: 'KING UFC — K+ (potassium), Insulin (regular IV continuous), Nasogastric tube (if comatose), Glucose (add D5W when BG < 200-250), Urea (monitor BUN), Fluids (isotonic crystalloids first!), Creatinine & Catheterize.',
    highYield: true,
    tags: ['Endocrine', 'Diabetes', 'Critical Care', 'Fluid & Electrolytes', 'Emergency Nursing', 'Pharmacology'],
    letters: [
      {
        letter: 'K',
        term: 'K+ (Potassium Management)',
        description: 'Verify serum potassium BEFORE initiating intravenous insulin! Insulin drives K+ into cells, which can trigger fatal hypokalemic cardiac arrhythmias. If K+ < 3.3 mEq/L, hold insulin and infuse potassium chloride. If K+ is 3.5–5.0 mEq/L, add 20–30 mEq K+ per liter of IV maintenance fluid to maintain levels between 4.0–5.0 mEq/L.',
        highlight: 'Check K+ before insulin; hold if < 3.3 mEq/L'
      },
      {
        letter: 'I',
        term: 'Insulin (Continuous Regular IV Infusion)',
        description: 'Continuous intravenous regular insulin infusion (typically 0.1 units/kg/hr; e.g., 5–7 units/hr). Discontinue sliding-scale regimens; aim for gradual reduction of blood glucose by 50–75 mg/dL/hr (3–4 mmol/L/hr) to avoid rapid intracranial osmotic shifts and fatal cerebral edema.',
        highlight: 'Continuous regular IV insulin at 0.1 units/kg/hr'
      },
      {
        letter: 'N',
        term: 'Nasogastric Tube (if Comatose / Gastric Atony)',
        description: 'Insert an NG tube connected to low intermittent suction if the client is obtunded, comatose, or actively vomiting. DKA frequently causes severe gastroparesis and gastric dilation, posing a massive aspiration pneumonia risk.',
        highlight: 'Gastric decompression to prevent aspiration'
      },
      {
        letter: 'G',
        term: 'Glucose (Add Dextrose when BG drops to 200–250 mg/dL)',
        description: 'When blood glucose reaches 200–250 mg/dL (11.1–13.9 mmol/L / ~12 mmol/L in UK guidelines), add 5% Dextrose (D5 0.45% NS) while continuing insulin infusion. This prevents hypoglycemia and rapid cerebral edema while allowing insulin to continue suppressing lipolysis and clearing serum ketones.',
        highlight: 'Add D5W at 200-250 mg/dL to prevent cerebral edema'
      },
      {
        letter: 'U',
        term: 'Urea (Monitor BUN & Dehydration)',
        description: 'Track Blood Urea Nitrogen (BUN) and serum urea serially to evaluate resolution of severe prerenal azotemia and hemoconcentration resulting from osmotic diuresis and profound volume depletion (average 5–10 L fluid deficit).',
        highlight: 'Serial BUN monitoring for prerenal azotemia'
      },
      {
        letter: 'F',
        term: 'Fluids (Isotonic Crystalloids First!)',
        description: 'Immediate fluid resuscitation is the absolute first priority in DKA! Infuse 1 to 2 liters of 0.9% Normal Saline (isotonic crystalloid) during the initial 1 to 2 hours to expand intravascular volume, restore renal perfusion, and decrease counter-regulatory stress hormones, transitioning to 0.45% NS based on corrected sodium.',
        highlight: '0.9% Normal Saline bolus is top initial priority'
      },
      {
        letter: 'C',
        term: 'Creatinine & Catheterize (Urine Output Monitoring)',
        description: 'Monitor serum creatinine to track recovery of renal glomerular filtration. Place an indwelling Foley catheter in critically ill or comatose clients for strict hourly urine output measurement. Ensure urine output is at least 30 mL/hr before administering intravenous potassium supplements.',
        highlight: 'Hourly urine output (≥30 mL/hr) before K+ infusion'
      }
    ],
    clinicalContext: 'In Emergency and ICU Medical-Surgical nursing, DKA is a life-threatening endocrine emergency occurring primarily in Type 1 Diabetes, marked by severe hyperglycemia, osmotic diuresis, profound dehydration (5-10 L fluid deficit), metabolic acidosis with an elevated anion gap, and ketonuria. Nursing care follows a rigid sequence: FLUIDS FIRST, check K+ before insulin, gradual glucose lowering, adding dextrose at 200-250 mg/dL, and tracking the closure of the anion gap.',
    nclexPearls: [
      'Sequence of DKA Interventions: #1 Fluids (0.9% NS bolus) → #2 Check Potassium (ensure K+ ≥ 3.3 mEq/L) → #3 Regular Insulin IV infusion. NEVER give insulin before verifying potassium level!',
      'Preventing Cerebral Edema: Blood glucose must not drop faster than 50–75 mg/dL per hour. When blood glucose drops to 200–250 mg/dL (11–12 mmol/L), the nurse MUST add 5% Dextrose to the IV fluids while maintaining the insulin drip to clear serum ketones without precipitating sudden intracranial osmotic fluid shifts (headache, lethargy, bradycardia).',
      'Only Regular Insulin is given IV: Regular insulin (Humulin R, Novolin R) is the ONLY insulin formulation that can be administered intravenously.',
      'No Potassium without Urine Output: Never administer IV potassium supplements to an oliguric or anuric patient; verify urine output is ≥ 30 mL/hr before infusing K+ to prevent fatal hyperkalemic cardiac arrest.'
    ],
    practiceQuestion: {
      question: 'A client with type 1 diabetes is admitted to the intensive care unit with Diabetic Ketoacidosis (DKA). The client is receiving normal saline IV hydration and a continuous regular insulin infusion. Laboratory results show the blood glucose has dropped from 580 mg/dL to 230 mg/dL, potassium is 4.2 mEq/L, and arterial blood gas reveals persistent metabolic acidosis with an anion gap of 18 mEq/L. Which prescription should the nurse implement next (KING UFC)?',
      options: [
        'Discontinue the intravenous regular insulin infusion immediately to avoid hypoglycemia.',
        'Change the IV fluids to 5% Dextrose in 0.45% Normal Saline while continuing the regular insulin infusion.',
        'Administer an intravenous bolus of sodium bicarbonate 50 mEq to correct the remaining acidosis.',
        'Withhold all intravenous potassium and increase the insulin infusion rate to 0.2 units/kg/hr.'
      ],
      correctIndex: 1,
      rationale: 'In DKA management (KING UFC), when blood glucose drops to 200–250 mg/dL (or ~12 mmol/L, "G" in KING UFC), dextrose (5% Dextrose in 0.45% NS) must be added to the IV fluids while continuing the insulin infusion. This prevents rapid hypoglycemia and cerebral edema while providing enough circulating glucose so that insulin can continue clearing serum ketones and closing the metabolic acidosis anion gap. Stopping insulin prematurely allows ketoacidosis to rebound, and bicarbonate is reserved only for severe life-threatening acidosis (pH < 6.9).'
    }
  },

  // ==========================================
  // PSYCHIATRIC NURSING
  // ==========================================
  {
    id: 'schizophrenia-bleulers-four-as',
    shortCode: "Bleuler's 4 A's",
    title: 'Core Symptoms of Schizophrenia',
    category: 'psych',
    categoryName: 'Psychiatric Nursing',
    summary: 'Eugen Bleuler\'s classic four primary negative/cognitive symptoms of schizophrenia.',
    memoryTip: 'Affect, Associative looseness, Autism, Ambivalence.',
    highYield: true,
    tags: ['Mental Health', 'Psychosis', 'Psychiatric Assessment'],
    letters: [
      {
        letter: 'A',
        term: 'Affect (Inappropriate / Flat)',
        description: 'Blunted, flat, or inappropriate emotional expression (e.g. laughing during a tragic or distressing event).',
        highlight: 'Flat or discordant emotion'
      },
      {
        letter: 'A',
        term: 'Associative Looseness',
        description: 'Disorganized thinking where ideas shift from one topic to an unrelated topic with little or no logical connection (word salad, flight of ideas).',
        highlight: 'Jumbled, illogical thoughts'
      },
      {
        letter: 'A',
        term: 'Autism (Detachment from Reality)',
        description: 'Severe social withdrawal and absorption in an internal fantasy world, delusions, and hallucinations.',
        highlight: 'Social withdrawal & internal world'
      },
      {
        letter: 'A',
        term: 'Ambivalence',
        description: 'Simultaneously holding two conflicting emotions, desires, or intentions toward a single person or situation, paralyzing decision-making.',
        highlight: 'Paralyzing conflicting feelings'
      }
    ],
    clinicalContext: 'Differentiate between positive symptoms (hallucinations, delusions, disorganized speech - treated well with first-generation antipsychotics) and negative symptoms (flat affect, avolition, anhedonia, social withdrawal - treated with second-generation atypical antipsychotics).',
    nclexPearls: [
      'Hallucinations: Acknowledge client feelings, do NOT validate or reinforce the hallucination, and present calm reality ("I know you hear voices, but I do not hear any voices").',
      'Delusions: Do NOT argue with or attempt to logically debate a delusion; validate the emotion and redirect.'
    ],
    practiceQuestion: {
      question: 'A client with schizophrenia tells the nurse: "The spiders are crawling on the walls and telling me I am in danger!" What is the most therapeutic nursing response?',
      options: [
        '"Do not be ridiculous; there are no spiders in this hospital."',
        '"I see the spiders too, but they cannot hurt you while I am here."',
        '"I don\'t see any spiders on the wall, but you seem frightened. You are safe here with me."',
        '"Why do you think the spiders are trying to hurt you?"'
      ],
      correctIndex: 2,
      rationale: 'The therapeutic response acknowledges the client emotional reality and fear without validating the hallucination, presents objective reality gently, and provides immediate reassurance of physical safety.'
    }
  },
  {
    id: 'depression-sig-e-caps',
    shortCode: 'SIG E CAPS',
    title: 'Major Depressive Disorder Criteria',
    category: 'psych',
    categoryName: 'Psychiatric Nursing',
    summary: 'The DSM-5 diagnostic criteria for Major Depressive Disorder (MDD).',
    memoryTip: 'Prescribe "Energy Capsules" (SIG: Energy CAPS) for depression! Must have ≥ 5 symptoms for ≥ 2 weeks.',
    highYield: true,
    tags: ['Depression', 'DSM-5', 'Suicide Risk'],
    letters: [
      {
        letter: 'S',
        term: 'Sleep Disturbances',
        description: 'Insomnia (especially terminal/early morning awakening) or hypersomnia.',
        highlight: 'Early morning awakening'
      },
      {
        letter: 'I',
        term: 'Interest Loss (Anhedonia)',
        description: 'Marked loss of interest or pleasure in all or almost all activities (core symptom).',
        highlight: 'Anhedonia (Core sign)'
      },
      {
        letter: 'G',
        term: 'Guilt & Worthlessness',
        description: 'Excessive, inappropriate guilt, feeling like a burden, self-blame, and low self-esteem.',
        highlight: 'Feelings of worthlessness'
      },
      {
        letter: 'E',
        term: 'Energy Loss / Fatigue',
        description: 'Persistent physical fatigue, sluggishness, and exhaustion from simple daily tasks.',
        highlight: 'Chronic fatigue'
      },
      {
        letter: 'C',
        term: 'Concentration Impairment',
        description: 'Diminished ability to think, concentrate, or make simple everyday decisions.',
        highlight: 'Brain fog & indecisiveness'
      },
      {
        letter: 'A',
        term: 'Appetite & Weight Changes',
        description: 'Significant unintentional weight loss or gain (> 5% in a month) or decrease/increase in appetite.',
        highlight: 'Significant weight changes'
      },
      {
        letter: 'P',
        term: 'Psychomotor Agitation / Retardation',
        description: 'Observable physical slowing (slow speech, paused responses) or physical pacing and hand-wringing.',
        highlight: 'Slowed movement or agitation'
      },
      {
        letter: 'S',
        term: 'Suicidal Ideation',
        description: 'Recurrent thoughts of death, suicidal ideation with or without a specific plan, or past attempts.',
        highlight: 'Suicide risk assessment'
      }
    ],
    clinicalContext: 'Suicide Risk Alert: When a severely depressed client suddenly becomes cheerful, energetic, and peaceful, this is a RED FLAG that they may have finalized a suicide plan and now have the energy to execute it.',
    nclexPearls: [
      'Direct Questioning: Always ask directly: "Are you thinking of hurting or killing yourself? Do you have a plan?" Direct questions do NOT implant suicidal thoughts.',
      'One-on-One Observation: A client with active suicide plan and intent requires continuous, uninterrupted 1:1 observation.'
    ],
    practiceQuestion: {
      question: 'A client admitted with severe depression who has been withdrawn and hopeless for 2 weeks suddenly arrives to morning group smiling, energized, and giving away personal possessions. What is the priority nursing action?',
      options: [
        'Congratulate the client on significant therapeutic progress.',
        'Assess the client directly for active suicidal ideation and intent.',
        'Encourage the client to lead the peer support activity.',
        'Discharge the client to outpatient psychotherapy.'
      ],
      correctIndex: 1,
      rationale: 'A sudden, unexpected improvement in mood and energy in a previously severely depressed client is a major warning sign that the client has decided on suicide, experiencing relief and finding the physical energy to carry out a plan.'
    }
  },
  {
    id: 'wernicke-korsakoff-coat-rack',
    shortCode: 'COAT RACK',
    title: 'Alcohol-Induced Neurological Syndromes',
    category: 'psych',
    categoryName: 'Psychiatric Nursing',
    summary: 'The acute (Wernicke) and chronic irreversible (Korsakoff) syndromes caused by Thiamine (Vitamin B1) deficiency.',
    memoryTip: 'Hang your COAT (acute Wernicke) on the RACK (chronic Korsakoff)!',
    highYield: true,
    tags: ['Substance Abuse', 'Alcoholism', 'Neurology'],
    letters: [
      {
        letter: 'C',
        term: 'Confusion (Wernicke Encephalopathy)',
        description: 'Acute encephalopathy, disorientation, inattention, and altered mental status.',
        highlight: 'Acute encephalopathy'
      },
      {
        letter: 'O',
        term: 'Ophthalmoplegia / Nystagmus (Wernicke)',
        description: 'Paralysis of ocular muscles, double vision, nystagmus (involuntary eye twitches).',
        highlight: 'Eye movement paralysis'
      },
      {
        letter: 'A',
        term: 'Ataxia (Wernicke)',
        description: 'Impaired voluntary coordination, wide-based staggering gait, and severe balance loss.',
        highlight: 'Staggering cerebellar gait'
      },
      {
        letter: 'T',
        term: 'Thiamine Deficiency (Wernicke)',
        description: 'Etiology: Chronic alcohol abuse blocks GI absorption and hepatic storage of Vitamin B1.',
        highlight: 'Vitamin B1 deficit'
      },
      {
        letter: 'R',
        term: 'Retrograde Amnesia (Korsakoff Psychosis)',
        description: 'Inability to recall previously established memories before the onset of the disease.',
        highlight: 'Loss of past memories'
      },
      {
        letter: 'A',
        term: 'Anterograde Amnesia (Korsakoff Psychosis)',
        description: 'Inability to form new long-term memories; information forgotten in seconds.',
        highlight: 'Cannot form new memories'
      },
      {
        letter: 'C',
        term: 'Confabulation (Korsakoff Psychosis)',
        description: 'Making up fictional stories to fill in memory gaps, without intentional deception.',
        highlight: 'Unconscious fabrication'
      },
      {
        letter: 'K',
        term: 'Korsakoff Psychosis (Chronic Syndrome)',
        description: 'Chronic, irreversible dementia resulting from untreated Wernicke encephalopathy.',
        highlight: 'Irreversible chronic dementia'
      }
    ],
    clinicalContext: 'Emergency Rule: In alcoholic clients presenting to the emergency room, ALWAYS administer IV Thiamine BEFORE or simultaneously with IV Dextrose! Dextrose administration without thiamine accelerates neuronal death and precipitates acute Wernicke encephalopathy.',
    nclexPearls: [
      'Thiamine Before Dextrose: Remember "T before D" in alcohol withdrawal.',
      'Confabulation: A defense mechanism where the client creates fabricated stories to protect self-esteem and hide severe memory deficits.'
    ],
    practiceQuestion: {
      question: 'A malnourished client with chronic alcohol use disorder is admitted with acute confusion, nystagmus, and an ataxic gait. Which intravenous medication should the nurse ensure is administered prior to any glucose infusion?',
      options: [
        'Folic acid',
        'Thiamine (Vitamin B1)',
        'Cyanocobalamin (Vitamin B12)',
        'Pyridoxine (Vitamin B6)'
      ],
      correctIndex: 1,
      rationale: 'In chronic alcoholism, glucose metabolism rapidly depletes remaining thiamine reserves. Administering glucose without thiamine precipitates or worsens acute Wernicke encephalopathy. IV Thiamine must always precede or accompany IV glucose.'
    }
  },

  // ==========================================
  // PHARMACOLOGY NURSING
  // ==========================================
  {
    id: 'medication-six-rights',
    shortCode: 'The 6 Rights',
    title: 'The 6 Rights of Medication Administration',
    category: 'pharmacology',
    categoryName: 'Pharmacology Nursing',
    summary: 'The foundational safety verification process performed three times prior to administering any drug.',
    memoryTip: 'Right Patient, Drug, Dose, Route, Time, Documentation (+ Right Reason & Response)!',
    highYield: true,
    tags: ['Patient Safety', 'Drug Administration', 'Quality Care'],
    letters: [
      {
        letter: '1',
        term: 'Right Patient',
        description: 'Verify client identity using two unique identifiers (full legal name and date of birth or medical record number). Never use room number!',
        highlight: '2 Unique Identifiers'
      },
      {
        letter: '2',
        term: 'Right Medication (Drug)',
        description: 'Verify the medication label against the MAR three times: 1. When retrieving, 2. When preparing, 3. At bedside prior to giving.',
        highlight: '3 Check Rule'
      },
      {
        letter: '3',
        term: 'Right Dose',
        description: 'Check prescription against standard adult/pediatric dosing limits. Calculate math carefully and verify high-alert meds with a second nurse.',
        highlight: 'Independent double-check'
      },
      {
        letter: '4',
        term: 'Right Route',
        description: 'Ensure correct route (PO, IV, IM, SubQ, topical). Never crush enteric-coated or extended-release tablets (ER, XL, SR).',
        highlight: 'Do not crush ER/EC tabs'
      },
      {
        letter: '5',
        term: 'Right Time',
        description: 'Administer within agency policy window (typically within 30 minutes before or after scheduled time).',
        highlight: 'Within 30-minute window'
      },
      {
        letter: '6',
        term: 'Right Documentation',
        description: 'Record administration immediately AFTER the client ingests or receives the drug. Never pre-document!',
        highlight: 'Document AFTER giving'
      }
    ],
    clinicalContext: 'High-Alert Medications: Drugs with heightened risk of significant patient harm (Insulin, Heparin, Opioids, Chemotherapy, Potassium Chloride) require an INDEPENDENT DOUBLE-CHECK by two licensed nurses.',
    nclexPearls: [
      'Client Refusal: Clients have the legal right to refuse medications. The nurse must explore reasons for refusal, provide education, withhold the dose, document, and notify the provider.',
      'Bar-code Scanning: Bar-code medication administration (BCMA) does not replace the nurse clinical judgment and three physical checks.'
    ],
    practiceQuestion: {
      question: 'A nurse prepares an extended-release tablet of diltiazem for a client with a nasogastric feeding tube. What action should the nurse take?',
      options: [
        'Crush the tablet into a fine powder and dissolve it in 30 mL of sterile water.',
        'Dissolve the intact tablet in warm carbonated beverage to break the coating.',
        'Contact the healthcare provider to request an immediate-release liquid formulation.',
        'Flush the tube with 10 mL of water, push the intact tablet, and flush again.'
      ],
      correctIndex: 2,
      rationale: 'Extended-release (ER/XL/SR) and enteric-coated medications must never be crushed because crushing releases the entire therapeutic dose at once, leading to severe toxicity and overdose. The nurse must request an alternative liquid or immediate-release formulation.'
    }
  },
  {
    id: 'steroids-side-effects-cushingoid',
    shortCode: 'CUSHINGOID',
    title: 'Adverse Effects of Corticosteroids',
    category: 'pharmacology',
    categoryName: 'Pharmacology Nursing',
    summary: 'The multi-system complications of chronic glucocorticoid therapy (Prednisone, Dexamethasone).',
    memoryTip: 'Chronic steroids make the client look "CUSHINGOID" — Never abruptly discontinue steroids!',
    highYield: true,
    tags: ['Endocrine', 'Adrenal', 'Immunology'],
    letters: [
      {
        letter: 'C',
        term: 'Cataracts / Glaucoma',
        description: 'Prolonged steroid therapy causes posterior subcapsular cataracts and increased intraocular pressure.',
        highlight: 'Ocular changes'
      },
      {
        letter: 'U',
        term: 'Ulcers (Peptic Ulcer Disease)',
        description: 'Inhibition of protective gastric prostaglandins increases risk of severe GI bleed and ulceration. Always take with meals!',
        highlight: 'GI bleeding & ulcers'
      },
      {
        letter: 'S',
        term: 'Striae & Skin Thinning',
        description: 'Impaired collagen synthesis leads to purple abdominal striae, delayed wound healing, and easy bruising/ecchymosis.',
        highlight: 'Purple striae & delayed healing'
      },
      {
        letter: 'H',
        term: 'Hypertension & Hyperglycemia',
        description: 'Sodium and water retention causes hypertension. Gluconeogenesis leads to steroid-induced diabetes.',
        highlight: 'Elevated BP & blood glucose'
      },
      {
        letter: 'I',
        term: 'Immunosuppression / Infection',
        description: 'Steroids suppress white blood cells and anti-inflammatory response, masking classic signs of fever and infection.',
        highlight: 'Masked fever & infection'
      },
      {
        letter: 'N',
        term: 'Necrosis (Avascular of Femoral Head)',
        description: 'Impaired microvascular blood supply to the bone leads to aseptic necrosis of the femoral head and hips.',
        highlight: 'Avascular bone necrosis'
      },
      {
        letter: 'G',
        term: 'Growth Restriction',
        description: 'Suppresses growth hormone in pediatric clients; requires close monitoring of height and weight percentiles.',
        highlight: 'Pediatric growth stunting'
      },
      {
        letter: 'O',
        term: 'Osteoporosis',
        description: 'Inhibits osteoblasts and decreases intestinal calcium absorption, leading to pathologic bone fractures.',
        highlight: 'Pathologic fracture risk'
      },
      {
        letter: 'I',
        term: 'Increased Weight / Buffalo Hump',
        description: 'Centripetal fat redistribution: "Moon face", "Buffalo hump", and truncal obesity with thin extremities.',
        highlight: 'Moon face & buffalo hump'
      },
      {
        letter: 'D',
        term: 'Depression / Mood Swings',
        description: 'Steroid-induced psychosis, euphoria, irritability, severe mood swings, and insomnia.',
        highlight: 'Steroid psychosis & insomnia'
      }
    ],
    clinicalContext: 'Tapering Rule: Glucocorticoids must ALWAYS be tapered gradually. Sudden cessation leads to acute ADRENAL CRISIS (Addisonian crisis) characterized by profound vascular collapse, hypotension, shock, and hypoglycemia.',
    nclexPearls: [
      'Infection Vigilance: A low-grade fever (100.4°F / 38°C) in a steroid-dependent client is an urgent indicator of systemic infection.',
      'Take with Food: Administer steroids in the morning with breakfast to reduce gastric irritation and mimic natural diurnal cortisol rhythm.'
    ],
    practiceQuestion: {
      question: 'A client with systemic lupus erythematosus has been taking prednisone 40 mg daily for 6 months. Why does the nurse emphasize never stopping this medication abruptly?',
      options: [
        'Sudden cessation causes irreversible kidney failure.',
        'Abrupt withdrawal causes acute adrenal crisis and vascular collapse.',
        'Stopping suddenly leads to malignant hyperthermia.',
        'The medication causes physical addiction similar to opioids.'
      ],
      correctIndex: 1,
      rationale: 'Chronic exogenous steroid administration suppresses the hypothalamic-pituitary-adrenal (HPA) axis, causing adrenal atrophy. Abrupt cessation prevents the body from producing endogenous cortisol, triggering a life-threatening Addisonian crisis with severe hypotension and circulatory collapse.'
    }
  },
  {
    id: 'inhaler-bronchodilator-bam-slm',
    shortCode: 'BAM vs SLM',
    title: 'Inhaler Types & Administration Sequence',
    category: 'pharmacology',
    categoryName: 'Pharmacology Nursing',
    summary: 'Categorizing Bronchodilators (BAM) versus Anti-inflammatories (SLM) and the critical rule of giving the bronchodilator first.',
    memoryTip: '"BAM" hits Fast to open airways; "SLM" Slows inflammation. Always Bronchodilator (B) BEFORE Corticosteroid (C)!',
    highYield: true,
    tags: ['Asthma', 'COPD', 'Respiratory Drugs'],
    letters: [
      {
        letter: 'B',
        term: 'Beta-2 Agonists (Bronchodilator - BAM)',
        description: 'Fast-acting rescue bronchodilator (SABA) for acute bronchospasm. Causes tachycardia, tremor, and palpitations.',
        highlight: 'Rescue inhaler (Albuterol)'
      },
      {
        letter: 'A',
        term: 'Anticholinergics (Bronchodilator - BAM)',
        description: 'Blocks acetylcholine-mediated bronchoconstriction and dries respiratory secretions.',
        highlight: 'Ipratropium / Tiotropium'
      },
      {
        letter: 'M',
        term: 'Methylxanthines (Bronchodilator - BAM)',
        description: 'Oral bronchodilator with narrow therapeutic index (10 - 20 mcg/mL). Toxicity causes seizures and fatal arrhythmias.',
        highlight: 'Theophylline (Range: 10-20)'
      },
      {
        letter: 'S',
        term: 'Steroids (Anti-inflammatory - SLM)',
        description: 'Inhaled corticosteroids (ICS). Maintenance therapy, NEVER for acute attacks. Always rinse mouth to prevent oral candidiasis (thrush).',
        highlight: 'Rinse mouth after steroid!'
      },
      {
        letter: 'L',
        term: 'Leukotriene Modifiers (Anti-inflammatory - SLM)',
        description: 'Oral maintenance drug taken daily in the evening to prevent asthma attacks and exercise-induced bronchoconstriction.',
        highlight: 'Daily oral maintenance'
      },
      {
        letter: 'M',
        term: 'Mast Cell Stabilizers (Anti-inflammatory - SLM)',
        description: 'Inhibits release of histamine and inflammatory mediators from mast cells. Prophylactic use.',
        highlight: 'Cromolyn sodium prophylaxis'
      }
    ],
    clinicalContext: 'Two-Inhaler Administration Sequence: 1. Administer Bronchodilator (Albuterol) first to dilate bronchioles; 2. Wait 5 minutes; 3. Administer Corticosteroid (Fluticasone); 4. Client swishes and spits water to prevent fungal thrush.',
    nclexPearls: [
      'The "B before C" Rule: Bronchodilator before Corticosteroid. Wait 5 minutes between different inhalers; wait 1 minute between puffs of the same inhaler.',
      'Spacer Device: Use a spacer device with MDIs to enhance drug delivery deep into alveolar airways.'
    ],
    practiceQuestion: {
      question: 'A client with chronic asthma is prescribed albuterol MDI and fluticasone MDI twice daily. What instruction must the nurse give regarding the sequence of administration?',
      options: [
        'Inhale fluticasone first, wait 10 seconds, then inhale albuterol.',
        'Inhale albuterol first, wait 5 minutes, then inhale fluticasone and rinse mouth.',
        'Mix the two canisters together in the spacer and inhale simultaneously.',
        'Take fluticasone in the morning and reserve albuterol only if peak flow is zero.'
      ],
      correctIndex: 1,
      rationale: 'The bronchodilator (albuterol) must be taken first to open the airways, allowing the corticosteroid (fluticasone) to penetrate deeper into the lung tissues 5 minutes later. Rinsing the mouth afterwards prevents oral candidiasis.'
    }
  },
  {
    id: 'endotracheal-tube-drugs-navel',
    shortCode: 'NAVEL',
    title: 'Emergency Drugs Given via ET Tube',
    category: 'pharmacology',
    categoryName: 'Pharmacology Nursing',
    summary: 'The 5 life-saving emergency medications that can be absorbed directly through an endotracheal tube when IV/IO access is lost.',
    memoryTip: 'If you have no IV access in cardiac arrest, push it down the "NAVEL" of the tube!',
    highYield: true,
    tags: ['Code Blue', 'ACLS', 'Emergency Pharmacology'],
    letters: [
      {
        letter: 'N',
        term: 'Naloxone (Narcan)',
        description: 'Opioid antagonist used to rapidly reverse opioid-induced respiratory depression and coma.',
        highlight: 'Opioid overdose reversal'
      },
      {
        letter: 'A',
        term: 'Atropine',
        description: 'Anticholinergic vagolytic agent used to treat symptomatic sinus bradycardia.',
        highlight: 'Symptomatic bradycardia'
      },
      {
        letter: 'V',
        term: 'Vasopressin',
        description: 'Non-adrenergic peripheral vasoconstrictor previously used in cardiac arrest protocols.',
        highlight: 'Potent vasoconstrictor'
      },
      {
        letter: 'E',
        term: 'Epinephrine',
        description: 'Alpha and beta adrenergic agonist used in cardiac arrest (asystole, PEA, pulseless VT/VF) and severe anaphylaxis.',
        highlight: 'Cardiac arrest mainstay'
      },
      {
        letter: 'L',
        term: 'Lidocaine',
        description: 'Class 1B antiarrhythmic used as an alternative agent for refractory ventricular tachycardia and ventricular fibrillation.',
        highlight: 'Ventricular arrhythmias'
      }
    ],
    clinicalContext: 'ET tube administration requires 2 to 2.5 times the standard IV dose, diluted in 5 to 10 mL of sterile water or normal saline, followed by several rapid manual hyperventilation breaths with an Ambu bag.',
    nclexPearls: [
      'Dosing Rule: ET route doses are typically 2 to 2.5 times higher than standard intravenous doses.',
      'Preferred Routes: IV and Intraosseous (IO) routes are always preferred over endotracheal administration.'
    ],
    practiceQuestion: {
      question: 'During a cardiac arrest resuscitation, IV and IO access cannot be established immediately. Which of the following drugs can the team administer down the endotracheal tube?',
      options: [
        'Amiodarone and Sodium Bicarbonate',
        'Epinephrine and Atropine',
        'Magnesium Sulfate and Calcium Chloride',
        'Adenosine and Dopamine'
      ],
      correctIndex: 1,
      rationale: 'The mnemonic NAVEL denotes Naloxone, Atropine, Vasopressin, Epinephrine, and Lidocaine as the specific medications capable of pulmonary capillary absorption when administered down an endotracheal tube.'
    }
  },

  // ==========================================
  // COMMUNICABLE DISEASES
  // ==========================================
  {
    id: 'varicella-zoster-stages-precautions',
    shortCode: 'Varicella (Chickenpox)',
    title: 'Chickenpox Progression & Precautions',
    category: 'communicable',
    categoryName: 'Communicable Diseases',
    summary: 'The centripetal rash progression and mandatory dual isolation precautions for Varicella zoster virus.',
    memoryTip: '"Macule to Papule to Vesicle to Crust" — Contagious until EVERY last lesion is crusted!',
    highYield: true,
    tags: ['Infection Control', 'Pediatrics', 'Isolation Precautions'],
    letters: [
      {
        letter: '1',
        term: 'Stage 1: Macules',
        description: 'Flat, red, pruritic spots appearing first on the trunk, scalp, and face, spreading centripetally to extremities.',
        highlight: 'Flat red lesions'
      },
      {
        letter: '2',
        term: 'Stage 2: Papules',
        description: 'Raised, itchy red bumps developing within 12 to 24 hours of macular onset.',
        highlight: 'Raised bumps'
      },
      {
        letter: '3',
        term: 'Stage 3: Vesicles ("Dewdrops on a Rose Petal")',
        description: 'Clear, fluid-filled teardrop blisters surrounded by an erythematous base. Extremely fragile and infectious.',
        highlight: 'Fluid-filled teardrop blisters'
      },
      {
        letter: '4',
        term: 'Stage 4: Crusts / Scabs',
        description: 'Vesicles rupture and dry into scabbed crusts. Once ALL lesions are completely crusted, the client is no longer contagious.',
        highlight: 'Crusted = No longer contagious'
      }
    ],
    clinicalContext: 'Transmission: Airborne droplet nuclei and direct contact with vesicle fluid. Hospital Precautions: AIRBORNE (negative-pressure room, N95 respirator) PLUS CONTACT (gloves and gown) until all lesions are crusted.',
    nclexPearls: [
      'Contagious Window: Infectious 1 to 2 days BEFORE the rash appears until all blisters have dried and formed scabs (approx. 5-7 days).',
      'No Aspirin: NEVER administer aspirin or salicylates to children with varicella or viral illnesses due to risk of fatal REYE SYNDROME (encephalopathy and acute liver failure).'
    ],
    practiceQuestion: {
      question: 'A 6-year-old child diagnosed with chickenpox is recovering at home. When may the parents safely send the child back to school?',
      options: [
        '48 hours after starting prescribed oral diphenhydramine.',
        'Once all vesicles have completely dried and formed crusted scabs.',
        'As soon as the fever breaks and the child has normal energy.',
        'When the rash finishes spreading to the extremities.'
      ],
      correctIndex: 1,
      rationale: 'A child with varicella (chickenpox) remains contagious until all lesions have crusted over completely, which typically occurs 5 to 7 days after the rash onset.'
    }
  },
  {
    id: 'transmission-based-precautions-airborne-droplet-contact',
    shortCode: 'MTV / SPIDERMAN / MRS WEE',
    title: 'Transmission-Based Isolation Precautions',
    category: 'communicable',
    categoryName: 'Communicable Diseases',
    summary: 'The CDC isolation categories: Airborne, Droplet, and Contact precautions and required PPE.',
    memoryTip: 'Airborne: "My Toxic Vapor" (MTV); Droplet: "SPIDERMAN"; Contact: "MRS WEE".',
    highYield: true,
    tags: ['Infection Control', 'Isolation', 'PPE'],
    letters: [
      {
        letter: 'A',
        term: 'Airborne Precautions (MTV)',
        description: 'Droplets < 5 microns stay suspended in air. Requires: Private Negative-Pressure Room (6-12 air changes/hr), door closed, N95 respirator mask for staff.',
        highlight: 'Negative pressure & N95'
      },
      {
        letter: 'D',
        term: 'Droplet Precautions (SPIDERMAN)',
        description: 'Droplets > 5 microns travel up to 3-6 feet. Requires: Private room (or cohort), Surgical mask within 3 feet, eye protection/face shield during procedures.',
        highlight: 'Surgical mask within 3-6 ft'
      },
      {
        letter: 'C',
        term: 'Contact Precautions (MRS WEE)',
        description: 'Direct or indirect contact with patient or environment. Requires: Gloves and Gown before entering, dedicated equipment (stethoscope/BP cuff).',
        highlight: 'Gloves, Gown, Dedicated equipment'
      }
    ],
    clinicalContext: 'C. Difficile Alert: Clostridioides difficile is a spore-forming bacterium. Alcohol-based hand sanitizers do NOT kill spores! Staff MUST wash hands with SOAP AND WATER, and surfaces must be disinfected with bleach.',
    nclexPearls: [
      'PPE Donning Sequence: Gown -> Mask/Respirator -> Goggles/Face Shield -> Gloves.',
      'PPE Doffing Sequence (Alphabetical): Gloves -> Goggles/Face Shield -> Gown -> Mask/Respirator (remove outside room for airborne).'
    ],
    practiceQuestion: {
      question: 'A nurse is providing care to a hospitalized client with confirmed Clostridioides difficile infection. Which infection prevention action is mandatory?',
      options: [
        'Decontaminate hands with an alcohol-based hand rub upon exiting.',
        'Wear an N95 respirator mask whenever inside the client room.',
        'Wash hands thoroughly with soap and water after removing gloves.',
        'Place the client in a negative-pressure airflow room with the door shut.'
      ],
      correctIndex: 2,
      rationale: 'C. difficile forms resilient dormant spores that are resistant to alcohol-based hand sanitizers. Physical friction and washing with soap and water is mandatory to mechanically rinse spores from the hands.'
    }
  }
];

export function getMnemonicById(id) {
  return mnemonicsList.find(m => m.id === id);
}

export function getMnemonicsByCategory(categoryId) {
  return mnemonicsList.filter(m => m.category === categoryId);
}
