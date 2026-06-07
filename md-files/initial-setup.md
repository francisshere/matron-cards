# Matron - A Web-App Reviewer for Nursing Students

# IMPORTANT: ALWAYS THINK OF THE SECURITY AND FOLLOW THE ARCHITECTURE. IF UNSURE ABOUT A CERTAIN PART, ALWAYS ASK FIRST AND VERIFY WITH PUBLISHED REFERENCES.


As a senior web developer, establish the prototype of the json block. 

```json
{
  "project_title": "CozyCare Reviewer",
  "project_overview": {
    "concept": "A warm, minimalist, and psychologically comforting web-based active recall platform specifically tailored for Filipino nursing students preparing for the Philippine Nursing Licensure Exam (PNLE). Unlike sterile, high-stress traditional test banks, this app uses a 'cozy interface' philosophy (warm tones, low cognitive load, soft animations) paired with robust spaced repetition algorithms to mitigate board exam burnout.",
    "target_audience": "3rd and 4th year Filipino BSN (Bachelor of Science in Nursing) students, specifically targeting those reviewing the Foundation of Professional Nursing Practice (PNLE I).",
    "design_philosophy": "Clean aesthetic, high legibility, accessible color contrast ratios for long night-shift study sessions, soft transitions, and a 'gamified but non-anxious' retention cycle."
  },
  "ux_ui_strategy": {
    "wireframing_and_layout": {
      "dashboard": "A central, uncluttered hub. Instead of overwhelming progress bars, it features a warm greeting, a visual indicator of the 'Concept of the Day', a subtle 'Daily Streak' flame (using amber/coral tones rather than aggressive red), and a clear, primary 'Start Review' call-to-action.",
      "active_recall_interface": "A clean, focused workspace layout that completely hides peripheral navigation to maximize focus. Questions are presented on card layouts with generous padding, utilizing high-contrast, beautiful typography for maximum readability during intense review sessions."
    },
    "color_palette_hex": {
      "background_primary": "#FBF9F6",
      "background_secondary": "#F3EDE4",
      "text_main": "#2C3E35",
      "accent_warm": "#D98A6C",
      "accent_success": "#5F8575",
      "accent_warning": "#E2B659"
    },
    "typography": {
      "headings": "Playfair Display or Inter (Bold, Elegant, and Grounded)",
      "body_and_ui": "Inter or Plus Jakarta Sans (Highly legible sans-serif with optimized geometric tracking for dense clinical stems)"
    },
    "microinteractions": {
      "card_flip": "Smooth CSS 3D transforms when flipping between a complex nursing question stem and its rationales.",
      "streak_increment": "A subtle, rewarding scaling animation on the streak counter upon completing the daily session, avoiding high-stress flashing animations."
    }
  },
  "system_architecture_and_tech_stack": {
    "frontend_framework": "React.js (with Vite for fast compilation, modular component architecture, and fluid state transitions)",
    "styling_engine": "Tailwind CSS (utilizing arbitrary values and custom theme configurations for custom warm palettes, and semantic utilities for crisp responsive layouts)",
    "interactivity_layer": "Alpine.js (Optional / hybrid exploration for lightweight declarative bindings, or pure React hooks for unified state management)",
    "backend_framework": "Laravel (Robust MVC, standard API-first implementation, built-in secure authentication, and powerful Eloquent ORM to handle question relationships)",
    "database": "MySQL or PostgreSQL (Structured relational schemas to efficiently handle questions, rationales, user metadata, and historical progress logs)",
    "retention_engine": "SuperMemo SM-2 algorithm variation implemented via a backend service or a scheduled cron job to calculate next review dates based on user response grading (0-5 score scale)."
  },
  "database_schema_preview": {
    "users_table": {
      "id": "bigint unsigned, primary key",
      "name": "varchar",
      "email": "varchar, unique",
      "current_streak": "int, default 0",
      "last_activity_date": "date"
    },
    "concepts_table": {
      "id": "bigint unsigned, primary key",
      "title": "varchar (e.g., 'Therapeutic Communication', 'Nursing Process')",
      "category": "varchar (e.g., 'Foundation of Professional Nursing Practice')"
    },
    "questions_table": {
      "id": "bigint unsigned, primary key",
      "concept_id": "foreign_key referencing concepts.id",
      "question_stem": "text",
      "options": "json (array of choices A, B, C, D)",
      "correct_option": "char(1)",
      "rationale": "text"
    },
    "user_progress_table": {
      "id": "bigint unsigned, primary key",
      "user_id": "foreign_key referencing users.id",
      "question_id": "foreign_key referencing questions.id",
      "mastery_status": "enum('unmastered', 'reviewing', 'perfected')",
      "easiness_factor": "float, default 2.5",
      "repetitions": "int, default 0",
      "next_review_date": "timestamp"
    }
  },
  "retention_and_creative_features_implementation": {
    "daily_streak_mechanism": "Calculated on login or session submission. If the difference between current_date and last_activity_date is exactly 1 day, increment the streak. If it is the same day, preserve it. If it is greater than 1 day, reset it to 0. A graceful 'streak freeze' can be unlocked weekly using high-accuracy review sessions to reduce student anxiety.",
    "concept_to_review_for_the_day": "A dynamic queue builder that aggregates questions where next_review_date <= current_timestamp. If the review queue is empty, the system automatically pulls a fresh, unmastered concept from the pool to introduce a steady, predictable learning pace.",
    "mastery_classification_system": {
      "perfected": "Concepts where questions have consistently achieved an optimal score of 4 or 5 over multiple repetitions, extending the interval calculation beyond 21 days.",
      "unmastered": "Questions answered incorrectly or marked with low confidence scores (0-2), forcing them back into the active daily rotation loop within a 15-minute or 24-hour interval window."
    }
  },
  "pnle_foundations_mock_data_seed": [
    {
      "id": 1,
      "concept": "Nursing Process & Assessment",
      "question_stem": "A nurse is performing an initial admission assessment on a client admitted to the medical unit. Which of the following data points should the nurse categorize as subjective?",
      "options": {
        "A": "The client's blood pressure is 140/90 mmHg.",
        "B": "The client states, 'I feel a sharp, shooting pain in my lower back.'",
        "C": "The nurse notes 2+ pitting edema in the lower extremities.",
        "D": "The client's diagnostic report reveals a serum potassium level of 3.4 mEq/L."
      },
      "correct_option": "B",
      "rationale": "Subjective data are information from the client's point of view (symptoms), including feelings, perceptions, and concerns obtained through interviews. Objective data are observable and measurable signs obtained through physical examination, laboratory results, and vital signs measurement."
    },
    {
      "id": 2,
      "concept": "Legal & Ethical Considerations",
      "question_stem": "A nurse administers an incorrect dose of an antihypertensive medication to a client, resulting in severe hypotension. The nurse immediately notifies the attending physician and documents the incident accurately in the chart. Which ethical principle did the nurse primarily demonstrate by reporting the error?",
      "options": {
        "A": "Autonomy",
        "B": "Beneficence",
        "C": "Veracity",
        "D": "Non-maleficence"
      },
      "correct_option": "C",
      "rationale": "Veracity refers to the duty to tell the truth. By immediately reporting the medication error and documenting it truthfully and accurately without concealment, the nurse upholds professional honesty and transparency."
    }
  ],
  "execution_roadmap": {
    "phase_1_design": "Set up a Figma project using custom typography rules, creating auto-layout card components for mobile and web screens, validating contrast parameters against WCAG AA requirements.",
    "phase_2_api_scaffolding": "Generate a fresh Laravel application with Breeze or Sanctum for seamless authentication, draft migration blueprints, seed PNLE mock items, and formulate custom Spaced Repetition algorithms inside dedicated service containers.",
    "phase_3_frontend_composition": "Implement a React application with a crisp Tailwind template configuration, build out dynamic flashcard views utilizing custom CSS transition effects, and interface with backend endpoints via state synchronization hooks.",
    "phase_4_deployment_and_analytics": "Launch the application on production-ready environments, tracking daily retention engagement metrics and performance stability to fine-tune active recall interval durations."
  }
}
```