# Matron - A Web-App Reviewer for Nursing Students

# IMPORTANT: ALWAYS THINK OF THE SECURITY AND FOLLOW THE ARCHITECTURE. IF UNSURE ABOUT A CERTAIN PART, ALWAYS ASK FIRST AND VERIFY WITH PUBLISHED REFERENCES.

# Color Variables
  --cozy-bg: #FDF5F7;
  --cozy-card: #FFFFFF;
  --cozy-light: #F7C4D5;
  --cozy-mid: #E97CA1;
  --cozy-primary: #D42F6B;
  --cozy-text: #4A1529;
  --cozy-muted: #855264;

```json
{
  "design_system_application": {
    "ui_component_mapping": [
      {
        "component": "Main Page Background",
        "variable": "--cozy-bg",
        "reasoning": "Provides a soft, non-stark foundation that reduces eye strain during long study sessions."
      },
      {
        "component": "Content Cards",
        "variable": "--cozy-card",
        "reasoning": "Ensures the text is legible and pops against the softer page background."
      },
      {
        "component": "Primary CTA (Start Review)",
        "variable": "--cozy-primary",
        "reasoning": "High-impact color to encourage immediate user action."
      },
      {
        "component": "Headings & Titles",
        "variable": "--cozy-text",
        "reasoning": "Deep berry-wine provides excellent contrast against white/off-white without the harshness of black."
      },
      {
        "component": "Secondary/Helper Text",
        "variable": "--cozy-muted",
        "reasoning": "Soft mauve keeps the UI clean without drawing too much attention away from primary content."
      },
      {
        "component": "Progress Indicators",
        "variable": "--cozy-mid",
        "reasoning": "Visually satisfying and motivating without being aggressive."
      },
      {
        "component": "Hover/Interactive States",
        "variable": "--cozy-light",
        "reasoning": "Subtle feedback for user interactions like clicking buttons or highlighting cards."
      }
    ],
    "styling_strategy": {
      "layered_effects": {
        "description": "Apply variables as background layers with varying opacities to mimic depth and flow.",
        "variables": ["--cozy-light", "--cozy-mid", "--cozy-primary"]
      },
      "content_clarity": {
        "description": "Apply text styles within containers for a clean aesthetic.",
        "text_variable": "--cozy-text",
        "container_variable": "--cozy-card"
      },
      "gamification": {
        "description": "Use specific accents for engagement elements.",
        "streak_element": "--cozy-primary",
        "progress_charts": "--cozy-mid"
      }
    },
    "philosophy": "Maintain hierarchy to ensure the app feels like a curated study space rather than a standard test-bank application."
  }
}
```