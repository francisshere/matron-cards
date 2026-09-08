// High-yield NCLEX Nursing Mnemonics Dataset
// Categorized across the 6 major nursing domains based on standard NCLEX clinical preparation.

export const MNEMONICS_CATEGORIES = [
  { id: 'fundamentals', name: 'Fundamentals in Nursing', iconKey: 'fundamentals', count: 14 },
  { id: 'maternal', name: 'Maternal & Child Nursing', iconKey: 'maternal', count: 6 },
  { id: 'med-surg', name: 'Medical & Surgical Nursing', iconKey: 'surgical', count: 8 },
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
