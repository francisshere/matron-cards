import { QUIZ_CONFIG } from '../config/constants';

/**
 * Quiz Engine Action Types
 */
export const QUIZ_ACTIONS = Object.freeze({
  INIT_SESSION: 'INIT_SESSION',
  SELECT_OPTION: 'SELECT_OPTION',
  CLEAR_OPTION: 'CLEAR_OPTION',
  CHECK_ANSWER: 'CHECK_ANSWER',
  NEXT_QUESTION: 'NEXT_QUESTION',
  SKIP_QUESTION: 'SKIP_QUESTION',
  TICK_TIMER: 'TICK_TIMER',
  TRIGGER_GAME_OVER: 'TRIGGER_GAME_OVER',
});

/**
 * Default Initial State Template
 */
export const initialQuizState = Object.freeze({
  // Config / Settings
  gamemode: true,
  randomize: false,
  questionCount: QUIZ_CONFIG.DEFAULT_QUESTION_COUNT,
  customCount: '',
  timeLimitEnabled: false,
  timeLimitHours: 0,
  timeLimitMinutes: 0,
  timeLimitSeconds: 0,

  // Runtime State
  questions: [],
  currentIndex: 0,
  lives: QUIZ_CONFIG.DEFAULT_LIVES,
  selectedOption: null,
  showRationale: false,
  gameOver: false,
  quizFinished: false,
  correctAnswers: 0,
  timeRemaining: null,
});

/**
 * Pure Reducer Function for Quiz State Transitions
 */
export function quizReducer(state, action) {
  switch (action.type) {
    case QUIZ_ACTIONS.INIT_SESSION: {
      const {
        questions,
        gamemode = state.gamemode,
        randomize = state.randomize,
        questionCount = state.questionCount,
        customCount = state.customCount,
        timeLimitEnabled = state.timeLimitEnabled,
        timeLimitHours = state.timeLimitHours,
        timeLimitMinutes = state.timeLimitMinutes,
        timeLimitSeconds = state.timeLimitSeconds,
      } = action.payload;

      let totalSeconds = null;
      if (timeLimitEnabled) {
        totalSeconds = timeLimitHours * 3600 + timeLimitMinutes * 60 + timeLimitSeconds;
      }

      return {
        ...state,
        gamemode,
        randomize,
        questionCount,
        customCount,
        timeLimitEnabled,
        timeLimitHours,
        timeLimitMinutes,
        timeLimitSeconds,
        questions,
        currentIndex: 0,
        lives: QUIZ_CONFIG.DEFAULT_LIVES,
        selectedOption: null,
        showRationale: false,
        gameOver: false,
        quizFinished: false,
        correctAnswers: 0,
        timeRemaining: totalSeconds,
      };
    }

    case QUIZ_ACTIONS.SELECT_OPTION: {
      if (state.showRationale) return state;
      return { ...state, selectedOption: action.payload };
    }

    case QUIZ_ACTIONS.CLEAR_OPTION: {
      if (state.showRationale) return state;
      return { ...state, selectedOption: null };
    }

    case QUIZ_ACTIONS.CHECK_ANSWER: {
      if (!state.selectedOption || state.showRationale) return state;
      const currentQ = state.questions[state.currentIndex];
      if (!currentQ) return state;

      const isCorrect = state.selectedOption === currentQ.correct_option;

      if (isCorrect) {
        return {
          ...state,
          correctAnswers: state.correctAnswers + 1,
          showRationale: true,
        };
      }

      const nextLives = state.gamemode ? state.lives - 1 : state.lives;
      return {
        ...state,
        lives: nextLives,
        showRationale: true,
      };
    }

    case QUIZ_ACTIONS.NEXT_QUESTION: {
      if (state.gamemode && state.lives <= 0) {
        return { ...state, gameOver: true };
      }

      const nextIndex = state.currentIndex + 1;
      if (nextIndex >= state.questions.length) {
        return { ...state, quizFinished: true };
      }

      return {
        ...state,
        currentIndex: nextIndex,
        selectedOption: null,
        showRationale: false,
      };
    }

    case QUIZ_ACTIONS.SKIP_QUESTION: {
      if (state.showRationale) return state;

      const nextLives = state.gamemode ? state.lives - 1 : state.lives;
      if (state.gamemode && nextLives <= 0) {
        return {
          ...state,
          lives: 0,
          gameOver: true,
        };
      }

      const nextIndex = state.currentIndex + 1;
      if (nextIndex >= state.questions.length) {
        return {
          ...state,
          lives: nextLives,
          quizFinished: true,
        };
      }

      return {
        ...state,
        lives: nextLives,
        currentIndex: nextIndex,
        selectedOption: null,
        showRationale: false,
      };
    }

    case QUIZ_ACTIONS.TICK_TIMER: {
      if (state.timeRemaining === null || state.timeRemaining <= 0) return state;
      const nextRemaining = state.timeRemaining - 1;
      if (nextRemaining === 0) {
        return { ...state, timeRemaining: 0, quizFinished: true };
      }
      return { ...state, timeRemaining: nextRemaining };
    }

    case QUIZ_ACTIONS.TRIGGER_GAME_OVER: {
      return { ...state, gameOver: true };
    }

    default:
      return state;
  }
}
