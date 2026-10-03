/**
 * Application Constants & Configuration
 * Freeze all static definitions to prevent accidental mutations.
 */

export const STORAGE_KEYS = Object.freeze({
  FAVORITE_MNEMONICS: 'matron_favorite_mnemonics',
});

export const VIEWS = Object.freeze({
  HOME: 'home',
  QUIZ: 'quiz',
  TOPICS: 'topics',
  MNEMONICS: 'mnemonics',
  MNEMONIC_DETAIL: 'mnemonic-detail',
  TIPS: 'tips',
});

export const QUIZ_CONFIG = Object.freeze({
  DEFAULT_QUESTION_COUNT: 25,
  DEFAULT_LIVES: 5,
  COUNT_PRESETS: Object.freeze([25, 50, 75, 100]),
  TIMER_ALARM_THRESHOLD_SECONDS: 60,
  GAME_OVER_DELAY_MS: 2000,
});

export const SOUND_TYPES = Object.freeze({
  CORRECT: 'correct',
  WRONG: 'wrong',
  ALARM: 'alarm',
});

export const PAGINATION = Object.freeze({
  MNEMONICS_INITIAL_BATCH: 12,
  MNEMONICS_BATCH_INCREMENT: 12,
});
