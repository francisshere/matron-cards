// High-yield NCLEX Nursing Mnemonics Dataset
// Categorized across the 6 major nursing domains based on standard NCLEX clinical preparation.

export const MNEMONICS_CATEGORIES = [
  { id: 'fundamentals', name: 'Fundamentals in Nursing', iconKey: 'fundamentals', count: 14 },
  { id: 'maternal', name: 'Maternal & Child Nursing', iconKey: 'maternal', count: 10 },
  { id: 'med-surg', name: 'Medical & Surgical Nursing', iconKey: 'surgical', count: 67 },
  { id: 'psych', name: 'Psychiatric Nursing', iconKey: 'psych', count: 9 },
  { id: 'pharmacology', name: 'Pharmacology Nursing', iconKey: 'pharmacology', count: 15 },
  { id: 'communicable', name: 'Communicable Diseases', iconKey: 'communicable', count: 6 },
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
  {
    id: 'vfib-treatment-everybody-shock',
    shortCode: 'V-FIB SHOCK',
    title: 'Ventricular Fibrillation ACLS Protocol (Everybody Shock)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Emergency resuscitation sequence and pharmacology for pulseless Ventricular Fibrillation (V-Fib) and pulseless Ventricular Tachycardia (pVT).',
    memoryTip: '“Shock, Shock, Shock, Everybody Shock, Little Shock, Big Shock, Momma Shock, Poppa Shock” — Shock (Defibrillate), Epinephrine, Lidocaine, Bretylium, MgSO4, Procainamide. Defibrillation and continuous high-quality CPR are king!',
    highYield: true,
    tags: ['Cardiovascular', 'Critical Care', 'ACLS', 'Emergency Nursing', 'Dysrhythmias', 'Pharmacology'],
    letters: [
      {
        letter: 'Shock',
        term: 'Defibrillate (Immediate Unsynchronized Countershock)',
        description: 'V-Fib is a shockable cardiac arrest rhythm! Deliver an immediate unsynchronized shock (120–200 J biphasic or 360 J monophasic); resume CPR immediately for 2 minutes without pausing for rhythm or pulse checks.',
        highlight: 'Immediate unsynchronized defibrillation & resume CPR'
      },
      {
        letter: 'E',
        term: 'Everybody (Epinephrine)',
        description: 'First-line vasopressor administered after the second shock during cardiac arrest; 1 mg IV/IO push repeated every 3 to 5 minutes to enhance coronary and cerebral perfusion pressure via alpha-1 adrenergic vasoconstriction.',
        highlight: '1 mg IV push every 3-5 min after 2nd shock'
      },
      {
        letter: 'L',
        term: 'Little (Lidocaine)',
        description: 'Primary alternative antiarrhythmic to amiodarone for shock-refractory V-Fib / pulseless V-Tach (1.0–1.5 mg/kg IV/IO initial bolus, then 0.5–0.75 mg/kg every 5–10 min; max 3 mg/kg). Suppresses ventricular automaticity by blocking voltage-gated sodium channels.',
        highlight: '1-1.5 mg/kg IV alternative antiarrhythmic'
      },
      {
        letter: 'B',
        term: 'Big (Bretylium / Amiodarone)',
        description: 'Historically Bretylium tosylate; in current standard ACLS guidelines, Amiodarone (300 mg IV/IO rapid bolus first dose, followed by 150 mg second dose if VF/pVT persists) is the primary Class III potassium-channel antiarrhythmic.',
        highlight: 'Amiodarone 300 mg IV first dose (historically Bretylium)'
      },
      {
        letter: 'M',
        term: 'Momma (Magnesium Sulfate - MgSO4)',
        description: 'Indicated specifically for polymorphic ventricular tachycardia (Torsades de Pointes) or suspected hypomagnesemia; administer 1 to 2 grams IV/IO diluted in 10 mL D5W given over 5 to 20 minutes (or rapid IV push in pulseless cardiac arrest).',
        highlight: '1-2 g IV for Torsades de Pointes / hypomagnesemia'
      },
      {
        letter: 'P',
        term: 'Poppa (Procainamide)',
        description: 'Class Ia antiarrhythmic used for stable wide-complex monomorphic ventricular tachycardias or refractory ventricular arrhythmias post-ROSC (20–50 mg/min IV infusion; stop if QRS widens >50% or hypotension occurs; avoid in prolonged QT).',
        highlight: 'Class Ia antiarrhythmic for wide-complex tachydysrhythmias'
      }
    ],
    clinicalContext: 'In Emergency, ICU, and Telemetry nursing, pulseless Ventricular Fibrillation produces instantaneous cessation of cardiac output and clinical death. The definitive life-saving intervention is immediate, unsynchronized electrical defibrillation paired with minimal interruptions in chest compressions. Synchronized cardioversion is strictly contraindicated for V-Fib because the machine cannot identify an R-wave on a fibrillating baseline and will fail to discharge.',
    nclexPearls: [
      '"V-Fib = D-Fib": Defibrillation is the definitive treatment for Ventricular Fibrillation and pulseless V-Tach. For every minute defibrillation is delayed, survival decreases by 7–10%.',
      'Unsynchronized vs. Synchronized: Defibrillation is unsynchronized (used for chaotic rhythms without QRS complexes like VF and pulseless VT). Synchronized cardioversion is used for unstable tachyarrhythmias with pulses (atrial fibrillation, SVT, VT with a pulse) to avoid triggering the R-on-T phenomenon.',
      'Immediate CPR after Shock: Immediately after delivering the shock, resume chest compressions for 2 minutes (5 cycles of 30:2); DO NOT pause to check pulse or rhythm immediately post-shock.'
    ],
    practiceQuestion: {
      question: 'A telemetry nurse observes that a client who was admitted with an acute anterior wall myocardial infarction has abruptly lost consciousness. The cardiac monitor reveals chaotic, irregular, undulating baseline waves without identifiable P waves or QRS complexes. Assessment confirms the client is unresponsive, apneic, and pulseless. Which intervention is the nurse\'s immediate priority?',
      options: [
        'Deliver an immediate unsynchronized shock with the defibrillator and resume high-quality CPR.',
        'Administer intravenous epinephrine 1 mg IV push over 1 minute.',
        'Activate the synchronizer mode on the defibrillator and deliver a synchronized shock of 50 Joules.',
        'Perform an immediate 12-lead electrocardiogram to document the dysrhythmia.'
      ],
      correctIndex: 0,
      rationale: 'The monitor displays coarse Ventricular Fibrillation (V-Fib). The definitive, highest-priority intervention for pulseless V-Fib is immediate unsynchronized electrical defibrillation ("V-Fib = D-Fib", "Shock, Shock, Everybody Shock"). After shock delivery, CPR must be resumed immediately for 2 minutes before the next rhythm check. Synchronized cardioversion is contraindicated because the defibrillator requires a distinct QRS/R-wave to synchronize and will not fire on fibrillating rhythms. Epinephrine is administered after CPR is underway and after the second shock.'
    }
  },
  {
    id: 'sah-causes-bats',
    shortCode: 'BATS',
    title: 'Causes of Subarachnoid Hemorrhage (BATS)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The major predisposing and traumatic etiologies of life-threatening Subarachnoid Hemorrhage (SAH).',
    memoryTip: 'BATS — Berry aneurysm (Circle of Willis), Arteriovenous malformation (AVM) / Adult polycystic kidney disease (APKD), Trauma (head impact), Stroke (hemorrhagic). Hallmark: "Worst headache of my life"!',
    highYield: true,
    tags: ['Neurological', 'Stroke', 'Emergency Nursing', 'Critical Care', 'Aneurysm', 'Head Trauma'],
    letters: [
      {
        letter: 'B',
        term: 'Berry Aneurysm (Saccular Aneurysm)',
        description: 'The leading nontraumatic etiology of subarachnoid hemorrhage (~85% of spontaneous cases). Congenital focal wall muscular defect situated at bifurcations of the Circle of Willis (most commonly anterior communicating artery); rupture leads to sudden arterial extravasation into the subarachnoid space under systemic arterial pressure.',
        highlight: 'Circle of Willis saccular aneurysm (85% of spontaneous SAH)'
      },
      {
        letter: 'A',
        term: 'Arteriovenous Malformation (AVM) / Adult Polycystic Kidney Disease (APKD)',
        description: 'Congenital plexuses of direct arterial-to-venous fistulae lacking an intervening capillary bed that rupture under shear stress; also reflects the strong genetic link with Autosomal Dominant Polycystic Kidney Disease (ADPKD), where up to 10-15% of clients harbor intracranial berry aneurysms.',
        highlight: 'Congenital vascular tangles & ADPKD aneurysm risk'
      },
      {
        letter: 'T',
        term: 'Trauma (Blunt or Penetrating Head Injury)',
        description: 'The overall most frequent cause of subarachnoid hemorrhage across all patient demographics. Violent acceleration-deceleration forces or blunt cranial impact (assault with blunt object/bat, motor vehicle crashes, falls) shear superficial cortical and leptomeningeal bridging microvessels.',
        highlight: 'Direct cranial trauma & acceleration-deceleration'
      },
      {
        letter: 'S',
        term: 'Stroke (Hemorrhagic Stroke / Bleed)',
        description: 'Primary intracerebral hemorrhage (ICH) rupturing through the cerebral cortex into the subarachnoid cisterns, or secondary hemorrhagic conversion of an extensive ischemic cerebral infarction.',
        highlight: 'Intracerebral hemorrhage extension or hemorrhagic conversion'
      }
    ],
    clinicalContext: 'In Emergency and Neuro-ICU nursing, recognizing the clinical picture of SAH is critical. Clients present with an abrupt, explosive "thunderclap headache" ("worst headache of my life"), meningeal irritation (nuchal rigidity, photophobia, positive Kernig and Brudzinski signs), transient loss of consciousness, and vomiting. Nursing priorities include strict aneurysm precautions (quiet dark room, bed rest, stool softeners to prevent Valsalva), maintaining systolic BP < 140–160 mmHg, administering nimodipine to prevent cerebral vasospasm, and monitoring for hydrocephalus.',
    nclexPearls: [
      '"Worst Headache of My Life": A sudden, severe explosive thunderclap headache accompanied by nuchal rigidity is subarachnoid hemorrhage until proven otherwise.',
      'Nimodipine & Cerebral Vasospasm: Calcium channel blocker (nimodipine 60 mg q4h for 21 days) is administered specifically to prevent delayed ischemic neurological deficits from cerebral vasospasm (peak risk 4–14 days post-rupture). If client is hypotensive (SBP < 90), hold and consult provider.',
      'Aneurysm Precautions: Absolute bed rest in a quiet, darkened, private room; avoid all Valsalva maneuvers (prescribe docusate stool softeners, treat coughing/vomiting promptly, no rectal temperatures/enemas) to prevent fatal re-rupture.',
      'ADPKD Genetic Screening: Clients with Autosomal Dominant Polycystic Kidney Disease have an increased risk of intracranial berry aneurysms; report any severe or new headache immediately!'
    ],
    practiceQuestion: {
      question: 'A 42-year-old client with a history of autosomal dominant polycystic kidney disease (ADPKD) arrives in the emergency department reporting the sudden onset of an explosive, incapacitating headache that the client describes as "the worst headache of my entire life." On physical exam, the nurse notes severe nuchal rigidity and photophobia. Which diagnostic evaluation should the nurse prepare the client for first (BATS)?',
      options: [
        'Emergent non-contrast head computed tomography (CT)',
        'Immediate lumbar puncture with opening pressure measurement',
        'Magnetic resonance imaging (MRI) of the cervical spine with contrast',
        '24-hour ambulatory blood pressure monitoring'
      ],
      correctIndex: 0,
      rationale: 'The client presents with the classic triad of a ruptured intracranial berry aneurysm causing subarachnoid hemorrhage (SAH, "B" and "A" in BATS): sudden thunderclap headache ("worst headache of life"), nuchal rigidity, and underlying ADPKD (strongly associated with Circle of Willis berry aneurysms). The mandatory first-line diagnostic investigation is an emergent non-contrast head CT scan, which has >95% sensitivity for subarachnoid blood within the first 24 hours. A lumbar puncture (looking for xanthochromia) is performed only if the non-contrast CT is negative or equivocal, but never before CT due to the risk of brain herniation.'
    }
  },
  {
    id: 'shock-signs-symptoms-tv-sparc-cube',
    shortCode: 'TV SPARC CUBE',
    title: 'Clinical Signs & Symptoms of Shock (TV SPARC CUBE)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Comprehensive clinical manifestations of progressive circulatory collapse and systemic hypoperfusion.',
    memoryTip: 'TV SPARC CUBE — Thirst, Vomiting, Sweating, Pulse weak, Anxious, Respirations rapid/shallow, Cool, Cyanotic, Unconscious, BP low (late!), Eyes blank.',
    highYield: true,
    tags: ['Emergency Nursing', 'Critical Care', 'Shock Syndromes', 'Assessment', 'Hemodynamics'],
    letters: [
      {
        letter: 'T',
        term: 'Thirst',
        description: 'Intense, unquenchable thirst driven by hypothalamic osmoreceptor activation and thirst center stimulation in response to intravascular fluid depletion, decreased circulating blood volume, and hyperosmolarity.',
        highlight: 'Osmoreceptor activation & intravascular depletion'
      },
      {
        letter: 'V',
        term: 'Vomiting & Nausea',
        description: 'Sympathetic vasoconstriction shunts blood flow away from mesenteric and gastrointestinal capillary beds toward the heart and brain; gut ischemia and mucosal hypoperfusion cause paralytic ileus, severe nausea, and vomiting.',
        highlight: 'Splanchnic vasoconstriction & mesenteric hypoperfusion'
      },
      {
        letter: 'S',
        term: 'Sweating (Diaphoresis)',
        description: 'Profound sympathetic nervous system (SNS) hyperactivation triggers cholinergic and adrenergic stimulation of cutaneous eccrine glands, producing classic cold, clammy diaphoresis.',
        highlight: 'Sympathetic hyperactivity & cold, clammy skin'
      },
      {
        letter: 'P',
        term: 'Pulse Weak (Rapid & Thready)',
        description: 'Compensatory sinus tachycardia (>100 beats/min) coupled with markedly diminished stroke volume produces a weak, rapid, thready peripheral pulse as catecholamines strive to maintain cardiac output (CO = HR × SV).',
        highlight: 'Tachycardia with diminished, thready pulse'
      },
      {
        letter: 'A',
        term: 'Anxious (Restlessness & Apprehension)',
        description: 'Earliest and most sensitive clinical hallmark of shock! Early cerebral hypoperfusion and mild cellular arterial hypoxemia manifest initially as unexplained restlessness, agitation, anxiety, and subtle personality changes.',
        highlight: 'Earliest indicator of shock & cerebral hypoxia'
      },
      {
        letter: 'R',
        term: 'Respirations Shallow & Rapid (Tachypnea)',
        description: 'Compensatory tachypnea (>20–24 breaths/min) triggered by peripheral chemoreceptor stimulation sensing systemic lactic acidosis (from anaerobic cellular metabolism) to blow off carbon dioxide and provide respiratory compensation.',
        highlight: 'Tachypnea compensating for lactic acidosis'
      },
      {
        letter: 'C',
        term: 'Cool Skin',
        description: 'Alpha-1 adrenergic vasoconstriction clamps down on cutaneous arterioles, diverting blood from non-essential skin and subcutaneous tissues to central core organs, leaving extremities cold to the touch.',
        highlight: 'Peripheral vasoconstriction shunting blood inward'
      },
      {
        letter: 'C',
        term: 'Cyanotic (Pallor & Mottling)',
        description: 'Intense dermal capillary vasoconstriction, sluggish microvascular transit, and increased peripheral oxygen extraction cause pale, ashen, mottled, or dusky cyanotic skin with delayed capillary refill (>3 seconds).',
        highlight: 'Delayed capillary refill (>3s) & mottling'
      },
      {
        letter: 'U',
        term: 'Unconscious (Lethargy to Coma)',
        description: 'As compensatory vasoconstriction fails and mean arterial pressure plummets below the autoregulatory threshold (MAP < 60 mmHg), cerebral perfusion fails, resulting in progressive confusion, lethargy, obtundation, and coma.',
        highlight: 'Decompensated cerebral hypoperfusion & coma'
      },
      {
        letter: 'B',
        term: 'BP Low (Hypotension - LATE SIGN!)',
        description: 'Systolic blood pressure <90 mmHg or MAP <65 mmHg occurs only after compensatory mechanisms (tachycardia, vasoconstriction, RAAS) are completely exhausted. Never wait for hypotension to diagnose shock!',
        highlight: 'Hypotension is a LATE, decompensated sign'
      },
      {
        letter: 'E',
        term: 'Eyes Blank (Dull Gaze & Dilated Pupils)',
        description: 'Severe volume depletion and impaired brainstem perfusion produce sunken ocular orbits, a glassy/dull stare, and eventual pupillary dilation with sluggish light reflexes as cardiovascular collapse progresses.',
        highlight: 'Sunken globes, glazed stare, & pupillary dilation'
      }
    ],
    clinicalContext: 'In Emergency, ICU, and Medical-Surgical nursing, shock is defined as generalized cellular hypoxia and inadequate tissue perfusion. Recognizing the transition from compensatory shock (anxiety, tachycardia, tachypnea, normal BP) to progressive/decompensated shock (hypotension, oliguria, lactic acidosis) is critical. Timely fluid resuscitation, vasopressors, and treating the underlying etiology (hemorrhage, sepsis, cardiogenic pump failure) prevent irreversible end-organ failure.',
    nclexPearls: [
      'Earliest Sign of Shock: Restlessness, agitation, and subtle changes in level of consciousness are the earliest signs of systemic hypoperfusion. Hypotension is a LATE sign!',
      'Mean Arterial Pressure (MAP) Target: Minimum MAP required to adequately perfuse vital organs (kidneys, brain) is ≥ 65 mmHg [MAP = (SBP + 2(DBP)) / 3].',
      'Urine Output as Perfusion Indicator: Oliguria (< 0.5 mL/kg/hr or < 30 mL/hr) reflects compensatory renal vasoconstriction (RAAS activation); measuring strict hourly urine output via Foley catheter is a vital hemodynamic parameter.'
    ],
    practiceQuestion: {
      question: 'A nurse on a medical-surgical unit is caring for a client with acute pancreatitis. During morning assessment, the nurse notes the client has become increasingly anxious and restless, the heart rate has increased from 82 to 118 beats/min, respiratory rate is 26 breaths/min and shallow, skin is cool and clammy, and blood pressure is 114/72 mmHg. How should the nurse interpret these findings (TV SPARC CUBE)?',
      options: [
        'The client is experiencing expected emotional anxiety related to hospitalization.',
        'The client is in the early compensatory stage of hypovolemic shock.',
        'The client has entered uncompensated irreversible multi-organ failure.',
        'The client has developed Cushing\'s triad secondary to increased intracranial pressure.'
      ],
      correctIndex: 1,
      rationale: 'The client exhibits the classic early compensatory signs of shock (TV SPARC CUBE): restlessness/anxiety (earliest sign of cerebral hypoperfusion), tachycardia (118 bpm), tachypnea (26 breaths/min), and cool, clammy skin from sympathetic vasoconstriction. In early compensatory shock, blood pressure remains within normal limits due to adrenergic compensatory mechanisms (catecholamine release and RAAS activation). Waiting for blood pressure to drop before recognizing shock allows progression to irreversible shock.'
    }
  },
  {
    id: 'shock-triad-hypo-tachy-tachy',
    shortCode: 'HYPO TACHY TACHY',
    title: 'Vital Sign Triad of Shock (Hypo Tachy Tachy)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The classic vital sign triad of systemic circulatory shock (Hypotension, Tachypnea, Tachycardia) and its vital NCLEX contrast with Cushing’s triad.',
    memoryTip: 'HYPO TACHY TACHY (Shock) — HYPOtension, TACHYpnea, TACHYcardia. The exact clinical mirror-opposite of Cushing’s Triad for increased ICP (HYPER BRADY BRADY: HYPERtension, BRADYcardia, BRADYpnea)!',
    highYield: true,
    tags: ['Critical Care', 'Emergency Nursing', 'Shock Syndromes', 'Vital Signs', 'Neurological'],
    letters: [
      {
        letter: 'HYPO',
        term: 'HYPOtension (Decreased Blood Pressure)',
        description: 'Critical reduction in effective circulating intravascular volume, decreased systemic vascular resistance (SVR in distributive shock), or pump failure leading to dropped mean arterial pressure (MAP < 65 mmHg) and systemic tissue hypoperfusion.',
        highlight: 'MAP < 65 mmHg & systemic hypoperfusion'
      },
      {
        letter: 'TACHY',
        term: 'TACHYpnea (Rapid Respiratory Rate)',
        description: 'Compensatory hyperventilation (>20–24 breaths/min) stimulated by peripheral and central chemoreceptors sensing accumulating lactic acid and metabolic acidosis from widespread anaerobic cellular respiration, blowing off CO2.',
        highlight: 'Respiratory rate >20-24/min blowing off CO2'
      },
      {
        letter: 'TACHY',
        term: 'TACHYcardia (Elevated Heart Rate)',
        description: 'Baroreceptor reflex and sympathetic catecholamine surge (epinephrine/norepinephrine) accelerating heart rate (>100 beats/min) in a vigorous attempt to maintain cardiac output (CO = HR × SV) despite reduced stroke volume.',
        highlight: 'Heart rate >100 bpm maintaining cardiac output'
      }
    ],
    clinicalContext: 'In Emergency and Medical-Surgical nursing, rapid vital sign pattern recognition differentiates acute hypovolemic/septic shock from neurological herniation (Cushing\'s triad). A client in shock presents with HYPO-TACHY-TACHY (low BP, fast breathing, fast pulse). Conversely, a client with elevated intracranial pressure (ICP) herniation presents with the exact physiological opposite: HYPER-BRADY-BRADY (widening pulse pressure / hypertension, slow bounding pulse, slow/irregular respirations).',
    nclexPearls: [
      'The Classic NCLEX Vital Signs Mirror: SHOCK = HYPO TACHY TACHY (Hypotension, Tachypnea, Tachycardia). CUSHING\'S TRIAD (Increased ICP) = HYPER BRADY BRADY (Hypertension with widened pulse pressure, Bradypnea, Bradycardia).',
      'Neurogenic Shock Exception: Neurogenic shock (cervical/high thoracic spinal cord injury above T6) is the UNIQUE exception among shock states: it presents with Hypotension AND Bradycardia (due to total loss of sympathetic tone below the injury).',
      'Septic Shock "Warm Shock": Early hyperdynamic septic shock may initially present with warm, flushed extremities and bounding pulses, but will still demonstrate tachycardia, tachypnea, and impending hypotension.'
    ],
    practiceQuestion: {
      question: 'An emergency department nurse is triaging two unstable clients following a high-speed multi-vehicle collision. Client A presents with BP 82/50 mmHg, HR 128 beats/min, and RR 28 breaths/min. Client B presents with BP 192/78 mmHg, HR 44 beats/min, and RR 8 breaths/min with irregular pauses. How should the nurse interpret the vital sign patterns of these two clients (HYPO TACHY TACHY vs. HYPER BRADY BRADY)?',
      options: [
        'Client A exhibits Cushing\'s triad of increased intracranial pressure; Client B exhibits hypovolemic shock.',
        'Client A exhibits systemic circulatory shock; Client B exhibits Cushing\'s triad of life-threatening increased intracranial pressure.',
        'Both clients exhibit neurogenic shock secondary to high-level cervical spine injuries.',
        'Both clients exhibit normal compensatory autonomic responses to emotional trauma.'
      ],
      correctIndex: 1,
      rationale: 'Client A exhibits the classic vital sign triad of shock ("HYPO TACHY TACHY"): Hypotension (BP 82/50), Tachycardia (HR 128), and Tachypnea (RR 28), reflecting systemic hypoperfusion and compensatory catecholamine surge. Client B exhibits the classic Cushing\'s triad of increased intracranial pressure ("HYPER BRADY BRADY"): Hypertension with a widened pulse pressure (192/78, pulse pressure 114 mmHg), Bradycardia (HR 44), and Bradypnea with Cheyne-Stokes-like irregular respirations (RR 8), signaling impending brainstem herniation.'
    }
  },
  {
    id: 'heart-valves-blood-flow-tpma',
    shortCode: 'TPMA',
    title: 'Heart Valve Blood Flow Sequence (Try Pulling My Aorta)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The chronological pathway of unidirectional blood flow through the 4 cardiac valves from right-sided deoxygenated return to systemic arterial delivery.',
    memoryTip: '“TRY PULLING MY AORTA” (TPMA) — Tricuspid → Pulmonary → Mitral → Aortic. Master the pathway of intracardiac blood flow and valve disease pathophysiology!',
    highYield: true,
    tags: ['Cardiovascular', 'Hemodynamics', 'Cardiac Anatomy', 'Valvular Disorders', 'Pathophysiology'],
    letters: [
      {
        letter: 'T',
        term: 'Tricuspid Valve (Right Atrioventricular)',
        description: 'First valve encountered by systemic venous blood; separates the right atrium from the right ventricle. Prevents backward regurgitation into the venae cavae during right ventricular systole (frequently colonized by Staphylococcus aureus in IV drug users with infective endocarditis).',
        highlight: 'Right atrium to right ventricle; endocarditis target in IVDU'
      },
      {
        letter: 'P',
        term: 'Pulmonary Valve (Right Semilunar)',
        description: 'Guards the outflow tract between the right ventricle and pulmonary trunk. Opens during ventricular systole to eject deoxygenated blood into the pulmonary arterial bed for alveolar oxygenation.',
        highlight: 'Right ventricle to pulmonary artery'
      },
      {
        letter: 'M',
        term: 'Mitral Valve (Bicuspid / Left Atrioventricular)',
        description: 'High-pressure dual-cusp valve separating the oxygenated left atrium from the left ventricle. Withstands the highest systolic mechanical pressures in the heart; stenosis causes backward hydrostatic congestion into pulmonary veins (crackles, orthopnea, dyspnea).',
        highlight: 'Left atrium to left ventricle; backward pulmonary congestion'
      },
      {
        letter: 'A',
        term: 'Aorta (Aortic Valve / Left Semilunar)',
        description: 'Outflow valve between the left ventricle and ascending systemic aorta. Opens during left ventricular systole to perfuse the coronary ostia and systemic circulation (severe stenosis produces SAD triad: Syncope, Angina, Dyspnea).',
        highlight: 'Left ventricle to aorta & coronary perfusion'
      }
    ],
    clinicalContext: 'In Cardiovascular and Medical-Surgical nursing, understanding the TPMA blood flow sequence is essential for tracing backward failure in valvular heart disease. Left-sided valve failure (Mitral and Aortic) produces backward congestion into the pulmonary vasculature, manifesting as pulmonary edema, dyspnea, orthopnea, and crackles. Right-sided valve failure (Tricuspid and Pulmonary) produces backward congestion into the systemic venous system, manifesting as jugular venous distention (JVD), hepatomegaly, ascites, and dependent peripheral edema.',
    nclexPearls: [
      'Backward Congestion Rule: Mitral and Aortic pathology (left heart) causes pulmonary congestion (crackles, hemoptysis, orthopnea); Tricuspid and Pulmonic pathology (right heart) causes systemic venous congestion (JVD, peripheral edema, hepatomegaly).',
      'IV Drug Abuse Endocarditis: In infective endocarditis associated with IV drug use, the Tricuspid valve ("T" in TPMA) is by far the most commonly infected valve (most frequently caused by Staphylococcus aureus), which can shower septic emboli into the lungs causing pulmonary infarctions/abscesses.',
      'S1 vs. S2 Valve Closure: Closure of the atrioventricular valves (Tricuspid and Mitral = "T & M") produces the S1 ("lub") sound; closure of the semilunar valves (Aortic and Pulmonic = "A & P") produces the S2 ("dub") sound.'
    ],
    practiceQuestion: {
      question: 'A client with a long-standing history of severe mitral valve stenosis is admitted to the progressive cardiac care unit. When applying knowledge of the sequence of intracardiac blood flow (TPMA: "Try Pulling My Aorta"), which clinical assessment finding should the nurse prioritize as a direct complication of impaired forward flow through the mitral valve?',
      options: [
        'Bilateral lower extremity 3+ pitting edema and jugular venous distension',
        'Tachypnea, bilateral basilar crackles, and orthopnea',
        'Marked systolic ejection murmur radiating bilaterally to the carotid arteries',
        'Splinter hemorrhages under the fingernails and Roth spots'
      ],
      correctIndex: 1,
      rationale: 'According to the intracardiac flow pathway (TPMA: Tricuspid → Pulmonary → Mitral → Aortic), blood flows from the pulmonary veins into the left atrium and then through the Mitral valve into the left ventricle. Mitral stenosis creates a mechanical bottleneck, causing blood to back up upstream into the left atrium and pulmonary venous circulation. This increases pulmonary capillary hydrostatic pressure, leading to pulmonary congestion and edema hallmarked by tachypnea, orthopnea, dyspnea on exertion, and bibasilar crackles. Right-sided systemic venous congestion (JVD, peripheral edema) occurs downstream only if chronic pulmonary hypertension develops.'
    }
  },
  {
    id: 'femoral-hernia-in-females',
    shortCode: 'FEM-FEM',
    title: 'Femoral Hernia Clinical Characteristics (FEM in FEMales)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Anatomical borders, female predisposition, and the high surgical urgency of strangulation risk in femoral hernias.',
    memoryTip: '“FEMoral hernias in FEMales” — FEMoral hernias are vastly more common in FEMales (wider female pelvis and pregnancy history). Highest risk of incarceration and bowel strangulation!',
    highYield: true,
    tags: ['Gastrointestinal', 'Surgical Nursing', 'Hernias', 'Emergency Nursing', 'Anatomy'],
    letters: [
      {
        letter: 'FEM',
        term: 'FEMoral Hernia (Anatomical Passage)',
        description: 'Protrusion of intra-abdominal viscera (peritoneal fat or small intestine) through the narrow, rigid femoral ring into the femoral canal, emerging in the proximal medial thigh inferior to the inguinal ligament and medial to the femoral vein.',
        highlight: 'Protrudes inferior to inguinal ligament into femoral canal'
      },
      {
        letter: 'FEM',
        term: 'FEMales (High Prevalence & High Strangulation Risk)',
        description: 'Although inguinal hernias remain the most common hernia overall in both sexes, femoral hernias occur predominantly in adult females (female-to-male ratio approximately 4:1) due to broader pelvic diameter and parity-related tissue laxity. Has the highest strangulation rate (30-40%) among groin hernias.',
        highlight: '4:1 female predominance & highest strangulation rate'
      }
    ],
    clinicalContext: 'In Medical-Surgical, emergency, and surgical nursing, evaluating groin masses requires distinguishing femoral hernias (located below and lateral to the pubic tubercle, inferior to the inguinal ligament) from inguinal hernias (located above and medial to the pubic tubercle, superior to the inguinal ligament). Because the femoral canal has rigid, fibrous boundaries (lacunar ligament medially, femoral vein laterally, Cooper ligament posteriorly), femoral hernias have the highest rate of incarceration and strangulation (up to 30–40% at presentation), making watchful waiting inappropriate and necessitating urgent elective or emergent surgical repair.',
    nclexPearls: [
      'High Strangulation Risk: Femoral hernias have a tiny, rigid aperture bounded by fibrous ligaments. They carry the highest risk of bowel strangulation and incarceration of all groin hernias. Reducible or asymptomatic femoral hernias are NEVER managed with trusses or watchful waiting; prompt surgical repair (herniorrhaphy/hernioplasty) is indicated.',
      'Signs of Strangulated Hernia: Sudden severe acute groin/thigh pain, irreducible bulge, redness/erythema over the swelling, high-pitched or absent bowel sounds, nausea, vomiting, and systemic fever/tachycardia indicating bowel ischemia and impending gangrene/peritonitis.',
      'Anatomical Distinction: Inguinal hernia protrudes ABOVE the inguinal ligament (superior/medial to pubic tubercle); Femoral hernia protrudes BELOW the inguinal ligament (inferior/lateral to pubic tubercle, medial to the femoral vein).'
    ],
    practiceQuestion: {
      question: 'A 72-year-old female client presents to the emergency department reporting acute severe lower right groin and upper thigh pain accompanied by nausea and abdominal distension. Assessment reveals a tender, non-reducible, erythematous mass situated inferior to the inguinal ligament and medial to the femoral pulsation. The nurse recognizes this presentation as an incarcerated femoral hernia (FEM in FEMales). Which action should the nurse take immediately?',
      options: [
        'Attempt vigorous manual reduction of the mass while the client is placed in the Trendelenburg position.',
        'Apply an abdominal truss support belt and instruct the client to ambulate to stimulate flatus.',
        'Maintain NPO status, establish IV access, and notify the surgical team immediately for emergent intervention.',
        'Provide oral clear liquids and schedule an outpatient ultrasound examination for the following week.'
      ],
      correctIndex: 2,
      rationale: 'Femoral hernias ("FEMoral hernias in FEMales") pass through the rigid femoral canal inferior to the inguinal ligament. Because of these unyielding fibrous borders, femoral hernias carry an exceptionally high risk of incarceration and strangulation leading to ischemic bowel necrosis. An acute, tender, erythematous, non-reducible mass indicates acute incarceration/strangulation, which is a surgical emergency. The nurse must keep the client NPO, start IV fluids, and immediately alert the surgical team. Manual forceful reduction is contraindicated because it risks reducing necrotic, perforated bowel back into the peritoneal cavity.'
    }
  },
  {
    id: 'croup-symptoms-triad-sss',
    shortCode: 'SSS',
    title: 'Croup Signs, Symptoms & Airway Triad (SSS)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The classic clinical triad and radiographic hallmark of acute laryngotracheobronchitis (viral croup).',
    memoryTip: '“SSS” for Croup — Stridor (inspiratory), Subglottic swelling (Steeple sign on X-ray), Seal-bark cough. Keep the child calm and administer dexamethasone & racemic epinephrine!',
    highYield: true,
    tags: ['Respiratory', 'Pediatrics', 'Emergency Nursing', 'Airway Management', 'Infectious Disease'],
    letters: [
      {
        letter: 'S',
        term: 'Stridor (Inspiratory Stridor)',
        description: 'High-pitched, harsh musical sound generated by rapid, turbulent airflow through a severely narrowed subglottic extrathoracic airway. Presence of inspiratory stridor at rest indicates moderate-to-severe airway compromise demanding emergent medical therapy.',
        highlight: 'Inspiratory stridor at rest signals severe obstruction'
      },
      {
        letter: 'S',
        term: 'Subglottic Swelling (Steeple Sign)',
        description: 'Viral invasion (primarily Human Parainfluenza virus type 1) provokes inflammatory mucosal edema within the rigid cricoid cartilage ring. Anteroposterior (AP) soft-tissue neck radiographs characteristically demonstrate tapering symmetric subglottic narrowing known as the "Steeple sign" (or pencil-point sign).',
        highlight: 'Steeple sign on AP neck radiograph'
      },
      {
        letter: 'S',
        term: 'Seal-Bark Cough (Brassy / Barking Cough)',
        description: 'Harsh, resonant, barking cough resembling the vocalization of a sea lion, accompanied by vocal cord edema and hoarseness. Classically strikes abruptly at night, often triggered by cool nighttime air or child agitation.',
        highlight: 'Barking seal-like cough worsening at night'
      }
    ],
    clinicalContext: 'In Emergency and Pediatric/Medical-Surgical nursing, viral croup (laryngotracheobronchitis) is the most common cause of acute upper airway obstruction in young children (aged 6 months to 3 years). Management hinges on keeping the child calm (avoiding invasive procedures or agitation that precipitously worsen airway edema and respiratory distress), administering systemic corticosteroids (oral Dexamethasone 0.15–0.6 mg/kg single dose), and utilizing nebulized racemic epinephrine for stridor at rest with a mandatory 2-to-4 hour observation period to monitor for rebound airway obstruction.',
    nclexPearls: [
      'Dexamethasone is First-Line: A single dose of oral (or IM/IV) dexamethasone is the mainstay of croup management, reducing mucosal edema, hospital admissions, and symptom duration.',
      'Nebulized Racemic Epinephrine & Rebound Alert: Nebulized racemic epinephrine acts rapidly (within 10–30 minutes) via alpha-1 mucosal vasoconstriction to relieve severe subglottic edema and stridor at rest. The nurse MUST observe the child for at least 2 to 4 hours post-treatment because the medication\'s effect wanes and rebound bronchospasm and subglottic swelling can recur.',
      'Agitation Worsens Stridor: Avoid distressing interventions (e.g., unnecessary blood draws, painful exams) because crying dramatically increases negative inspiratory pressure, pulling swollen mucosal walls inward and worsening airway obstruction. Allow the child to remain on the parent\'s lap.',
      'Croup vs. Epiglottitis: Croup has a barking seal cough, subglottic swelling ("steeple sign"), and viral prodrome; Epiglottitis is a medical emergency with high fever, toxic appearance, absence of cough, drooling, dysphagia, and tripod positioning with an enlarged epiglottis ("thumbprint sign").'
    ],
    practiceQuestion: {
      question: 'A 2-year-old child is brought to the emergency department with a 2-day history of low-grade fever, hoarseness, and a loud seal-bark cough that worsened during the night. On physical examination, the child is irritable and exhibits audible inspiratory stridor at rest with mild intercostal retractions. An AP neck radiograph shows subglottic narrowing ("steeple sign"). Which nursing intervention should be implemented first (SSS)?',
      options: [
        'Perform immediate endotracheal intubation using a cuffed pediatric tube.',
        'Administer prescribed nebulized racemic epinephrine and oral dexamethasone while keeping the child on the parent\'s lap.',
        'Insert an intravenous catheter to draw blood cultures and administer broad-spectrum IV antibiotics.',
        'Place a tongue blade in the child\'s mouth to thoroughly visualize the posterior oropharynx.'
      ],
      correctIndex: 1,
      rationale: 'The child exhibits classic moderate-to-severe viral croup ("SSS": Inspiratory Stridor at rest, Subglottic swelling / steeple sign, Seal-bark cough). First-line medical therapy consists of oral or parenteral Dexamethasone (to reduce subglottic inflammation) and nebulized racemic epinephrine (for rapid alpha-1 vasoconstriction to relieve acute stridor at rest). Keeping the child calm in the caregiver\'s lap prevents agitation, which worsens subglottic collapse. Inserting a tongue blade is contraindicated (especially if differentiating from epiglottitis due to risk of laryngospasm), intubation is reserved only for respiratory exhaustion/arrest, and antibiotics are ineffective for viral croup.'
    }
  },
  {
    id: 'pneumonia-risk-factors-inspiration',
    shortCode: 'INSPIRATION',
    title: 'Pneumonia Predisposing Risk Factors (INSPIRATION)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Comprehensive clinical risk factors and host defense impairments predisposing clients to hospital-acquired, community-acquired, and aspiration pneumonia.',
    memoryTip: 'INSPIRATION — Immunosuppression, Neoplasia, Secretion retention, Pulmonary edema, Impaired alveolar macrophages, RTI (prior viral), Antibiotics/cytotoxics, Tracheal instrumentation, IV drug abuse, Other (debility/immobility), Neurologic impaired cough reflex.',
    highYield: true,
    tags: ['Respiratory', 'Infectious Disease', 'Pneumonia', 'Aspiration Precautions', 'Critical Care', 'Prevention'],
    letters: [
      {
        letter: 'I',
        term: 'Immunosuppression',
        description: 'Impaired humoral or cell-mediated immunity from HIV/AIDS, solid organ transplantation, biologic therapies, or prolonged systemic corticosteroid use, leaving alveoli vulnerable to opportunistic and bacterial pathogens.',
        highlight: 'Compromised cell-mediated & humoral defenses'
      },
      {
        letter: 'N',
        term: 'Neoplasia (Lung & Hematologic Cancers)',
        description: 'Bronchogenic carcinoma obstructing tracheobronchial lumens and causing distal post-obstructive atelectasis and pneumonia; leukemias and lymphomas causing profound neutropenia and functional leukocyte defects.',
        highlight: 'Endobronchial tumor obstruction & neutropenia'
      },
      {
        letter: 'S',
        term: 'Secretion Retention (COPD & Post-Op Splinting)',
        description: 'Ineffective mucus clearance seen in COPD, cystic fibrosis, bronchiectasis, and postoperative surgical patients who shallowly hypoventilate and splint due to thoracic or upper abdominal surgical pain.',
        highlight: 'Mucus plugging & post-op hypoventilation/splinting'
      },
      {
        letter: 'P',
        term: 'Pulmonary Oedema',
        description: 'Excessive alveolar fluid accumulation from congestive heart failure (CHF) or acute respiratory distress syndrome (ARDS) that inactivates surfactant, impairs ciliary action, and serves as an ideal microbial culture medium.',
        highlight: 'Alveolar fluid transudate promoting bacterial growth'
      },
      {
        letter: 'I',
        term: 'Impaired Alveolar Macrophages',
        description: 'Inactivation of lower respiratory phagocytes and mucociliary clearance caused by cigarette smoking, chronic alcohol use disorder, toxic chemical inhalation, and exposure to hyperoxic inspired oxygen fractions.',
        highlight: 'Smoking, alcohol, & toxic macrophage suppression'
      },
      {
        letter: 'R',
        term: 'RTI (Prior Respiratory Tract Infection)',
        description: 'Recent viral upper or lower respiratory infections (especially Influenza A/B, RSV, or Parainfluenza) that strip protective bronchial ciliated epithelium, predisposing to devastating secondary bacterial superinfections.',
        highlight: 'Post-influenza secondary bacterial superinfection'
      },
      {
        letter: 'A',
        term: 'Antibiotics & Cytotoxics',
        description: 'Prolonged broad-spectrum antibiotic therapy eliminating normal competitive commensal oral flora and selecting for multidrug-resistant nosocomial pathogens (MRSA, Pseudomonas); cytotoxic chemotherapy inducing nadir myelosuppression.',
        highlight: 'MDR pathogen selection & cytotoxic neutropenia'
      },
      {
        letter: 'T',
        term: 'Tracheal Instrumentation (VAP & Tracheostomy)',
        description: 'Endotracheal intubation (Ventilator-Associated Pneumonia / VAP), tracheostomies, and bronchoscopy that bypass the upper airway\'s protective humidification and glottic filtration mechanisms.',
        highlight: 'Endotracheal tubes bypassing upper airway defenses'
      },
      {
        letter: 'I',
        term: 'IV Drug Abuse',
        description: 'Intravenous injection of illicit substances causing transient bacteremia and tricuspid valve infective endocarditis with septic embolization to the pulmonary capillary beds, causing bilateral multifocal cavitary pneumonias.',
        highlight: 'Septic pulmonary emboli from right-sided endocarditis'
      },
      {
        letter: 'O',
        term: 'Other Debilities (Immobility & Advanced Age)',
        description: 'Advanced age (≥65 years), chronic bedridden immobility, protein-calorie malnutrition, and generalized physical frailty reducing vital capacity and thoracic muscular compliance.',
        highlight: 'Advanced age, malnutrition, & chronic immobility'
      },
      {
        letter: 'N',
        term: 'Neurologic Impairment of Cough Reflex',
        description: 'Depression of protective gag and cough reflexes resulting from acute ischemic stroke, traumatic brain injury, sedation, anesthesia, or neuromuscular junction disorders (Myasthenia Gravis, ALS), leading to silent or massive aspiration pneumonia.',
        highlight: 'Stroke, impaired gag reflex, & aspiration risk'
      }
    ],
    clinicalContext: 'In Medical-Surgical and ICU nursing, pneumonia remains a primary cause of nosocomial morbidity, sepsis, and mortality. Nurses implement targeted preventive bundles: VAP bundles (head of bed elevated 30–45°, daily sedation vacations, subglottic secretion suctioning, chlorhexidine oral hygiene), post-op pulmonary hygiene (incentive spirometry 10 times/hr while awake, early ambulation, splinted coughing), and aspiration precautions (swallow screening post-stroke, thickened liquids, upright positioning for meals).',
    nclexPearls: [
      'Ventilator-Associated Pneumonia (VAP) Bundle: Keep head of bed (HOB) elevated 30° to 45°, perform daily spontaneous awakening/breathing trials, provide regular oral hygiene with chlorhexidine, use subglottic suction endotracheal tubes, and initiate peptic ulcer and DVT prophylaxis.',
      'Post-Viral Bacterial Pneumonia: In a client recovering from influenza who suddenly develops high spiking fevers, pleuritic chest pain, productive purulent sputum, and new infiltrates, suspect secondary bacterial superinfection (often Staphylococcus aureus or Streptococcus pneumoniae).',
      'Aspiration Pneumonia Prevention: Stroke clients must remain NPO until formal speech therapy swallow evaluation; feed sitting upright at 90°, position food on the unaffected side of the mouth, check for pocketing, avoid drinking through straws, and maintain upright posture for 30–60 minutes after meals.'
    ],
    practiceQuestion: {
      question: 'A medical-surgical nurse is caring for a 74-year-old client who was admitted following an acute left hemispheric ischemic stroke. The client has right-sided hemiplegia, expressive aphasia, and a history of chronic obstructive pulmonary disease (COPD). Which nursing intervention is the most critical priority to prevent hospital-acquired pneumonia (INSPIRATION)?',
      options: [
        'Keep the client strictly NPO until a formal bedside swallow evaluation is completed by speech therapy.',
        'Encourage the client to drink thin liquids through an angled straw to prevent neck hyperextension.',
        'Position the client completely flat in the supine position during assisted meal times.',
        'Administer prophylactic broad-spectrum IV antibiotics around the clock for the duration of hospitalization.'
      ],
      correctIndex: 0,
      rationale: 'The client possesses multiple high-risk predisposing factors for pneumonia (INSPIRATION: Neurologic impairment of cough reflex/swallow post-stroke, Secretion retention from COPD, and advanced age). In acute stroke clients, silent aspiration of oral secretions or dietary intake is the leading cause of aspiration pneumonia. Maintaining strict NPO status until a dysphagia screening / swallow evaluation is performed by a speech-language pathologist is the vital priority. Thin liquids through straws increase aspiration risk, feeding should always occur at 90° upright (never flat), and prophylactic antibiotics are not indicated without active infection and promote resistant superinfections.'
    }
  },
  {
    id: 'pneumothorax-signs-symptoms-p-thorax',
    shortCode: 'P-THORAX',
    title: 'Pneumothorax Signs & Symptoms (P-THORAX)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Clinical signs, physical examination findings, and diagnostic hallmarks of simple and tension pneumothorax.',
    memoryTip: 'P-THORAX — Pleuritic pain, Trachea deviation (contralateral in tension), Hyper-resonance, Onset sudden, Reduced breath sounds, Absent fremitus, X-ray shows collapse.',
    highYield: true,
    tags: ['Respiratory', 'Critical Care', 'Chest Trauma', 'Emergency Nursing', 'Chest Tubes'],
    letters: [
      {
        letter: 'P',
        term: 'Pleuritic Pain',
        description: 'Sharp, localized, knife-like chest pain that intensifies dramatically with deep inspiration, coughing, or thoracic movement, corresponding to parietal pleural irritation and acute pleural separation.',
        highlight: 'Sharp unilateral pain worsening with inspiration'
      },
      {
        letter: 'T',
        term: 'Trachea Deviation (Late Sign of Tension Pneumothorax)',
        description: 'Critical sign of life-threatening tension pneumothorax! Escalating positive pressure in the affected pleural space forces the mediastinum, heart, and trachea to shift toward the UNAFFECTED (contralateral) side, compressing the superior vena cava and causing obstructive shock.',
        highlight: 'Trachea shifts away from affected side in tension'
      },
      {
        letter: 'H',
        term: 'Hyper-Resonance on Percussion',
        description: 'Percussion over the affected hemithorax yields a loud, drum-like, hyper-resonant pitch due to free air trapped within the pleural space (in sharp contrast to the dull thud heard in hemothorax or pleural effusion).',
        highlight: 'Hyper-resonant, drum-like percussion note'
      },
      {
        letter: 'O',
        term: 'Onset Sudden',
        description: 'Abrupt emergence of acute dyspnea, tachypnea (>24 breaths/min), tachycardia, and intense apprehension, frequently occurring spontaneously in tall, thin young individuals (ruptured apical subpleural blebs) or post-trauma.',
        highlight: 'Sudden tachypnea, dyspnea, & tachycardia'
      },
      {
        letter: 'R',
        term: 'Reduced Breath Sounds (& Dyspnea)',
        description: 'Markedly diminished or totally absent vesicular breath sounds on auscultation over the affected lung field because underlying pulmonary parenchyma has collapsed away from the chest wall.',
        highlight: 'Diminished or absent breath sounds on affected side'
      },
      {
        letter: 'A',
        term: 'Absent Tactile Fremitus',
        description: 'Palpation of vocal fremitus (asking the client to repeat "ninety-nine") reveals absent or markedly reduced tactile vibrations over the affected hemithorax because air is an inefficient acoustic conductor compared to consolidated lung.',
        highlight: 'Abolished tactile fremitus over air cushion'
      },
      {
        letter: 'X',
        term: 'X-ray Shows Collapse',
        description: 'Upright chest radiography reveals a distinct visceral pleural line with complete absence of peripheral bronchovascular lung markings, lung consolidation at the hilum, and potential mediastinal shift.',
        highlight: 'Sharp visceral pleural line & absent lung markings'
      }
    ],
    clinicalContext: 'In Emergency, Trauma, ICU, and Medical-Surgical nursing, differentiating between a simple pneumothorax and a life-threatening Tension Pneumothorax is a critical NCLEX competency. A tension pneumothorax functions as a one-way "flutter-valve" trapping air under pressure with every breath. Signs of tension pneumothorax (severe hypotension, tracheal deviation to the unaffected side, distended neck veins / JVD, cyanosis) require immediate needle thoracostomy decompression (large-bore 14–16 gauge needle at 2nd ICS MCL or 4th/5th ICS anterior axillary line) before waiting for a chest X-ray, followed immediately by chest tube thoracostomy with water-seal drainage.',
    nclexPearls: [
      'Tension Pneumothorax is a CLINICAL Emergency: Do NOT send the patient for a chest X-ray if tension pneumothorax is suspected (hypotension, JVD, tracheal deviation). Immediate needle decompression takes priority over imaging!',
      'Tracheal Deviation Direction: Trachea deviates AWAY from the affected side in tension pneumothorax (pushed by high pressure); in massive atelectasis, it pulls TOWARD the affected side (pulled by negative volume loss).',
      'Chest Tube Water-Seal Chamber: Intermittent tidaling (rise with inspiration, fall with expiration in spontaneous breathing) is normal; continuous bubbling in the water-seal chamber indicates an air leak in the system or persistent lung pleural leak.'
    ],
    practiceQuestion: {
      question: 'A client who sustained blunt thoracic trauma in a motor vehicle collision suddenly develops acute respiratory distress, severe cyanosis, and tachycardia of 138 beats/min. Upon assessment, the nurse notes absent breath sounds over the right hemithorax, hyper-resonance to percussion, distended neck veins (JVD), blood pressure of 78/46 mmHg, and visible tracheal deviation to the left. Which intervention should the nurse anticipate immediately (P-THORAX)?',
      options: [
        'Transport the client immediately to radiology for a portable stat chest radiograph.',
        'Assist with immediate emergency needle thoracostomy decompression in the right chest.',
        'Administer an intravenous bolus of furosemide 40 mg to treat suspected heart failure.',
        'Apply high-flow oxygen via a non-rebreather mask and reassess vital signs in 15 minutes.'
      ],
      correctIndex: 1,
      rationale: 'The client exhibits the classic signs of a right-sided Tension Pneumothorax (P-THORAX: absent breath sounds, hyper-resonance, sudden severe dyspnea, JVD, hemodynamic collapse with hypotension, and tracheal deviation to the contralateral left side). Tension pneumothorax is an immediate life-threatening medical emergency causing severe obstructive shock due to compression of the vena cava. Immediate emergency needle thoracostomy decompression (inserting a large-bore needle into the right pleural space) must be performed immediately to relieve the pressure; waiting for a chest radiograph or reassessing will result in cardiac arrest.'
    }
  },
  {
    id: 'respiratory-depression-drugs-stop',
    shortCode: 'STOP BREATHING',
    title: 'Drugs Inducing Respiratory Depression (STOP Breathing)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Pharmacological classes and high-risk antimicrobial agents capable of inducing central or neuromuscular respiratory depression and apnea.',
    memoryTip: '“STOP breathing” — Sedatives & hypnotics, Trimethoprim (toxic interactions), Opiates, Polymyxins (neuromuscular blockade apnea). Always have reversal agents (Naloxone, Flumazenil) and ambu-bag at bedside!',
    highYield: true,
    tags: ['Pharmacology', 'Respiratory', 'Critical Care', 'Emergency Nursing', 'Patient Safety'],
    letters: [
      {
        letter: 'S',
        term: 'Sedatives & Hypnotics (Benzodiazepines, Barbiturates, Propofol)',
        description: 'Potentiate central inhibitory GABA-A receptors, depressing the reticular activating system and blunting brainstem chemoreceptor sensitivity to rising arterial PaCO2. Flumazenil is the specific reversal agent for benzodiazepines.',
        highlight: 'GABA agonists blunting CO2 drive; reversed by Flumazenil'
      },
      {
        letter: 'T',
        term: 'Trimethoprim (Toxic Synergies & Metabolic Vulnerabilities)',
        description: 'Trimethoprim-sulfamethoxazole (TMP-SMX) and related synergistic agents can precipitate hyperkalemia, metabolic acidosis, drug-induced aseptic meningitis, or profound lethargy in renal failure that exacerbates ventilatory depression.',
        highlight: 'Synergistic toxicities & metabolic depressants in renal impairment'
      },
      {
        letter: 'O',
        term: 'Opiates (Opioids: Morphine, Fentanyl, Hydromorphone)',
        description: 'Direct agonists at brainstem mu-opioid receptors that inhibit the respiratory rhythm generator in the pre-Bötzinger complex, producing dose-dependent bradypnea (<10/min), decreased tidal volume, and apnea. Promptly reversed by Naloxone (Narcan).',
        highlight: 'Mu-opioid agonists blunting respiratory drive; reversed by Naloxone'
      },
      {
        letter: 'P',
        term: 'Polymyxins (Colistin & Polymyxin B)',
        description: 'Cationic polypeptide antibiotics for multidrug-resistant Gram-negative bacteria; can cause severe dose-dependent non-depolarizing neuromuscular blockade by inhibiting presynaptic acetylcholine release, triggering prolonged diaphragmatic paralysis and apnea.',
        highlight: 'Neuromuscular blockade causing acute respiratory paralysis'
      }
    ],
    clinicalContext: 'In Medical-Surgical, Post-Anesthesia Care (PACU), and Critical Care nursing, opioid and sedative-induced respiratory depression (OSIRD) is a catastrophic preventable cause of hospital cardiac arrest. Nurses must monitor continuous pulse oximetry, capnography (EtCO2 provides the earliest indication of hypoventilation before pulse oximetry desaturation), sedation scores (e.g., POSS: Pasero Opioid-Induced Sedation Scale), and maintain immediate availability of bag-valve-mask (BVM) equipment and specific reversal agents (Naloxone for opioids, Flumazenil for benzodiazepines).',
    nclexPearls: [
      'Sedation Precedes Respiratory Depression: On the Pasero Opioid-Induced Sedation Scale (POSS), excessive somnolence (Score 3: frequently drowsy, drifts off during conversation; Score 4: somnolent, minimal or no response) precedes respiratory arrest. If a client is unarousable or breathing <8–10 breaths/min, stop the infusion, stimulate the client, and prepare Naloxone.',
      'Naloxone (Narcan) Half-Life Alert: Naloxone has a shorter half-life (30–90 minutes) than most opioids (e.g., morphine, methadone, extended-release oxycodone). The nurse MUST anticipate that the client may re-sedate and slip back into respiratory depression as Naloxone wears off; continue serial monitoring and prepare for repeat doses or an infusion.',
      'Polymyxin / Aminoglycoside Neuromuscular Blockade: Antimicrobial classes such as polymyxins (colistin) and aminoglycosides (gentamicin) can induce non-depolarizing neuromuscular blockade and acute apnea; caution in clients with Myasthenia Gravis or post-anesthesia!'
    ],
    practiceQuestion: {
      question: 'A postoperative surgical client receiving patient-controlled analgesia (PCA) with IV hydromorphone is found difficult to arouse, with a respiratory rate of 7 breaths/min and shallow chest excursion. Pulse oximetry reads 84% on room air. The nurse immediately stimulates the client, administers oxygen via bag-valve mask, and administers IV naloxone. Following initial clinical awakening and normalization of breathing, which nursing intervention is essential (STOP breathing)?',
      options: [
        'Discharge the client to the unmonitored surgical floor since the overdose is resolved.',
        'Restart the hydromorphone PCA at half the previous basal infusion rate.',
        'Closely monitor respiratory rate and sedation status continuously for at least 2 hours because naloxone\'s duration of action is shorter than hydromorphone.',
        'Administer an immediate dose of intravenous flumazenil to prevent opioid recurrence.'
      ],
      correctIndex: 2,
      rationale: 'Naloxone is a competitive opioid antagonist with a relatively short elimination half-life of approximately 30 to 90 minutes, whereas hydromorphone and other opioids have considerably longer durations of action. When naloxone is metabolized and cleared from opioid receptors, residual circulating opioid will rebind to receptors, precipitating recurrent respiratory depression and somnolence ("O" in STOP breathing). Continuous close respiratory monitoring and preparedness to administer repeat doses of naloxone are vital. Flumazenil is a benzodiazepine antagonist, not an opioid antagonist.'
    }
  },
  {
    id: 'trauma-care-complications-trauma',
    shortCode: 'TRAUMA',
    title: 'Complications in Trauma Nursing Care (TRAUMA)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Multisystem complications and priority clinical vulnerabilities in major trauma resuscitation and recovery.',
    memoryTip: 'TRAUMA — Thromboembolism/Tissue perfusion altered, Respiration altered (ARDS/pulmonary contusion), Anxiety & pain, Urinary elimination altered (AKI/rhabdomyolysis), Mobility impaired, Alterations in skin integrity/sensory-perceptual (infections/pressure ulcers).',
    highYield: true,
    tags: ['Trauma', 'Emergency Nursing', 'Critical Care', 'Complications', 'Assessment'],
    letters: [
      {
        letter: 'T',
        term: 'Thromboembolism & Tissue Perfusion, Altered',
        description: 'Profound risk of deep vein thrombosis (DVT) and pulmonary embolism (PE) from Virchow\'s triad; hemorrhagic hypovolemic shock requiring massive transfusion protocol (MTP); and limb compartment syndrome requiring emergent fasciotomy.',
        highlight: 'DVT/PE, hemorrhagic shock, & compartment syndrome'
      },
      {
        letter: 'R',
        term: 'Respiration, Altered (ARDS, Pulmonary Contusion, Flail Chest)',
        description: 'Blunt chest injury leading to delayed pulmonary contusions (worsening hypoxia over 24-48 hours), flail chest with paradoxical breathing, and systemic inflammatory response syndrome (SIRS) evolving into Acute Respiratory Distress Syndrome (ARDS) or Fat Embolism Syndrome (FES).',
        highlight: 'Pulmonary contusion, ARDS, & Fat Embolism Syndrome'
      },
      {
        letter: 'A',
        term: 'Anxiety Related to Pain & Prognosis',
        description: 'Excruciating acute pain, fear of permanent disability, loss of autonomy, acute stress disorder, post-traumatic stress disorder (PTSD), and hyperactive ICU delirium requiring multimodal analgesia and trauma-informed psychosocial support.',
        highlight: 'Pain crisis, PTSD, & acute stress management'
      },
      {
        letter: 'U',
        term: 'Urinary Elimination, Altered (AKI & Rhabdomyolysis)',
        description: 'Prolonged renal hypoperfusion causing acute tubular necrosis (ATN); severe crush injuries causing myocyte breakdown and massive myoglobin release (rhabdomyolysis presenting with tea-colored urine, high CK, and hyperkalemia; requires aggressive IV fluids for urine output 200-300 mL/hr).',
        highlight: 'Rhabdomyolysis, tea-colored urine, & acute kidney injury'
      },
      {
        letter: 'M',
        term: 'Mobility Impaired',
        description: 'Severe physical immobilization from pelvic disruptions, spinal cord precautions, halo vests, external fixators, or skeletal traction; dramatically elevates risks for atelectasis, deep venous stasis, and deconditioning.',
        highlight: 'Pelvic/spinal trauma & skeletal traction immobility'
      },
      {
        letter: 'A',
        term: 'Alterations in Sensory-Perceptual Functions & Skin Integrity (Infections)',
        description: 'Breaches of the skin barrier from open compound fractures, degloving wounds, burn trauma, and invasive lines; high incidence of hospital-acquired pressure injuries, surgical site sepsis, and necrotizing soft-tissue infections.',
        highlight: 'Open fracture osteomyelitis, pressure injuries, & sepsis'
      }
    ],
    clinicalContext: 'In Emergency, Trauma, and ICU Medical-Surgical nursing, trauma care is divided into primary survey (ABCDE resuscitation) and secondary/tertiary survey (detecting and managing systemic complications). Trauma-induced complications account for the majority of deaths occurring days to weeks post-injury (the late peak of trimodal trauma mortality: sepsis, ARDS, and multiple organ dysfunction syndrome [MODS]).',
    nclexPearls: [
      'Fat Embolism Syndrome (FES) Triad: Occurs 24–72 hours following long-bone (femur/tibia) or pelvic fractures: (1) Respiratory distress/hypoxemia, (2) Neurological changes (confusion, restlessness), and (3) Petechial rash over the chest, neck, and axilla (pathognomonic sign!).',
      'Rhabdomyolysis in Crush Injuries: Look for dark, tea-colored urine, elevated serum creatine kinase (CK > 10,000 U/L), and hyperkalemia. Treatment priority is aggressive IV crystalloid fluid resuscitation (target urine output 200–300 mL/hr) to flush toxic myoglobin through the renal tubules.',
      'Compartment Syndrome: Hallmark is pain out of proportion to injury that is unrelieved by opioids and exacerbated by passive stretching; check the 6 P\'s (Pain, Pressure, Paresthesia, Pallor, Paralysis, Pulselessness). Paresthesia and pain on passive stretch are earliest; pulselessness is late.'
    ],
    practiceQuestion: {
      question: 'A 28-year-old client who sustained closed bilateral femur fractures in a motorcycle collision 36 hours ago becomes abruptly restless and confused. Vital signs reveal BP 138/84 mmHg, HR 124 beats/min, RR 32 breaths/min, and SpO2 88% on room air. Assessment reveals petechial hemorrhages across the client\'s anterior chest wall and axillary folds. Which post-trauma complication should the nurse identify immediately (TRAUMA)?',
      options: [
        'Acute compartment syndrome of the lower extremities',
        'Deep vein thrombosis with massive pulmonary embolism',
        'Fat embolism syndrome (FES)',
        'Acute neurogenic shock from undiagnosed spinal cord injury'
      ],
      correctIndex: 2,
      rationale: 'The client exhibits the pathognomonic triad of Fat Embolism Syndrome (FES, "R" in TRAUMA for altered respiration): (1) acute respiratory distress with hypoxemia and tachypnea, (2) neurocognitive changes (restlessness, confusion), and (3) a petechial rash across the anterior chest and axillae, occurring 24 to 72 hours after long-bone (femur) fractures. FES occurs when fat globules from disrupted bone marrow enter the venous circulation and lodge in pulmonary and cerebral microvessels. Immediate management includes high-flow oxygen, fluid resuscitation, and notifying the provider for ICU transfer.'
    }
  },
  {
    id: 'tia-assessment-three-ts',
    shortCode: '3 Ts',
    title: 'Transient Ischemic Attack Assessment Hallmarks (3 Ts)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Key focal neurological warning signs of Transient Ischemic Attack (TIA) indicating impending stroke risk.',
    memoryTip: '3 Ts for TIA — Temporary unilateral visual impairment (amaurosis fugax), Transient paralysis (one-sided), Tinnitus & vertigo. A TIA is a medical emergency — a warning stroke!',
    highYield: true,
    tags: ['Neurological', 'Stroke', 'Emergency Nursing', 'Assessment', 'Cardiovascular'],
    letters: [
      {
        letter: 'T',
        term: 'Temporary Unilateral Visual Impairment (Amaurosis Fugax)',
        description: 'Sudden, painless, transient loss of vision in one eye, classically described as a dark curtain or shade descending over the visual field. Caused by retinal microemboli originating from ulcerated plaque in the ipsilateral internal carotid artery.',
        highlight: 'Amaurosis fugax ("shade descending over one eye")'
      },
      {
        letter: 'T',
        term: 'Transient Paralysis (One-Sided / Unilateral Hemiparesis)',
        description: 'Sudden reversible motor weakness, facial droop, or heavy numbness involving one side of the body (contralateral cerebral hemisphere ischemia); typically resolves in under an hour (definitionally <24 hours without infarction), carrying high short-term risk of completed stroke.',
        highlight: 'Reversible unilateral hemiparesis or facial droop'
      },
      {
        letter: 'T',
        term: 'Tinnitus & Vertigo (Vertebrobasilar Symptoms)',
        description: 'Subjective ringing/buzzing in the ears, true spinning vertigo, dysequilibrium, ataxia, diplopia (double vision), or dysarthria resulting from transient microvascular ischemia within the posterior vertebrobasilar circulation.',
        highlight: 'Tinnitus, vertigo, ataxia, & posterior circulation ischemia'
      }
    ],
    clinicalContext: 'In Emergency and Medical-Surgical nursing, a Transient Ischemic Attack (TIA) is not a benign event; it is a major medical warning sign of impending completed cerebral infarction. Up to 10–15% of patients with a TIA experience a full stroke within 90 days, with half occurring within the first 48 hours. Emergency workup includes neuroimaging (MRI/CT), carotid artery duplex ultrasound (evaluating for >70% internal carotid stenosis requiring carotid endarterectomy [CEA]), echocardiography / Holter monitoring (evaluating for atrial fibrillation / cardiac thrombus), and immediate antiplatelet therapy (aspirin + clopidogrel).',
    nclexPearls: [
      'TIA is a Stroke Warning: Never dismiss a TIA because symptoms resolved. Full diagnostic evaluation (ABCD2 score) and prevention strategies must be initiated immediately.',
      'Amaurosis Fugax = Carotid Artery Disease: Painless, temporary monocular vision loss ("curtain descending") strongly indicates high-grade ipsilateral internal carotid artery stenosis shedding microemboli into the retinal circulation; prepare for carotid duplex ultrasonography.',
      'Post-Carotid Endarterectomy (CEA) Nursing Priority: Following CEA to prevent recurrent TIA/stroke, monitor closely for neck hematoma / tracheal compression (stridor, neck swelling, respiratory distress — requires emergency bedside stitch removal), cranial nerve injuries (facial symmetry, tongue deviation [CN XII], swallowing [CN IX/X]), and strictly control blood pressure to prevent cerebral hyperperfusion syndrome.'
    ],
    practiceQuestion: {
      question: 'A 66-year-old client reports to the clinic after experiencing an episode where vision in the right eye abruptly went dark for 10 minutes, describing it as "a black curtain being drawn over my right eye." The client also noted temporary left hand and arm numbness that completely resolved within 30 minutes. How should the medical-surgical nurse interpret these symptoms (3 Ts)?',
      options: [
        'Benign ocular migraine that requires reassurance and follow-up in 6 months.',
        'Transient ischemic attack (TIA) indicating high-grade carotid stenosis and high impending stroke risk.',
        'Early closed-angle glaucoma requiring emergency topical pilocarpine eye drops.',
        'Normal age-related vitreous detachment without systemic neurological significance.'
      ],
      correctIndex: 1,
      rationale: 'The client experienced Amaurosis fugax ("Temporary unilateral visual impairment") and contralateral upper extremity numbness ("Transient paralysis"), which are two of the classic "3 Ts" of a Transient Ischemic Attack (TIA). Amaurosis fugax is caused by microemboli temporarily occluding the ophthalmic artery, classically originating from atherosclerotic plaque in the ipsilateral internal carotid artery. A TIA is a serious medical emergency signaling high risk for completed ischemic stroke within 48 to 72 hours, mandating immediate neurovascular evaluation, carotid imaging, and secondary antiplatelet prevention.'
    }
  },
  {
    id: 'traction-nursing-care-plan',
    shortCode: 'TRACTION',
    title: 'Traction Nursing Care & Management (TRACTION)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Comprehensive nursing interventions for clients in skin or skeletal traction (Buck\'s, Russell\'s, balanced suspension).',
    memoryTip: 'TRACTION — Trapeze bar overhead, Requires free-hanging weights & alignment, Analgesia for pain/spasms, Circulation (pulses/color), Temperature (warmth), Infection prevention (pin care), Output (bowel/bladder), Nutrition & hydration.',
    highYield: true,
    tags: ['Musculoskeletal', 'Orthopedics', 'Surgical Nursing', 'Immobility', 'Neurovascular'],
    letters: [
      {
        letter: 'T',
        term: 'Trapeze Bar Overhead',
        description: 'Install an overhead trapeze bar to empower the client to raise and lower their upper body independently, facilitating bedpan placement, repositioning, linens changes, and preserving upper-extremity muscle strength.',
        highlight: 'Trapeze bar for self-repositioning & bedpan use'
      },
      {
        letter: 'R',
        term: 'Requires Free-Hanging Weights & Body Alignment',
        description: 'Traction weights must ALWAYS hang freely without touching the floor, bedframe, or being obstructed by blankets. Maintain the client\'s body in straight alignment along the axis of pull; never remove or adjust skeletal traction weights without a physician prescription.',
        highlight: 'Weights must hang freely; maintain straight alignment'
      },
      {
        letter: 'A',
        term: 'Analgesia for Pain & Muscle Spasms',
        description: 'Administer prescribed analgesics and antispasmodics (e.g., muscle relaxants like cyclobenzaprine) PRN to relieve agonizing skeletal muscle spasms around the fracture. Unrelieved pain unresponsive to opioids warrants immediate evaluation for compartment syndrome.',
        highlight: 'Analgesia & antispasmodics for fracture muscle spasms'
      },
      {
        letter: 'C',
        term: 'Circulation (Check Pulses, Color & Capillary Refill)',
        description: 'Conduct serial neurovascular checks (6 P\'s: pain, pallor, pulselessness, paresthesia, paralysis, poikilothermia) on the affected extremity every 1 to 2 hours; evaluate distal pulses, skin color, and capillary refill (<3 seconds).',
        highlight: 'Neurovascular 6 P\'s & distal pulse checks'
      },
      {
        letter: 'T',
        term: 'Temperature (Check Extremity Warmth)',
        description: 'Palpate the affected extremity compared bilaterally with the uninjured limb; a persistently cool or cold extremity indicates arterial compromise or excessive constrictive wrapping.',
        highlight: 'Extremity warmth compared bilaterally'
      },
      {
        letter: 'I',
        term: 'Infection Prevention (Pin Site Care)',
        description: 'In skeletal traction, inspect transfixing Steinmann pins and Kirschner wires daily for purulent exudate, skin tenting, or erythema; perform sterile pin site cleaning using prescribed antiseptic (chlorhexidine or sterile saline) with separate swabs per pin to prevent osteomyelitis.',
        highlight: 'Sterile pin site care to prevent osteomyelitis'
      },
      {
        letter: 'O',
        term: 'Output (Monitor Urinary & Bowel Elimination)',
        description: 'Prolonged supine immobility predisposes to urinary stasis, renal calculi, and severe constipation/fecal impaction; maintain strict intake and output records, encourage high fluid intake (2–3 L/day), and provide routine stool softeners.',
        highlight: 'Monitor I&O, prevent constipation & urinary stasis'
      },
      {
        letter: 'N',
        term: 'Nutrition (Adjust for Immobility Demands)',
        description: 'Provide a high-protein diet enriched with vitamins C and D, calcium, and zinc to promote osteogenesis and soft-tissue healing; incorporate high dietary fiber to counteract immobility-induced constipation.',
        highlight: 'High protein, calcium, vitamins & dietary fiber'
      }
    ],
    clinicalContext: 'In Orthopedic and Medical-Surgical nursing, skin traction (e.g., Buck\'s traction, used preoperatively for hip fractures to reduce muscle spasms with 5–8 lbs weight) versus skeletal traction (e.g., balanced suspension with 25–40 lbs directly applied to bone for femur fractures) are fundamental concepts. Nurses must protect the line of pull, verify free-hanging weights, prevent foot drop with supportive devices, and execute sterile pin care to prevent deep bone infection (osteomyelitis).',
    nclexPearls: [
      'Golden Rule of Traction Weights: Weights must ALWAYS hang freely! They should never rest on the floor, bed, or be bumped. If weights are resting on the floor, first gently reposition the client higher in bed to re-establish free suspension (do not manually remove or release the weights!).',
      'Never Remove Weights in Skeletal Traction: Weights in skeletal traction should NEVER be removed by the nurse without a written medical order; sudden release of traction triggers agonizing muscle spasm, bone displacement, and internal hemorrhage.',
      'Muscle Spasms vs. Compartment Syndrome: Intermittent muscle spasms are common and treated with repositioning and muscle relaxants; severe, unrelenting pain unresponsive to opioids or accompanied by paresthesia indicates emergent compartment syndrome.'
    ],
    practiceQuestion: {
      question: 'A medical-surgical nurse is caring for a client with a comminuted fracture of the right femur who is placed in balanced suspension skeletal traction. During the morning assessment, the nurse discovers that the traction weights are resting on the floor and the client has slid down toward the foot of the bed. Which action should the nurse take first (TRACTION)?',
      options: [
        'Remove the weights completely and notify the orthopedic surgeon.',
        'With the help of an assistant, gently pull the client toward the head of the bed to restore the weights to a free-hanging position.',
        'Increase the amount of weight on the pulley system to overcome the friction of the bed.',
        'Release the skeletal pins and allow the client to rest flat in bed.'
      ],
      correctIndex: 1,
      rationale: 'Traction weights must hang freely at all times to maintain continuous, prescribed mechanical tension and bone alignment ("R" in TRACTION: Requires free-hanging weights & alignment). When a client slides toward the foot of the bed, the weights touch the floor, eliminating traction force and permitting muscle spasms and bone displacement. The nurse, with assistance, should gently lift and reposition the client toward the head of the bed (maintaining proper body alignment with the line of pull) so the weights hang freely again. Weights in skeletal traction should NEVER be removed or altered without a physician\'s prescription.'
    }
  },
  {
    id: 'tef-assessment-three-cs',
    shortCode: '3Cs TEF',
    title: 'Tracheoesophageal Fistula Assessment Triad (3Cs)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The classic hallmark clinical triad (Coughing, Choking, Cyanosis) and excessive salivation indicating Esophageal Atresia and Tracheoesophageal Fistula (EA/TEF).',
    memoryTip: '“3Cs of TEF” — Coughing, Choking, Cyanosis (triggered during the infant’s first feeding). Immediate intervention: STOP feeding, suction airway, maintain NPO!',
    highYield: true,
    tags: ['Pediatrics', 'Surgical Nursing', 'Airway Management', 'Congenital Anomalies', 'Gastrointestinal'],
    letters: [
      {
        letter: 'C',
        term: 'Coughing',
        description: 'Inhaled milk, formula, or pooled secretions enter the respiratory tree through the abnormal fistulous connection between the esophagus and trachea, stimulating violent paroxysmal coughing reflexes.',
        highlight: 'Paroxysmal coughing as feeds enter tracheal fistula'
      },
      {
        letter: 'C',
        term: 'Choking',
        description: 'Fluid accumulates rapidly within the blind proximal esophageal pouch and overflows retrograde into the larynx and pharynx, causing acute laryngeal obstruction, gasping, and airway choking.',
        highlight: 'Fluid overflow from blind pouch causing airway choking'
      },
      {
        letter: 'C',
        term: 'Cyanosis',
        description: 'Aspiration of feeding fluids and acidic gastric juices into the tracheobronchial tree provokes severe laryngospasm, ventilation-perfusion mismatch, and acute hypoxemic arterial desaturation presenting as central cyanosis.',
        highlight: 'Central cyanosis from acute aspiration and laryngospasm'
      }
    ],
    clinicalContext: 'In Neonatal, Pediatric, and Medical-Surgical nursing, Esophageal Atresia (EA) with Tracheoesophageal Fistula (TEF, most commonly Type C where the proximal esophagus ends in a blind pouch and the distal esophagus connects to the trachea) is a surgical emergency. The newborn often presents prior to feeding with excessive, frothy white bubbles of saliva and mucus at the nose and mouth that return despite suctioning. At the very first feed, the infant displays the hallmark "3Cs" (Coughing, Choking, Cyanosis). Immediate nursing actions: STOP the feeding instantly, maintain strict NPO, place on low continuous suction in the upper esophageal blind pouch (Replogle tube), elevate the head of the bed 30–45° (to prevent acid reflux into the trachea), and prepare for emergency surgical repair.',
    nclexPearls: [
      'First Feeding Priority: If a newborn coughs, chokes, or turns blue during an initial feeding, STOP FEEDING IMMEDIATELY! This is the most heavily tested NCLEX action for suspected TEF.',
      'Excessive Frothy Salivation: Excessive, persistent drooling and frothy mucus in a newborn is the cardinal early warning sign of esophageal atresia before feeding is even attempted.',
      'Positioning & Aspiration Prevention: Position the infant with the head of bed elevated at least 30° to 45°; this gravity position minimizes reflux of acidic gastric contents up through the distal fistula into the lungs, preventing severe chemical pneumonitis.',
      'Blind Pouch Decompression: A double-lumen Replogle catheter is placed into the upper blind esophageal pouch and connected to continuous low suction (30–40 mmHg) to continuously aspirate pooled oral secretions.'
    ],
    practiceQuestion: {
      question: 'A nurse is administering the first oral feeding of sterile water to a newborn infant. After the infant takes approximately 5 mL, the nurse observes sudden violent coughing, choking, and central cyanosis around the lips and face. Frothy mucus bubbles out of the infant\'s mouth and nose. What is the nurse\'s immediate priority action (3Cs)?',
      options: [
        'Continue the feeding slowly to assess if the infant can clear the airway spontaneously.',
        'Immediately stop the feeding, suction the infant\'s mouth and pharynx, and notify the healthcare provider.',
        'Administer blow-by oxygen and place the infant in a flat supine position.',
        'Attempt to pass a large-bore nasogastric tube into the stomach for gavage feeding.'
      ],
      correctIndex: 1,
      rationale: 'The newborn exhibits the classic "3Cs" of Tracheoesophageal Fistula with Esophageal Atresia (Coughing, Choking, Cyanosis), along with excessive frothy oral secretions. The nurse\'s immediate priority is to stop the feeding instantly, suction the oral secretions and upper airway to restore patency, keep the infant strictly NPO, elevate the head of the bed to prevent gastric reflux into the lungs, and notify the physician immediately. Attempting to continue feeding risks fatal pulmonary aspiration and chemical pneumonitis.'
    }
  },
  {
    id: 'sprain-strain-management-rice',
    shortCode: 'RICE',
    title: 'Acute Musculoskeletal Soft-Tissue Injury Management (RICE)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The standard acute conservative protocol for ligamentous sprains, muscular strains, and soft-tissue trauma during the first 24 to 48 hours.',
    memoryTip: 'RICE — Rest, Ice (20–30 min on, never on bare skin), Compression (distal to proximal wrap), Elevation (above heart level). Minimize edema, pain, and secondary hypoxic tissue injury!',
    highYield: true,
    tags: ['Musculoskeletal', 'Orthopedics', 'Emergency Nursing', 'Sports Medicine', 'Trauma'],
    letters: [
      {
        letter: 'R',
        term: 'Rest',
        description: 'Immobilize and protect the injured joint or limb immediately, ceasing all weight-bearing and physical exertion to prevent extension of torn ligamentous fibers or microvascular injury.',
        highlight: 'Stop weight-bearing & immobilize joint'
      },
      {
        letter: 'I',
        term: 'Ice (Cryotherapy for First 24–48 Hours)',
        description: 'Apply cold packs or crushed ice wrapped in a damp towel for 20 to 30 minutes every 2 to 3 hours during the initial 24 to 48 hours. Cold induces local vasoconstriction to limit hematoma expansion, decreases tissue metabolic demand, and numbs nerve endings (never apply bare ice directly to skin).',
        highlight: 'Ice 20-30 min q2-3h during first 24-48 hr (no heat!)'
      },
      {
        letter: 'C',
        term: 'Compression (Elastic Bandage Wrap)',
        description: 'Apply an elastic compression wrap (ACE bandage) starting distally and wrapping spirally toward proximal with uniform pressure to facilitate venous return and tamponade interstitial fluid extravasation; monitor distal pulse, color, warmth, and sensation.',
        highlight: 'Wrap distal to proximal; verify neurovascular status'
      },
      {
        letter: 'E',
        term: 'Elevation (Above Heart Level)',
        description: 'Elevate the injured limb on pillows above the level of the right atrium for the first 24 to 48 hours to utilize gravity to facilitate venous drainage, reduce capillary hydrostatic pressure, and minimize dependent edema and throbbing pain.',
        highlight: 'Elevate above heart level to drain edema'
      }
    ],
    clinicalContext: 'In Emergency and Medical-Surgical ambulatory nursing, acute soft-tissue injuries (ligament sprains, tendon/muscle strains) represent the most frequent orthopedic complaints. Heat application is strictly contraindicated during the acute inflammatory phase (first 24–48 hours) as it induces vasodilation and worsens swelling; moist heat is indicated only after 48 hours to promote tissue healing and hematoma resorption.',
    nclexPearls: [
      'Cold vs. Heat Timing: Cold (Ice) for the first 24–48 hours to cause vasoconstriction and limit edema/bleeding; Heat only AFTER 48 hours to promote vasodilation, relax muscle spasms, and accelerate tissue repair. Applying heat immediately post-injury worsens swelling and pain!',
      'Compression Wrap Technique: Always wrap from distal to proximal (e.g., toes to mid-calf) to encourage venous return; wrapping proximal to distal traps blood in the extremity. Loosen the wrap immediately if the client experiences numbness, tingling, cool pale toes, or delayed capillary refill (>3s).',
      'Sprain vs. Strain: Sprain = injury to a Ligament (connects bone to bone, e.g., ankle inversion ATFL sprain). Strain = injury to a Tendon or Muscle (connects muscle to bone, e.g., hamstring strain).'
    ],
    practiceQuestion: {
      question: 'An adult client presents to an urgent care clinic 2 hours after twisting their right ankle while playing basketball. The nurse observes localized lateral malleolar swelling, ecchymosis, and pain with weight-bearing. Radiographs show no bone fracture. When educating the client on home care using the RICE protocol, which instruction is most appropriate?',
      options: [
        'Apply a warm heating pad for 30 minutes three times daily to relax the ankle ligaments.',
        'Apply an ice pack wrapped in a cloth for 20 to 30 minutes every 2 to 3 hours for the first 24 to 48 hours.',
        'Wrap the elastic bandage tightly starting from the upper calf down toward the toes.',
        'Keep the injured ankle resting on the floor in a dependent position to improve arterial circulation.'
      ],
      correctIndex: 1,
      rationale: 'The RICE protocol (Rest, Ice, Compression, Elevation) is the evidence-based standard for acute ligamentous sprains during the initial 24 to 48 hours. Ice application induces vasoconstriction, limiting capillary leakage, swelling, and localized pain. Cold should be applied for 20–30 minutes at a time with a protective cloth barrier (never direct ice on bare skin). Heat is strictly contraindicated during the acute phase (first 48 hours) as it increases blood flow and worsens edema. Compression wraps must be applied from distal to proximal (toes to calf), and the extremity should be elevated above heart level, not placed in a dependent position.'
    }
  },
  {
    id: 'postoperative-complications-four-ws',
    shortCode: '4 W\'s',
    title: 'Postoperative Complications & Fever Timeline (4 W\'s)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The classic chronological timeline of postoperative fever etiologies and systemic complications from Day 1 through Day 7+.',
    memoryTip: '“4 W’s” of Postoperative Fever & Complications — Wind (Days 1–2: Atelectasis), Water (Day 3: UTI), Wound (Days 5–7: Surgical Site Infection), Walk (Day 7+: DVT/PE/Thrombophlebitis).',
    highYield: true,
    tags: ['Surgical Nursing', 'Postoperative Care', 'Infection Control', 'Assessment', 'Prevention'],
    letters: [
      {
        letter: 'W',
        term: 'Wind (Post-Op Days 1–2: Pulmonary / Atelectasis & Pneumonia)',
        description: 'The most common cause of early postoperative fever within the first 24 to 48 hours. Shallow hypoventilation due to anesthesia and incisional pain leads to alveolar collapse (atelectasis); prevented and treated with early ambulation, incentive spirometry (10 breaths/hr awake), and splinted deep breathing.',
        highlight: 'Days 1-2: Atelectasis; treated with incentive spirometry & ambulation'
      },
      {
        letter: 'W',
        term: 'Water (Post-Op Day 3: Urinary Tract Infection / CAUTI)',
        description: 'Fever emerging around post-op Day 3 is most commonly a Catheter-Associated Urinary Tract Infection (CAUTI) resulting from prolonged indwelling Foley catheterization; prevented by removing Foley catheters within 24 to 48 hours post-op and monitoring for dysuria, urgency, and cloudiness.',
        highlight: 'Day 3: UTI/CAUTI; prevent by prompt catheter removal'
      },
      {
        letter: 'W',
        term: 'Wound (Post-Op Days 5–7: Surgical Site Infection & Dehiscence)',
        description: 'Fever developing around post-op Days 5 to 7 typically indicates a Surgical Site Infection (SSI), deep wound abscess, or fascial dehiscence; assessed for erythema, localized heat, edema, induration, purulent discharge, and incisional separation.',
        highlight: 'Days 5-7: Surgical site infection & wound dehiscence'
      },
      {
        letter: 'W',
        term: 'Walk (Post-Op Day 7+: Deep Vein Thrombosis & Thrombophlebitis)',
        description: 'Late postoperative fever occurring around Day 7 and beyond is classically linked to venous thromboembolism (VTE: DVT and life-threatening Pulmonary Embolism) from prolonged bed rest and hypercoagulability; prevented by early frequent ambulation, sequential compression devices (SCDs), and prophylactic subcutaneous low-molecular-weight heparin (enoxaparin).',
        highlight: 'Day 7+: DVT, thrombophlebitis, & PE from immobility'
      }
    ],
    clinicalContext: 'In Medical-Surgical and Post-Surgical nursing, evaluating postoperative fever requires chronological clinical thinking. A low-grade fever on post-op Day 1 almost never indicates a surgical site infection; it is almost universally atelectasis. Ordering the 4 W\'s directs the nurse\'s physical assessment and diagnostic focus: lung auscultation on Days 1–2, urine assessment on Day 3, surgical wound inspection on Days 5–7, and bilateral calf/chest evaluation on Day 7+.',
    nclexPearls: [
      'Day 1–2 Fever is "WIND": If a client spikes a temperature of 100.4°F (38.0°C) on post-op Day 1, the immediate nursing intervention is incentive spirometry, deep breathing/coughing, and early ambulation, NOT broad-spectrum antibiotics!',
      'CAUTI Prevention: Remove indwelling urinary catheters as early as possible, ideally within 24 to 48 hours postoperatively. Routine catheter irrigation does not prevent infection; maintain a closed drainage system below bladder level.',
      'Wound Dehiscence vs. Evisceration: If surgical wound edges separate (dehiscence) with protrusion of internal organs (evisceration), the nurse must immediately place the client in low Fowler\'s with knees bent, cover protruding organs with sterile gauze soaked in warm normal saline, keep NPO, and notify the surgeon stat. Never attempt to push organs back!'
    ],
    practiceQuestion: {
      question: 'A client who underwent an open abdominal exploratory laparotomy 24 hours ago develops a temperature of 100.8°F (38.2°C), heart rate of 94 beats/min, and respiratory rate of 22 breaths/min. The surgical incision is clean, dry, and intact with no erythema. Auscultation reveals diminished breath sounds with fine crackles at the bilateral lung bases. Based on the chronological postoperative complications timeline (4 W\'s), which nursing action is the priority?',
      options: [
        'Collect blood and urine cultures and administer empiric intravenous vancomycin.',
        'Instruct and assist the client to use the incentive spirometer 10 times every hour while awake and ambulate in the hallway.',
        'Obtain an immediate Doppler ultrasound of the lower extremities to evaluate for deep vein thrombosis.',
        'Remove the surgical dressing and probe the incision for a deep fascial wound infection.'
      ],
      correctIndex: 1,
      rationale: 'On postoperative Day 1 to 2, the primary cause of postoperative fever is "WIND" (atelectasis resulting from shallow breathing and anesthetic effects). Normal physiological incisional healing occurs without infection on Day 1. The priority nursing interventions for atelectasis are aggressive pulmonary hygiene: coaching the client in incentive spirometry (10 breaths/hour while awake), splinted deep breathing/coughing exercises, and early ambulation. Wound infections ("Wound") do not typically manifest until post-op Days 5–7, and urinary tract infections ("Water") occur around Day 3.'
    }
  },
  {
    id: 'mi-treatment-mona',
    shortCode: 'MONA',
    title: 'Myocardial Infarction Treatment (MONA)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The classic gold-standard acute emergency pharmacotherapy protocol for suspected Acute Coronary Syndrome and Acute Myocardial Infarction.',
    memoryTip: 'MONA — Monitor / Morphine, Oxygen, Nitroglycerin, Aspirin. Remember clinical priority: Oxygen first if hypoxic (SpO2 < 90%), chewable Aspirin immediately, sublingual Nitroglycerin, and IV Morphine for unrelieved ischemic pain!',
    highYield: true,
    tags: ['Cardiovascular', 'Emergency Nursing', 'Pharmacology', 'Myocardial Infarction', 'Critical Care'],
    letters: [
      {
        letter: 'M',
        term: 'Monitor / Morphine Sulfate',
        description: 'Continuous 12-lead ECG monitoring for lethal dysrhythmias (ventricular fibrillation/tachycardia, ST-elevation). Morphine Sulfate (2–4 mg IV slow push) is indicated for persistent ischemic chest pain refractory to nitroglycerin; provides arterial and venous vasodilation to reduce myocardial preload, afterload, and myocardial oxygen consumption while curbing sympathetic anxiety.',
        highlight: 'Continuous ECG rhythm monitoring & IV morphine for refractory chest pain'
      },
      {
        letter: 'O',
        term: 'Oxygen',
        description: 'Administer supplemental oxygen via nasal cannula (2–4 L/min) only if hypoxemic (SpO2 < 90% or PaO2 < 60 mmHg) or exhibiting respiratory distress. Routine high-flow hyperoxic oxygenation in non-hypoxemic clients is contraindicated due to coronary vasoconstriction and increased systemic vascular resistance.',
        highlight: 'Titrate to SpO2 ≥ 90%; avoid hyperoxia in normoxic clients'
      },
      {
        letter: 'N',
        term: 'Nitroglycerin (Sublingual / IV)',
        description: 'Administer 0.4 mg sublingually every 5 minutes up to 3 doses for ischemic pain. Relaxes vascular smooth muscle to dilate coronary collateral vessels and peripheral capacitance veins (reducing cardiac preload and ventricular wall tension). Contraindicated if systolic blood pressure < 90 mmHg, heart rate < 50 or > 100 bpm, right ventricular infarction, or recent phosphodiesterase-5 inhibitor use (sildenafil, tadalafil).',
        highlight: '0.4 mg SL q5min x 3 doses; hold if SBP < 90 or PDE-5 inhibitor use'
      },
      {
        letter: 'A',
        term: 'Aspirin (162–325 mg Chewed)',
        description: 'Immediate administration of non-enteric coated chewable aspirin (162 to 325 mg) at the first onset of suspected acute coronary syndrome. Irreversibly acetylates platelet cyclooxygenase-1 (COX-1), inhibiting thromboxane A2 synthesis to halt further intracoronary platelet aggregation and clot propagation.',
        highlight: 'Chew 162–325 mg non-enteric coated aspirin immediately'
      }
    ],
    clinicalContext: 'In Emergency and Cardiovascular nursing, acute myocardial infarction (AMI) results from plaque rupture with acute thrombotic occlusion of a coronary artery. The MONA protocol (often administered in the clinical sequence of O-A-N-M: Oxygen if hypoxic, chewable Aspirin, sublingual Nitroglycerin, and IV Morphine for breakthrough pain) remains the cornerstone of initial medical stabilization while rapidly mobilizing the cardiac catheterization laboratory for primary percutaneous coronary intervention (PCI door-to-balloon goal < 90 minutes). Vital sign monitoring before every dose of nitroglycerin or morphine is mandatory.',
    nclexPearls: [
      'Aspirin Chewing: The NCLEX frequently emphasizes that aspirin must be CHEWED (not swallowed whole) to ensure rapid buccal and gastric absorption within minutes.',
      'Nitroglycerin Contraindications: Never administer nitroglycerin if systolic BP is < 90 mmHg, if right ventricular infarction is suspected (preload-dependent; nitroglycerin can cause profound cardiovascular collapse), or if PDE-5 inhibitors (sildenafil within 24 hours, tadalafil within 48 hours) were ingested.',
      'Oxygen Restriction: NCLEX guidelines (AHA/ACC) dictate supplemental oxygen ONLY for clients with SpO2 < 90%, dyspnea, or signs of heart failure. Unrestricted high-flow oxygen in normoxic patients causes coronary vasoconstriction and increases free-radical reperfusion injury.',
      'Morphine Effects: Morphine lowers preload and cardiac workload; monitor respiratory rate (< 12 breaths/min indicates respiratory depression requiring naloxone) and blood pressure.'
    ],
    practiceQuestion: {
      question: 'A 58-year-old client is admitted to the emergency department with severe, crushing substernal chest pressure radiating to the left jaw and diaphoresis. Vital signs are BP 102/68 mmHg, HR 88 bpm, RR 18 breaths/min, and SpO2 96% on room air. The 12-lead ECG reveals ST-segment elevation in leads V1–V4. According to initial acute MI management protocols (MONA), which initial action should the nurse take first?',
      options: [
        'Initiate high-flow oxygen at 10 L/min via a non-rebreather mask.',
        'Instruct the client to thoroughly chew 325 mg of non-enteric coated aspirin.',
        'Administer 4 mg of intravenous morphine sulfate over 1 minute.',
        'Begin an intravenous infusion of unfractionated heparin bolus.'
      ],
      correctIndex: 1,
      rationale: 'Immediate chewable aspirin (162–325 mg) is the most critical initial pharmacologic intervention to arrest thrombus formation and platelet aggregation. Because the client\'s SpO2 is 96% on room air without respiratory distress, supplemental oxygen is NOT indicated (hyperoxia causes coronary vasoconstriction). Morphine is reserved for pain refractory to sublingual nitroglycerin, and anticoagulation occurs secondary to immediate antiplatelet therapy.'
    }
  },
  {
    id: 'mi-management-boomar',
    shortCode: 'BOOMAR',
    title: 'Basic Myocardial Infarction Management (BOOMAR)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'A comprehensive acute nursing management sequence for acute coronary syndrome to stabilize cardiac workload, relieve ischemia, and preserve myocardium.',
    memoryTip: 'BOOMAR — Bed rest, Oxygen (if SpO2 < 90%), Opiate (Morphine), Monitoring (ECG & vitals), Anticoagulation (Heparin), Reduce clot size (PCI or Fibrinolytics). Blast the clot and rest the heart!',
    highYield: true,
    tags: ['Cardiovascular', 'Emergency Nursing', 'Critical Care', 'Myocardial Infarction', 'Pharmacology'],
    letters: [
      {
        letter: 'B',
        term: 'Bed Rest',
        description: 'Enforce strict bed rest in a semi-Fowler position for the first 12 to 24 hours. Minimizes physical exertion, lowers systemic oxygen demand, reduces myocardial workload, and limits expansion of the infarcted myocardial tissue.',
        highlight: 'Strict bed rest to minimize myocardial oxygen consumption'
      },
      {
        letter: 'O',
        term: 'Oxygen',
        description: 'Administer supplemental oxygen via nasal cannula if oxygen saturation drops below 90%, if the client is tachypneic, or if signs of heart failure/pulmonary edema emerge, safeguarding ischemic penumbra myocardium.',
        highlight: 'Administer supplemental O2 if SpO2 < 90% or in distress'
      },
      {
        letter: 'O',
        term: 'Opiate (Morphine Sulfate)',
        description: 'Administer intravenous morphine sulfate for ischemic chest pain unrelieved by nitroglycerin. Morphine acts as a potent venous vasodilator, reducing preload and afterload while alleviating autonomic sympathetic surges of tachycardia and hypertension.',
        highlight: 'IV morphine for unrelieved pain; reduces preload & anxiety'
      },
      {
        letter: 'M',
        term: 'Monitoring (Continuous Cardiac & Hemodynamics)',
        description: 'Continuous 12-lead continuous cardiac telemetry monitoring for life-threatening dysrhythmias (ventricular tachycardia, ventricular fibrillation, heart blocks), serial 12-lead ECGs, hourly vital signs, and strict intake/output to detect cardiogenic shock.',
        highlight: 'Continuous ECG telemetry & frequent hemodynamic monitoring'
      },
      {
        letter: 'A',
        term: 'Anticoagulation (Heparin / Enoxaparin)',
        description: 'Initiate systemic anticoagulation with intravenous unfractionated heparin (titrated to aPTT 1.5–2.5 times control) or low-molecular-weight heparin (enoxaparin) in conjunction with dual antiplatelet therapy to prevent recurrent intracoronary thrombosis.',
        highlight: 'IV heparin or LMWH to inhibit thrombus propagation'
      },
      {
        letter: 'R',
        term: 'Reduce Clot Size (Reperfusion: PCI or Fibrinolytics)',
        description: 'Emergent myocardial reperfusion therapy to reopen the occluded coronary vessel. Percutaneous Coronary Intervention (PCI) with stent placement is preferred (door-to-balloon time < 90 minutes). If PCI is unavailable within 120 minutes, administer intravenous thrombolytic/fibrinolytic therapy (e.g., alteplase, tenecteplase) within 30 minutes of arrival (door-to-needle time < 30 minutes) provided no contraindications exist.',
        highlight: 'Primary PCI (door-to-balloon < 90 min) or fibrinolytics (door-to-needle < 30 min)'
      }
    ],
    clinicalContext: 'In Acute Care and Medical-Surgical telemetry units, managing a myocardial infarction goes beyond immediate nitrates and aspirin; BOOMAR encompasses the holistic acute care pathway. The leading cause of death in the pre-hospital and early hospital phase of acute MI is lethal ventricular dysrhythmia (VF/pulseless VT), underscoring the absolute necessity of continuous cardiac monitoring. Reperfusion (reducing clot size via PCI or thrombolysis) must be achieved rapidly to salvage myocardial muscle (Time is Muscle!).',
    nclexPearls: [
      'Time is Muscle Reperfusion Goals: PCI door-to-balloon time must be < 90 minutes. Fibrinolytic door-to-needle time must be < 30 minutes.',
      'Bed Rest Rule: Physical exertion and straining (Valsalva maneuver) drastically spike myocardial oxygen consumption and stimulate vagal bradycardia; administer routine stool softeners (docusate) to prevent straining.',
      'Thrombolytic Absolute Contraindications: Prior intracranial hemorrhage, known structural cerebral vascular lesion, ischemic stroke within 3 months, active internal bleeding, or suspected aortic dissection.',
      'Reperfusion Dysrhythmias: Following successful coronary reperfusion (PCI or fibrinolytics), accelerated idioventricular rhythm (AIVR) or ventricular ectopy frequently appears; this is often a benign indicator of restored tissue perfusion, but close monitoring is vital.'
    ],
    practiceQuestion: {
      question: 'A client diagnosed with an acute ST-segment elevation myocardial infarction (STEMI) has arrived at a rural hospital that lacks cardiac catheterization capabilities. The closest PCI center is 3 hours away. Following bed rest, monitoring, and initial medical stabilization (BOOMAR), the physician prescribes IV tenecteplase (TNK-tPA) to reduce clot size. Which assessment finding represents an absolute contraindication to this therapy?',
      options: [
        'Blood pressure reading of 152/94 mmHg.',
        'History of an ischemic stroke 2 months ago.',
        'Total cholesterol level of 280 mg/dL.',
        'Presence of bilateral 1+ ankle edema.'
      ],
      correctIndex: 1,
      rationale: 'A history of an ischemic stroke within the preceding 3 months is an absolute contraindication to thrombolytic/fibrinolytic therapy due to the devastating risk of catastrophic intracranial hemorrhage. Other absolute contraindications include any prior intracranial hemorrhage, active internal bleeding, known intracranial neoplasm/AVM, and suspected aortic dissection. Severe uncontrolled hypertension (>180/110 mmHg) is a relative contraindication, but 152/94 mmHg does not preclude therapy.'
    }
  },
  {
    id: 'melanoma-characteristics-abcd',
    shortCode: 'ABCD',
    title: 'Melanoma Characteristics (ABCD)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The four fundamental clinical visual criteria used by nurses and clients to distinguish benign pigmented nevi from malignant cutaneous melanoma.',
    memoryTip: 'ABCD — Asymmetry (one half doesn\'t match the other), Border (irregular, notched, blurry edges), Color (variegated shades of brown, black, red, blue), Diameter (greater than 6 mm / pencil eraser size). Catch melanoma early!',
    highYield: true,
    tags: ['Integumentary', 'Oncology', 'Dermatology', 'Cancer Screening', 'Assessment'],
    letters: [
      {
        letter: 'A',
        term: 'Asymmetry',
        description: 'When an imaginary line is drawn through the center of the pigmented skin lesion, the two halves do not match in size, shape, or contour (unlike benign symmetrical round or oval moles).',
        highlight: 'Non-matching, asymmetrical halves'
      },
      {
        letter: 'B',
        term: 'Border Irregularity',
        description: 'The perimeter of the lesion is irregular, notched, scalloped, ragged, or poorly defined, blurring into the surrounding normal epidermis without a crisp, circumscribed border.',
        highlight: 'Scalloped, notched, ragged, or blurry borders'
      },
      {
        letter: 'C',
        term: 'Color Variation',
        description: 'The color is not uniform across the lesion; exhibits variegated pigmentation including shades of tan, dark brown, jet black, or suspicious depigmented patches of red, white, or blue.',
        highlight: 'Variegated pigmentation (black, brown, red, white, blue)'
      },
      {
        letter: 'D',
        term: 'Diameter (> 6 mm)',
        description: 'The lesion has a diameter larger than 6 millimeters (approximately 1/4 inch, corresponding to the size of a standard pencil eraser), although early melanomas can occasionally be smaller.',
        highlight: 'Diameter > 6 mm (size of standard pencil eraser)'
      }
    ],
    clinicalContext: 'In Dermatology, Oncology, and Medical-Surgical outpatient assessment, malignant melanoma represents the most aggressive and lethal form of cutaneous neoplasm due to its propensity for early vertical invasion and hematogenous/lymphatic metastasis. Educating clients on routine self-skin examinations (monthly full-body inspections using mirrors) using the ABCD criteria promotes early detection and excisional biopsy at the radial growth phase, which drastically improves 5-year survival rates compared to deeply invasive vertical lesions.',
    nclexPearls: [
      'Melanoma Risk Factors: Fair skin, light hair (blonde/red), blue/green eyes, multiple dysplastic nevi (>50), personal or family history of skin cancer, and severe blistering sunburns during childhood or adolescence.',
      'Sun Safety Education: Avoid direct sun exposure during peak UV intensity hours (10:00 AM to 4:00 PM). Apply broad-spectrum water-resistant sunscreen with SPF ≥ 30 at least 15–30 minutes prior to outdoor exposure, and reapply every 2 hours (or immediately after swimming or heavy diaphoresis). Wear tight-weave protective clothing and wide-brimmed hats.',
      'Biopsy Confirmation: Any suspicious pigmented lesion meeting ABCD criteria should undergo full-thickness excisional biopsy (with 1–2 mm clear margins), NOT superficial shave biopsy, to accurately determine tumor Breslow depth and staging.'
    ],
    practiceQuestion: {
      question: 'During a routine physical examination of a 42-year-old client with fair skin and freckles, the nurse inspects a pigmented lesion on the client\'s upper back. Which characteristic of the lesion is most indicative of malignant melanoma based on the ABCD criteria?',
      options: [
        'Uniform golden-tan coloration with a circular, sharply demarcated 3 mm border.',
        'Asymmetrical 8 mm plaque with notched, irregular edges and mixed black, dark brown, and bluish hues.',
        'Smooth, raised flesh-colored 4 mm papule that has remained static for 15 years.',
        'Clusters of pinpoint, non-blanching petechiae scattered across the lower extremities.'
      ],
      correctIndex: 1,
      rationale: 'Option 2 demonstrates all major hallmarks of the ABCD melanoma criteria: Asymmetry (asymmetrical shape), Border irregularity (notched, ragged edges), Color variation (variegated black, brown, and blue pigmentation), and Diameter > 6 mm (8 mm size). Such findings warrant immediate referral for full-thickness excisional biopsy. Uniform 3 mm lesions and stable flesh-colored papules are benign.'
    }
  },
  {
    id: 'hypoglycemia-signs-dire',
    shortCode: 'DIRE',
    title: 'Hypoglycemia Signs & Symptoms (DIRE)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The cardinal adrenergic and neuroglycopenic manifestations of acute hypoglycemia (blood glucose < 70 mg/dL).',
    memoryTip: 'DIRE — Diaphoresis (cool & clammy), Increased pulse (tachycardia & palpitations), Restless (anxiety, shakiness, tremors), Extra hungry (polyphagia). Cold and clammy, give some candy!',
    highYield: true,
    tags: ['Endocrine', 'Diabetes', 'Emergency Nursing', 'Hypoglycemia', 'Pharmacology'],
    letters: [
      {
        letter: 'D',
        term: 'Diaphoresis (Profuse Sweating)',
        description: 'Activation of the sympathetic nervous system triggers sudden, profuse cold sweats, cool pale skin, and piloerection ("Cold and clammy, need some candy").',
        highlight: 'Cold, clammy diaphoresis from sympathetic surge'
      },
      {
        letter: 'I',
        term: 'Increased Pulse (Tachycardia & Palpitations)',
        description: 'Epinephrine and norepinephrine release from the adrenal medulla stimulates cardiac beta-1 adrenergic receptors, provoking rapid heart rate (tachycardia), pounding heart palpitations, and mild systolic hypertension.',
        highlight: 'Tachycardia & palpitations mediated by epinephrine release'
      },
      {
        letter: 'R',
        term: 'Restless (Tremors, Anxiety & Agitation)',
        description: 'Adrenergic stimulation produces acute restlessness, internal nervousness, extreme anxiety, hand tremors, and shakiness; progresses rapidly to neuroglycopenic confusion, slurred speech, lethargy, and seizure if untreated.',
        highlight: 'Tremors, agitation, nervousness, and cognitive confusion'
      },
      {
        letter: 'E',
        term: 'Extra Hungry (Intense Polyphagia)',
        description: 'Hypothalamic glucoreceptors detect precipitous drops in intracellular cerebral glucose and aggressively trigger the hunger center, causing sudden insatiable food cravings, hunger pangs, and nausea.',
        highlight: 'Sudden ravenous hunger / polyphagia from hypothalamic cues'
      }
    ],
    clinicalContext: 'In Medical-Surgical and Emergency nursing, acute hypoglycemia (blood glucose < 70 mg/dL / 3.9 mmol/L) is a rapid metabolic emergency that can result in irreversible brain injury or death within minutes because neurons depend on continuous glucose supply without storage reserves. Symptoms begin with autonomic/adrenergic warning signs (DIRE: Diaphoresis, Increased pulse, Restlessness/tremors, Extra hunger). In conscious clients, immediately implement the Rule of 15: administer 15 grams of fast-acting simple carbohydrates, wait 15 minutes, recheck blood glucose, and repeat if still < 70 mg/dL.',
    nclexPearls: [
      'Rule of 15 Protocol: Give 15 g of rapid-acting simple sugar (4 oz [1/2 cup] of fruit juice or regular soda, 3–4 glucose tablets, or 1 tablespoon of honey/sugar). Never give high-fat sweets like chocolate bars or ice cream, because fat delays gastric emptying and carbohydrate absorption!',
      'Unconscious Hypoglycemic Client: Never administer oral fluids or food to a somnolent or unconscious client due to fatal aspiration risk! If IV access is available, administer 25–50 mL of 50% Dextrose in water (D50W) IV push. If no IV access, administer 1 mg Glucagon IM or SubQ (turn client on side to prevent aspiration from post-glucagon vomiting).',
      'Beta-Blocker Masking Alert: Beta-adrenergic blockers (e.g., metoprolol, propranolol) block sympathetic beta-receptors and MASK the key adrenergic warning signs of hypoglycemia (tachycardia, palpitations, tremors). DIAPHORESIS is the ONLY sympathetic warning sign that remains unmasked by beta-blockers!',
      'Mnemonic Classic: "Cold and clammy, give some candy; warm and dry, sugar high (hyperglycemia)."'
    ],
    practiceQuestion: {
      question: 'A nurse is caring for a client with type 1 diabetes mellitus who is also taking metoprolol for hypertension. Two hours after receiving morning regular insulin, the client appears pale and diaphoretic. Point-of-care capillary blood glucose is 52 mg/dL. The client is awake, alert, and oriented. Which action should the nurse take first (DIRE)?',
      options: [
        'Administer 1 mg of glucagon intramuscularly into the deltoid.',
        'Provide 4 ounces (120 mL) of unsweetened orange juice orally.',
        'Give 2 chocolate candy bars from the client\'s personal snack stash.',
        'Administer 50 mL of 50% Dextrose (D50W) via IV push immediately.'
      ],
      correctIndex: 1,
      rationale: 'The client is symptomatic with acute hypoglycemia (< 70 mg/dL) but remains conscious, alert, and capable of swallowing safely. According to the "Rule of 15," the nurse should immediately provide 15 grams of fast-acting simple carbohydrate, such as 4 ounces (120 mL) of fruit juice or regular soda. High-fat treats like chocolate bars should be avoided because fat delays gastric absorption of carbohydrates. Glucagon and IV D50W are reserved for clients who are unconscious, unresponsive, or unable to swallow. Notably, because the client is taking a beta-blocker (metoprolol), tachycardia and tremors were masked, leaving diaphoresis as the primary warning indicator.'
    }
  },
  {
    id: 'hypertension-complications-four-cs',
    shortCode: '4 C\'s',
    title: 'Complications of Hypertension (4 C\'s)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The four primary target-organ damage complications resulting from chronic, uncontrolled systemic hypertension.',
    memoryTip: '4 C\'s of Hypertension — CAD (Coronary Artery Disease), CHF (Congestive Heart Failure), CRF (Chronic Renal Failure), CVA (Cerebrovascular Accident / Stroke). Protect the heart, kidneys, and brain!',
    highYield: true,
    tags: ['Cardiovascular', 'Hypertension', 'Renal', 'Neurological', 'Target Organ Damage'],
    letters: [
      {
        letter: 'C',
        term: 'CAD (Coronary Artery Disease)',
        description: 'Chronic shear stress damages vascular endothelium, accelerating coronary atherosclerosis, plaque formation, angina pectoris, and acute myocardial infarction.',
        highlight: 'Endothelial shear stress accelerates coronary atherosclerosis & MI'
      },
      {
        letter: 'C',
        term: 'CHF (Congestive Heart Failure)',
        description: 'Sustained elevation of systemic vascular resistance (afterload) forces left ventricular concentric hypertrophy; over time, the myocardium decompensates, dilates, and leads to systolic/diastolic heart failure.',
        highlight: 'Elevated afterload causes left ventricular hypertrophy & heart failure'
      },
      {
        letter: 'C',
        term: 'CRF (Chronic Renal Failure / CKD)',
        description: 'Arteriolar nephrosclerosis and microvascular hyalinization in the glomerular capillary beds cause progressive glomerulosclerosis, proteinuria/microalbuminuria, elevated serum creatinine, and end-stage renal disease.',
        highlight: 'Arteriolar nephrosclerosis, proteinuria, & progressive renal failure'
      },
      {
        letter: 'C',
        term: 'CVA (Cerebrovascular Accident / Stroke)',
        description: 'High arterial pressures rupture microaneurysms (Charcot-Bouchard) causing intracranial hemorrhagic stroke, or promote cerebral thromboembolism leading to acute ischemic infarction (brain attack).',
        highlight: 'Ischemic brain attack & hemorrhagic stroke from vascular rupture'
      }
    ],
    clinicalContext: 'In Cardiovascular and Medical-Surgical nursing, hypertension is aptly coined "the silent killer" because clients are often asymptomatic until irreversible end-organ damage manifests. The 4 C\'s represent target organ damage (TOD). Nursing care focuses on routine blood pressure screening, pharmacotherapy compliance (ACE inhibitors, ARBs, CCBs, thiazide diuretics), lifestyle modifications (DASH diet, sodium restriction < 2,300 mg/day, regular aerobic exercise), and monitoring renal labs (BUN, creatinine, eGFR, urine albumin) and fundoscopic retinal changes.',
    nclexPearls: [
      'Target Organ Damage (TOD): The 4 C\'s are the classic target organs tested on the NCLEX: Heart (CAD, CHF), Kidneys (CRF/nephrosclerosis), and Brain (CVA/stroke). Retinopathy (cotton wool spots, papilledema) is the 4th major organ system frequently paired with these.',
      'DASH Diet & Sodium: Dietary Approaches to Stop Hypertension (DASH) emphasizes high potassium, magnesium, calcium, and fiber with strict sodium restriction (< 1,500 to 2,300 mg/day).',
      'Hypertensive Crisis Priority: Hypertensive urgency/emergency is defined as BP > 180/120 mmHg. In hypertensive emergency, there is acute target organ damage (e.g., encephalopathy, chest pain, acute kidney injury). The goal is to lower mean arterial pressure (MAP) by no more than 20–25% over the first hour using IV titratable vasodilators (nitroprusside, labetalol) to prevent ischemic cerebral and renal hypoperfusion.'
    ],
    practiceQuestion: {
      question: 'A 62-year-old client with a 15-year history of poorly controlled primary hypertension presents to the medical clinic. Which laboratory assessment finding best demonstrates target-organ damage directly linked to chronic hypertension (4 C\'s)?',
      options: [
        'Serum potassium of 4.2 mEq/L (4.2 mmol/L).',
        'Presence of microalbuminuria with serum creatinine of 2.1 mg/dL (185.6 µmol/L).',
        'Fasting blood glucose of 98 mg/dL (5.4 mmol/L).',
        'Serum sodium of 138 mEq/L (138 mmol/L).'
      ],
      correctIndex: 1,
      rationale: 'Elevated serum creatinine (normal 0.6–1.2 mg/dL) and persistent microalbuminuria are definitive markers of nephrosclerosis and Chronic Renal Failure ("CRF" in the 4 C\'s of hypertension complications). Sustained high systemic pressures cause vascular hyalinization and glomerulosclerosis within renal arterioles, reducing glomerular filtration and permitting protein leakage. Normal potassium, sodium, and fasting glucose do not reflect hypertensive target organ damage.'
    }
  },
  {
    id: 'hypertension-care-plan-itired',
    shortCode: 'I-TIRED',
    title: 'Hypertension Nursing Care Plan & Monitoring (I-TIRED)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Essential clinical assessment, monitoring parameters, and bedside nursing interventions for clients undergoing antihypertensive management.',
    memoryTip: 'I-TIRED — Intake & output, Take blood pressure, Ischemia attack (TIAs), Respiration & pulse, Electrolytes, Daily weight. Stay energized when managing hypertensive clients!',
    highYield: true,
    tags: ['Cardiovascular', 'Hypertension', 'Nursing Care Plan', 'Assessment', 'Electrolytes'],
    letters: [
      {
        letter: 'I',
        term: 'Intake and Output (Urine Output)',
        description: 'Measure strict fluid intake and urinary output every shift; oliguria (< 30 mL/hr or < 0.5 mL/kg/hr) signals decreased renal perfusion, secondary target organ damage, or acute kidney injury.',
        highlight: 'Strict I&O; alert if urine output < 30 mL/hr'
      },
      {
        letter: 'T',
        term: 'Take Blood Pressure (Correct Technique)',
        description: 'Obtain serial bilateral seated blood pressures using an appropriately sized cuff (bladder encircles 80% of arm); check orthostatic vital signs (lying, sitting, standing) to detect drug-induced orthostatic hypotension.',
        highlight: 'Appropriately sized cuff & orthostatic blood pressure checks'
      },
      {
        letter: 'I',
        term: 'Ischemia Attack, Transient (Watch for TIAs)',
        description: 'Conduct serial neurological assessments watching for signs of transient ischemic attacks (TIAs) or completed stroke: sudden unilateral facial droop, arm drift, slurred speech, visual changes, or intense occipital headaches.',
        highlight: 'Monitor for focal neuro deficits, facial droop, & TIAs'
      },
      {
        letter: 'R',
        term: 'Respiration & Pulse (Cardiopulmonary Status)',
        description: 'Auscultate apical pulse for rate/rhythm (detecting tachycardia or beta-blocker bradycardia < 60 bpm) and lung fields for bilateral bibasilar crackles, dyspnea, and tachypnea indicating hypertensive left-sided heart failure.',
        highlight: 'Auscultate lung crackles & apical heart rate'
      },
      {
        letter: 'E',
        term: 'Electrolytes (Potassium, Sodium, Renal Panels)',
        description: 'Routinely check serum electrolytes, especially potassium (K+). Thiazides and loop diuretics deplete potassium (hypokalemia < 3.5 mEq/L), whereas ACE inhibitors, ARBs, and potassium-sparing diuretics risk hyperkalemia (> 5.0 mEq/L).',
        highlight: 'Monitor potassium levels for diuretic & ACE-inhibitor therapy'
      },
      {
        letter: 'D',
        term: 'Daily Weight',
        description: 'Weigh client daily at the same time each morning, using the same scale, in similar clothing after voiding; a weight gain of > 2–3 lbs (1–1.4 kg) in a day or > 5 lbs in a week signals fluid retention.',
        highlight: 'Daily morning weight; track fluid retention (> 2-3 lbs/day)'
      }
    ],
    clinicalContext: 'In Medical-Surgical units and ambulatory clinics, creating an evidence-based nursing care plan for hypertension requires disciplined multidimensional tracking. Hypertensive therapy combines lifestyle modification with polypharmacy (diuretics, beta-blockers, ACE inhibitors, calcium channel blockers). Bedside nurses must be alert to common pharmacological adverse effects—such as profound orthostatic hypotension from vasodilators, reflex tachycardia, severe hypokalemia from loop/thiazide diuretics leading to cardiac dysrhythmias, and renal impairment.',
    nclexPearls: [
      'Proper BP Measurement Rules: Rest for 5 minutes before reading, arm supported at heart level, feet flat on the floor (uncrossed). A cuff that is too small/narrow yields a FALSELY HIGH reading; a cuff that is too large/wide yields a FALSELY LOW reading.',
      'Electrolyte Alerts: Potassium monitoring is high yield. Loop diuretics (furosemide) and thiazides cause hypokalemia (muscle cramps, U-waves, dysrhythmias). Spironolactone, lisinopril, and losartan cause hyperkalemia (peaked T-waves, muscle weakness).',
      'Orthostatic Hypotension Safety: Defined as a drop in SBP ≥ 20 mmHg or DBP ≥ 10 mmHg within 2–3 minutes of standing. Instruct clients to change positions slowly, dangle legs on bedside for 1–2 minutes before standing, and avoid hot showers.'
    ],
    practiceQuestion: {
      question: 'A medical-surgical nurse is preparing morning medications for a client admitted with essential hypertension. The client is prescribed daily oral furosemide 40 mg and lisinopril 10 mg. When implementing the nursing care plan (I-TIRED), which finding requires the nurse to hold the medications and notify the healthcare provider immediately?',
      options: [
        'Blood pressure 138/84 mmHg and heart rate 74 bpm.',
        'Serum potassium level of 3.0 mEq/L (3.0 mmol/L).',
        'Urine output of 45 mL/hr over the previous 8 hours.',
        'Morning weight has decreased by 1.5 lbs compared to yesterday.'
      ],
      correctIndex: 1,
      rationale: 'A serum potassium of 3.0 mEq/L indicates significant hypokalemia (normal 3.5–5.0 mEq/L). Administering furosemide (a potent potassium-wasting loop diuretic) will further deplete potassium ("E" in I-TIRED: Electrolytes), provoking life-threatening cardiac dysrhythmias (ventricular ectopy, flattened T-waves, prominent U-waves). The nurse must hold the diuretic and seek provider orders for potassium replacement. BP 138/84 is an acceptable therapeutic response, urine output > 30 mL/hr is adequate, and 1.5 lbs weight loss reflects desired diuretic effect.'
    }
  },
  {
    id: 'portal-hypertension-features-abcde',
    shortCode: 'ABCDE (Portal HTN)',
    title: 'Portal Hypertension Clinical Features (ABCDE)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The cardinal clinical manifestations and portosystemic collateral signs of portal hypertension secondary to hepatic cirrhosis.',
    memoryTip: 'ABCDE of Portal Hypertension — Ascites, Bleeding (esophageal varices / piles), Caput medusae, Diminished liver (cirrhotic shrunken liver), Enlarged spleen (splenomegaly & thrombocytopenia).',
    highYield: true,
    tags: ['Gastrointestinal', 'Hepatic', 'Cirrhosis', 'Portal Hypertension', 'Critical Care'],
    letters: [
      {
        letter: 'A',
        term: 'Ascites',
        description: 'Massive accumulation of protein-rich serous fluid within the peritoneal cavity caused by increased hydrostatic pressure in hepatic sinusoids and hypoalbuminemia (decreased oncotic pressure); predisposes to spontaneous bacterial peritonitis (SBP).',
        highlight: 'Peritoneal fluid accumulation & shifting dullness'
      },
      {
        letter: 'B',
        term: 'Bleeding (Hematemesis & Piles / Hemorrhoids)',
        description: 'High portal pressures dilate collateral veins at portosystemic anastomoses, producing fragile esophageal varices (manifesting as catastrophic upper GI bleeding and hematemesis) and anorectal varices / internal hemorrhoids ("piles").',
        highlight: 'Ruptured esophageal varices (hematemesis) & anorectal piles'
      },
      {
        letter: 'C',
        term: 'Caput Medusae',
        description: 'Engorged, tortuous, radiating collateral veins visible around the umbilicus caused by recanalization of the embryonic umbilical vein shunting blood into the superficial epigastric veins.',
        highlight: 'Prominent superficial peri-umbilical collateral veins'
      },
      {
        letter: 'D',
        term: 'Diminished Liver (Small, Shrunken, Micronodular Liver)',
        description: 'In end-stage cirrhosis, widespread hepatocyte necrosis, extensive collagen deposition, and fibrous scar tissue contraction transform the liver from initially hepatomegalic to a small, hard, shrunken, and nodular organ.',
        highlight: 'Shrunken, fibrotic, micronodular cirrhotic liver'
      },
      {
        letter: 'E',
        term: 'Enlarged Spleen (Splenomegaly & Hypersplenism)',
        description: 'Retrograde venous congestion back into the splenic vein enlarges the spleen, causing hypersplenism which sequesters and destroys circulating blood elements, resulting in profound thrombocytopenia (high bleeding risk), leukopenia, and anemia.',
        highlight: 'Splenomegaly & hypersplenism-induced thrombocytopenia'
      }
    ],
    clinicalContext: 'In Hepatic and Medical-Surgical nursing, portal hypertension is the central pathophysiological hemodynamic consequence of cirrhosis (resistance to portal blood flow > 10–12 mmHg). The development of portosystemic collaterals creates high-risk fragile esophageal varices. Rupture of esophageal varices is a life-threatening medical emergency requiring immediate airway protection, IV octreotide or vasopressin, endoscopic variceal band ligation (EVL), and blood product resuscitation. Beta-blockers (non-selective like propranolol or nadolol) are administered for primary and secondary prophylaxis to lower portal venous pressure.',
    nclexPearls: [
      'Esophageal Variceal Bleeding Priority: Acute hematemesis from ruptured varices requires immediate airway protection (suction at bedside, prepare for endotracheal intubation), two large-bore IVs, IV octreotide (somatostatin analog that causes selective splanchnic vasoconstriction), and packed RBCs. Avoid NG tube insertion without direct physician authorization due to risk of traumatizing varices.',
      'Balloon Tamponade Tube (Sengstaken-Blakemore): If used for refractory variceal bleeding, keep a pair of SCISSORS at the bedside at all times! If the gastric balloon deflates or ruptures, the esophageal balloon can migrate upward into the oropharynx and cause acute airway occlusion—cut all lumens immediately to relieve airway obstruction.',
      'Hypersplenism & Thrombocytopenia: Platelet counts are frequently < 50,000–100,000/µL due to splenic sequestration; maintain bleeding precautions (soft toothbrush, electric razor, avoid IM injections).'
    ],
    practiceQuestion: {
      question: 'A client with end-stage cirrhosis and portal hypertension is admitted to the intensive care unit with acute, massive hematemesis. Vital signs are BP 86/50 mmHg, HR 128 beats/min, and RR 26 breaths/min. A Sengstaken-Blakemore balloon tamponade tube is inserted to control bleeding from ruptured esophageal varices. Which safety measure is mandatory for the nurse to maintain at the bedside (ABCDE)?',
      options: [
        'A sterile tracheostomy tray and obturator.',
        'A pair of blunt-tipped surgical scissors.',
        'A 50 mL syringe filled with sterile water.',
        'An extra rubber tourniquet and blood transfer set.'
      ],
      correctIndex: 1,
      rationale: 'A pair of scissors must be kept taped to the head of the bed at all times for any client with a Sengstaken-Blakemore or Minnesota balloon tamponade tube. If the gastric balloon deflates, the esophageal balloon can migrate upward into the oropharynx, occluding the trachea and precipitating acute airway asphyxiation. The nurse must immediately cut all tube lumens with scissors to rapidly deflate both balloons and extract the tube to clear the airway. Bleeding from esophageal varices is the most lethal manifestation of portal hypertension ("B" in ABCDE: Bleeding).'
    }
  },
  {
    id: 'diabetes-signs-three-ps',
    shortCode: '3P\'s',
    title: 'Cardinal Signs of Diabetes Mellitus (3P\'s)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The classic clinical triad of hyperglycemia (Polydipsia, Polyphagia, Polyuria) heralding diabetes mellitus onset or severe glycemic decompensation.',
    memoryTip: '3P\'s of Diabetes — Polydipsia (excessive thirst), Polyphagia (excessive hunger), Polyuria (excessive urination). When sugar is high, the 3P\'s apply!',
    highYield: true,
    tags: ['Endocrine', 'Diabetes', 'Assessment', 'Hyperglycemia', 'Metabolic'],
    letters: [
      {
        letter: 'P',
        term: 'Polydipsia (Excessive Thirst)',
        description: 'Profound intracellular dehydration and hyperosmolality stimulate osmoreceptors in the hypothalamus, triggering an intense, unquenchable thirst sensation to drive compulsive fluid intake.',
        highlight: 'Intense unquenchable thirst from cellular dehydration'
      },
      {
        letter: 'P',
        term: 'Polyphagia (Excessive Hunger)',
        description: 'Absolute or relative insulin deficiency prevents glucose from entering skeletal muscle and adipose cells; despite high circulating serum glucose, cellular starvation triggers ravenous appetite and weight loss.',
        highlight: 'Ravenous hunger despite high blood sugar due to cellular starvation'
      },
      {
        letter: 'P',
        term: 'Polyuria (Excessive Urination / Frequency)',
        description: 'Serum glucose levels exceeding the renal threshold (~180 mg/dL / 10 mmol/L) spill into the renal tubules, exerting high osmotic pull (osmotic diuresis) that drags massive volumes of water and electrolytes into the urine.',
        highlight: 'Osmotic diuresis spilling water & glucose into urine'
      }
    ],
    clinicalContext: 'In Endocrine and Medical-Surgical nursing, the 3P\'s represent the cardinal clinical triad of new-onset Type 1 Diabetes or decompensated Type 2 Diabetes. Osmotic diuresis (polyuria) triggers profound volume contraction, electrolyte depletion (potassium, sodium, magnesium), and hypovolemia, resulting in compensatory polydipsia. Without insulin, cells cannot utilize glucose, triggering lipolysis and gluconeogenesis, producing weight loss and ravenous hunger (polyphagia). If left untreated in Type 1 diabetes, this progresses rapidly to Diabetic Ketoacidosis (DKA) with Kussmaul respirations, fruity acetone breath, and metabolic acidosis.',
    nclexPearls: [
      'Renal Threshold for Glucose: The kidneys begin to spill glucose into the urine (glycosuria) when blood glucose exceeds approximately 180 mg/dL (10 mmol/L), initiating the osmotic diuresis responsible for polyuria.',
      'Polyphagia Difference: Polyphagia is classically seen in Type 1 Diabetes Mellitus due to absolute lack of insulin causing severe cellular starvation; it is less prominent in established Type 2 diabetes.',
      'Diagnostic Criteria for Diabetes: (1) Fasting plasma glucose ≥ 126 mg/dL (7.0 mmol/L) on 2 occasions; (2) Random plasma glucose ≥ 200 mg/dL (11.1 mmol/L) WITH classic 3P symptoms; (3) HbA1c ≥ 6.5%; (4) 2-hour 75 g oral glucose tolerance test (OGTT) ≥ 200 mg/dL.'
    ],
    practiceQuestion: {
      question: 'An adolescent client accompanied by their parent presents to the clinic with an unintentional 10 lb weight loss over the past 3 weeks. The parent reports that the adolescent is constantly drinking large glasses of water, waking up multiple times every night to urinate, and eating unusually large meals. Point-of-care blood glucose is 340 mg/dL (18.9 mmol/L). Which physiological mechanism explains the client\'s polyuria (3P\'s)?',
      options: [
        'Hypothalamic suppression of antidiuretic hormone (ADH) secretion.',
        'Hyperglycemia exceeding the renal threshold, exerting osmotic diuresis in the renal tubules.',
        'Decreased glomerular filtration rate resulting in acute tubular necrosis.',
        'Elevated serum aldosterone causing excessive urinary sodium excretion.'
      ],
      correctIndex: 1,
      rationale: 'When serum blood glucose exceeds the tubular transport maximum / renal threshold (~180 mg/dL), the proximal renal tubules cannot reabsorb the excess glucose. The unabsorbed glucose remaining in the renal tubule filtrate acts as an osmotic agent, drawing water down its concentration gradient and preventing tubular water reabsorption. This process (osmotic diuresis) causes massive urinary fluid loss (polyuria), which leads to dehydration and intense compensatory thirst (polydipsia). The lack of insulin prevents glucose uptake into tissue cells, triggering cellular starvation and ravenous appetite (polyphagia).'
    }
  },
  {
    id: 'cushings-syndrome-symptoms-three-ss',
    shortCode: '3S\'s',
    title: 'Cushing\'s Syndrome Symptoms (3S\'s)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The three cardinal adrenal cortex hormone elevations (Glucocorticoids, Mineralocorticoids, Androgens) that drive the clinical manifestations of Cushing\'s syndrome.',
    memoryTip: '3S\'s of Cushing\'s Syndrome — Sugar (Hyperglycemia), Salt (Hypernatremia & fluid retention), Sex (Excess Androgens, hirsutism, virilization). Everything is elevated in Cushing\'s (Cushing = Cushion / More)! Contrast with Addison\'s (Need to ADD hormones / deficient).',
    highYield: true,
    tags: ['Endocrine', 'Adrenal Gland', 'Cushing Syndrome', 'Assessment', 'Hormones'],
    letters: [
      {
        letter: 'S',
        term: 'Sugar (Hyperglycemia & Glucocorticoid Excess)',
        description: 'Excess cortisol promotes hepatic gluconeogenesis and peripheral insulin resistance, resulting in elevated blood glucose levels (steroid-induced diabetes). Accelerates truncal protein catabolism, resulting in muscle wasting, thin extremities, purple abdominal striae, delayed wound healing, and central obesity (buffalo hump, moon facies).',
        highlight: 'Hyperglycemia, truncal obesity, thin extremities, & purple striae'
      },
      {
        letter: 'S',
        term: 'Salt (Hypernatremia & Mineralocorticoid Excess)',
        description: 'High levels of cortisol exert cross-reactivity on aldosterone receptors, triggering excessive renal sodium and water retention alongside potassium and hydrogen excretion. Manifests as hypernatremia, severe fluid volume overload, secondary hypertension, and hypokalemia.',
        highlight: 'Hypernatremia, hypertension, fluid retention, & hypokalemia'
      },
      {
        letter: 'S',
        term: 'Sex (Excess Androgen Secretion)',
        description: 'Adrenal cortex hypersecretion of androgens (DHEA/testosterone) leads to prominent virilization in females, manifesting as facial hirsutism, clitoromegaly, severe cystic acne, deepening voice, male-pattern balding, and menstrual irregularities (oligomenorrhea/amenorrhea); libido changes in males.',
        highlight: 'Hirsutism, virilization, acne, & menstrual irregularities'
      }
    ],
    clinicalContext: 'In Endocrine and Medical-Surgical nursing, Cushing\'s syndrome (hypercortisolemia) stems either from exogenous glucocorticoid administration (most common) or endogenous hypersecretion (ACTH-secreting pituitary adenoma [Cushing\'s disease], adrenal adenoma/carcinoma, or ectopic ACTH from small cell lung cancer). Nursing management focuses on fluid balance, infection prevention (cortisol suppresses leukocytes and masks fever), bone protection (osteoporosis and pathological fractures from calcium leaching), blood glucose monitoring, and psychological support for altered body image.',
    nclexPearls: [
      'Cushing\'s vs. Addison\'s Lab Mirror: Cushing\'s has HIGH Sugar (hyperglycemia), HIGH Salt (hypernatremia), LOW Potassium (hypokalemia), and HIGH BP. Addison\'s (adrenal insufficiency) has LOW Sugar (hypoglycemia), LOW Salt (hyponatremia), HIGH Potassium (hyperkalemia), and LOW BP (hypotension/vascular collapse).',
      'Infection Masking Alert: Cortisol blunts inflammatory reactions; a mild temperature elevation (e.g., 99.5°F / 37.5°C) or slight redness can herald overwhelming systemic sepsis in a client with Cushing\'s.',
      'Post-Adrenalectomy Care: Bilateral adrenalectomy creates sudden surgical Addison\'s crisis; administer lifelong replacement glucocorticoids (hydrocortisone) and mineralocorticoids (fludrocortisone). Doses must be doubled or tripled during physical stress or illness ("stress dosing").'
    ],
    practiceQuestion: {
      question: 'A 45-year-old female client is evaluated for Cushing\'s syndrome. Which combination of clinical assessment findings and laboratory results directly reflects the "3S\'s" (Sugar, Salt, Sex) of adrenal cortex hyperfunction?',
      options: [
        'Hypoglycemia, hyponatremia with hyperkalemia, and loss of secondary sex characteristics.',
        'Fasting blood glucose 168 mg/dL, serum sodium 149 mEq/L with hypokalemia, and facial hirsutism.',
        'Blood pressure 88/56 mmHg, hyperkalemia, and bronzed hyperpigmentation of skin creases.',
        'Serum calcium 12.5 mg/dL, hypophosphatemia, and bilateral carpopedal spasms.'
      ],
      correctIndex: 1,
      rationale: 'Cushing\'s syndrome involves excess secretion of the 3 adrenal cortex steroids ("3S\'s"): (1) Sugar: elevated cortisol causes gluconeogenesis and hyperglycemia (168 mg/dL); (2) Salt: mineralocorticoid action triggers sodium retention (hypernatremia 149 mEq/L), fluid overload, and potassium wasting (hypokalemia); and (3) Sex: androgen excess causes virilization, hirsutism, acne, and menstrual disruption in females. Options 1 and 3 describe Addison\'s disease (hypoadrenalism), and option 4 describes hyperparathyroidism.'
    }
  },
  {
    id: 'coma-causes-aeiou-tips',
    shortCode: 'A-E-I-O-U TIPS',
    title: 'Reversible Causes of Coma & Altered Mental Status (A-E-I-O-U TIPS)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The definitive clinical assessment checklist for identifying underlying reversible etiologies of coma and acute altered mental status.',
    memoryTip: 'A-E-I-O-U TIPS — Alcohol/Acidosis, Epilepsy/Electrolytes/Endocrine, Insulin (Hypoglycemia), Overdose/Oxygen, Uremia, Trauma/Temperature, Infection, Psychogenic, Stroke/Space-occupying lesions.',
    highYield: true,
    tags: ['Neurological', 'Emergency Nursing', 'Critical Care', 'Coma', 'Altered Mental Status'],
    letters: [
      {
        letter: 'A',
        term: 'Alcohol & Acidosis (Metabolic / DKA)',
        description: 'Acute ethanol intoxication causing central nervous system depression; severe metabolic acidosis (diabetic ketoacidosis [DKA], lactic acidosis, toxic ingestion) exhausting cerebral buffering capacity.',
        highlight: 'Ethanol intoxication & metabolic/DKA acidosis'
      },
      {
        letter: 'E',
        term: 'Epilepsy, Electrolytes & Endocrine',
        description: 'Non-convulsive status epilepticus or post-ictal states; critical electrolyte derangements (severe hyponatremia < 120 mEq/L, hypercalcemia); endocrine crises (myxedema coma, thyroid storm, Addisonian crisis).',
        highlight: 'Seizures, post-ictal state, severe hyponatremia, & endocrine crisis'
      },
      {
        letter: 'I',
        term: 'Insulin (Hypoglycemic Shock / Crisis)',
        description: 'Severe, profound neuroglycopenic hypoglycemia (blood glucose < 50 mg/dL / 2.8 mmol/L) depriving neurons of primary metabolic substrate; reversible immediately with IV dextrose (D50W).',
        highlight: 'Neuroglycopenic hypoglycemia; rapid reversal with IV D50W'
      },
      {
        letter: 'O',
        term: 'Overdose (Poisoning) & Oxygen Deficit (Hypoxia)',
        description: 'Accidental or intentional ingestion of opioids, benzodiazepines, barbiturates, tricyclic antidepressants, carbon monoxide, or cyanide; acute hypoxemic anoxia (PaO2 < 50 mmHg / respiratory arrest).',
        highlight: 'Opioid/sedative toxidromes & acute cerebral anoxia'
      },
      {
        letter: 'U',
        term: 'Uremia & Renal Failure',
        description: 'End-stage renal disease with accumulation of neurotoxic uremic metabolites (BUN > 100 mg/dL), leading to uremic encephalopathy, asterixis, and progressive coma treatable with emergent hemodialysis.',
        highlight: 'Uremic encephalopathy from elevated nitrogenous wastes'
      },
      {
        letter: 'T',
        term: 'Trauma & Temperature Extremes',
        description: 'Traumatic brain injury (epidural/subdural hematoma, cerebral contusion, diffuse axonal injury); extreme hypothermia (< 30°C / 86°F) or severe hyperthermia / heat stroke (> 40°C / 104°F) disrupting cellular enzymatic function.',
        highlight: 'TBI, intracranial hematomas, hypothermia, & heat stroke'
      },
      {
        letter: 'I',
        term: 'Infection (Sepsis & Central Nervous System)',
        description: 'Direct CNS infections (bacterial/viral meningitis, encephalitis, brain abscess) or severe systemic sepsis / septic shock with encephalopathy causing profound cerebral hypoperfusion.',
        highlight: 'Meningitis, encephalitis, & septic encephalopathy'
      },
      {
        letter: 'P',
        term: 'Psychogenic ("Hysterical Coma" / Catatonia)',
        description: 'Non-organic psychiatric unresponsiveness, severe conversion disorder, or malignant catatonia; differentiated by active eyelid resistance to opening, normal pupillary light reflexes, and caloric testing.',
        highlight: 'Conversion disorder & catatonia; intact brainstem reflexes'
      },
      {
        letter: 'S',
        term: 'Stroke & Space-Occupying Cranial Lesions',
        description: 'Acute massive ischemic stroke (basilar artery occlusion), intracerebral hemorrhage, expanding neoplasms, or brain herniation compressing the ascending reticular activating system (ARAS).',
        highlight: 'Acute stroke, intracranial hemorrhage, & ARAS brainstem compression'
      }
    ],
    clinicalContext: 'In Emergency, Trauma, and ICU nursing, a comatose or unresponsive patient requires rapid, methodical diagnostic evaluation to uncover rapidly reversible life threats. The initial nursing priority follows ABCs with immediate cervical spine immobilization if trauma is suspected, point-of-care capillary blood glucose (to exclude hypoglycemia), 12-lead ECG, pupil assessment, Glasgow Coma Scale (GCS), and administration of the classic "coma cocktail" when indicated (Dextrose, Oxygen, Naloxone for suspected opioid toxidrome, and Thiamine before dextrose in malnourished/alcoholic clients to prevent Wernicke encephalopathy).',
    nclexPearls: [
      'Glasgow Coma Scale (GCS) Rule: GCS scores range from 3 (deep coma/brain death) to 15 (fully oriented). NCLEX rule: "GCS less than 8, intubate!" Clients with GCS ≤ 8 cannot protect their airway and require immediate endotracheal intubation.',
      'Thiamine Before Dextrose: In chronic alcoholism or malnourished clients presenting in coma, ALWAYS administer IV Thiamine (vitamin B1) BEFORE or concurrently with IV Dextrose. Infusing glucose without thiamine precipitates acute, irreversible WERNICKE ENCEPHALOPATHY (confusion, ataxia, ophthalmoplegia).',
      'Hypoglycemia First: Point-of-care capillary blood glucose must be tested immediately at the bedside before ordering brain CT scans or lumbar punctures.'
    ],
    practiceQuestion: {
      question: 'An unkempt adult client with a history of alcohol use disorder is brought to the emergency department unconscious by EMS. Glasgow Coma Scale is 6. Point-of-care capillary blood glucose reveals 38 mg/dL (2.1 mmol/L). The nurse prepares to administer 50 mL of 50% Dextrose (D50W) intravenously. Which medication must the nurse administer prior to or concurrently with the dextrose infusion (A-E-I-O-U TIPS)?',
      options: [
        '100 mg of IV Thiamine (Vitamin B1).',
        '2 mg of IV Naloxone.',
        '0.5 mg of IV Flumazenil.',
        '10 units of Regular Insulin SubQ.'
      ],
      correctIndex: 0,
      rationale: 'In chronic alcoholism and malnourished comatose clients ("A" in A-E-I-O-U TIPS), thiamine stores are depleted. Administering an IV glucose load (D50W) drives rapid intracellular glycolysis, consuming remaining thiamine pyrophosphate cofactors and precipitating acute, devastating Wernicke encephalopathy (and Korsakoff psychosis). The nurse must administer 100 mg of IV thiamine before or alongside IV dextrose. Naloxone is for opioid overdose, and flumazenil carries high risk of uncalibrated refractory seizures in poly-substance overdoses.'
    }
  },
  {
    id: 'coma-exclusion-causes-midas',
    shortCode: 'MIDAS',
    title: 'Coma: Critical Conditions to Exclude (MIDAS)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The five highest-priority, immediately fatal or treatable neurological and metabolic conditions that must be systematically excluded in any comatose client.',
    memoryTip: 'MIDAS Touch for Coma — Meningitis, Intoxication, Diabetes (hypo/hyperglycemia), Air (hypoxia / hypercapnic respiratory failure), Subdural / Subarachnoid hemorrhage. Exclude these first!',
    highYield: true,
    tags: ['Neurological', 'Emergency Nursing', 'Critical Care', 'Differential Diagnosis', 'Coma'],
    letters: [
      {
        letter: 'M',
        term: 'Meningitis (Central Nervous System Infection)',
        description: 'Life-threatening bacterial meningitis or encephalitis; assess for fever, nuchal rigidity, Kernig and Brudzinski signs, purpuric rash (Neisseria meningitidis); requires immediate blood cultures, empiric IV broad-spectrum antibiotics, and lumbar puncture.',
        highlight: 'Bacterial meningitis, nuchal rigidity, & prompt IV antibiotics'
      },
      {
        letter: 'I',
        term: 'Intoxication (Toxidromes & Poisoning)',
        description: 'Exogenous chemical or pharmacological poisoning (opioids, sedatives, toxic alcohols, carbon monoxide); assess pin-point pupils (opioids), respiratory depression, and administer targeted antidotes (naloxone, activated charcoal, hyperbaric oxygen).',
        highlight: 'Opioid/toxin overdose; assess pupil constriction & give naloxone'
      },
      {
        letter: 'D',
        term: 'Diabetes (Hypoglycemia / DKA / HHS)',
        description: 'Severe metabolic glycemic crises: profound neuroglycopenic hypoglycemia (< 50 mg/dL), severe Diabetic Ketoacidosis (DKA with acidosis and Kussmaul breathing), or Hyperosmolar Hyperglycemic State (HHS with serum glucose > 600 mg/dL and profound dehydration).',
        highlight: 'Hypoglycemia, DKA ketoacidosis, & hyperosmolar state (HHS)'
      },
      {
        letter: 'A',
        term: 'Air (Acute Respiratory Failure / Hypoxia & Hypercapnia)',
        description: 'Critical failure of ventilation or oxygenation: severe hypoxemia (PaO2 < 50 mmHg) causing cerebral anoxia, or severe carbon dioxide narcosis (PaCO2 > 70–80 mmHg / respiratory acidosis) blunting central consciousness.',
        highlight: 'Severe cerebral hypoxemia & CO2 narcosis respiratory failure'
      },
      {
        letter: 'S',
        term: 'Subdural / Subarachnoid Hemorrhage (Intracranial Bleeds)',
        description: 'Intracranial hemorrhage: rupture of berry aneurysms causing subarachnoid hemorrhage ("worst headache of life"), or bridging vein rupture producing acute subdural hematoma with midline brain shift; confirmed via non-contrast head CT.',
        highlight: 'Subarachnoid bleed ("worst headache") & acute subdural hematoma'
      }
    ],
    clinicalContext: 'In Emergency and Trauma nursing, when encountering an unconscious client with an unknown medical history, the MIDAS framework focuses on rapid bedside rule-outs. Failure to exclude hypoglycemia or acute hypoxia within minutes causes irreversible neuronal death. Similarly, missing bacterial meningitis delays life-saving antibiotics, and missing an expanding subdural hematoma leads to fatal brainstem herniation. Bedside point-of-care testing (glucose, pulse oximetry/ABG) and non-contrast head CT represent the primary frontline diagnostic sequence.',
    nclexPearls: [
      'Subarachnoid Hemorrhage (SAH) Key Descriptor: NCLEX vignettes consistently describe aneurysmal SAH as "the worst headache of my life" (thunderclap headache) followed by abrupt loss of consciousness and meningismus.',
      'CO2 Narcosis in COPD: Giving uncontrolled high-flow oxygen to an end-stage COPD client with chronic hypercapnic respiratory failure can blunt their hypoxic drive, leading to acute CO2 narcosis ("Air" in MIDAS: lethargy, somnolence, and coma).',
      'Rapid Diagnostic Sequence: (1) Airway/Oxygenation; (2) Bedside blood glucose; (3) Pupil/Neuro exam; (4) Non-contrast head CT (rule out blood before lumbar puncture!).'
    ],
    practiceQuestion: {
      question: 'A 34-year-old client is brought to the emergency department in an unresponsive state. Family reports the client screamed, "This is the worst headache of my entire life!" before collapsing unconscious. The client has nuchal rigidity, a blood pressure of 190/105 mmHg, and pupil sluggishness. Based on the MIDAS framework for coma exclusion, which diagnostic investigation is the immediate priority?',
      options: [
        'Immediate lumbar puncture to evaluate cerebrospinal fluid for protein.',
        'Non-contrast computed tomography (CT) of the head to evaluate for subarachnoid hemorrhage.',
        'Comprehensive urine toxicology screen for synthetic opioid ingestion.',
        'Electroencephalogram (EEG) to assess for subclinical status epilepticus.'
      ],
      correctIndex: 1,
      rationale: 'A sudden "worst headache of my life" (thunderclap headache) followed by abrupt collapse and meningeal signs (nuchal rigidity) is the classic pathognomonic presentation of an intracranial aneurysm rupture causing Subarachnoid Hemorrhage ("S" in MIDAS). The immediate priority is an emergent non-contrast head CT scan to detect extravasated intracranial blood. A lumbar puncture should NEVER be performed prior to a head CT in a client with suspected intracranial hemorrhage or elevated ICP due to the risk of brainstem herniation through the foramen magnum.'
    }
  },
  {
    id: 'cleft-lip-care-plan-postop',
    shortCode: 'CLEFT LIP',
    title: 'Cleft Lip Postoperative Nursing Care Plan (CLEFT LIP)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Comprehensive postoperative nursing management and suture-line protection protocols following cheiloplasty (surgical cleft lip repair).',
    memoryTip: 'CLEFT LIP — Crying minimize, Logan bow, Elbow restraints, Feed with Brecht feeder, Teach feeding & 2 months repair age, Liquid sterile water rinse, Impaired feeding (no sucking/pacifiers), Position never on abdomen (supine/side-lying). Protect the suture line at all costs!',
    highYield: true,
    tags: ['Pediatrics', 'Surgical Nursing', 'Cleft Lip', 'Postoperative Care', 'Airway Management'],
    letters: [
      {
        letter: 'C',
        term: 'Crying, Minimize',
        description: 'Prevent prolonged, vigorous crying because crying places direct mechanical tension on the fresh cheiloplasty suture line, increasing risk of dehiscence, scar formation, and bleeding; anticipate infant needs, offer rocking, soothing, and adequate analgesia.',
        highlight: 'Minimize crying to prevent suture line tension & dehiscence'
      },
      {
        letter: 'L',
        term: 'Logan Bow (or Facial Splint)',
        description: 'Maintain the Logan bow—a metallic wire splint arched over the upper lip and taped securely to both cheeks—to relieve lateral mechanical stress on the newly repaired labial suture line.',
        highlight: 'Logan bow / protective wire splint to relieve suture tension'
      },
      {
        letter: 'E',
        term: 'Elbow Restraints (No-No Restraints)',
        description: 'Apply bilateral soft elbow restraints (e.g., padded tongue-blade or velcro immobilizers) to prevent the infant from bending their elbows and scratching, picking, or traumatizing the facial suture line.',
        highlight: 'Bilateral elbow restraints; remove periodically for ROM & skin checks'
      },
      {
        letter: 'F',
        term: 'Feed with Brecht Feeder (or Rubber-Tipped Syringe)',
        description: 'Administer feeds using a specialized Brecht feeder, rubber-tipped medicine dropper, or wide-based nipple placed into the side of the mouth; deliver formula slowly while avoiding direct contact with the suture repair.',
        highlight: 'Specialized feeder or rubber-tipped syringe to side of mouth'
      },
      {
        letter: 'T',
        term: 'Teach Feeding Techniques & Two Months Average Repair Age',
        description: 'Educate caregivers on feeding protocols; cheiloplasty is typically performed around 2 to 3 months of age (following the "Rule of 10s": 10 weeks old, 10 lbs weight, hemoglobin 10 g/dL).',
        highlight: 'Caregiver education & repair at 2-3 months ("Rule of 10s")'
      },
      {
        letter: 'L',
        term: 'Liquid (Sterile Water) Rinse After Feeding',
        description: 'Cleanse the suture line gently with sterile water or prescribed dilute hydrogen peroxide/saline solution using a sterile cotton-tipped applicator after every feeding to prevent milk crusting and crust-associated infection.',
        highlight: 'Gently cleanse suture line with sterile water after each feed'
      },
      {
        letter: 'I',
        term: 'Impaired Feeding (Strictly No Sucking / Pacifiers)',
        description: 'Vigorous sucking creates negative intraoral pressure that ruptures delicate lip sutures; pacifiers, hard nipples, thumbs, straws, tongue depressors, and thermometers are strictly forbidden in the oral cavity.',
        highlight: 'No sucking, pacifiers, straws, or hard nipples!'
      },
      {
        letter: 'P',
        term: 'Position — NEVER on Abdomen',
        description: 'Position the infant exclusively on their back (supine) or slightly side-lying (with operative side up); placing the infant in a prone (abdomen) position is strictly contraindicated because rubbing the face against bed sheets disrupts the repair.',
        highlight: 'Supine positioning; NEVER prone on abdomen!'
      }
    ],
    clinicalContext: 'In Pediatric and Medical-Surgical reconstructive nursing, cheiloplasty (cleft lip repair) transforms facial aesthetics, speech development, and feeding efficiency. Postoperative care revolves entirely around one paramount goal: PROTECTING THE SUTURE LINE. Tension from crying, rubbing against bedding, sucking on nipples/pacifiers, or manual picking by the infant can tear sutures, cause severe infection, or ruin cosmetic symmetry. Restraints must be removed every 1 to 2 hours one at a time for neurovascular/skin assessments and gentle range of motion.',
    nclexPearls: [
      'Positioning Rule of Cleft Lip vs. Cleft Palate: Cleft LIP repair = NEVER Prone (place in supine or upright infant seat to prevent rubbing the lip on the mattress). Cleft PALATE repair = Prone or side-lying IS permitted (facilitates drainage of pooled oral secretions and blood to prevent airway obstruction).',
      'Elbow Restraint Nursing Care: Restraints must be checked every 15–30 minutes and removed every 1–2 hours (one arm at a time) to assess skin integrity, check circulation, and perform passive range of motion.',
      'Rule of 10s for Surgical Timing: Cleft lip repair occurs when the infant reaches at least 10 weeks of age, 10 pounds (4.5 kg) in weight, and a hemoglobin of 10 g/dL.'
    ],
    practiceQuestion: {
      question: 'A nurse is providing postoperative care to a 10-week-old infant who underwent a unilateral cheiloplasty (cleft lip repair) 4 hours ago. Which nursing action is essential to prevent disruption of the surgical site (CLEFT LIP)?',
      options: [
        'Place the infant in the prone position to facilitate drainage of oral secretions.',
        'Offer a standard silicone pacifier whenever the infant becomes irritable.',
        'Maintain bilateral soft elbow restraints and position the infant supine.',
        'Feed the infant using a standard firm infant formula bottle nipple.'
      ],
      correctIndex: 2,
      rationale: 'Protecting the cheiloplasty suture line is the highest nursing priority. Bilateral soft elbow restraints ("E" in CLEFT LIP) prevent the infant from bending the arms and scratching or picking at the delicate facial sutures. The infant must be positioned supine or in an infant seat ("P": never on abdomen) to prevent rubbing the face and mouth against the bed linens. Prone positioning, pacifiers, and standard bottle nipples generate friction or negative intraoral suction pressure that tears newly repaired tissues, leading to dehiscence and permanent scarring.'
    }
  },
  {
    id: 'blood-glucose-rhyme-cold-hot',
    shortCode: 'Cold & Clammy / Hot & Dry',
    title: 'Blood Glucose Rhyme: Symptom Implication',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The fundamental clinical rule of thumb to rapidly differentiate acute hypoglycemia from severe hyperglycemia based on cutaneous temperature and moisture.',
    memoryTip: '“Cold and clammy . . . give hard candy” (Hypoglycemia < 70 mg/dL: Sympathetic diaphoresis and vasoconstriction; give 15 g simple carbs). “Hot and dry . . . glucose is high” (Hyperglycemia / DKA / HHS: Dehydration, vasodilation, and osmotic diuresis; give IV regular insulin & normal saline)!',
    highYield: true,
    tags: ['Endocrine', 'Diabetes', 'Assessment', 'Hypoglycemia', 'Hyperglycemia', 'Emergency Nursing'],
    letters: [
      {
        letter: 'C',
        term: 'Cold and Clammy (Hypoglycemia: Glucose < 70 mg/dL)',
        description: 'Sympathetic catecholamine surge (epinephrine) causes peripheral cutaneous vasoconstriction and profuse diaphoresis, making skin feel cold, pale, and clammy. Immediate clinical implication: "Give hard candy" / 15 grams of fast-acting simple carbohydrates (Rule of 15) to prevent neuroglycopenic seizure and coma.',
        highlight: 'Cold, pale, diaphoretic skin = Hypoglycemia; give 15 g fast carbs'
      },
      {
        letter: 'H',
        term: 'Hot and Dry (Hyperglycemia / DKA / HHS)',
        description: 'Profound osmotic diuresis pulls massive intracellular and intravascular fluid into the urine, resulting in severe dehydration, loss of skin turgor, dry mucous membranes, flushed skin, and Kussmaul respirations. Immediate clinical implication: "Glucose is high" — initiate aggressive IV isotonic crystalloid fluid resuscitation (0.9% Normal Saline) and intravenous regular insulin infusion.',
        highlight: 'Warm, flushed, dry skin = Hyperglycemia; give IV fluids & regular insulin'
      }
    ],
    clinicalContext: 'In Emergency and Medical-Surgical nursing, when a client with diabetes exhibits altered behavior, confusion, or weakness, touching the client\'s skin provides an instant clinical clue before laboratory or point-of-care verification. If the skin is cool and diaphoretic, assume hypoglycemia until proven otherwise and act rapidly—hypoglycemia can cause irreversible brain necrosis within minutes. If the skin is warm, flushed, and dry, consider DKA or HHS, which develops over hours to days with massive volume depletion.',
    nclexPearls: [
      'The Rule of 15: For a conscious hypoglycemic client with cold, clammy skin: administer 15 grams of simple sugar (4 oz fruit juice, 4 oz regular soda, 3–4 glucose tablets, or 5–6 hard candies), wait 15 minutes, recheck capillary glucose, and repeat if still < 70 mg/dL.',
      'When in Doubt, Treat Hypoglycemia First: If an unconscious client with diabetes is found and blood glucose cannot be checked immediately, treat for HYPOGLYCEMIA first with IV 50% Dextrose (D50W) or IM Glucagon. Hypoglycemia kills brain cells in minutes, whereas transiently elevating blood glucose in a hyperglycemic client will not cause immediate mortality.',
      'Fluid First in DKA/HHS: In the hot, dry hyperglycemic client (DKA/HHS), the priority intervention BEFORE or alongside insulin is massive IV fluid rehydration with 0.9% Normal Saline (1–1.5 L in hour 1) to restore intravascular volume and renal perfusion.'
    ],
    practiceQuestion: {
      question: 'A home health nurse visits an adult client with Type 2 Diabetes Mellitus. The client appears confused, irritable, and tremulous. On physical examination, the client\'s skin is pale, cold, and noticeably clammy. Vital signs reveal BP 118/74 mmHg, HR 108 beats/min, and RR 18 breaths/min. Based on the classic blood glucose assessment rhyme, which action should the nurse implement immediately?',
      options: [
        'Administer 10 units of subcutaneous regular insulin.',
        'Provide 4 ounces (120 mL) of regular fruit juice or 5 hard candies orally.',
        'Encourage the client to drink a 16-ounce bottle of plain water to promote hydration.',
        'Assist the client to ambulate briskly to stimulate circulation.'
      ],
      correctIndex: 1,
      rationale: 'The client\'s cool, pale, and clammy skin, along with tachycardia, tremor, and confusion, is the hallmark presentation of acute hypoglycemia ("Cold and clammy . . . give hard candy"). The immediate priority is the Rule of 15: provide 15 grams of fast-acting simple carbohydrates (such as 4 oz of fruit juice, regular soda, or 5–6 hard candies) to raise blood glucose rapidly. Administering insulin would cause fatal brainstem death, while plain water does not provide glucose.'
    }
  },
  {
    id: 'neurovascular-occlusion-six-ps',
    shortCode: '6 P\'s',
    title: 'Neurovascular Occlusion & Compartment Syndrome (6 P\'s)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The cardinal clinical signs of acute arterial occlusion and acute compartment syndrome, evaluated sequentially to prevent irreversible limb necrosis.',
    memoryTip: '6 P\'s of Neurovascular Compromise — Pain (early & out of proportion), Paresthesia (early numbness/tingling), Pallor (pale/delayed cap refill), Poikilothermia (cool/cold extremity), Pulselessness (late), Paralysis (late/muscle necrosis). Paresthesia & Pain on passive stretch are EARLIEST; Pulselessness & Paralysis are LATE!',
    highYield: true,
    tags: ['Musculoskeletal', 'Orthopedics', 'Cardiovascular', 'Compartment Syndrome', 'Neurovascular'],
    letters: [
      {
        letter: 'P',
        term: 'Pain (Early & Out of Proportion)',
        description: 'Severe, persistent, unrelenting ischemic pain that is disproportionate to the underlying injury and entirely unrelieved by escalating doses of opioid analgesia; characteristically exacerbated by passive stretching of the distal muscles.',
        highlight: 'Pain out of proportion & severe pain on passive stretch'
      },
      {
        letter: 'P',
        term: 'Paresthesia (Early Sensory Deficit)',
        description: 'Pins-and-needles sensation, tingling, numbness, or loss of two-point discrimination along sensory nerve distributions distal to the occlusion or pressure zone; occurs early because sensory nerves are extremely vulnerable to microvascular hypoxia.',
        highlight: 'Tingling, burning, or numbness distal to the injury'
      },
      {
        letter: 'P',
        term: 'Pallor (Pale Skin & Delayed Capillary Refill)',
        description: 'Skin distal to the occlusion appears pale, mottled, or cyanotic with delayed capillary refill (> 3 seconds), indicating compromised microvascular perfusion and arterial insufficiency.',
        highlight: 'Pale, mottled skin & delayed capillary refill (> 3s)'
      },
      {
        letter: 'P',
        term: 'Poikilothermia (Temperature Adjustment to Environment / Coldness)',
        description: 'The affected extremity loses the ability to thermoregulate due to interrupted arterial blood delivery, becoming poikilothermic (cool or icy cold to touch compared bilaterally to the uninjured limb).',
        highlight: 'Limb feels cold/cool compared to contralateral side'
      },
      {
        letter: 'P',
        term: 'Pulselessness (Late Finding)',
        description: 'Diminution or complete absence of distal arterial pulses (evaluated by manual palpation and continuous-wave Doppler ultrasound); a critical late finding indicating profound arterial occlusion.',
        highlight: 'Diminished or absent distal pulse; critical LATE sign'
      },
      {
        letter: 'P',
        term: 'Paralysis (Late Finding / Neuromuscular Death)',
        description: 'Inability to actively dorsiflex, plantarflex, or move distal digits; signals irreversible motor nerve ischemia and muscle necrosis requiring emergent fasciotomy or embolectomy.',
        highlight: 'Motor weakness or complete inability to move digits'
      }
    ],
    clinicalContext: 'In Orthopedic, Trauma, and Post-Surgical nursing, acute neurovascular occlusion arises either from intraluminal arterial obstruction (acute arterial embolus/thrombus) or extraluminal tissue compression (acute compartment syndrome from tight casts, circumferential burns, crushing trauma, or bleeding into closed fascial compartments). Normal intracompartmental pressure is 0–8 mmHg; pressures > 30 mmHg cause capillary collapse and muscle infarction within 4–6 hours. If compartment syndrome is suspected: loosen constricting dressings/casts, keep extremity AT HEART LEVEL (never elevate above heart, as elevation reduces arterial perfusion pressure!), and notify the orthopedic surgeon immediately for emergent bedside fasciotomy.',
    nclexPearls: [
      'Earliest vs. Latest Signs: PARESTHESIA (numbness/tingling) and PAIN on passive stretching are the EARLIEST indicators of acute compartment syndrome. PULSELESSNESS and PARALYSIS are ominous LATE signs indicating that irreversible neuromuscular infarction has already occurred.',
      'Do NOT Elevate and Do NOT Apply Ice: In suspected compartment syndrome, NEVER elevate the limb above the heart (elevation further compromises arterial inflow), and NEVER apply ice/cold packs (cold induces vasoconstriction and worsens microvascular ischemia). Maintain the limb at heart level.',
      'Bivalving Casts: The immediate bedside nursing intervention for increasing compartment pressure under a cast is to cut/bivalve the plaster or fiberglass cast and loosen the underlying cotton padding.'
    ],
    practiceQuestion: {
      question: 'A client who sustained a closed comminuted tibial fracture 12 hours ago has a fiberglass leg cast applied. The client reports intense, burning calf pain rated 10/10 that is unresponsive to prescribed intravenous hydromorphone. When the nurse gently dorsiflexes the client\'s foot, the client screams in excruciating pain. Dorsalis pedis pulse is 2+ and capillary refill is 2 seconds. Which action should the nurse take first (6 P\'s)?',
      options: [
        'Elevate the leg on two pillows above the level of the heart to reduce edema.',
        'Apply an ice bag directly over the cast to soothe localized swelling.',
        'Bivalve the cast, keep the extremity at heart level, and notify the orthopedic surgeon immediately.',
        'Reassure the client that severe pain is expected and administer an additional opioid dose.'
      ],
      correctIndex: 2,
      rationale: 'Pain out of proportion to the injury that is unrelieved by opioids and excruciatingly exacerbated by passive stretch of the digits/foot is the pathognomonic earliest sign of Acute Compartment Syndrome ("Pain" in the 6 P\'s). Intact pulses (2+) and normal capillary refill do NOT rule out compartment syndrome because pulselessness is an ominous, late sign. The nurse\'s immediate priority is to relieve external pressure (bivalving the cast), maintain the limb AT heart level (elevating above heart reduces arterial perfusion pressure, and ice induces vasoconstriction, both worsening ischemia), and notify the surgeon immediately for emergent fasciotomy.'
    }
  },
  {
    id: 'appendicitis-assessment-pains',
    shortCode: 'PAINS (Appendicitis)',
    title: 'Appendicitis Assessment Hallmarks (PAINS)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The cardinal clinical presentation, laboratory findings, and diagnostic physical assessment signs of acute appendicitis.',
    memoryTip: 'PAINS of Appendicitis — Pain (migrates from periumbilical to RLQ at McBurney’s point), Anorexia (loss of appetite), Increased temp & WBCs (leukocytosis 15,000–20,000 with left shift), Nausea & vomiting, Signs (McBurney’s point tenderness, Rovsing, Psoas, Obturator, Rebound tenderness).',
    highYield: true,
    tags: ['Gastrointestinal', 'Abdominal Pain', 'Emergency Nursing', 'Surgical Nursing', 'Appendicitis'],
    letters: [
      {
        letter: 'P',
        term: 'Pain (Periumbilical Migrating to Right Lower Quadrant)',
        description: 'Pain begins as dull, visceral, poorly localized ache around the umbilicus (periumbilical), then migrates within 12 to 24 hours to become sharp, constant, localized somatic pain in the Right Lower Quadrant (RLQ) at McBurney\'s point.',
        highlight: 'Dull periumbilical pain migrating to sharp localized RLQ pain'
      },
      {
        letter: 'A',
        term: 'Anorexia (Loss of Appetite)',
        description: 'Universal and prominent early symptom; clients exhibit complete loss of appetite and aversion to food before the onset of nausea and abdominal pain (a client who is hungry or requests food rarely has acute appendicitis).',
        highlight: 'Early universal loss of appetite / refusal of food'
      },
      {
        letter: 'I',
        term: 'Increased Temperature & WBC (15,000–20,000 /µL)',
        description: 'Low-grade fever (100.4°F–101°F / 38°C–38.3°C) accompanied by prominent leukocytosis (WBC count 15,000 to 20,000 /µL) with a "left shift" (elevated immature band neutrophils indicating acute acute bacterial inflammation).',
        highlight: 'Low-grade fever & leukocytosis (15,000–20,000 WBC) with left shift'
      },
      {
        letter: 'N',
        term: 'Nausea & Vomiting',
        description: 'Nausea and non-bilious vomiting follow chronologically AFTER the onset of abdominal pain and anorexia (if vomiting occurs before the pain, gastroenteritis or small bowel obstruction is more likely).',
        highlight: 'Nausea and vomiting appearing chronologically AFTER pain'
      },
      {
        letter: 'S',
        term: 'Signs (McBurney’s, Psoas, Rovsing, Obturator, Rebound)',
        description: 'Classic physical examination signs: (1) McBurney\'s point tenderness (located midway between the umbilicus and anterior superior iliac spine); (2) Rovsing sign (deep palpation of LLQ elicits pain in RLQ); (3) Psoas sign (RLQ pain with right hip hyperextension); (4) Obturator sign (RLQ pain with internal rotation of flexed right hip); (5) Blumberg sign / Rebound tenderness.',
        highlight: 'McBurney tenderness, Rovsing, Psoas, Obturator, & Rebound tenderness'
      }
    ],
    clinicalContext: 'In Emergency and General Surgical nursing, acute appendicitis is the most common cause of acute abdomen requiring emergency laparoscopy. Obstruction of the appendiceal lumen (by a fecalith, lymphoid hyperplasia, or foreign body) leads to mucus accumulation, intraluminal distention, ischemia, and bacterial overgrowth. Strict preoperative nursing care: keep strictly NPO, establish IV access for isotonic crystalloids, avoid administering laxatives/enemas (which increase bowel peristalsis and trigger perforation), and NEVER apply heat to the abdomen (heat causes vasodilation and accelerates rupture and generalized peritonitis!).',
    nclexPearls: [
      'Sudden Relief of Pain Alert: If a client with acute appendicitis abruptly reports that their excruciating abdominal pain has suddenly vanished or dramatically improved, suspect ACUTE RUPTURE / PERFORATION of the appendix! This is a medical-surgical catastrophe—intraluminal decompression provides temporary pain relief before life-threatening peritonitis, rigid board-like abdomen, high fever, and septic shock rapidly ensue.',
      'NO Heat, NO Enemas, NO Laxatives: Applying a heating pad to the abdomen or giving enemas/laxatives is strictly contraindicated because it drastically increases the risk of appendiceal rupture and widespread fecal peritonitis.',
      'Pain Sequence: Anorexia -> Periumbilical Pain -> Nausea/Vomiting -> RLQ Pain migration.'
    ],
    practiceQuestion: {
      question: 'A 22-year-old client with suspected acute appendicitis is waiting for surgical consultation. The client has been crying from severe, constant right lower quadrant pain rated 9/10 with localized guarding at McBurney\'s point. Thirty minutes later, the client suddenly smiles and tells the nurse, "I feel so much better now, the pain has completely gone away!" What should the nurse suspect immediately (PAINS)?',
      options: [
        'The appendix has spontaneously decompressed and healed without complication.',
        'The client\'s appendix has ruptured, requiring immediate preparation for emergency laparotomy.',
        'The client is experiencing the pain-relieving effect of IV hydration.',
        'The inflammation has resolved and the client may be discharged home.'
      ],
      correctIndex: 1,
      rationale: 'Sudden, abrupt cessation of pain in acute appendicitis is the classic NCLEX hallmark of appendiceal rupture/perforation. Intraluminal pressure drops as the inflamed appendix bursts, providing temporary relief of somatic peritoneal stretch. However, spilled fecal contents and bacterial toxins rapidly ignite generalized peritonitis, presenting shortly thereafter with high fever, board-like abdominal rigidity, rebound tenderness, and septic shock. The nurse must immediately notify the surgeon, maintain strict NPO, initiate IV antibiotics, and prepare for emergent surgical exploration.'
    }
  },
  {
    id: 'angina-precipitating-factors-four-es',
    shortCode: '4E\'s',
    title: 'Precipitating Factors of Angina Pectoris (4E\'s)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The four primary physiological and environmental triggers that precipitate acute episodes of stable angina pectoris by increasing myocardial oxygen demand.',
    memoryTip: '4E\'s of Angina — Eating (heavy meals shunt blood to GI tract), Emotion (stress/anger releases catecholamines), Exertion (exercise spikes heart rate & workload), Extreme temperatures (cold causes peripheral vasoconstriction, heat causes vasodilation & tachycardia).',
    highYield: true,
    tags: ['Cardiovascular', 'Angina', 'Coronary Artery Disease', 'Patient Education', 'Pharmacology'],
    letters: [
      {
        letter: 'E',
        term: 'Eating (Heavy or Large Meals)',
        description: 'Consuming large, heavy meals shunts a substantial portion of circulating blood flow to the mesenteric/gastrointestinal circulation (splanchnic steal) for digestion, transiently reducing coronary arterial perfusion while increasing metabolic cardiac output.',
        highlight: 'Heavy meals shunt blood to gut (splanchnic steal) & raise cardiac workload'
      },
      {
        letter: 'E',
        term: 'Emotion (Stress, Anger & Anxiety)',
        description: 'Intense emotional states, psychological stress, fear, or anxiety stimulate the sympathetic nervous system, causing sudden surges of circulating catecholamines (epinephrine and norepinephrine) that drive tachycardia, hypertension, and increased myocardial wall stress.',
        highlight: 'Sympathetic catecholamine surge triggers tachycardia & hypertension'
      },
      {
        letter: 'E',
        term: 'Exertion (Physical Exercise & Straining)',
        description: 'Strenuous physical activity, stair climbing, rapid walking, lifting heavy objects, or isometric straining (Valsalva) drastically increases heart rate, stroke volume, and afterload, exceeding the fixed oxygen delivery capacity of stenosed coronary arteries.',
        highlight: 'Exercise & isometric exertion exceed coronary blood flow capacity'
      },
      {
        letter: 'E',
        term: 'Extreme Temperatures (Hot or Cold Weather)',
        description: 'Exposure to cold weather stimulates systemic peripheral vasoconstriction to conserve heat, spiking systemic vascular resistance (afterload) and myocardial oxygen demand. Intense heat causes peripheral vasodilation, pooling, compensatory tachycardia, and dehydration.',
        highlight: 'Cold causes vasoconstriction & high afterload; heat causes tachycardia'
      }
    ],
    clinicalContext: 'In Cardiovascular and Medical-Surgical nursing, stable angina pectoris occurs when atherosclerotic plaque (> 70% coronary luminal stenosis) prevents coronary blood flow from meeting increases in myocardial oxygen demand (MVO2). The 4E\'s serve as the clinical cornerstone for patient discharge teaching and secondary prevention. Clients are educated to pace physical activities, avoid sudden cold air exposure (wearing a scarf/mask over the mouth in winter), avoid large heavy meals, practice stress-reduction techniques, and take prophylactic sublingual nitroglycerin 5 to 10 minutes prior to engaging in planned physical exertion or stressful activities.',
    nclexPearls: [
      'Prophylactic Nitroglycerin: Instruct clients with stable angina to take one dose of sublingual nitroglycerin 5 to 10 minutes BEFORE undertaking known precipitating activities (e.g., climbing stairs, sexual intercourse, walking in cold weather).',
      'Sublingual Nitroglycerin Storage: Keep tablets in their original dark, airtight amber glass container; avoid heat, moisture, and light. Discard and replace the bottle every 6 months once opened (tablets should produce a slight tingling or burning sensation under the tongue when fresh and active).',
      'Cold Weather Warning: In cold weather, instruct clients to wrap a scarf over the nose and mouth to warm incoming air; breathing freezing air triggers reflex coronary vasospasm.',
      'Stable vs. Unstable Angina: Stable angina is predictable, provoked by the 4E\'s, and relieved by rest or sublingual nitroglycerin within 5 minutes. Unstable angina occurs at REST, increases in frequency/intensity, and is a medical emergency representing Acute Coronary Syndrome.'
    ],
    practiceQuestion: {
      question: 'A 64-year-old client with chronic stable angina is being discharged home following medical stabilization. The nurse conducts comprehensive education regarding lifestyle modifications and triggers (4E\'s). Which client statement indicates the need for further education?',
      options: [
        'I will take a sublingual nitroglycerin tablet 5 to 10 minutes before I walk up the steep hill near my home.',
        'When it is freezing cold outside, I will wrap a warm scarf around my nose and mouth before shoveling the driveway.',
        'I will eat smaller, more frequent meals throughout the day instead of large, heavy dinners.',
        'If I experience chest pain at rest that is not relieved after one nitroglycerin tablet, I will call 911 immediately.'
      ],
      correctIndex: 1,
      rationale: 'A client with coronary artery disease and stable angina should NEVER shovel snow in freezing cold weather! Shoveling snow combines two potent triggers from the 4E\'s simultaneously: intense isometric upper-body physical exertion ("Exertion") and freezing cold exposure ("Extreme Temperatures"). Cold weather causes reflex peripheral vasoconstriction and coronary artery spasm, drastically increasing myocardial afterload and oxygen demand, which frequently precipitates acute myocardial infarction. The other statements demonstrate correct understanding of prophylactic nitroglycerin, small meals, and emergency protocols.'
    }
  },
  {
    id: 'acid-base-balance-rome',
    shortCode: 'ROME',
    title: 'Acid-Base Interpretation (ROME)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The gold-standard method for rapidly analyzing arterial blood gas (ABG) values: Respiratory Opposite, Metabolic Equal.',
    memoryTip: 'ROME — Respiratory Opposite (pH and PaCO2 move in opposite directions: high pH + low PaCO2 = Respiratory Alkalosis; low pH + high PaCO2 = Respiratory Acidosis), Metabolic Equal (pH and HCO3 move in the same/equal direction: high pH + high HCO3 = Metabolic Alkalosis; low pH + low HCO3 = Metabolic Acidosis).',
    highYield: true,
    tags: ['Acid-Base Balance', 'ABGs', 'Respiratory', 'Renal', 'Laboratory Values', 'Critical Care'],
    letters: [
      {
        letter: 'R',
        term: 'Respiratory',
        description: 'Represents the pulmonary component of acid-base regulation, governed by PaCO2 (normal: 35–45 mm Hg). Carbon dioxide dissolves in blood to form carbonic acid; hypoventilation retains PaCO2, while hyperventilation blows off PaCO2.',
        highlight: 'Pulmonary control via PaCO2 (35–45 mm Hg); carbon dioxide acts as volatile acid'
      },
      {
        letter: 'O',
        term: 'Opposite Directions',
        description: 'In respiratory acid-base imbalances, the arrows for pH and PaCO2 move in OPPOSITE directions: If pH is elevated (↑ > 7.45) and PaCO2 is decreased (↓ < 35 mm Hg), it is Respiratory Alkalosis. If pH is decreased (↓ < 7.35) and PaCO2 is elevated (↑ > 45 mm Hg), it is Respiratory Acidosis.',
        highlight: 'pH ↑ and PaCO2 ↓ = Respiratory Alkalosis; pH ↓ and PaCO2 ↑ = Respiratory Acidosis'
      },
      {
        letter: 'M',
        term: 'Metabolic',
        description: 'Represents the renal/systemic component of acid-base balance, governed by serum bicarbonate (HCO3-, normal: 22–26 mEq/L). The kidneys regulate bicarbonate reabsorption and hydrogen ion excretion, responding over hours to days.',
        highlight: 'Renal regulation via HCO3 (22–26 mEq/L); primary chemical buffer in systemic circulation'
      },
      {
        letter: 'E',
        term: 'Equal (Same) Direction',
        description: 'In metabolic acid-base imbalances, the arrows for pH and HCO3 move in the SAME (equal) direction: If pH is elevated (↑ > 7.45) and HCO3 is elevated (↑ > 26 mEq/L), it is Metabolic Alkalosis. If pH is decreased (↓ < 7.35) and HCO3 is decreased (↓ < 22 mEq/L), it is Metabolic Acidosis.',
        highlight: 'pH ↑ and HCO3 ↑ = Metabolic Alkalosis; pH ↓ and HCO3 ↓ = Metabolic Acidosis'
      }
    ],
    clinicalContext: 'Arterial blood gas (ABG) analysis is a critical diagnostic skill tested extensively on the NCLEX and required in intensive care, emergency, and med-surg nursing. Standard reference ranges are: pH 7.35–7.45, PaCO2 35–45 mm Hg, and HCO3- 22–26 mEq/L. The ROME mnemonic provides a fast 3-step interpretation algorithm: Step 1: Examine pH to establish Acidosis (< 7.35) or Alkalosis (> 7.45). Step 2: Examine PaCO2 and HCO3- to determine which parameter moved in the direction matching the primary disturbance. Step 3: Determine compensation (Uncompensated = pH abnormal, one parameter abnormal; Partially compensated = all three abnormal; Fully compensated = pH returned to normal range with both PaCO2 and HCO3 abnormal).',
    nclexPearls: [
      'Classic Causes of Respiratory Acidosis (Hypoventilation): COPD exacerbation, opioid or sedative overdose, atelectasis, pneumothorax, flail chest, severe pneumonia, Guillain-Barré syndrome, and myasthenia gravis (retaining CO2).',
      'Classic Causes of Respiratory Alkalosis (Hyperventilation): Panic attacks/anxiety, hyperventilation syndrome, early hypoxemia, pulmonary embolism, fever, high altitude, and mechanical ventilator over-ventilation (blowing off CO2).',
      'Classic Causes of Metabolic Acidosis: Diabetic ketoacidosis (DKA), severe diarrhea (loss of base/bicarbonate "below the belt"), renal failure (uremia), lactic acidosis/shock, salicylate overdose, and starvation.',
      'Classic Causes of Metabolic Alkalosis: Prolonged vomiting or nasogastric suctioning (loss of hydrochloric acid "above the belt"), excessive antacid/bicarbonate ingestion, hypokalemia, and loop/thiazide diuretic therapy.',
      'Allen Test Before Radial Arterial Puncture: Always perform the modified Allen test to verify collateral ulnar circulation before drawing radial ABGs. Compress radial and ulnar arteries, client makes a fist until hand blanches, release ulnar artery; color should return within 5–7 seconds (positive test = safe to proceed).'
    ],
    practiceQuestion: {
      question: 'A client admitted with acute exacerbation of chronic obstructive pulmonary disease (COPD) has the following arterial blood gas (ABG) results: pH 7.31, PaCO2 58 mm Hg, HCO3 24 mEq/L, and PaO2 62 mm Hg. Using the ROME framework, how does the nurse interpret these findings?',
      options: [
        'Uncompensated respiratory acidosis',
        'Partially compensated metabolic acidosis',
        'Uncompensated respiratory alkalosis',
        'Fully compensated metabolic alkalosis'
      ],
      correctIndex: 0,
      rationale: 'Using the ROME method: Step 1: The pH of 7.31 is low (< 7.35), indicating acidosis. Step 2: The PaCO2 of 58 mm Hg is elevated (> 45 mm Hg). Since pH is low (↓) and PaCO2 is high (↑), the arrows move in OPPOSITE directions, confirming a RESPIRATORY etiology (Respiratory Opposite = Respiratory Acidosis). Step 3: The HCO3 is 24 mEq/L, which remains within the normal reference range (22–26 mEq/L), indicating that the kidneys have not yet retained bicarbonate to compensate. Because the pH is abnormal and the HCO3 is normal, this represents uncompensated respiratory acidosis, typical of acute hypoventilation in COPD.'
    }
  },
  {
    id: 'hypocalcemia-signs-symptoms-cats',
    shortCode: 'CATS (Hypocalcemia)',
    title: 'Hypocalcemia Signs and Symptoms (CATS)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The definitive clinical manifestation checklist for low serum calcium levels: Convulsions, Arrhythmias, Tetany, Spasms and stridor.',
    memoryTip: 'CATS for Hypocalcemia — C: Convulsions (seizures from neuronal excitability), A: Arrhythmias (prolonged ST/QT interval, risk of Torsades), T: Tetany (hyperactive DTRs, numbness/tingling, Trousseau\'s & Chvostek\'s signs), S: Spasms and stridor (life-threatening laryngospasm post-thyroidectomy).',
    highYield: true,
    tags: ['Electrolytes', 'Hypocalcemia', 'Endocrine', 'Thyroidectomy', 'Neurology', 'Critical Care'],
    letters: [
      {
        letter: 'C',
        term: 'Convulsions (Seizures)',
        description: 'Decreased extracellular calcium increases neuronal cell membrane permeability to sodium ions, lowering depolarization thresholds and triggering spontaneous, repetitive nerve discharges that manifest as generalized tonic-clonic seizures.',
        highlight: 'Neuronal hyper-reactivity lowers seizure threshold; initiate seizure precautions'
      },
      {
        letter: 'A',
        term: 'Arrhythmias (Cardiac Dysrhythmias & Prolonged QT)',
        description: 'Calcium is essential for cardiac phase 2 plateau action potential. Hypocalcemia prolongs the ST segment and corrected QT interval (QTc), significantly heightening the risk of polymorphic ventricular tachycardia (Torsades de Pointes) and cardiac arrest.',
        highlight: 'Prolonged ST segment & prolonged QT interval on ECG; risk of Torsades de Pointes'
      },
      {
        letter: 'T',
        term: 'Tetany & Neuromuscular Irritability',
        description: 'Profound neuromuscular excitability characterized by paresthesias (numbness and tingling around mouth and extremities), painful muscle cramping, hyperactive deep tendon reflexes (DTRs 3+ to 4+), positive Trousseau\'s sign (carpopedal spasm with BP cuff), and positive Chvostek\'s sign (facial twitching).',
        highlight: 'Paresthesias, hyperactive DTRs, positive Trousseau\'s & Chvostek\'s signs'
      },
      {
        letter: 'S',
        term: 'Spasms and Stridor (Laryngeal Spasm)',
        description: 'Severe, life-threatening involuntary contracture of laryngeal muscles causing acute upper airway obstruction, vocal cord spasms, inspiratory stridor, and respiratory arrest. Often seen 24–48 hours post-thyroidectomy due to accidental trauma or parathyroid removal.',
        highlight: 'Laryngospasm with inspiratory stridor; emergency tracheostomy tray at bedside'
      }
    ],
    clinicalContext: 'Normal serum total calcium is 8.5–10.5 mg/dL (ionized: 4.5–5.6 mg/dL). Calcium exerts a membrane-stabilizing "sedative" effect on excitable tissues; thus, when calcium is LOW, nerves and muscles become EXTREMELY EXCITABLE (hyperreflexia, tetany, seizures). Common etiologies include hypoparathyroidism, accidental excision of parathyroid glands during thyroidectomy or neck dissection, acute pancreatitis (calcium saponification), chronic kidney disease (impaired vitamin D activation), vitamin D deficiency, and massive blood transfusions (citrate preservative chelates ionized calcium).',
    nclexPearls: [
      'Post-Thyroidectomy Bedside Emergency Equipment: Always keep a tracheostomy tray, suction setup, oxygen delivery equipment, and IV Calcium Gluconate at the bedside 24–48 hours after thyroidectomy or parathyroidectomy.',
      'Two Classic Physical Assessment Signs: (1) Trousseau\'s Sign: Inflate a sphygmomanometer cuff above systolic blood pressure for 3 minutes; carpal spasm (adduction of thumb, flexion of wrist and MCP joints) occurs. (2) Chvostek\'s Sign: Lightly tap the facial nerve (CN VII) approximately 2 cm anterior to the earlobe; unilateral twitching of facial muscles/lip confirms neuromuscular excitability.',
      'Administration of IV Calcium Gluconate: Infuse slowly via IV piggyback; rapid IV push can cause severe bradycardia, hypotension, and cardiac arrest. Always place the client on a cardiac monitor during infusion.',
      'Calcium and Phosphorus Inverse Relationship: Serum calcium and phosphorus have a reciprocal relationship (Ca × PO4). As serum calcium drops, serum phosphorus rises (e.g., in hypoparathyroidism and chronic renal failure).'
    ],
    practiceQuestion: {
      question: 'A nurse is caring for a client 24 hours following a total thyroidectomy. The client reports progressive tingling in the fingers and numbness around the mouth. When assessing the client, the nurse notes light twitching of the lip upon tapping the cheek anterior to the ear. Which immediate action should the nurse prepare for?',
      options: [
        'Administer IV calcium gluconate under continuous cardiac monitoring',
        'Administer 100 mg of oral potassium chloride with orange juice',
        'Instruct the client to hyperventilate into a paper bag to raise carbon dioxide levels',
        'Administer oral calcitonin to prevent skeletal calcium resorption'
      ],
      correctIndex: 0,
      rationale: 'The client is exhibiting circumoral paresthesias and a positive Chvostek\'s sign, which are hallmark indicators of acute hypocalcemia (serum Ca < 8.5 mg/dL) resulting from inadvertent parathyroid gland damage or devascularization during the thyroidectomy. Without immediate intervention, acute hypocalcemia rapidly progresses to painful tetany, seizures (Convulsions), cardiac arrhythmias, and life-threatening laryngospasm with stridor (CATS mnemonic). The emergency treatment of choice is intravenous calcium gluconate, administered slowly under continuous ECG telemetry to monitor for bradycardia and dysrhythmias. Paper bag breathing would cause respiratory alkalosis, further decreasing ionized calcium binding, worsening symptoms.'
    }
  },
  {
    id: 'hypernatremia-signs-fried-salt',
    shortCode: 'FRIED / SALT',
    title: 'Hypernatremia Signs & Symptoms (FRIED / SALT)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'Key neurological and hyperosmolar signs of high serum sodium: FRIED (Fever, Restless, Increased BP, Edema, Decreased urine) and SALT (Skin, Agitation, Low-grade fever, Thirst).',
    memoryTip: 'When sodium is high, your cells are "FRIED" — F: Fever & flushed skin, R: Restless & irritable, I: Increased fluid retention & BP, E: Edema (peripheral/pitting), D: Decreased urine output & dry mouth. Alternative mnemonic: SALT (Skin flushed, Agitation, Low-grade fever, Thirst).',
    highYield: true,
    tags: ['Electrolytes', 'Hypernatremia', 'Fluids and Electrolytes', 'Neurology', 'Endocrine', 'Diabetes Insipidus'],
    letters: [
      {
        letter: 'F',
        term: 'Fever (Low-Grade) & Flushed Skin',
        description: 'Severe cellular dehydration impairs cutaneous capillary microcirculation and hypothalamic thermoregulatory sweat production, resulting in warm, flushed, hyperemic skin and low-grade pyrexia.',
        highlight: 'Warm, flushed skin and low-grade pyrexia due to impaired sweat evaporative cooling'
      },
      {
        letter: 'R',
        term: 'Restless & Irritable (Neurological Impairment)',
        description: 'High extracellular sodium draws water out of cerebral neurons via osmotic gradient, causing brain cell shrinkage. This leads to neuromuscular irritability, restlessness, agitation, confusion, lethargy, hallucinations, and, if severe, seizures and coma.',
        highlight: 'Intracellular brain cell shrinkage causes agitation, restlessness, and seizure risk'
      },
      {
        letter: 'I',
        term: 'Increased Fluid Retention & Elevated Blood Pressure',
        description: 'Hypertonicity stimulates hypothalamic thirst centers and posterior pituitary secretion of antidiuretic hormone (ADH), prompting vascular fluid expansion, hypervolemia, bounding peripheral pulses, and arterial hypertension.',
        highlight: 'Compensatory ADH and thirst drive intravascular expansion with hypertension'
      },
      {
        letter: 'E',
        term: 'Edema (Peripheral & Pitting Edema)',
        description: 'Expansion of total extracellular fluid volume produces dependent pitting edema in the lower extremities, sacral edema in bedbound clients, pulmonary vascular congestion, and rapid daily weight gain.',
        highlight: 'Dependent pitting peripheral edema and acute weight gain from fluid shift'
      },
      {
        letter: 'D',
        term: 'Decreased Urinary Output & Dry Mouth',
        description: 'Maximal renal water conservation under ADH release yields oliguria (< 30 mL/hr) with elevated urine specific gravity (> 1.030), severely dry, sticky oral mucous membranes, and a swollen, dry, furrowed tongue.',
        highlight: 'Oliguria with high urine specific gravity (> 1.030) and dry, sticky oral mucosa'
      }
    ],
    clinicalContext: 'Normal serum sodium is 135–145 mEq/L. Hypernatremia is defined as serum sodium > 145 mEq/L and represents a hyperosmolar condition ("water deficit relative to sodium solute"). Common causes include inadequate fluid intake (unconscious, elderly, or infant patients unable to access water), excess fluid loss (Diabetes Insipidus with absent ADH, osmotic diuresis in DKA/HHS, severe watery diarrhea, extensive burns), and excess sodium gain (hypertonic 3% saline infusions, sodium bicarbonate boluses). The primary defense mechanism against hypernatremia is thirst; patients with intact thirst and water access rarely develop hypernatremia.',
    nclexPearls: [
      'Slow Correction Rule (Cerebral Edema Warning): Never correct hypernatremia too quickly! Rapid lowering of serum sodium with hypotonic IV fluids (0.45% normal saline or D5W) causes water to rush into chronically dehydrated cerebral cells, triggering cerebral edema, brain herniation, and death. Target reduction rate: ≤ 0.5 to 1 mEq/L per hour (maximum 10–12 mEq/L in 24 hours).',
      'Alternative SALT Mnemonic: S = Skin flushed, A = Agitation/confusion, L = Low-grade fever, T = Thirst (intense, unquenchable polydipsia with swollen red tongue).',
      'Diabetes Insipidus Connection: DI causes massive polyuria (> 4–20 L/day) of dilute urine (specific gravity < 1.005) leading rapidly to severe dehydration, hypernatremia, and hypovolemic shock. Managed with desmopressin (DDAVP) and free water replacement.',
      'Seizure Precautions: Due to cerebral dehydration and shifting osmolarity, clients with severe hypernatremia (Na > 155 mEq/L) must be placed on strict seizure precautions (padded bed rails, working suction, oxygen at bedside).'
    ],
    practiceQuestion: {
      question: 'A 78-year-old bedbound client with severe dementia is admitted from an assisted living facility with acute lethargy. Laboratory results reveal serum sodium 158 mEq/L, serum osmolality 325 mOsm/kg, and urine specific gravity 1.035. The provider prescribes an IV infusion of 0.45% sodium chloride. Which clinical consideration is most essential for the nurse to monitor during this fluid therapy?',
      options: [
        'Rapid sodium reduction should exceed 2 mEq/L per hour to restore alertness quickly.',
        'Serum sodium must be lowered gradually to prevent acute cerebral edema and neurological deterioration.',
        'The client must be fluid-restricted to 500 mL per day to prevent circulatory volume overload.',
        'Potassium supplements must be withheld because hypernatremia causes severe secondary hyperkalemia.'
      ],
      correctIndex: 1,
      rationale: 'In hypernatremia (Na > 145 mEq/L), brain cells synthesize idiogenic osmoles to protect intracellular volume against osmotic shrinkage. If plasma sodium is corrected too rapidly with hypotonic IV fluids (such as 0.45% NaCl or D5W), free water rushes down the osmotic gradient into the brain cells faster than the osmoles can dissipate, leading to acute intracellular swelling, cerebral edema, seizures, herniation, and permanent brain damage. Therefore, the standard of care is gradual correction at a rate of 0.5 to 1 mEq/L/hr (no more than 10–12 mEq/L over 24 hours). The nurse continuously monitors neurological status, Glascow Coma Scale, and hourly I&O.'
    }
  },
  {
    id: 'hyperkalemia-causes-machine',
    shortCode: 'MACHINE',
    title: 'Causes of Hyperkalemia (The MACHINE)',
    category: 'med-surg',
    categoryName: 'Medical & Surgical Nursing',
    summary: 'The comprehensive clinical etiologies of elevated serum potassium: Medications, Acidosis, Cellular destruction, Hypoaldosteronism/Hemolysis, Intake, Nephrons, and impaired Excretion.',
    memoryTip: 'The Hyperkalemia "MACHINE" pumps up potassium — M: Medications (ACE inhibitors, ARBs, NSAIDs, spironolactone), A: Acidosis (H+ enters cells, K+ shifts out), C: Cellular destruction (burns, crush injury, tumor lysis), H: Hypoaldosteronism (Addison\'s) & Hemolysis, I: Intake (excess IV K+ or salt substitutes), N: Nephrons (renal failure/AKI/CKD), E: Excretion (impaired urinary clearance).',
    highYield: true,
    tags: ['Electrolytes', 'Hyperkalemia', 'Cardiovascular', 'Renal', 'Pharmacology', 'Critical Care'],
    letters: [
      {
        letter: 'M',
        term: 'Medications (ACEi, ARBs, NSAIDs, K+-Sparing Diuretics)',
        description: 'Pharmacologic agents that hinder potassium clearance: ACE inhibitors (lisinopril), Angiotensin Receptor Blockers (losartan), Potassium-sparing diuretics (spironolactone, triamterene), NSAIDs (decrease renal blood flow/renin), and calcineurin inhibitors (cyclosporine).',
        highlight: 'ACE inhibitors, ARBs, NSAIDs, and spironolactone block renal K+ elimination'
      },
      {
        letter: 'A',
        term: 'Acidosis (Metabolic & Respiratory)',
        description: 'In systemic acidemic states (high extracellular H+ concentration), excess hydrogen ions shift into intracellular fluid to be buffered by intracellular proteins. To maintain electrochemical neutrality, potassium ions exit cells into the intravascular space, driving up serum K+ (for every 0.1 decrease in pH, K+ rises by ~0.6 mEq/L).',
        highlight: 'H+/K+ cellular exchange: H+ moves into cells, forcing K+ out into plasma'
      },
      {
        letter: 'C',
        term: 'Cellular Destruction (Burns, Trauma, Lysis)',
        description: 'Since 98% of total body potassium resides inside cells (140 mEq/L intracellular vs. 4 mEq/L extracellular), massive cytolysis from major thermal burns, crush injuries, rhabdomyolysis, and tumor lysis syndrome spills massive quantities of intracellular potassium directly into systemic circulation.',
        highlight: 'Massive cytolysis from burns, trauma, or tumor lysis spills intracellular K+'
      },
      {
        letter: 'H',
        term: 'Hypoaldosteronism & Hemolysis',
        description: 'Aldosterone promotes distal renal tubular sodium reabsorption and potassium excretion; lack of aldosterone (Addison\'s disease, adrenal crisis) causes potassium retention. Hemolysis—either pathological in vivo or in vitro laboratory artifact from traumatic venipuncture/small-gauge needles—releases red blood cell potassium into serum.',
        highlight: 'Addison\'s disease lacks aldosterone to excrete K+; hemolysis lyses RBCs'
      },
      {
        letter: 'I',
        term: 'Intake (Excessive Dietary or IV Potassium)',
        description: 'Rapid or excessive parenteral potassium administration (NEVER give IV push!) or high dietary intake via potassium-based salt substitutes, potassium supplements, and dried fruits in clients with compromised renal reserve.',
        highlight: 'Salt substitutes and rapid IV infusions; NEVER administer potassium IV push!'
      },
      {
        letter: 'N',
        term: 'Nephrons & Renal Failure (AKI / CKD / ESRD)',
        description: 'The kidneys excrete over 90% of ingested daily potassium. Glomerulotubular dysfunction in acute kidney injury (oliguric phase) or end-stage renal disease disables tubular secretion, making kidney failure the single most frequent cause of clinical hyperkalemia.',
        highlight: 'Kidney failure (AKI / ESRD) disables the primary 90% excretion route'
      },
      {
        letter: 'E',
        term: 'Excretion Impaired',
        description: 'Pathological conditions with drastically decreased glomerular filtration rate, severe hypovolemia, urinary tract obstruction, or tubular resistance to mineralocorticoids prevent normal distal nephron fluid flow and potassium excretion.',
        highlight: 'Reduced distal tubular flow and low GFR eliminate urinary potassium clearance'
      }
    ],
    clinicalContext: 'Normal serum potassium is 3.5–5.0 mEq/L. Hyperkalemia (serum potassium > 5.0 mEq/L, critical > 6.0 mEq/L) is the most lethal electrolyte abnormality in clinical nursing practice because potassium determines the resting cardiac membrane potential. Elevated potassium causes myocardial hyperexcitability progressing to refractory ventricular fibrillation or asystole. Progression on 12-lead ECG: Tall, narrow, peaked T waves -> Prolonged PR interval and flattened/lost P waves -> Widened QRS complex -> Sine wave pattern -> Ventricular fibrillation or asystole.',
    nclexPearls: [
      'Emergency Hyperkalemia Treatment Protocol (Stabilize, Shift, Remove): (1) STABILIZE cardiac membranes: IV Calcium Gluconate (protects myocardium immediately; does NOT lower K+). (2) SHIFT K+ into cells: Regular Insulin 10 units IV + Dextrose 50% (D50) IV bolus, inhaled nebulized Albuterol (high-dose 10–20 mg), and IV Sodium Bicarbonate (if acidotic). (3) REMOVE K+ from body: Loop diuretics (furosemide), Sodium Polystyrene Sulfonate (Kayexalate) or Patiromer via GI tract, and Emergent Hemodialysis (most definitive).',
      'NEVER Give Potassium IV Push: Potassium chloride (KCl) is a High-Alert medication. Giving K+ IV push or rapid bolus causes instant cardiac arrest! Maximum peripheral IV infusion rate is 10 mEq/hr; maximum central line rate is 20 mEq/hr under continuous telemetry.',
      'Pseudohyperkalemia (Hemolyzed Specimen): If an asymptomatic client with normal ECG suddenly has a reported K+ of 6.2 mEq/L, check the lab report for "specimen hemolyzed" (caused by prolonged tourniquet time, fist clenching, or small needle gauge) and re-draw before giving aggressive interventions.',
      'Dietary Warnings with Renal Disease: Clients with CKD/ESRD must strictly avoid high-potassium foods (bananas, oranges, potatoes, tomatoes, avocados, spinach) and potassium chloride-based salt substitutes.'
    ],
    practiceQuestion: {
      question: 'A client with end-stage renal disease (ESRD) missed two hemodialysis sessions. The client arrives at the emergency department with profound muscle weakness and palpitations. The telemetry monitor shows tall, peaked T waves and widening of the QRS complex. Serum potassium is 7.2 mEq/L. Which medication should the nurse prepare to administer FIRST?',
      options: [
        'Sodium polystyrene sulfonate (Kayexalate) 30 g orally',
        'Intravenous calcium gluconate 10% over 2 to 3 minutes',
        'Regular insulin 10 units IV with 50 mL of 50% dextrose (D50)',
        'Nebulized albuterol 20 mg over 15 minutes'
      ],
      correctIndex: 1,
      rationale: 'With a serum potassium of 7.2 mEq/L and ECG manifestations of widening QRS complexes and tall peaked T waves, the client is at imminent risk of developing a sine-wave pattern, ventricular fibrillation, or asystolic cardiac arrest. The immediate first-line priority is intravenous Calcium Gluconate. Calcium antagonizes potassium-induced membrane excitability, normalizing myocardial threshold potentials and stabilizing the cardiac cell membrane within 1 to 3 minutes, preventing fatal arrhythmias. Note that calcium gluconate does NOT reduce serum potassium levels; therefore, once the myocardium is stabilized, the nurse immediately administers treatments to shift potassium intracellularly (IV Regular Insulin + D50) and remove potassium from the body (Kayexalate or emergent hemodialysis).'
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
  {
    id: 'tca-antidepressants-vent',
    shortCode: 'VENT',
    title: 'Tricyclic Antidepressants (TCAs) — VENT',
    category: 'psych',
    categoryName: 'Psychiatric Nursing',
    summary: 'The primary classic tricyclic antidepressant (TCA) agents: Vivactil, Elavil, Norpramin, and Tofranil.',
    memoryTip: 'VENT your depression with TCAs — V: Vivactil (protriptyline), E: Elavil (amitriptyline), N: Norpramin (desipramine), T: Tofranil (imipramine). Remember: TCAs have potent anticholinergic effects, cause orthostatic hypotension, and can cause lethal cardiotoxicity (wide QRS) in overdose!',
    highYield: true,
    tags: ['Psychopharmacology', 'Antidepressants', 'TCAs', 'Mental Health', 'Depression'],
    letters: [
      {
        letter: 'V',
        term: 'Vivactil (Protriptyline)',
        description: 'An activating, stimulating tricyclic antidepressant often chosen for apathetic or lethargic depression; typically taken in the morning to avoid severe nocturnal insomnia.',
        highlight: 'Activating TCA for psychomotor retardation; morning dosing'
      },
      {
        letter: 'E',
        term: 'Elavil (Amitriptyline)',
        description: 'A widely prescribed, highly sedating TCA with potent anticholinergic activity; frequently administered at bedtime for depression with comorbid insomnia, chronic neuropathic pain, or migraine prophylaxis.',
        highlight: 'Sedating TCA given at bedtime; neuropathic pain & migraine prophylaxis'
      },
      {
        letter: 'N',
        term: 'Norpramin (Desipramine)',
        description: 'A secondary amine TCA that selectively inhibits norepinephrine reuptake; characterized by lower sedative and anticholinergic profiles compared to tertiary amines like amitriptyline.',
        highlight: 'Potent norepinephrine reuptake inhibitor with reduced sedation'
      },
      {
        letter: 'T',
        term: 'Tofranil (Imipramine)',
        description: 'The prototypical tricyclic antidepressant used for major depressive disorder and historically indicated for the short-term treatment of nocturnal enuresis (bed-wetting) in pediatric patients.',
        highlight: 'Classic TCA indicated for depression and pediatric nocturnal enuresis'
      }
    ],
    clinicalContext: 'Tricyclic antidepressants (TCAs) inhibit the presynaptic reuptake of serotonin (5-HT) and norepinephrine (NE), but concurrently block muscarinic acetylcholine receptors, alpha-1 adrenergic receptors, and histamine H1 receptors. As a result, TCAs carry a substantial adverse effect profile including anticholinergic symptoms (dry mouth, blurred vision, urinary retention, severe constipation), orthostatic hypotension (alpha-1 blockade), sedation and weight gain (H1 blockade), and cardiac conduction delays. TCAs carry a narrow therapeutic index; acute overdose precipitates life-threatening cardiotoxicity (QRS widening > 100 ms, prolonged QT, ventricular dysrhythmias) and anticholinergic neurotoxicity (convulsions, coma). The definitive emergency antidote for TCA-induced cardiotoxicity and metabolic acidosis is intravenous Sodium Bicarbonate.',
    nclexPearls: [
      'Overdose & Cardiotoxicity: TCAs are fatal in overdose (often prescribed as a 1-week supply to suicidal clients). A widened QRS complex (> 100 ms) on 12-lead ECG is the most predictive indicator of ventricular arrhythmias and seizures. Administer IV Sodium Bicarbonate immediately to alkalinize serum and narrow the QRS complex.',
      'Anticholinergic "Can\'t See, Can\'t Pee, Can\'t Spit, Can\'t Shit": Warn clients about dry mouth (chew sugarless gum), constipation (increase fiber and water), blurred vision, and urinary hesitancy. Contraindicated in narrow-angle glaucoma and benign prostatic hyperplasia (BPH).',
      'Orthostatic Hypotension & Fall Precautions: Alpha-1 receptor blockade produces significant postural hypotension. Instruct clients to change positions slowly, dangle legs at the bedside before standing, and stay hydrated.',
      '14-Day MAOI Washout Period: A minimum 14-day washout period is mandatory when switching between TCAs and Monoamine Oxidase Inhibitors (MAOIs) to prevent fatal serotonin syndrome and malignant hypertensive crisis.'
    ],
    practiceQuestion: {
      question: 'A client with major depressive disorder is brought to the emergency department following an intentional overdose of Elavil (amitriptyline). The client is stuporous with a blood pressure of 82/46 mm Hg, heart rate 128 bpm, and a 12-lead ECG displaying a widened QRS duration of 144 ms. Which emergency intervention should the nurse anticipate as the highest priority?',
      options: [
        'Immediate administration of intravenous sodium bicarbonate',
        'Initiation of a continuous IV infusion of regular insulin and dextrose',
        'Administration of IV flumazenil over 15 seconds',
        'Oral administration of activated charcoal with sorbitol via nasogastric tube'
      ],
      correctIndex: 0,
      rationale: 'Tricyclic antidepressant (TCA) toxicity causes blockade of myocardial fast sodium channels, slowing depolarization, prolonging cardiac conduction, and producing QRS widening (> 100 ms), hypotension, ventricular arrhythmias (ventricular tachycardia/fibrillation), and seizures. Intravenous Sodium Bicarbonate is the first-line antidote. It increases extracellular sodium concentration and elevates serum pH, which unbinds the drug from cardiac sodium channels, rapidly narrows the QRS complex, restores perfusion pressure, and prevents fatal ventricular dysrhythmias.'
    }
  },
  {
    id: 'intellectual-disability-nursing-care-3rs',
    shortCode: "3R's",
    title: "Intellectual Disability Care Plan (3R's)",
    category: 'psych',
    categoryName: 'Psychiatric Nursing',
    summary: 'The three core principles for structuring nursing care and behavioral interventions for individuals with intellectual and developmental disabilities: Regularity, Reward, and Redundancy.',
    memoryTip: 'The 3R\'s of Developmental & Intellectual Care — Regularity (strict daily routine and structure), Reward (immediate positive reinforcement for desired behaviors), Redundancy (frequent repetition and step-by-step task breakdown).',
    highYield: true,
    tags: ['Intellectual Disability', 'Pediatric Nursing', 'Behavioral Therapy', 'Mental Health', 'Developmental Disorders'],
    letters: [
      {
        letter: 'R',
        term: 'Regularity (Routine & Structure)',
        description: 'Provide a predictable, highly consistent daily schedule and structured physical environment. Predictability minimizes sensory overload, alleviates anxiety, enhances feelings of safety, and promotes automated mastery of activities of daily living (ADLs).',
        highlight: 'Consistent daily schedule & structured environment to minimize anxiety'
      },
      {
        letter: 'R',
        term: 'Reward (Positive Reinforcement)',
        description: 'Deliver prompt, meaningful positive reinforcement (verbal praise, token economies, stickers, favored activities) immediately upon the client\'s successful demonstration of targeted behaviors or self-care steps to reinforce learning and self-esteem.',
        highlight: 'Immediate positive reinforcement & praise to encourage desired behaviors'
      },
      {
        letter: 'R',
        term: 'Redundancy (Repetition & Re-demonstration)',
        description: 'Utilize frequent repetition, consistent step-by-step instructions (task analysis), visual picture schedules, and recurring demonstrations to consolidate motor and cognitive skills into long-term functional memory.',
        highlight: 'Frequent repetition & step-by-step task breakdown to solidify mastery'
      }
    ],
    clinicalContext: 'In Psychiatric, Pediatric, and Community Health nursing, caring for clients with Intellectual Disability (intellectual developmental disorder; characterized by neurodevelopmental deficits in both intellectual functioning and adaptive behavior across conceptual, social, and practical domains) focuses on optimizing functional independence while safeguarding physical safety. The "3R\'s" framework provides an evidence-based behavioral foundation: Regularity ensures environmental stability, Reward strengthens desired behavioral repertoires, and Redundancy accommodates information-processing delays. Nursing care plans emphasize short, concrete one-step instructions, individualized communication aids (PECS/visual cards), family-centered support, and avoidance of punitive measures that trigger frustration or behavioral regression.',
    nclexPearls: [
      'Task Analysis & 1-Step Directions: Break complex self-care activities (e.g., brushing teeth, dressing) into small, discrete, sequential steps. Teach one component at a time and provide clear, concrete, one-step commands rather than multi-step instructions.',
      'Consistency Across Caregivers: All nursing staff, therapists, and family members must adhere to the exact same behavioral plan, routine, and cues. Inconsistency creates confusion, behavioral agitation, and regression.',
      'Focus on Adaptive Strengths: Base the plan of care on the individual\'s developmental age and adaptive capabilities rather than chronological age. Promote the maximum level of independent self-care within safe parameters.',
      'Communication Strategies: Supplement verbal instructions with visual aids, gestures, modeling, and physical demonstration. Allow ample processing time (10–15 seconds) before repeating a prompt.'
    ],
    practiceQuestion: {
      question: 'A pediatric nurse is designing an inpatient plan of care for a hospitalized 10-year-old child with moderate intellectual disability. Which nursing intervention best exemplifies the "3R\'s" behavioral framework to promote cooperation with morning self-care?',
      options: [
        'Post a visual picture schedule outlining daily morning steps, demonstrate each task, and offer immediate verbal praise when each step is completed.',
        'Allow the child to decide when and how to complete bathing without adult intervention to foster self-determination.',
        'Provide a detailed list of written rules and withhold lunch privileges if morning hygiene tasks are neglected.',
        'Complete all hygiene activities for the child to minimize hospital-induced frustration and conserve energy.'
      ],
      correctIndex: 0,
      rationale: 'The "3R\'s" framework relies on Regularity (a consistent visual picture schedule establishing routine), Redundancy (demonstrating and repeating each discrete step of self-care), and Reward (immediate verbal praise and positive reinforcement upon completion of each task). This empowers the child, enhances cognitive predictability, reinforces self-esteem, and promotes developmental independence. Punitive threats or doing everything for the child undermine adaptive learning and increase anxiety.'
    }
  },
  {
    id: 'cognitive-disorders-assessment-jocam',
    shortCode: 'JOCAM',
    title: 'Cognitive Assessment in Neurocognitive Disorders (JOCAM)',
    category: 'psych',
    categoryName: 'Psychiatric Nursing',
    summary: 'The systematic 5-component clinical assessment tool for evaluating cognitive impairment in delirium and dementia: Judgment, Orientation, Confabulation, Affect, and Memory.',
    memoryTip: 'Evaluate cognitive impairment with JOCAM — J: Judgment (safety and problem-solving), O: Orientation (time, place, person), C: Confabulation (unconscious fabrication of stories to fill memory gaps), A: Affect (blunted, labile, or inappropriate emotion), M: Memory (short-term deficits precede remote memory loss).',
    highYield: true,
    tags: ['Cognitive Disorders', 'Dementia', 'Delirium', 'Mental Health', 'Neurology', 'Gerontological Nursing'],
    letters: [
      {
        letter: 'J',
        term: 'Judgment & Decision-Making',
        description: 'Ability to evaluate everyday situations, recognize danger, and make sound, realistic decisions. Impairments lead to safety risks, such as wandering into cold weather without clothes, leaving hot stoves unattended, or falling victim to financial scams.',
        highlight: 'Impaired risk assessment & dangerous decisions; client safety is #1 priority'
      },
      {
        letter: 'O',
        term: 'Orientation (Time, Place, Person)',
        description: 'Awareness of reality. Orientation is typically lost in reverse chronological order: Time (date, day, year) is lost first, followed by Place (current location, home), and lastly Person (identity of self and close relatives). Fluctuation indicates delirium.',
        highlight: 'Disorientation lost progressively: Time → Place → Person'
      },
      {
        letter: 'C',
        term: 'Confabulation',
        description: 'The unconscious fabrication of plausible events or experiences to compensate for distressing memory gaps. Unlike lying or malingering, the client genuinely believes the fabricated memories, utilizing them as a psychological defense to preserve self-esteem.',
        highlight: 'Unconscious story fabrication to fill memory gaps & preserve self-esteem'
      },
      {
        letter: 'A',
        term: 'Affect & Emotional Expression',
        description: 'Observable emotional state and mood expression. Clients with neurocognitive decline frequently exhibit blunted, flat, labile (rapid mood shifts from weeping to euphoria), irritable, or inappropriate affect, as well as catastrophic emotional reactions when frustrated.',
        highlight: 'Emotional lability, blunting, or catastrophic reactions to frustration'
      },
      {
        letter: 'M',
        term: 'Memory (Short-Term vs. Long-Term)',
        description: 'Cognitive recall capacity. Short-term (recent/working) memory is characteristically compromised early in dementia (e.g., forgetting morning meals or repeating questions), whereas remote (long-term) memory remains preserved until advanced neurodegeneration.',
        highlight: 'Recent/short-term memory fails first; remote memory preserved until late'
      }
    ],
    clinicalContext: 'Assessment of cognitive difficulties (JOCAM) is essential when evaluating clients with Major/Mild Neurocognitive Disorders (Alzheimer\'s, vascular dementia, Lewy body dementia) and Delirium. On the NCLEX, nurses must critically differentiate between Dementia and Delirium: Delirium has an acute onset, fluctuating course, altered level of consciousness, and is reversible once the primary underlying physiological stressor (UTI, pneumonia, hypoxia, electrolyte derangement, polypharmacy) is treated. Dementia has an insidious, gradual onset, progressive irreversible course, and stable level of consciousness until late stages. Nursing priorities focus on patient safety, gentle reality reorientation (in delirium or early dementia), validation therapy (in moderate-to-severe dementia), and reducing environmental overstimulation.',
    nclexPearls: [
      'Confabulation vs. Lying: Confabulation is NEVER deliberate dishonesty. Never confront, argue with, or challenge a confabulating client with dementia; doing so destroys their self-esteem and provokes catastrophic agitation.',
      'Validation Therapy vs. Reorientation: In delirium or early mild dementia, gently reorient the client with clocks, calendars, and familiar items. In moderate-to-severe dementia, do NOT repeatedly argue reality; use Validation Therapy to acknowledge and validate their underlying feelings and redirect their attention.',
      'Sundowning Syndrome: Nocturnal worsening of confusion, agitation, and wandering as daylight fades. Manage by maintaining consistent daytime routines, maximizing morning sunlight exposure, minimizing caffeine, and keeping a soft nightlight on in the bedroom.',
      'Environmental Safety: For clients with impaired judgment and wandering risk, implement bed alarms, place door locks at top/bottom of exit doors out of visual line of sight, disguise doors with murals/curtains, and keep rooms free of clutter.'
    ],
    practiceQuestion: {
      question: 'A nurse assesses an 82-year-old client with moderate Alzheimer\'s disease who states: "I must hurry up and catch the 8:00 AM bus to my law office or my boss will fire me!" Records show the client retired 20 years ago. Using the JOCAM assessment framework, which response by the nurse is most appropriate?',
      options: [
        '"You are 82 years old and retired 20 years ago, so you don\'t have a job to go to."',
        '"You sound dedicated to your work. Tell me about what kind of cases you used to handle at your office."',
        '"If you try to leave this building, the security alarms will sound and you will be restrained."',
        '"The bus has already left for the morning, so you will have to wait until tomorrow to go to work."'
      ],
      correctIndex: 1,
      rationale: 'In moderate-to-severe neurocognitive disorders (dementia), the client exhibits significant disorientation to time/role and loss of recent memory (JOCAM components). Confronting the client with stark, harsh reality ("You retired 20 years ago") induces acute anxiety, embarrassment, and catastrophic behavioral agitation. Conversely, playing along with a falsehood ("The bus already left") is dishonest and deceptive. The standard of nursing care is Validation Therapy: validate the client\'s emotional state and dignity ("You sound dedicated to your work") and use reminiscence to redirect their focus to pleasant remote memories.'
    }
  },
  {
    id: 'alcohol-withdrawal-clinical-features-hits',
    shortCode: 'HITS',
    title: 'Alcohol Withdrawal Syndrome Features (HITS)',
    category: 'psych',
    categoryName: 'Psychiatric Nursing',
    summary: 'The cardinal clinical manifestations of alcohol withdrawal syndrome: Hallucinations, Increased vital signs & insomnia, Tremens (delirium tremens), and Shakes/Sweats/Seizures/Stomach pains.',
    memoryTip: 'Alcohol withdrawal "HITS" hard — H: Hallucinations (visual & tactile formication), I: Increased vital signs (tachycardia, hypertension, fever) & Insomnia, T: Tremens (Delirium Tremens — life-threatening emergency), S: Shakes (tremors), Sweats (diaphoresis), Seizures (tonic-clonic), and Stomach pains (nausea/vomiting).',
    highYield: true,
    tags: ['Substance Use Disorders', 'Alcohol Withdrawal', 'Delirium Tremens', 'Addiction', 'Critical Care', 'Psychiatry'],
    letters: [
      {
        letter: 'H',
        term: 'Hallucinations (Visual & Tactile Formication)',
        description: 'Perceptual disturbances typically developing 12 to 48 hours after alcohol cessation. Most commonly visual (seeing insects, snakes, shadows) or tactile (formication: crawling sensation beneath the skin); occurs while the client is still oriented (alcoholic hallucinosis).',
        highlight: 'Visual & tactile hallucinations (formication); occurs with intact orientation'
      },
      {
        letter: 'I',
        term: 'Increased Vital Signs & Insomnia',
        description: 'Massive sympathetic nervous system rebound due to loss of chronic GABAergic inhibition. Results in autonomic instability: arterial hypertension, tachycardia (HR > 100–120 bpm), tachypnea, low-grade fever, extreme psychomotor agitation, and severe insomnia.',
        highlight: 'Autonomic hyperarousal: tachycardia, severe hypertension, fever & insomnia'
      },
      {
        letter: 'T',
        term: 'Tremens (Delirium Tremens / DTs)',
        description: 'A life-threatening medical emergency developing 48 to 96 hours after the last drink. Characterized by severe global disorientation, fluctuating level of consciousness, vivid paranoid delusions, severe hyperthermia, malignant hypertension, and vascular collapse (5–15% mortality).',
        highlight: 'Delirium Tremens (48–96 hrs): acute disorientation, fever & autonomic storm'
      },
      {
        letter: 'S',
        term: 'Shakes, Sweats, Seizures & Stomach Pains',
        description: 'Onset within 6 to 24 hours: Coarse intention tremors ("the shakes" of hands, tongue, eyelids), profuse diaphoresis (drenching sweats), generalized tonic-clonic withdrawal seizures ("rum fits" at 12–48 hrs), and gastrointestinal distress (anorexia, nausea, vomiting, abdominal cramps).',
        highlight: 'Intention tremors, drenching diaphoresis, tonic-clonic seizures, nausea/vomiting'
      }
    ],
    clinicalContext: 'Chronic heavy alcohol consumption stimulates inhibitory GABA receptors and suppresses excitatory NMDA (glutamate) receptors. Abrupt cessation unmasks a profound imbalance: suppressed GABA and unopposed glutamate hyperstimulation produce intense central nervous system and sympathetic storm. The Clinical Institute Withdrawal Assessment for Alcohol (CIWA-Ar) protocol guides objective scoring. The primary pharmacologic treatment is cross-tolerant Benzodiazepines (chlordiazepoxide, diazepam, or lorazepam; lorazepam is preferred in hepatic impairment because it avoids hepatic oxidative metabolism). Intravenous Thiamine (Vitamin B1) MUST be administered prior to any glucose infusion to prevent irreversible Wernicke-Korsakoff encephalopathy.',
    nclexPearls: [
      'Delirium Tremens vs. Alcoholic Hallucinosis: Alcoholic hallucinosis occurs within 12–48 hours, characterized by vivid hallucinations with a CLEAR, ORIENTED sensorium. Delirium Tremens (DTs) occurs at 48–96 hours, marked by acute DISORIENTATION, altered consciousness, high fever, and extreme autonomic storm.',
      'Thiamine Before Dextrose ("T before D"): Always administer IV/IM Thiamine (Vitamin B1) BEFORE or concurrently with IV dextrose infusions. Giving dextrose alone rapidly consumes residual thiamine cofactors, precipitating acute Wernicke encephalopathy (triad: encephalopathy, oculomotor dysfunction, ataxia).',
      'Benzodiazepines as Gold Standard: Administer scheduled or symptom-triggered benzodiazepines (e.g., lorazepam / Ativan via CIWA-Ar) to prevent seizure progression and DTs. Keep seizure precautions active (suction, padded rails).',
      'Hepatic Impairment Rule: For clients with advanced cirrhosis or liver failure, use LOT benzodiazepines (Lorazepam, Oxazepam, Temazepam) because they undergo simple glucuronidation without hepatic CYP450 oxidation.'
    ],
    practiceQuestion: {
      question: 'A client hospitalized for acute pancreatitis has a history of heavy daily alcohol consumption. Forty-eight hours after admission, the client becomes severely agitated, tremulous, and drenched in sweat, stating: "There are cockroaches crawling all over my arms!" Vital signs are: BP 178/104 mm Hg, HR 124 bpm, RR 26/min, and Temp 100.8°F (38.2°C). Which medication should the nurse anticipate administering immediately?',
      options: [
        'Intravenous lorazepam (Ativan)',
        'Oral haloperidol (Haldol)',
        'Intravenous naloxone (Narcan)',
        'Oral disulfiram (Antabuse)'
      ],
      correctIndex: 0,
      rationale: 'The client is exhibiting classical signs of severe alcohol withdrawal syndrome progressing toward Delirium Tremens (HITS mnemonic: tactile hallucinations/formication, autonomic instability with marked tachycardia and hypertension, diaphoresis, and severe tremors). The immediate drug of choice is a parenteral benzodiazepine, such as intravenous Lorazepam. Benzodiazepines potentiate inhibitory GABA receptors, blunting the dangerous central nervous system hyperarousal, preventing withdrawal seizures, and decreasing the mortality of DTs. Antipsychotics like haloperidol lower the seizure threshold and are contraindicated as monotherapy. Disulfiram is an alcohol aversion agent used in sobriety maintenance, not acute withdrawal.'
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
  {
    id: 'corticosteroid-side-effects-five-ss',
    shortCode: "5 S's",
    title: "Corticosteroid Side Effects (5 S's)",
    category: 'pharmacology',
    categoryName: 'Pharmacology Nursing',
    summary: 'The 5 primary systemic adverse effects of long-term corticosteroid therapy: Sick (immunosuppression), Sad (mood changes/depression), Sex (libido & endocrine shifts), Salt (sodium retention & edema), and Sugar (hyperglycemia).',
    memoryTip: 'Remember the 5 S\'s of Steroids: Sick (infection risk / low immunity), Sad (depression & mood swings), Sex (libido changes & hirsutism), Salt (fluid retention & weight gain), and Sugar (hyperglycemia). NEVER stop steroids abruptly — taper to prevent acute adrenal crisis!',
    highYield: true,
    tags: ['Pharmacology', 'Endocrine', 'Steroids', 'Immunology', 'Adrenal Glands'],
    letters: [
      {
        letter: 'S',
        term: 'Sick (Immunosuppression & Infection Risk)',
        description: 'Glucocorticoids suppress cell-mediated immunity and inhibit cytokine release, blunting the inflammatory response and masking early signs of infection (e.g., low-grade fever, absence of purulence). High susceptibility to opportunistic infections.',
        highlight: 'Blunted immune response & masked infection signs; report even low-grade fever'
      },
      {
        letter: 'S',
        term: 'Sad (Psychiatric & Mood Alterations)',
        description: 'Steroids cross the blood-brain barrier and cause neuropsychiatric disturbances ranging from euphoria, anxiety, and insomnia to severe clinical depression, emotional lability, and "steroid psychosis."',
        highlight: 'Mood swings, severe depression, insomnia, and steroid-induced psychosis'
      },
      {
        letter: 'S',
        term: 'Sex (Endocrine & Libido Changes)',
        description: 'Excess exogenous glucocorticoids suppress the hypothalamic-pituitary-gonadal axis and produce androgenic side effects: alterations in libido, amenorrhea/menstrual irregularities in females, and hirsutism/acne.',
        highlight: 'Libido changes, menstrual irregularities, acne, and hirsutism'
      },
      {
        letter: 'S',
        term: 'Salt (Sodium & Water Retention)',
        description: 'Mineralocorticoid activity causes renal distal tubular reabsorption of sodium and water accompanied by urinary excretion of potassium (hypokalemia). Leads to fluid volume overload, hypertension, peripheral edema, rapid weight gain, and cushingoid features (moon face, buffalo hump, truncal obesity).',
        highlight: 'Sodium & water retention causing edema, hypertension & hypokalemia'
      },
      {
        letter: 'S',
        term: 'Sugar (Hyperglycemia & Steroid-Induced Diabetes)',
        description: 'Glucocorticoids stimulate hepatic gluconeogenesis and induce peripheral insulin resistance, significantly elevating blood glucose levels even in non-diabetic clients.',
        highlight: 'Gluconeogenesis & insulin resistance; frequent blood glucose monitoring'
      }
    ],
    clinicalContext: 'Corticosteroids (prednisone, methylprednisolone, dexamethasone, hydrocortisone) are potent anti-inflammatory and immunosuppressive medications prescribed for autoimmune exacerbations, asthma/COPD, organ transplantation, and severe allergic reactions. Long-term use suppresses the hypothalamic-pituitary-adrenal (HPA) axis, causing adrenal cortex atrophy. Tapering doses gradually is mandatory when discontinuing therapy; abrupt cessation precipitates life-threatening Acute Adrenal Insufficiency (Addisonian crisis: profound hypotension, circulatory collapse, hypoglycemia, hyperkalemia). Additional chronic risks include osteoporosis, peptic ulcer disease (take with food!), and cataracts/glaucoma.',
    nclexPearls: [
      'Never Stop Abruptly: Abrupt cessation leads to Addisonian Crisis (hypotension, shock). The nurse must emphasize gradual tapering under medical guidance.',
      'Infection Alert: Report even slight temperature elevations (e.g., 100°F / 37.8°C) immediately, as steroids suppress the cardinal inflammatory signs of redness and fever.',
      'GI Protection: Corticosteroids irritate gastric mucosa and inhibit protective prostaglandins; always administer with meals or a proton pump inhibitor / H2 blocker to prevent peptic ulceration and GI bleeding.',
      'Dietary Education: Recommend a diet high in calcium, vitamin D, and potassium, but low in sodium and concentrated carbohydrates.'
    ],
    practiceQuestion: {
      question: 'A client with rheumatoid arthritis has been taking oral prednisone 20 mg daily for the past 6 months. The nurse provides comprehensive discharge teaching. Which statement by the client indicates an accurate understanding of the medication?',
      options: [
        '"I can safely stop taking the pills once my joint swelling and stiffness disappear."',
        '"I should weigh myself daily and report sudden weight gain or low-grade fever to my doctor."',
        '"I should take my daily dose on an empty stomach with a large glass of grapefruit juice."',
        '"I will notice my blood sugar dropping, so I should carry hard candies with me."'
      ],
      correctIndex: 1,
      rationale: 'Long-term prednisone causes sodium/water retention (Salt) leading to fluid retention and weight gain, as well as immunosuppression (Sick), which impairs infection defense. Clients must monitor daily weight (reporting gains of > 2–3 lbs/day or 5 lbs/week) and report any signs of infection, including low-grade fever. Abrupt cessation causes adrenal crisis, steroids must be taken with meals to prevent ulcers, and steroids raise (not lower) blood sugar (Sugar).'
    }
  },
  {
    id: 'bronchodilators-sympathomimetics-to-a-sis',
    shortCode: 'TO A SIS',
    title: 'Sympathomimetic Bronchodilators (TO A SIS)',
    category: 'pharmacology',
    categoryName: 'Pharmacology Nursing',
    summary: 'The essential sympathomimetic bronchodilator medications: Terbutaline, Orciprenaline (Metaproterenol), Adrenaline (Epinephrine), Salbutamol (Albuterol), Isoprenaline (Isoproterenol), and Salmeterol.',
    memoryTip: 'Say "TO A SIS" for open airways — T: Terbutaline (rescue bronchodilator & tocolytic), O: Orciprenaline (metaproterenol), A: Adrenaline (epinephrine for anaphylaxis), S: Salbutamol (albuterol — #1 SABA rescue), I: Isoprenaline (isoproterenol), S: Salmeterol (LABA maintenance only, NEVER for acute asthma attacks!).',
    highYield: true,
    tags: ['Pharmacology', 'Respiratory', 'Bronchodilators', 'Asthma', 'COPD', 'Beta Agonists'],
    letters: [
      {
        letter: 'T',
        term: 'Terbutaline',
        description: 'A fast-acting beta-2 adrenergic agonist used to relieve acute bronchospasm in asthma and COPD, and uniquely used in obstetrics as a tocolytic to suppress preterm uterine contractions (hold if maternal HR > 120 bpm).',
        highlight: 'Beta-2 bronchodilator & obstetric tocolytic (hold if maternal HR > 120 bpm)'
      },
      {
        letter: 'O',
        term: 'Orciprenaline (Metaproterenol)',
        description: 'A sympathomimetic beta agonist bronchodilator that relaxes bronchial smooth muscle by stimulating intracellular adenyl cyclase to increase cAMP; available orally and by inhalation.',
        highlight: 'Relaxes bronchial smooth muscle via beta-adrenergic adenyl cyclase activation'
      },
      {
        letter: 'A',
        term: 'Adrenaline (Epinephrine)',
        description: 'A potent non-selective alpha-1, beta-1, and beta-2 adrenergic agonist; the definitive first-line intramuscular treatment for severe anaphylaxis, acute angioedema, and refractory asthma bronchospasm.',
        highlight: 'First-line drug of choice for anaphylaxis and acute airway obstruction (IM 1:1,000)'
      },
      {
        letter: 'S',
        term: 'Salbutamol (Albuterol)',
        description: 'The prototypical short-acting beta-2 agonist (SABA); the gold-standard "rescue inhaler" for acute asthma attacks and exercise-induced bronchospasm. Common side effects: tachycardia, tremors, and palpitations.',
        highlight: 'Gold-standard fast-acting SABA rescue inhaler; causes tremors and tachycardia'
      },
      {
        letter: 'I',
        term: 'Isoprenaline (Isoproterenol)',
        description: 'A potent non-selective beta-1 and beta-2 adrenergic agonist historically utilized for acute bronchospasm and severe bradyarrhythmias or heart block unresponsive to atropine.',
        highlight: 'Non-selective beta agonist with pronounced chronotropic & inotropic cardiac stimulation'
      },
      {
        letter: 'S',
        term: 'Salmeterol',
        description: 'A long-acting beta-2 agonist (LABA) with a slow onset (15–30 min) and prolonged 12-hour duration; strictly indicated for long-term chronic maintenance/prevention of asthma/COPD, NEVER for acute bronchospasm.',
        highlight: 'Long-acting LABA for daily maintenance; NEVER use as an acute rescue inhaler'
      }
    ],
    clinicalContext: 'Sympathomimetic bronchodilators stimulate beta-2 receptors on bronchial smooth muscle cells, activating adenylyl cyclase to convert ATP to cyclic adenosine monophosphate (cAMP), causing smooth muscle relaxation, bronchodilation, and inhibition of mast cell mediator release. On the NCLEX, differentiating Short-Acting Beta-2 Agonists (SABAs: Albuterol/Salbutamol, Terbutaline) from Long-Acting Beta-2 Agonists (LABAs: Salmeterol, Formoterol) is critical. SABAs are rapid-onset rescue medications used for sudden acute wheezing and dyspnea. LABAs are maintenance medications taken on a fixed schedule (often combined with an inhaled corticosteroid like fluticasone/salmeterol [Advair]) to maintain open airways over 12 hours. Using a LABA during an acute asthma attack is dangerous and potentially fatal because of its delayed onset.',
    nclexPearls: [
      'SABA vs. LABA Rule: Salbutamol/Albuterol is for SUDDEN acute attacks ("A for Acute / S for Sudden"). Salmeterol is for SLOW, long-term maintenance ("S for Slow"). Never use Salmeterol as a monotherapy for asthma or during an acute attack!',
      'Bronchodilator First ("B before C"): When administering both an inhaled bronchodilator (albuterol) and an inhaled corticosteroid (fluticasone), inhale the bronchodilator FIRST, wait 5 minutes, then inhale the steroid. This opens the airways and ensures maximum lung penetration of the anti-inflammatory agent.',
      'Expected Beta-2 Side Effects: Palpitations, tachycardia, fine hand tremors, nervousness, and transient hypokalemia are expected pharmacological effects of beta-2 stimulation. Reassure the client that mild tremors are common.',
      'Terbutaline Obstetric Alert: When used off-label as a tocolytic to stop preterm labor, maternal heart rate and blood pressure must be assessed prior to administration; HOLD the dose if maternal heart rate exceeds 120 bpm or if pulmonary edema is suspected.'
    ],
    practiceQuestion: {
      question: 'A client with severe persistent asthma arrives at the urgent care center experiencing acute wheezing, dyspnea, and an oxygen saturation of 88% on room air. The client\'s medication list includes albuterol MDI, salmeterol DPI, and fluticasone MDI. Which medication should the nurse administer immediately?',
      options: [
        'Inhaled salmeterol 50 mcg via dry powder inhaler',
        'Inhaled albuterol 2.5 mg via nebulizer',
        'Inhaled fluticasone 220 mcg via metered-dose inhaler',
        'Oral montelukast 10 mg with a sip of water'
      ],
      correctIndex: 1,
      rationale: 'During an acute asthma exacerbation, the immediate drug of choice is a fast-acting, short-acting beta-2 agonist (SABA) such as Albuterol (Salbutamol). It produces rapid bronchodilation within minutes to relieve life-threatening airway constriction and hypoxemia. Salmeterol is a long-acting beta-2 agonist (LABA) with a slow onset of 15 to 30 minutes and must NEVER be used for acute rescue. Inhaled corticosteroids (fluticasone) and leukotriene receptor antagonists (montelukast) are anti-inflammatory controller drugs that take hours to days to exert therapeutic effects.'
    }
  },
  {
    id: 'vfib-vtach-acls-drugs-elbmp',
    shortCode: 'ELBMP',
    title: 'ACLS Antiarrhythmic & Resuscitation Drugs (Every Little Boy Must Pray)',
    category: 'pharmacology',
    categoryName: 'Pharmacology Nursing',
    summary: 'The core advanced cardiac life support (ACLS) pharmacological agents utilized for pulseless ventricular fibrillation (VF) and pulseless ventricular tachycardia (pVT): Epinephrine, Lidocaine, Bretylium, Magnesium Sulfate, and Procainamide.',
    memoryTip: 'When dealing with lethal ventricular arrhythmias (VFib / VTach), remember: "Every Little Boy Must Pray" — E: Epinephrine (vasopressor given every 3-5 min), L: Lidocaine (Class 1B antiarrhythmic alternative to amiodarone), B: Bretylium (class III antiarrhythmic), M: Magsulfate (drug of choice for Torsades de Pointes), P: Procainamide (Class 1A antiarrhythmic for stable wide-complex tachycardias).',
    highYield: true,
    tags: ['Pharmacology', 'Cardiovascular', 'ACLS', 'Cardiac Arrest', 'Antiarrhythmics', 'Critical Care'],
    letters: [
      {
        letter: 'E',
        term: 'Epinephrine',
        description: 'The primary potent alpha-1 and beta-1/2 vasopressor administered during cardiac arrest resuscitation (1 mg IV/IO push every 3 to 5 minutes). Induces peripheral vasoconstriction to augment aortic diastolic pressure, driving coronary and cerebral perfusion.',
        highlight: '1 mg IV/IO push every 3–5 min; maximizes coronary & cerebral perfusion pressure'
      },
      {
        letter: 'L',
        term: 'Lidocaine',
        description: 'A Class 1B fast sodium channel blocker; an evidence-based ACLS antiarrhythmic alternative to amiodarone for shock-refractory VF/pVT (initial dose: 1.0 to 1.5 mg/kg IV/IO push, followed by 0.5 to 0.75 mg/kg every 5–10 min, max 3 mg/kg).',
        highlight: 'Class 1B antiarrhythmic; alternative to amiodarone for shock-refractory VF/VT'
      },
      {
        letter: 'B',
        term: 'Bretylium',
        description: 'A quaternary ammonium compound with Class III potassium channel blocking and adrenergic neuronal blocking properties; historically utilized in ACLS as a second-line antifibrillatory agent for refractory ventricular fibrillation.',
        highlight: 'Class III antifibrillatory agent historically used for refractory ventricular fibrillation'
      },
      {
        letter: 'M',
        term: 'Magsulfate (Magnesium Sulfate)',
        description: 'A cellular electrolyte and cofactor that stabilizes myocardial excitability; the absolute drug of choice for polymorphic ventricular tachycardia with prolonged QT (Torsades de Pointes) and hypomagnesemic VF (dose: 1 to 2 g IV/IO diluted in 10 mL D5W/NS over 1–2 minutes).',
        highlight: 'First-line drug of choice for Torsades de Pointes & hypomagnesemic VF (1–2 g IV)'
      },
      {
        letter: 'P',
        term: 'Procainamide',
        description: 'A Class 1A fast sodium channel blocker that prolongs refractory periods and slows ventricular conduction velocity; indicated for stable monomorphic wide-complex ventricular tachycardia (infusion rate: 20 to 50 mg/min until arrhythmia is suppressed, hypotension ensues, or QRS widens by > 50%).',
        highlight: 'Class 1A antiarrhythmic for stable wide-complex VT; monitor for QRS widening'
      }
    ],
    clinicalContext: 'Pulseless Ventricular Fibrillation (VF) and pulseless Ventricular Tachycardia (pVT) are shockable cardiac arrest rhythms requiring immediate high-quality cardiopulmonary resuscitation (CPR) and rapid defibrillation. According to ACLS guidelines: 1. Deliver shock (120–200 J biphasic); 2. Immediately resume CPR for 2 minutes; 3. Establish IV/IO access; 4. Administer Epinephrine 1 mg IV/IO after the 2nd shock and repeat every 3–5 minutes; 5. Administer antiarrhythmic therapy (Amiodarone 300 mg bolus, or Lidocaine 1–1.5 mg/kg) after the 3rd shock for shock-refractory VF/pVT. If polymorphic VT (Torsades de Pointes) is present, Magnesium Sulfate 1 to 2 g IV/IO push is the mandatory treatment. Always search for and treat reversible underlying causes (the H\'s and T\'s: Hypovolemia, Hypoxia, Hydrogen ion/acidosis, Hypo/Hyperkalemia, Hypothermia, Tension pneumothorax, Tamponade, Toxins, Thrombosis pulmonary/coronary).',
    nclexPearls: [
      'Immediate CPR After Shock: NEVER stop to check a pulse or rhythm immediately after delivering a defibrillation shock! Always resume chest compressions immediately for 2 continuous minutes before re-checking rhythm.',
      'Lidocaine Toxicity Signs (SAMS): Watch for Slurred speech, Altered mental status/paresthesias, Muscle twitching, and Seizures. Narrow therapeutic range (1.5 to 5 mcg/mL).',
      'Torsades de Pointes Treatment: Polymorphic ventricular tachycardia with twisting of points is triggered by hypomagnesemia and prolonged QT intervals. Defibrillation and IV Magnesium Sulfate (1–2 g IV push) are lifesaving.',
      'Push-Dose Epinephrine: During cardiac arrest, Epinephrine 1 mg (1:10,000 solution) is given IV/IO followed by a 20 mL normal saline flush and limb elevation to rapidly circulate the drug.'
    ],
    practiceQuestion: {
      question: 'A client in the intensive care unit suddenly collapses. The cardiac telemetry monitor displays chaotic, irregular deflections with no discernible P waves, QRS complexes, or T waves. Palpation confirms the absence of a carotid pulse. After calling for the code team, delivering an unsynchronized defibrillation shock, and performing high-quality CPR for 2 minutes, the rhythm remains coarse ventricular fibrillation. Which pharmacological agent should the nurse prepare to administer next?',
      options: [
        'Atropine 1 mg rapid IV push',
        'Epinephrine 1 mg (1:10,000) IV push',
        'Adenosine 6 mg rapid IV push with immediate saline flush',
        'Dopamine 5 mcg/kg/min continuous IV infusion'
      ],
      correctIndex: 1,
      rationale: 'In pulseless ventricular fibrillation (VF) or pulseless ventricular tachycardia (pVT), the standard ACLS protocol dictates immediate defibrillation followed by CPR. If the lethal rhythm persists after the second shock, Epinephrine 1 mg (1:10,000 solution) IV/IO push is administered and repeated every 3 to 5 minutes to promote peripheral vasoconstriction and restore critical coronary and cerebral perfusion. Atropine is no longer used in cardiac arrest; Adenosine is indicated for narrow-complex supraventricular tachycardia (SVT); and Dopamine is an inotropic infusion for cardiogenic shock/bradycardia, not pulseless arrest.'
    }
  },
  {
    id: 'immunoglobulins-classes-gamed',
    shortCode: 'GAMED',
    title: 'The 5 Immunoglobulin Classes (GAMED)',
    category: 'pharmacology',
    categoryName: 'Pharmacology Nursing',
    summary: 'The 5 structural classes of antibodies (immunoglobulins) essential for adaptive humoral immunity, passive immunization, and targeted biologic pharmacotherapy: IgG, IgA, IgM, IgE, and IgD.',
    memoryTip: 'You\'ve got the immune system "GAMED" — G: IgG (Greatest quantity, Gestation — crosses placenta), A: IgA (Aquatic / secretions — tears, saliva, breast milk), M: IgM (Macro / Massive pentamer — first to respond in acute infection), E: IgE (Emergency / Environment — allergies, anaphylaxis, and parasites), D: IgD (Differentiation of B cells).',
    highYield: true,
    tags: ['Pharmacology', 'Immunology', 'Immunoglobulins', 'Infection Control', 'Pediatrics', 'Biologics'],
    letters: [
      {
        letter: 'G',
        term: 'IgG (Immunoglobulin G)',
        description: 'The most abundant circulating antibody (approx. 75–80% of total plasma immunoglobulins). The ONLY antibody capable of crossing the placenta to confer passive maternal immunity to the developing fetus; provides secondary long-term protection following vaccination or recovery from infection. Utilized pharmacologically as Intravenous Immunoglobulin (IVIG).',
        highlight: 'Most abundant (80%); only antibody that crosses placenta; secondary immune response'
      },
      {
        letter: 'A',
        term: 'IgA (Immunoglobulin A)',
        description: 'The secretory antibody found in body secretions (saliva, tears, sweat, respiratory mucus, gastrointestinal fluids, and colostrum/breast milk). Forms a protective barrier on mucosal surfaces against microbial colonization and pathogen entry.',
        highlight: 'Mucosal immunity in secretions & breast milk/colostrum; protects infant gut'
      },
      {
        letter: 'M',
        term: 'IgM (Immunoglobulin M)',
        description: 'The largest immunoglobulin molecule (a high-molecular-weight pentamer with 10 antigen-binding sites). The FIRST antibody synthesized during the primary immune response to acute infection; elevated IgM titers indicate active, current, or recent infection.',
        highlight: 'Largest antibody (pentamer); first to appear during acute primary infection'
      },
      {
        letter: 'E',
        term: 'IgE (Immunoglobulin E)',
        description: 'Binds with high affinity to Fc receptors on tissue mast cells and circulating basophils. Cross-linking by allergens triggers mast cell degranulation, releasing histamine and leukotrienes in Type I hypersensitivity (allergic rhinitis, asthma, systemic anaphylaxis); also defends against helminthic parasitic worm infestations. Targeted by monoclonal antibodies (e.g., Omalizumab).',
        highlight: 'Mediates Type I allergic hypersensitivity, anaphylaxis & parasitic worm defense'
      },
      {
        letter: 'D',
        term: 'IgD (Immunoglobulin D)',
        description: 'Present in minute quantities in serum (< 1%); predominantly expressed on the cell surface of naive, mature B lymphocytes alongside IgM, functioning as an antigen receptor essential for B-cell differentiation, activation, and maturation.',
        highlight: 'B-cell surface antigen receptor directing lymphocyte differentiation & activation'
      }
    ],
    clinicalContext: 'Immunoglobulins are specialized glycoprotein molecules synthesized by differentiated B-lymphocytes (plasma cells) that recognize and neutralize specific foreign antigens, bacteria, viruses, and toxins. In Pharmacology and Clinical Nursing, antibodies are integral to passive immunotherapy and pharmacotherapy: 1. Intravenous Immunoglobulin (IVIG - purified human IgG) is administered for idiopathic thrombocytopenic purpura (ITP), Kawasaki disease, Guillain-Barré syndrome, and primary immunodeficiencies; 2. Specific hyperimmune globulins (RhoGAM / Rho(D) immune globulin, Hepatitis B immune globulin [HBIG], Rabies immune globulin [RIG], Tetanus immune globulin [TIG]) provide immediate post-exposure passive immunity; 3. Monoclonal antibody therapeutics (biologics like Omalizumab [anti-IgE], Infliximab, Rituximab) selectively neutralize targeted immunoglobulins and inflammatory cytokines. Nurses must monitor for anaphylactic reactions, aseptic meningitis, and fluid overload during IVIG infusions.',
    nclexPearls: [
      'Placental Transfer: IgG is the ONLY antibody that crosses the placenta, providing passive immunity to the newborn for the first 3 to 6 months of life. Maternal IgG levels gradually decline, prompting infant vaccine schedules at 2 months.',
      'Colostrum & Breastfeeding Protection: Colostrum and mature breast milk are exceptionally rich in secretory IgA, coating the newborn\'s immature gastrointestinal tract to protect against enteric pathogens.',
      'Active vs. Recent Infection Serology: High IgM titers indicate acute, primary, recent infection; high IgG titers indicate past exposure, established chronic recovery, or successful vaccination.',
      'IVIG Infusion Precautions: Infuse slowly at baseline (0.5 to 1 mg/kg/min) and gradually titrate upwards; pre-medicate with acetaminophen and diphenhydramine to prevent infusion reactions (flushing, chills, back pain, headache). Have emergency epinephrine at bedside!'
    ],
    practiceQuestion: {
      question: 'A postpartum nurse provides lactation counseling to a primiparous mother who is hesitant to breastfeed. The nurse explains the immunologic advantages of colostrum. Which immunoglobulin class is predominantly delivered through colostrum and breast milk to provide mucosal immunity to the newborn\'s gastrointestinal tract?',
      options: [
        'Immunoglobulin G (IgG)',
        'Immunoglobulin A (IgA)',
        'Immunoglobulin M (IgM)',
        'Immunoglobulin E (IgE)'
      ],
      correctIndex: 1,
      rationale: 'Secretory Immunoglobulin A (IgA) is present in high concentrations in colostrum and mature human breast milk. It passes into the infant\'s digestive tract, coating mucosal linings to physically prevent the adherence, invasion, and colonization of ingested viral and bacterial pathogens. IgG crosses the placenta during pregnancy but is not the primary secretory antibody in breast milk. IgM is the first responder to acute systemic infections, and IgE mediates allergic and parasitic responses.'
    }
  },
  {
    id: 'chloroquine-non-malarial-uses-red-lip',
    shortCode: 'RED LIP',
    title: 'Uses of Chloroquine Other Than Malaria (RED LIP)',
    category: 'pharmacology',
    categoryName: 'Pharmacology Nursing',
    summary: 'The primary non-malarial rheumatologic, infectious, and dermatologic indications for chloroquine: Rheumatoid arthritis, Extra-intestinal amoebiasis, Discoid lupus erythematosus, Lepra reactions, Infectious mononucleosis, and Photogenic reactions.',
    memoryTip: 'Remember Chloroquine\'s diverse uses with "RED LIP" — R: Rheumatoid arthritis, E: Extra-intestinal amoebiasis (amoebic liver abscess), D: Discoid lupus erythematosus (SLE skin lesions), L: Lepra reactions (type 2 erythema nodosum leprosum), I: Infectious mononucleosis, P: Photogenic reactions (solar urticaria, porphyria). Critical NCLEX alert: Regular eye exams are mandatory to screen for irreversible retinal toxicity (Bull\'s eye maculopathy)!',
    highYield: true,
    tags: ['Pharmacology', 'Immunology', 'Rheumatology', 'Antiprotozoal', 'Dermatology'],
    letters: [
      {
        letter: 'R',
        term: 'Rheumatoid Arthritis (RA)',
        description: 'Functions as a disease-modifying antirheumatic drug (DMARD) by impairing antigen presentation, inhibiting lysosomal enzymes, and blunting pro-inflammatory cytokine release (TNF-alpha, IL-1) to retard joint erosion and cartilage degradation.',
        highlight: 'DMARD action blunts lysosomal enzymes and joint destruction'
      },
      {
        letter: 'E',
        term: 'Extra-Intestinal Amoebiasis (Amoebic Liver Abscess)',
        description: 'Because chloroquine achieves exceptionally high tissue concentrations in the hepatic parenchyma (several hundred-fold higher than in plasma), it is highly effective against Entamoeba histolytica trophozoites causing amoebic liver abscesses (combined with a luminal amoebicide).',
        highlight: 'Concentrates 200–500x in liver tissue; treats Entamoeba histolytica liver abscess'
      },
      {
        letter: 'D',
        term: 'Discoid Lupus Erythematosus (DLE & SLE)',
        description: 'First-line immunomodulatory therapy for cutaneous discoid lupus and systemic lupus erythematosus (SLE). Suppresses toll-like receptor signaling, reduces skin lesions, prevents systemic flares, and decreases vascular thrombotic complications.',
        highlight: 'First-line therapy for cutaneous lupus lesions and preventing SLE flares'
      },
      {
        letter: 'L',
        term: 'Lepra Reaction (Erythema Nodosum Leprosum)',
        description: 'Provides potent anti-inflammatory and immunosuppressive action to suppress painful inflammatory subcutaneous nodules, neuritis, and immune-complex deposition characteristic of Type 2 lepra reactions in lepromatous leprosy.',
        highlight: 'Suppresses painful inflammatory subcutaneous nodules in Type 2 lepra reactions'
      },
      {
        letter: 'I',
        term: 'Infectious Mononucleosis',
        description: 'Historically and off-label utilized as an immunomodulatory agent to alleviate prolonged, debilitating constitutional symptoms, chronic fatigue, and persistent lymphadenopathy associated with severe Epstein-Barr virus (EBV) infection.',
        highlight: 'Immunomodulatory adjuvant used for chronic constitutional post-viral fatigue'
      },
      {
        letter: 'P',
        term: 'Photogenic Reactions (Photosensitivity Disorders)',
        description: 'Effectively shields cutaneous tissues against ultraviolet (UV) light-induced skin eruptions in polymorphous light eruption (PMLE), solar urticaria, and porphyria cutanea tarda (PCT) by stabilizing lysosomal membranes in dermal keratinocytes.',
        highlight: 'Protects against UV-induced dermatitis, polymorphous light eruption & porphyria'
      }
    ],
    clinicalContext: 'Chloroquine and its closely related derivative Hydroxychloroquine (Plaquenil) are 4-aminoquinoline compounds with diverse antiprotozoal, anti-inflammatory, and immunomodulatory mechanisms. Beyond malaria chemoprophylaxis and treatment, their greatest clinical utility is in autoimmune connective tissue disorders (rheumatoid arthritis, systemic and discoid lupus) and hepatic amoebiasis. On the NCLEX, the hallmark nursing priority is Ocular Toxicity. Chloroquine concentrates in the retinal pigment epithelium, causing dose-dependent, irreversible retinopathy ("Bull\'s eye" maculopathy) characterized by paracentral scotomas, blurred vision, and permanent visual field defects. Baseline and regular annual ophthalmologic examinations are mandatory. Additional risks include QT prolongation (risk of Torsades de Pointes), cardiomyopathy, hypoglycemia, and hemolytic anemia in G6PD-deficient clients.',
    nclexPearls: [
      'Retinal Toxicity ("Bull\'s Eye" Maculopathy): The most serious adverse effect of long-term chloroquine/hydroxychloroquine therapy is irreversible retinal damage. Instruct clients to undergo a baseline ophthalmologic exam within the first year of therapy, followed by annual comprehensive visual field testing and fundoscopy. Clients must immediately report any blurred vision, difficulty reading, or halos around lights.',
      'GI Administration: To minimize gastrointestinal distress (nausea, vomiting, abdominal cramps), instruct the client to take the medication with food or a full glass of milk.',
      'Cardiac & QT Prolongation: Chloroquine blocks myocardial potassium channels, prolonging the QT interval. Concurrent use with other QT-prolonging drugs (e.g., macrolides, fluoroquinolones, antipsychotics) is hazardous and increases the risk of polymorphic ventricular tachycardia.',
      'Pregnancy & Lupus: Unlike many cytotoxic immunosuppressants (such as methotrexate), hydroxychloroquine is generally CONTINUED during pregnancy in clients with SLE, as stopping it dramatically increases the risk of life-threatening disease flares.'
    ],
    practiceQuestion: {
      question: 'A 34-year-old female client with systemic lupus erythematosus is prescribed daily oral hydroxychloroquine to manage joint pain and cutaneous discoid lesions. Which instruction is most critical for the nurse to include in the discharge education plan?',
      options: [
        '"Avoid taking the medication with meals to maximize gastrointestinal absorption."',
        '"Schedule a comprehensive ophthalmologic examination at baseline and at least annually."',
        '"Discontinue the medication immediately if you develop mild dark yellow urine discoloration."',
        '"Take an extra dose immediately if you plan to spend time outdoors in the direct sunlight."'
      ],
      correctIndex: 1,
      rationale: 'Hydroxychloroquine (Plaquenil) and chloroquine can cause irreversible retinal toxicity and maculopathy ("Bull\'s eye" lesion), potentially leading to permanent blindness. The American Academy of Ophthalmology and clinical practice guidelines mandate a baseline retinal exam followed by annual comprehensive ophthalmologic evaluations (including automated visual field testing and spectral-domain OCT) for early detection. The drug should be taken WITH food to decrease GI upset, and sun protection (sunscreen, protective clothing) is required rather than taking extra doses.'
    }
  },
  {
    id: 'krebs-cycle-intermediates-ciassfmo',
    shortCode: 'Krebs (CIASSFMO)',
    title: 'The Krebs Cycle Intermediates (Citric Acid Cycle)',
    category: 'pharmacology',
    categoryName: 'Pharmacology Nursing',
    summary: 'The sequential 8 intermediate metabolites of the Krebs citric acid cycle: Citrate, Isocitrate, Alpha-Ketoglutarate, Succinyl-CoA, Succinate, Fumarate, Malate, and Oxaloacetate.',
    memoryTip: '"Can I Actually See Some Filipina Mothers" — C: Citrate, I: Isocitrate, A: Alpha-Ketoglutarate, S: Succinyl-CoA, S: Succinate, F: Fumarate, M: Malate, O: Oxaloacetate. Critical NCLEX pharmacology link: Thiamine (Vitamin B1) is a vital coenzyme for Alpha-Ketoglutarate Dehydrogenase; thiamine deficiency stalls the Krebs cycle, causing lactic acidosis and Wernicke-Korsakoff encephalopathy!',
    highYield: true,
    tags: ['Pharmacology', 'Biochemistry', 'Cellular Respiration', 'Metabolism', 'Toxicology', 'Critical Care'],
    letters: [
      {
        letter: 'C',
        term: 'Citrate (Citric Acid)',
        description: 'The initial 6-carbon tricarboxylic acid formed when oxaloacetate (4 carbons) condenses with acetyl-CoA (2 carbons) catalyzed by citrate synthase. High citrate levels allosterically inhibit phosphofructokinase-1 (PFK-1), slowing glycolysis.',
        highlight: 'Condensation product of oxaloacetate & acetyl-CoA; inhibits PFK-1 to regulate glycolysis'
      },
      {
        letter: 'I',
        term: 'Isocitrate',
        description: 'Formed via isomerization of citrate by the iron-sulfur enzyme aconitase. Isocitrate dehydrogenase then catalyzes the rate-limiting, irreversible oxidative decarboxylation of isocitrate to alpha-ketoglutarate, yielding the cycle\'s first NADH and CO2.',
        highlight: 'Substrate for rate-limiting isocitrate dehydrogenase; generates first NADH and CO2'
      },
      {
        letter: 'A',
        term: 'Alpha-Ketoglutarate',
        description: 'A crucial 5-carbon keto-acid converted into succinyl-CoA by the alpha-ketoglutarate dehydrogenase multi-enzyme complex. Requires 5 essential cofactors: Thiamine pyrophosphate (TPP / Vitamin B1), Lipoic acid, CoA, FAD, and NAD+.',
        highlight: 'Requires Thiamine (B1); thiamine deficiency halts the cycle and causes lactic acidosis'
      },
      {
        letter: 'S',
        term: 'Succinyl-CoA',
        description: 'A high-energy thioester intermediate. Converted to succinate by succinyl-CoA synthetase via substrate-level phosphorylation, directly generating one molecule of GTP (convertible to ATP). Also utilized in heme synthesis.',
        highlight: 'High-energy thioester driving substrate-level phosphorylation to generate GTP/ATP'
      },
      {
        letter: 'S',
        term: 'Succinate',
        description: 'A 4-carbon dicarboxylic acid oxidized to fumarate by succinate dehydrogenase (Complex II of the mitochondrial electron transport chain), directly reducing FAD to FADH2.',
        highlight: 'Direct link to electron transport chain (Complex II); reduces FAD to FADH2'
      },
      {
        letter: 'F',
        term: 'Fumarate',
        description: 'An unsaturated trans-dicarboxylic acid formed from succinate. Fumarate is subsequently hydrated by the stereospecific enzyme fumarase to produce L-malate. Also generated as a byproduct of the urea cycle.',
        highlight: 'Hydrated by fumarase to form malate; bridges Krebs cycle with the urea cycle'
      },
      {
        letter: 'M',
        term: 'Malate',
        description: 'The 4-carbon hydroxy dicarboxylic acid intermediate in the cycle. Malate can also cross the inner mitochondrial membrane via the malate-aspartate shuttle to transport reducing equivalents (electrons from cytosolic NADH) into mitochondria.',
        highlight: 'Participates in malate-aspartate shuttle to transfer cytosolic NADH into mitochondria'
      },
      {
        letter: 'O',
        term: 'Oxaloacetate',
        description: 'The final 4-carbon keto-acid regenerated by malate dehydrogenase, producing the third NADH of the cycle. Oxaloacetate condenses with a new acetyl-CoA molecule to restart the cycle, or exits to gluconeogenesis.',
        highlight: 'Regenerated to restart the cycle with Acetyl-CoA; substrate for gluconeogenesis'
      }
    ],
    clinicalContext: 'The Krebs cycle (Citric Acid Cycle / Tricarboxylic Acid Cycle) operates within the mitochondrial matrix and represents the final common oxidative pathway for carbohydrates, amino acids, and fatty acids. Each turn of the cycle utilizing one acetyl-CoA generates 3 NADH, 1 FADH2, 1 GTP (ATP), and 2 CO2. In Pharmacology and Critical Care Nursing, multiple medications, metabolic poisons, and nutritional deficiencies intersect directly with the Krebs cycle: 1. Thiamine (Vitamin B1) Deficiency: Alpha-ketoglutarate dehydrogenase requires thiamine pyrophosphate (TPP). Without thiamine, pyruvate and alpha-ketoglutarate accumulate, driving anaerobic conversion to lactic acid (lactic acidosis, beriberi, and Wernicke-Korsakoff syndrome). 2. Cyanide, Carbon Monoxide, and Metformin: Cyanide and CO inhibit electron transport chain complexes, preventing re-oxidation of NADH/FADH2 and stalling the Krebs cycle. Metformin inhibits Complex I; in renal dysfunction or tissue hypoperfusion, severe lactic acidosis occurs.',
    nclexPearls: [
      'Thiamine Before Glucose Rule: In malnourished clients or chronic alcohol use disorder, ALWAYS infuse intravenous Thiamine (Vitamin B1) BEFORE or concurrently with IV dextrose. Providing glucose without thiamine triggers massive pyruvate influx, consumes residual thiamine cofactors for alpha-ketoglutarate dehydrogenase, and precipitates acute, irreversible Wernicke encephalopathy.',
      'Metformin & Lactic Acidosis: Metformin reduces hepatic gluconeogenesis and inhibits mitochondrial oxidative respiration. If renal clearance fails (e.g., contrast dye-induced nephropathy or dehydration), lactate accumulates. Always HOLD metformin for 48 hours following IV iodinated contrast procedures.',
      'Cyanide Poisoning Antidotes: Cyanide halts mitochondrial oxidative phosphorylation by binding ferric iron (Fe3+) in cytochrome c oxidase. Treatment: Hydroxocobalamin (Cyanokit - binds cyanide to form non-toxic cyanocobalamin excreted in urine) or Sodium Thiosulfate + Sodium Nitrite.'
    ],
    practiceQuestion: {
      question: 'A malnourished client with a history of alcohol use disorder is admitted to the emergency department in a state of delirium. Blood glucose is 42 mg/dL. The physician orders 50 mL of 50% Dextrose (D50W) and 100 mg of Thiamine IV push. What is the nurse\'s primary action regarding the administration sequence?',
      options: [
        'Administer D50W immediately, wait 30 minutes, then infuse the thiamine.',
        'Administer the IV Thiamine first or concurrently with the D50W.',
        'Withhold both medications until a complete metabolic panel confirms serum thiamine levels.',
        'Infuse normal saline only, as thiamine is contraindicated during acute hypoglycemia.'
      ],
      correctIndex: 1,
      rationale: 'In chronic alcoholism and severe malnutrition, intracellular thiamine stores are profoundly depleted. Thiamine (Vitamin B1) is an indispensable cofactor for pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase in the Krebs cycle. Administering an intravenous glucose bolus without thiamine rapidly exhausts the remaining trace amounts of thiamine, paralyzing mitochondrial aerobic metabolism and precipitating acute, fatal Wernicke encephalopathy (triad: encephalopathy, oculomotor dysfunction, ataxia). Thiamine must always precede or accompany glucose infusion.'
    }
  },
  {
    id: 'syrup-of-ipecac-contraindications-four-cs',
    shortCode: "4 C's (Ipecac)",
    title: "Syrup of Ipecac Contraindications (4 C's)",
    category: 'pharmacology',
    categoryName: 'Pharmacology Nursing',
    summary: 'The 4 absolute clinical contraindications to inducing emesis with Syrup of Ipecac: Comatose, Convulsing, Corrosives, and hydroCarbons.',
    memoryTip: 'Never induce vomiting if you see the "4 C\'s" — C: Comatose (unconscious or decreased LOC — massive aspiration risk), C: Convulsing (actively seizing — airway obstruction), C: Corrosive (acids and alkalis — burns the esophagus twice!), and hydroCarbon (gasoline, kerosene, lighter fluid — severe necrotizing chemical pneumonitis). Priority NCLEX rule: Syrup of Ipecac is NO LONGER recommended for home poisoning management; always call Poison Control (1-800-222-1222) first!',
    highYield: true,
    tags: ['Pharmacology', 'Toxicology', 'Pediatrics', 'Emergency Care', 'Poisoning', 'Patient Safety'],
    letters: [
      {
        letter: 'C',
        term: 'Comatose (Decreased Level of Consciousness)',
        description: 'Clients who are stuporous, obtunded, comatose, or lacking intact protective airway reflexes (depressed gag and cough reflexes) must NEVER receive an emetic. Inducing vomiting inevitably results in catastrophic pulmonary aspiration of gastric acid, leading to asphyxiation and fatal chemical pneumonitis.',
        highlight: 'Loss of airway protective reflexes leads to massive pulmonary aspiration & asphyxia'
      },
      {
        letter: 'C',
        term: 'Convulsing (Active Seizures / Seizure-Inducing Ingestion)',
        description: 'Inducing emesis in an actively convulsing or seizing client creates immediate airway obstruction, laryngospasm, and violent aspiration. Furthermore, emetics are contraindicated following ingestions that precipitate rapid-onset seizures (e.g., tricyclic antidepressants, strychnine, camphor).',
        highlight: 'Risk of immediate intractable aspiration, laryngospasm, and vocal cord trauma'
      },
      {
        letter: 'C',
        term: 'Corrosives (Strong Acids & Alkalis / Caustics)',
        description: 'Ingestion of strong acidic or alkaline agents (drain cleaners, oven cleaners, lye, battery acid, toilet bowl cleaners). Caustics inflict severe liquefactive or coagulative necrosis. Vomiting forces the caustic agent back up through the esophagus and hypopharynx, burning tissues a second time and causing perforation and mediastinitis.',
        highlight: 'Burns the esophagus and pharynx twice; induces perforation, stricture & mediastinitis'
      },
      {
        letter: 'C',
        term: 'hydroCarbons (Petroleum Distillates & Volatile Solvents)',
        description: 'Volatile petroleum distillates (gasoline, kerosene, lighter fluid, mineral spirits, turpentine, furniture polish, paint thinners) possess extremely low viscosity and surface tension. Vomiting causes immediate vaporization and micro-aspiration into bronchial tree, triggering severe necrotizing chemical pneumonitis and ARDS.',
        highlight: 'Low surface tension causes pulmonary aspiration, necrotizing pneumonitis & ARDS'
      }
    ],
    clinicalContext: 'Syrup of Ipecac was historically utilized as an over-the-counter emetic to induce gastric decontamination following toxic ingestions. It acts through local gastric mucosal irritation and central stimulation of the chemoreceptor trigger zone (CTZ) in the area postrema of the medulla. However, extensive clinical trials demonstrated that Ipecac does not improve patient outcomes, delays the administration of activated charcoal and specific antidotes, causes persistent intractable vomiting, and carries extreme risks of aspiration. Consequently, the American Academy of Pediatrics (AAP) and the American Association of Poison Control Centers (AAPCC) strongly advise that Syrup of Ipecac should NOT be kept in homes and is NO LONGER used in routine toxicology management. The nurse\'s primary action in suspected poisoning is to assess the airway, identify the substance, and immediately call Poison Control (1-800-222-1222).',
    nclexPearls: [
      'Call Poison Control First: In any pediatric or adult poisoning emergency, the priority nursing instruction to parents is to call the national Poison Control Center (1-800-222-1222) immediately. Do NOT induce vomiting, do NOT give milk or raw eggs, and do NOT give Syrup of Ipecac!',
      'Corrosives Management: If a child swallows a caustic agent (such as liquid drain cleaner), never give an acid to neutralize a base (exothermic reaction causes thermal tissue destruction). Never induce vomiting. Maintain strict NPO, prepare for immediate emergency upper endoscopy, and secure the airway.',
      'Hydrocarbon Ingestion: If gasoline or kerosene is ingested, the priority assessment is respiratory status (coughing, tachypnea, wheezing, intercostal retractions, cyanosis). Even tiny aspirated droplets cause necrotizing chemical pneumonitis and lipoid pneumonia.',
      'Discard Old Ipecac: Instruct families to safely discard Syrup of Ipecac from home medicine cabinets.'
    ],
    practiceQuestion: {
      question: 'A frantic mother calls the pediatric telephone triage clinic stating that her 3-year-old child just drank approximately 60 mL of liquid drain cleaner containing concentrated sodium hydroxide (lye). The mother found an expired bottle of Syrup of Ipecac in the medicine cabinet and asks if she should give it to make the child vomit. What is the nurse\'s most critical instruction?',
      options: [
        '"Administer 15 mL of the Syrup of Ipecac immediately with a large glass of warm tap water."',
        '"Do not administer the ipecac or induce vomiting; call 911 immediately and keep the child sitting upright."',
        '"Give the child 8 ounces of orange juice or vinegar to neutralize the alkaline chemical."',
        '"Encourage the child to drink raw egg whites and whole milk to coat the stomach lining."'
      ],
      correctIndex: 1,
      rationale: 'Liquid drain cleaner is a potent corrosive alkaline caustic (4 C\'s mnemonic). Inducing vomiting with Syrup of Ipecac is strictly contraindicated because vomiting forces the caustic chemical back through the esophagus, larynx, and hypopharynx, burning and melting the mucosal tissues a second time ("double-burn" injury) and exponentially increasing the risk of esophageal rupture, tracheal perforation, and mediastinitis. Furthermore, attempting chemical neutralization (e.g., vinegar or acidic juices) creates an exothermic chemical reaction that releases intense heat, causing severe internal thermal burns. The nurse must instruct the parent to call 911 immediately, maintain NPO, keep the child upright, and seek emergency airway assessment.'
    }
  },
  {
    id: 'activated-charcoal-contraindications-chemical-camp',
    shortCode: 'CHEMICAL CamP',
    title: 'Activated Charcoal Contraindications & Limitations (CHEMICAL CamP)',
    category: 'pharmacology',
    categoryName: 'Pharmacology Nursing',
    summary: 'The toxic substances and clinical scenarios where activated charcoal is either completely ineffective or strictly contraindicated: Cyanide, Hydrocarbons, Ethanol, Metals, Iron, Caustics, Airway unprotected, Lithium, Camphor, and Potassium.',
    memoryTip: 'Activated Charcoal does NOT bind to "CHEMICAL CamP" — C: Cyanide (needs hydroxocobalamin), H: Hydrocarbons (aspiration pneumonitis risk), E: Ethanol / alcohols (methanol, ethylene glycol), M: Metals (lead, mercury, arsenic), I: Iron (needs deferoxamine), C: Caustics / corrosives (acids & alkalis — endoscopy obstruction), A: Airway unprotected (intubate first to prevent fatal pulmonary aspiration!), L: Lithium (needs hemodialysis / WBI), CamP: Camphor, P: Potassium. Remember: Small, polar, inorganic ions do not adsorb to charcoal!',
    highYield: true,
    tags: ['Pharmacology', 'Toxicology', 'Emergency Nursing', 'Critical Care', 'Poisoning', 'Antidotes'],
    letters: [
      {
        letter: 'C',
        term: 'Cyanide',
        description: 'Cyanide is a small, rapidly absorbed, highly lethal cellular asphyxiant that does not bind to activated charcoal. Administering charcoal delays definitive antidote therapy: Hydroxocobalamin (Cyanokit) or Sodium Nitrite / Sodium Thiosulfate.',
        highlight: 'Does not bind charcoal; requires immediate Hydroxocobalamin (Cyanokit)'
      },
      {
        letter: 'H',
        term: 'Hydrocarbons (Petroleum Distillates)',
        description: 'Volatile hydrocarbons (kerosene, gasoline, lighter fluid, paint thinners) are poorly adsorbed by charcoal. More importantly, charcoal induces vomiting, drastically elevating the risk of pulmonary aspiration and fatal chemical pneumonitis.',
        highlight: 'Poor adsorption; high risk of charcoal-induced vomiting & fatal chemical pneumonitis'
      },
      {
        letter: 'E',
        term: 'Ethanol & Alcohols (Methanol, Ethylene Glycol, Isopropanol)',
        description: 'Alcohols are small, highly polar, low-molecular-weight molecules with rapid gastric and intestinal absorption. They lack the hydrophobic and van der Waals properties necessary to adsorb onto the carbon lattice of activated charcoal.',
        highlight: 'Small, polar molecules that do not adsorb; require Fomepizole or hemodialysis'
      },
      {
        letter: 'M',
        term: 'Metals (Heavy Metals: Lead, Mercury, Arsenic)',
        description: 'Heavy metals exist in ionic, highly charged elemental or salt states that fail to bind effectively to the porous carbon surface of activated charcoal. Treatment relies on systemic chelating agents (e.g., Dimercaprol, Succimer/DMSA, Calcium EDTA).',
        highlight: 'Charged inorganic ions fail to bind; manage with specific chelating agents'
      },
      {
        letter: 'I',
        term: 'Iron Salts (Ferrous Sulfate / Gluconate)',
        description: 'Elemental iron does not adsorb to activated charcoal. Iron overdose produces severe hemorrhagic gastroenteritis, metabolic acidosis, and hepatic necrosis. Definitively treated with the specific intravenous iron chelator Deferoxamine (Desferal).',
        highlight: 'Zero binding to charcoal; treat with the specific IV chelator Deferoxamine'
      },
      {
        letter: 'C',
        term: 'Caustics / Corrosives (Strong Acids & Alkalis)',
        description: 'Caustic agents cause immediate tissue burns and mucosal ulceration. Charcoal does not bind caustics, increases vomiting risk (re-burning esophageal tissue), and blackens the mucosal surface, severely obscuring emergency diagnostic endoscopy.',
        highlight: 'Ineffective; induces vomiting and blackens mucosa, blinding diagnostic endoscopy'
      },
      {
        letter: 'A',
        term: 'Airway Unprotected (Depressed Mental Status)',
        description: 'Clients with depressed consciousness, somnolence, coma, or absent gag reflexes must NEVER receive oral activated charcoal without prior endotracheal intubation. Charcoal aspiration induces bronchiolitis obliterans, severe hypoxia, and asphyxiation.',
        highlight: 'Absolute contraindication unless patient is intubated with a cuffed ET tube'
      },
      {
        letter: 'L',
        term: 'Lithium',
        description: 'Lithium is a monovalent alkali metal cation (Li+) that does not bind to activated charcoal. Acute or chronic toxicity (tremors, ataxia, seizures) is managed with aggressive IV 0.9% normal saline hydration, whole bowel irrigation, or emergent hemodialysis.',
        highlight: 'Monovalent cation with zero charcoal binding; treated with hemodialysis'
      },
      {
        letter: 'C',
        term: 'Camphor',
        description: 'Rapidly absorbed natural terpene found in vapor rubs and topical liniments. Produces sudden seizures and central nervous system depression within minutes. Charcoal has minimal binding affinity and delayed action.',
        highlight: 'Rapidly absorbed neurotoxin triggering sudden seizures; poor charcoal affinity'
      },
      {
        letter: 'P',
        term: 'Potassium (Potassium Chloride / Supplements)',
        description: 'Potassium is a simple, highly soluble monovalent inorganic cation (K+) that does not bind to activated charcoal. Hyperkalemia is managed with calcium gluconate, regular insulin with dextrose, loop diuretics, and sodium polystyrene sulfonate (Kayexalate).',
        highlight: 'Simple elemental electrolyte; requires insulin/glucose and Kayexalate'
      }
    ],
    clinicalContext: 'Activated charcoal is a finely powdered, highly porous steam-treated carbon product possessing an immense surface area (1,000 to 2,000 square meters per gram). It functions as a non-specific gastrointestinal adsorbent, binding organic xenobiotics via hydrogen bonding, van der Waals forces, and hydrophobic interactions, thereby preventing systemic gastrointestinal absorption. It is most effective when administered within 1 to 2 hours of a toxic ingestion. However, activated charcoal is completely ineffective against small, highly polar, charged, or inorganic substances (mnemonic CHEMICAL CamP). Furthermore, administering charcoal in patients with unprotected airways or caustic ingestions is hazardous and potentially fatal. Standard adult dose is 50 to 100 g orally or via nasogastric tube (pediatric: 1 g/kg). Stools will turn black, which is a benign, expected finding.',
    nclexPearls: [
      'The "1-Hour Golden Window": Activated charcoal is most effective when administered within 60 minutes of toxic ingestion. Beyond 1 to 2 hours, most toxins have passed through the pylorus into the small intestine, significantly reducing charcoal efficacy.',
      'Black Stools are Expected: Reassure the client and family that activated charcoal causes harmless black, tarry-appearing stools; educate them that this is the drug passing through the GI tract and does not indicate melena or gastrointestinal bleeding.',
      'Never Give with Corrosives: Administering charcoal in a patient who swallowed lye or battery acid is a critical medical error. It obscures the endoscopist\'s ability to grade esophageal burn depth and increases vomiting/perforation risk.',
      'Airway Protection Mandatory: If a poisoned client is drowsy, lethargic, or losing consciousness, DO NOT give activated charcoal orally! The nurse must advocate for endotracheal intubation with a cuffed tube before placing a nasogastric tube for charcoal administration.'
    ],
    practiceQuestion: {
      question: 'An emergency department nurse cares for an alert 19-year-old client who ingested 25 tablets of an unknown medication 45 minutes ago. Laboratory and toxicological testing identifies the ingested substance as a toxic quantity of ferrous sulfate (elemental iron). The resident physician writes an order to administer 50 g of activated charcoal orally. What is the nurse\'s most appropriate action?',
      options: [
        'Administer the activated charcoal immediately with 200 mL of cold water.',
        'Contact the physician to question the order, as activated charcoal does not adsorb iron.',
        'Mix the activated charcoal with milk to disguise the gritty black texture.',
        'Intubate the client immediately prior to administering the activated charcoal.'
      ],
      correctIndex: 1,
      rationale: 'Elemental iron (Fe2+/Fe3+) is a small, highly charged inorganic mineral that DOES NOT bind to the porous carbon matrix of activated charcoal (CHEMICAL CamP mnemonic). Administering activated charcoal to an iron-poisoned patient is completely ineffective, causes gastric distension, delays the administration of whole bowel irrigation, and increases the risk of vomiting and aspiration. The nurse must question the order. The definitive antidote for severe systemic iron toxicity is intravenous Deferoxamine (Desferal). Charcoal should never be mixed with milk (milk reduces adsorption capacity).'
    }
  },
  {
    id: 'eye-medications-mydriatic-vs-miotic',
    shortCode: 'Mydriatic vs Miotic',
    title: 'Ophthalmic Medications: Mydriatic vs. Miotic',
    category: 'pharmacology',
    categoryName: 'Pharmacology Nursing',
    summary: 'The essential clinical distinction in ophthalmic pharmacology: Mydriatics dilate pupils (big word = big pupil, strictly contraindicated in closed-angle glaucoma), whereas Miotics constrict pupils (little word = little pupil, treats glaucoma).',
    memoryTip: 'Mydriatic has a "D" for DILATE (big word = big pupil!); Miotic has a "T" for TINY / consTrict (little word = little pupil!). Critical NCLEX safety rule: Mydriatics (e.g., atropine) are CONTRAINDICATED in closed-angle glaucoma because pupil dilation blocks the trabecular meshwork and spikes intraocular pressure!',
    highYield: true,
    tags: ['Pharmacology', 'Ophthalmology', 'Eye Medications', 'Glaucoma', 'Autonomic Nervous System'],
    letters: [
      {
        letter: 'D',
        term: 'Mydriatic (Dilates the Pupil)',
        description: 'Anticholinergic (parasympatholytic) or adrenergic agonist agents (e.g., Atropine, Tropicamide, Cyclopentolate, Phenylephrine) that paralyze the pupillary sphincter muscle and ciliary body (cycloplegia), producing sustained pupil dilation for diagnostic ophthalmic fundoscopy and surgical visualization.',
        highlight: 'Mydriatic has a "D" = DILATES pupil; contraindicated in closed-angle glaucoma'
      },
      {
        letter: 'T',
        term: 'Miotic (Tiny / Constricts the Pupil)',
        description: 'Cholinergic (parasympathomimetic) agents (e.g., Pilocarpine, Carbachol, Echothiophate) that stimulate muscarinic receptors to contract the pupillary sphincter and ciliary muscle, pulling the iris root away from the trabecular meshwork, opening the filtration angle, and enhancing aqueous humor outflow to lower intraocular pressure.',
        highlight: 'Miotic has a "T" = TINY / constricts pupil; first-line therapy to lower IOP in glaucoma'
      }
    ],
    clinicalContext: 'In Ophthalmic Pharmacology and Medical-Surgical Nursing, understanding the physiological actions and contraindications of mydriatics vs. miotics is one of the highest-yield NCLEX testing areas. 1. Closed-Angle Glaucoma Warning: Mydriatics (such as atropine and scopolamine) dilate the pupil, causing peripheral bunching of the iris that physically seals off the iridocorneal filtration angle and Canal of Schlemm, halting aqueous humor drainage and triggering acute closed-angle glaucoma (a medical emergency presenting with severe peri-orbital pain, halos around lights, nausea, and dangerously elevated IOP > 50 mm Hg). 2. Glaucoma Therapy: Miotics (such as pilocarpine) induce pupillary miosis and ciliary spasm, which tautens the scleral spur, opens the trabecular meshwork, and dramatically accelerates aqueous drainage, effectively lowering IOP in open-angle and emergency acute angle-closure glaucoma. 3. Proper Eye Drop Administration: Drop medication into the lower conjunctival sac (never directly onto the cornea), hold gentle pressure on the inner canthus (nasolacrimal occlusion / punctal occlusion) for 1 to 2 minutes to prevent systemic vascular absorption and avoid systemic anticholinergic/cholinergic toxicity, and wait at least 5 minutes between instilling different ophthalmic solutions.',
    nclexPearls: [
      'Glaucoma Contraindication: Mydriatics and anticholinergics (atropine, scopolamine, benztropine, oxybutynin) are STRICTLY CONTRAINDICATED in clients with narrow-angle / closed-angle glaucoma. Always check client history before administering any dilating drop!',
      'Punctal Occlusion Technique: Immediately following eye drop instillation, instruct the client to close their eyes gently and apply finger pressure to the inner corner of the eye (lacrimal punctum) for 1 to 2 minutes. This minimizes systemic circulation absorption via the nasal mucosa, preventing systemic cardiac and respiratory side effects.',
      'Cycloplegia Warning: Mydriatics also cause cycloplegia (paralysis of the ciliary accommodation muscle), resulting in photophobia and severe blurred near vision. Warn clients to wear sunglasses outdoors, avoid driving or operating machinery, and protect eyes from bright lights.',
      'Administration Mechanics: Pull down the lower lid to expose the conjunctival sac, look upward, instill drop from 1/2 to 3/4 inch above the eye without touching the dropper to the eye, close eye gently (do not squeeze shut or rub), and wait 5 minutes between different ophthalmic medications.'
    ],
    practiceQuestion: {
      question: 'A nurse prepares to administer prescribed morning ophthalmic drops to an 82-year-old client with a primary diagnosis of closed-angle glaucoma. Which prescription should the nurse immediately hold and clarify with the ophthalmologist?',
      options: [
        'Pilocarpine 1% ophthalmic solution, 1 drop in both eyes twice daily',
        'Timolol maleate 0.5% ophthalmic solution, 1 drop in both eyes every morning',
        'Atropine sulfate 1% ophthalmic solution, 1 drop in both eyes as needed',
        'Brimonidine tartrate 0.2% ophthalmic solution, 1 drop in both eyes three times daily'
      ],
      correctIndex: 2,
      rationale: 'Atropine is a potent anticholinergic mydriatic agent that dilates the pupil (Mydriatic = Dilate). In clients with closed-angle (narrow-angle) glaucoma, pupillary dilation causes the iris to bunch up and block the already compromised iridocorneal filtration angle and trabecular meshwork. This obstructs the outflow of aqueous humor through the Canal of Schlemm, precipitating an acute, blinding spike in intraocular pressure (acute angle-closure glaucoma). Therefore, mydriatics are strictly contraindicated. Pilocarpine is a miotic (Miotic = Tiny) that contracts the pupil and treats glaucoma by opening the drainage angle; Timolol (beta-blocker) reduces aqueous humor production; and Brimonidine (alpha-2 agonist) decreases aqueous production and increases uveoscleral outflow.'
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
  },
  {
    id: 'infectious-rash-timeline-spmtde',
    shortCode: 'SPMTDE (Rash Timeline)',
    title: 'Days of Rash Appearance in Fevers (Sick Patients Must Take Double Exercise)',
    category: 'communicable',
    categoryName: 'Communicable Diseases',
    summary: 'The classic clinical timeline for when diagnostic rashes emerge after fever onset in communicable exanthematous illnesses: Day 1: Scarlet fever (and Chickenpox), Day 2: Pox (Smallpox), Day 3: Mumps, Day 4: Typhus, Day 5: Dengue, Day 6: Enteric fever (Typhoid).',
    memoryTip: '"Sick Patients Must Take Double Exercise" — Day 1: Scarlet fever (also Varicella/chickenpox), Day 2: Pox (smallpox), Day 3: Mumps, Day 4: Typhus, Day 5: Dengue, Day 6: Enteric fever (typhoid rose spots). Count the days of fever to pinpoint the diagnosis!',
    highYield: true,
    tags: ['Communicable Diseases', 'Infectious Disease', 'Pediatrics', 'Exanthems', 'Fever Assessment', 'Isolation'],
    letters: [
      {
        letter: '1',
        term: '1st Day: Scarlet Fever (also Varicella / Chickenpox)',
        description: 'Rash erupts within the first 24 hours of fever onset. Scarlet fever (Group A Streptococcus) presents with diffuse, finely papular "sandpaper" erythema in skin folds (Pastia lines) and a white/red strawberry tongue. Varicella (chickenpox) also manifests on Day 1 as pruritic teardrop vesicles.',
        highlight: 'Day 1: Scarlet fever sandpaper rash & Pastia lines; Chickenpox teardrop vesicles'
      },
      {
        letter: '2',
        term: '2nd Day: Pox (Smallpox / Variola Virus)',
        description: 'Smallpox rash erupts on the 2nd day of high fever. Unlike chickenpox, smallpox lesions are synchronous (all at the exact same developmental stage: all papules, then all vesicles, then all pustules), deep-seated, umbilicated, and centrifugally concentrated on the face and extremities (including palms and soles).',
        highlight: 'Day 2: Smallpox synchronous, umbilicated pustules on face, palms & soles'
      },
      {
        letter: '3',
        term: '3rd Day: Mumps (Paramyxovirus)',
        description: 'Tender parotid gland swelling peaks prominently around the 3rd day of fever. Also correlates with the prodromal enanthem of Measles (Rubeola), where pathognomonic Koplik spots (tiny white lesions on red buccal mucosa) appear 24–48 hours before the external body rash.',
        highlight: 'Day 3: Mumps tender parotitis; Measles Koplik spots appear on buccal mucosa'
      },
      {
        letter: '4',
        term: '4th Day: Typhus (Rickettsial Diseases)',
        description: 'Epidemic typhus (Rickettsia prowazekii transmitted by body lice) and endemic flea-borne typhus present with an abrupt high fever; on Day 4, a non-pruritic maculopapular and petechial rash begins on the trunk and axillae, spreading centrifugally outward to extremities while sparing face, palms, and soles.',
        highlight: 'Day 4: Typhus maculopapular/petechial rash on trunk spreading centrifugally'
      },
      {
        letter: '5',
        term: '5th Day: Dengue Fever (Breakbone Fever Arbovirus)',
        description: 'Transmitted by Aedes aegypti mosquitoes. As the initial high fever begins to defervesce around Day 5 (saddleback / biphasic fever pattern), a characteristic widespread, blanching maculopapular rash appears with patches of normal skin ("islands of white in a sea of red").',
        highlight: 'Day 5: Dengue blanching rash with "islands of white in a sea of red"'
      },
      {
        letter: '6',
        term: '6th Day: Enteric Fever (Typhoid / Salmonella Typhi)',
        description: 'Toward the end of the first week (Day 6–7) of persistent step-ladder fever, faint salmon-pink, blanching macules ("rose spots") appear on the periumbilical abdomen and lower chest. Typically accompanied by relative bradycardia (Faget sign) and constipation or pea-soup diarrhea.',
        highlight: 'Day 6: Typhoid "rose spots" (salmon-pink macules) on abdomen with Faget sign'
      }
    ],
    clinicalContext: 'In Communicable Diseases and Pediatric Nursing, exanthematous fevers are among the most frequently tested clinical presentations. Evaluating the chronological timeline of rash onset relative to the fever\'s start is a powerful diagnostic tool that allows nurses to rapidly triage, isolate, and initiate disease-specific droplet, airborne, or contact precautions. Recognizing early features prevents institutional outbreaks (e.g., immediate airborne isolation for varicella/smallpox vs. droplet for mumps vs. vector control for dengue).',
    nclexPearls: [
      'Smallpox vs. Chickenpox Differentiation: Chickenpox (Varicella) is centripetal (concentrated on trunk), pleomorphic (crops of macules, papules, vesicles, and crusts present simultaneously in the same area), and superficial. Smallpox is centrifugal (concentrated on face/extremities/palms/soles), monomorphic (all lesions are in the exact same stage of development), and deep-seated.',
      'Scarlet Fever Pastia Lines & Tongue: Look for Pastia lines (deep pink or red lines in the skin creases of the antecubital fossa and axillae that do not blanch) and strawberry tongue (initially white coat with red papillae, transitioning to beefy red by day 4–5).',
      'Faget Sign in Typhoid: High fever accompanied by a paradoxically normal or slow heart rate (sphygmothermic dissociation) is characteristic of Salmonella Typhi (Enteric fever) and Yellow fever.',
      'Dengue Warning Signs (Days 3–7): The critical phase of dengue occurs when the fever drops (around day 5); monitor closely for plasma leakage, severe abdominal pain, persistent vomiting, mucosal bleeding, and sudden hematocrit rise (Dengue Shock Syndrome).'
    ],
    practiceQuestion: {
      question: 'A 28-year-old traveler returns from Southeast Asia with a 6-day history of prolonged, step-ladder fever, headache, abdominal pain, and constipation. Physical examination reveals a temperature of 103.4°F (39.7°C), a heart rate of only 64 bpm (relative bradycardia), and several faint, blanchable, salmon-pink macules scattered across the epigastrium and lower chest. Using clinical timelines of infectious exanthems, which disease does the nurse suspect?',
      options: [
        'Scarlet fever',
        'Enteric fever (Typhoid)',
        'Dengue hemorrhagic fever',
        'Epidemic typhus'
      ],
      correctIndex: 1,
      rationale: 'The presence of faint salmon-colored, blanching maculopapular lesions ("rose spots") appearing around the 6th day of step-ladder fever, accompanied by Faget\'s sign (sphygmothermic dissociation / relative bradycardia: high fever with inappropriate pulse rate), is the classic clinical hallmark of Enteric Fever (Typhoid fever caused by Salmonella enterica serotype Typhi). Using the "Sick Patients Must Take Double Exercise" timeline (Day 1: Scarlet fever, Day 2: Pox, Day 3: Mumps, Day 4: Typhus, Day 5: Dengue, Day 6: Enteric fever), the nurse correctly identifies enteric fever. Treatment involves IV ceftriaxone or ciprofloxacin and enteric contact precautions.'
    }
  },
  {
    id: 'falciparum-malaria-complications-chaplin',
    shortCode: 'CHAPLIN (Malaria)',
    title: 'Severe Falciparum Malaria Complications (CHAPLIN)',
    category: 'communicable',
    categoryName: 'Communicable Diseases',
    summary: 'The 7 life-threatening systemic complications of severe Plasmodium falciparum malaria: Cerebral malaria/Coma, Hypoglycemia, Anemia, Pulmonary edema, Lactic acidosis, Infections, and Necrosis of renal tubules.',
    memoryTip: 'Remember the deadly complications of Plasmodium falciparum with "CHAPLIN" — C: Cerebral malaria / Coma, H: Hypoglycemia (frequent blood sugar checks!), A: Anemia (severe hemolytic), P: Pulmonary edema (ARDS), L: Lactic acidosis (deep Kussmaul breathing), I: Infections (secondary bacterial sepsis), N: Necrosis of renal tubules (ATN & Blackwater fever). First-line treatment: IV Artesunate!',
    highYield: true,
    tags: ['Communicable Diseases', 'Infectious Disease', 'Malaria', 'Global Health', 'Parasitology', 'Critical Care'],
    letters: [
      {
        letter: 'C',
        term: 'Cerebral Malaria & Coma',
        description: 'Cytoadherence and sequestration of knob-positive parasitized red blood cells in cerebral microvessels produce microvascular occlusion, focal hypoxia, and blood-brain barrier disruption. Manifests as unarousable coma, encephalopathy, generalized seizures, and decerebrate rigidity.',
        highlight: 'Microvascular sequestration in brain causes unarousable coma, seizures & herniation'
      },
      {
        letter: 'H',
        term: 'Hypoglycemia',
        description: 'Blood glucose drops below 40 mg/dL (2.2 mmol/L) due to massive parasite glucose utilization, hepatic gluconeogenesis suppression by pro-inflammatory cytokines, and quinine/quinidine-induced pancreatic beta-cell insulin hypersecretion. Frequent bedside glucose checks are mandatory.',
        highlight: 'Parasite glucose consumption & quinine-induced insulin surge; check glucose q2-4h'
      },
      {
        letter: 'A',
        term: 'Anemia (Severe Normocytic Hemolytic Anemia)',
        description: 'Profound hemolysis of both infected and non-infected erythrocytes combined with splenic clearance and dyserythropoiesis (hematocrit < 15%, hemoglobin < 5 g/dL). Leads to acute pallor, tissue hypoxia, high-output heart failure, and requirement for urgent blood transfusion.',
        highlight: 'Massive erythrocyte hemolysis drops Hb < 5 g/dL; urgent blood transfusion needed'
      },
      {
        letter: 'P',
        term: 'Pulmonary Edema & ARDS',
        description: 'Non-cardiogenic pulmonary capillary leak and severe inflammatory alveolar damage (ARDS) develop rapidly, even after parasitemia drops. Precipitates severe dyspnea, tachypnea, frothy sputum, and intractable hypoxemia (mortality exceeds 70%).',
        highlight: 'Non-cardiogenic capillary leak and ARDS; carries > 70% mortality risk'
      },
      {
        letter: 'L',
        term: 'Lactic Acidosis (Metabolic Acidemia)',
        description: 'Systemic microvascular capillary blockage creates widespread tissue hypoperfusion, forcing anaerobic metabolism and accumulation of lactic acid (plasma lactate > 5 mmol/L). Clinically recognized by deep, rapid, unlabored hyperventilation (Kussmaul / acidotic breathing).',
        highlight: 'Tissue hypoperfusion drives plasma lactate > 5 mmol/L; Kussmaul acidotic breathing'
      },
      {
        letter: 'I',
        term: 'Infections (Secondary Bacterial Sepsis)',
        description: 'Reticuloendothelial system and splenic macrophage exhaustion predispose clients to life-threatening secondary bacterial bloodstream infections, particularly non-typhoidal Salmonella bacteremia, gram-negative sepsis, and aspiration pneumonia.',
        highlight: 'Splenic exhaustion leads to secondary Salmonella bacteremia & septic shock'
      },
      {
        letter: 'N',
        term: 'Necrosis of Renal Tubules (ATN & Blackwater Fever)',
        description: 'Massive intravascular hemolysis spills free hemoglobin into plasma, producing hemoglobinuria with dark mahogany/black urine ("Blackwater Fever"). Hemoglobin casts, microvascular occlusion, and renal ischemia cause acute tubular necrosis (ATN) and oliguric renal failure.',
        highlight: 'Hemoglobinuria ("Blackwater fever") with dark urine, ATN & acute renal failure'
      }
    ],
    clinicalContext: 'Plasmodium falciparum is the deadliest malaria parasite species, responsible for over 90% of global malaria mortality. Transmitted by the bite of infected female Anopheles mosquitoes. Unlike other Plasmodium species (P. vivax, P. ovale, P. malariae), P. falciparum infects erythrocytes of all ages (yielding extreme parasitemia > 5–10%) and expresses PfEMP1 surface proteins that cause parasitized RBCs to adhere to vascular endothelial cells (cytoadherence and rosetting), obstructing capillary microcirculation in vital organs (brain, kidneys, lungs). Severe falciparum malaria is a medical emergency requiring admission to an intensive care unit. The World Health Organization (WHO) and CDC recommend intravenous Artesunate as the first-line medication of choice, which clears parasitemia significantly faster and has lower mortality than intravenous quinine.',
    nclexPearls: [
      'First-Line Drug of Choice: Intravenous Artesunate is the gold-standard therapy for severe malaria worldwide. If artesunate is unavailable, IV quinidine gluconate is used with continuous telemetry monitoring (watch for QT prolongation and hypoglycemia).',
      'Routine Hypoglycemia Monitoring: Always monitor capillary blood glucose every 2 to 4 hours in clients with severe malaria, especially those receiving IV quinine/quinidine or pregnant women (hypoglycemia can mimic cerebral malaria coma).',
      'Blackwater Fever Alert: Dark, tea-colored or blackish urine indicates massive intravascular hemolysis and hemoglobinuria. Monitor intake and output hourly (target urine output ≥ 0.5–1 mL/kg/hr) to protect kidneys from acute tubular necrosis.',
      'Chemoprophylaxis Education: Instruct travelers to malaria-endemic regions to start chemoprophylaxis (atovaquone-proguanil / Malarone, doxycycline, or mefloquine) before departure, take doses consistently with meals, sleep under insecticide-treated bed nets, and use DEET insect repellent.'
    ],
    practiceQuestion: {
      question: 'A client returned from West Africa 10 days ago and is admitted to the intensive care unit with severe Plasmodium falciparum malaria. The client is stuporous, breathing deeply and rapidly at 32 breaths/min (Kussmaul respirations), with a capillary blood glucose of 38 mg/dL (2.1 mmol/L) and dark, mahogany-colored urine. Which immediate interventions should the nurse prioritize?',
      options: [
        'Administer IV Dextrose 50% immediately, obtain ABGs for lactic acidosis, and initiate IV Artesunate.',
        'Administer oral chloroquine with orange juice and withhold all intravenous fluids.',
        'Administer oral quinine sulfate and place the client on fluid restriction to prevent ascites.',
        'Administer subcutaneous insulin glargine and prepare for immediate lumbar puncture.'
      ],
      correctIndex: 0,
      rationale: 'Severe falciparum malaria presents with life-threatening complications summarized by the CHAPLIN mnemonic: Hypoglycemia (< 40 mg/dL), Lactic acidosis (evidenced by deep Kussmaul breathing compensating for severe metabolic acidemia), Acute Tubular Necrosis / Blackwater fever (mahogany/black urine from massive intravascular hemolysis), and Cerebral malaria (stupor/coma). The nurse\'s immediate priority is administering IV 50% Dextrose (D50) to reverse neuroglycopenia, assessing arterial blood gases for metabolic lactic acidosis, and administering intravenous Artesunate, the worldwide first-line antiparasitic therapy for severe malaria. Oral antimalarials are contraindicated in unconscious clients.'
    }
  }
];

export function getMnemonicById(id) {
  return mnemonicsList.find(m => m.id === id);
}

export function getMnemonicsByCategory(categoryId) {
  return mnemonicsList.filter(m => m.category === categoryId);
}
