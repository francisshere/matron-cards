# Matron - A Web-App Reviewer for Nursing Students

# IMPORTANT: ALWAYS THINK OF THE SECURITY AND FOLLOW THE ARCHITECTURE. IF UNSURE ABOUT A CERTAIN PART, ALWAYS ASK FIRST AND VERIFY WITH PUBLISHED REFERENCES.

# A GUIDELINE FOR THE OVERALL LAYOUT OF THE HOME PAGE
```json
{
  "webpage_layout_description": {
    "project_name": "Matron",
    "layout_type": "Sidebar-Navigation Dashboard",
    "design_aesthetic": "Cozy, minimalist, pastel-pink and magenta color scheme with soft rounded UI elements.",
    "layout_structure": {
      "sidebar_navigation": {
        "position": "Fixed, left-aligned",
        "elements": [
          "Logo: 'ma+ron' with branding icon",
          "Navigation links: Learn, Topics, Profile",
          "Visuals: Accompanying small icons for each link"
        ]
      },
      "main_content_area": {
        "position": "Center, right of sidebar",
        "sections": [
          {
            "header": {
              "element": "Philippine Nursing Licensure Exam",
              "style": "Prominent, centered, high-contrast magenta container"
            }
          },
          {
            "feature_spotlight": {
              "title": "Review of the Day",
              "components": [
                "Mascot: Cute, nurse-themed snake character (left-aligned)",
                "Card: Text-heavy content box containing the daily nursing question (right-aligned)"
              ]
            }
          },
          {
            "course_cards": {
              "description": "Two stacked rectangular cards for course modules",
              "elements": [
                "Left Segment: Course Title and Subtitle (Foundation of Professional Nursing Practice)",
                "Middle Segment: Item count (100 Items)",
                "Right Segment: Call-to-Action button ('LEARN')"
              ],
              "variations": [
                "Top card: White background with dark border",
                "Bottom card: Filled magenta gradient background"
              ]
            }
          }
        ]
      }
    },
    "technical_notes": {
      "grid_system": "Flexbox or CSS Grid with a fixed sidebar width (e.g., 20-25%) and flexible main content area.",
      "ui_components": "High use of `border-radius` for 'cozy' pill-shaped containers; consistent vertical rhythm between segments.",
      "responsive_considerations": "Collapse sidebar into a mobile burger menu; stack content cards vertically on smaller screen widths."
    }
  }
}
```

As a senior web developer, specializing in UI/UX Developer, construct the following tasks:

# Task 1: Sidebar Navigation
The sidebar contains the logo (matron-logo.svg), and the sidebar links: Learn (with the learn-icon.svg), Topics (with the topics-icon.svg), and Profile (with the profile-icon.svg). Macrospace for between the icon and the word, Microspace between the letters of the word.

# Task 2: Home Page Main Layout
Title card at the top. An interactive, dynamic Flashcard of the day, and a card-links for the other set of questions.

# Task 3: Daily Review of the Day Card
This section is an interactive card where the default is the question and if the user clicked it, it will animate with a flip then reveal the rationale. For the meantime, use the questions and rationale from the current set of questions.