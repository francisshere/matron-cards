import { useReducer, useEffect, useCallback, useRef } from 'react';
import { questionService } from '../services/questionService';
import { playSound } from '../services/soundService';
import { QUIZ_CONFIG } from '../config/constants';
import {
  initialQuizState,
  quizReducer,
  QUIZ_ACTIONS,
} from '../reducers/quizReducer';

/**
 * Quiz Engine Hook
 * Coordinates React state lifecycle, timers, sound playback, and user interactions.
 */
export function useQuizEngine({ topicFilter } = {}) {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);
  const gameOverTimeoutRef = useRef(null);

  // Initialize or restart game
  const startNewGame = useCallback(
    (customSettings = {}) => {
      if (gameOverTimeoutRef.current) {
        clearTimeout(gameOverTimeoutRef.current);
      }

      const gamemode =
        customSettings.gamemode !== undefined ? customSettings.gamemode : state.gamemode;
      const randomize =
        customSettings.randomize !== undefined ? customSettings.randomize : state.randomize;
      const questionCount =
        customSettings.questionCount !== undefined
          ? customSettings.questionCount
          : state.questionCount;
      const customCount =
        customSettings.customCount !== undefined ? customSettings.customCount : state.customCount;
      const timeLimitEnabled =
        customSettings.timeLimitEnabled !== undefined
          ? customSettings.timeLimitEnabled
          : state.timeLimitEnabled;
      const timeLimitHours =
        customSettings.timeLimitHours !== undefined
          ? customSettings.timeLimitHours
          : state.timeLimitHours;
      const timeLimitMinutes =
        customSettings.timeLimitMinutes !== undefined
          ? customSettings.timeLimitMinutes
          : state.timeLimitMinutes;
      const timeLimitSeconds =
        customSettings.timeLimitSeconds !== undefined
          ? customSettings.timeLimitSeconds
          : state.timeLimitSeconds;

      let actualCount = questionCount;
      if (questionCount === 'custom') {
        const parsed = parseInt(customCount, 10);
        actualCount = parsed > 0 ? parsed : QUIZ_CONFIG.DEFAULT_QUESTION_COUNT;
      }

      const quizQuestions = questionService.buildQuizSet({
        topic: topicFilter,
        count: actualCount,
        randomize,
      });

      dispatch({
        type: QUIZ_ACTIONS.INIT_SESSION,
        payload: {
          questions: quizQuestions,
          gamemode,
          randomize,
          questionCount,
          customCount,
          timeLimitEnabled,
          timeLimitHours,
          timeLimitMinutes,
          timeLimitSeconds,
        },
      });
    },
    [
      topicFilter,
      state.gamemode,
      state.randomize,
      state.questionCount,
      state.customCount,
      state.timeLimitEnabled,
      state.timeLimitHours,
      state.timeLimitMinutes,
      state.timeLimitSeconds,
    ]
  );

  // Initial mount
  useEffect(() => {
    startNewGame();
    return () => {
      if (gameOverTimeoutRef.current) {
        clearTimeout(gameOverTimeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Timer interval
  useEffect(() => {
    if (
      state.timeRemaining === null ||
      state.timeRemaining <= 0 ||
      state.gameOver ||
      state.quizFinished
    ) {
      return;
    }

    const timer = setInterval(() => {
      dispatch({ type: QUIZ_ACTIONS.TICK_TIMER });
    }, 1000);

    return () => clearInterval(timer);
  }, [state.timeRemaining, state.gameOver, state.quizFinished]);

  // Alarm sound when time runs out
  useEffect(() => {
    if (state.timeRemaining === 0 && !state.gameOver) {
      playSound('alarm');
    }
  }, [state.timeRemaining, state.gameOver]);

  // Alarm sound on Game Over
  useEffect(() => {
    if (state.gameOver) {
      playSound('alarm');
    }
  }, [state.gameOver]);

  // Handle Answer Check
  const handleCheck = useCallback(() => {
    if (!state.selectedOption || state.showRationale) return;

    const currentQ = state.questions[state.currentIndex];
    if (!currentQ) return;

    const isCorrect = state.selectedOption === currentQ.correct_option;
    if (isCorrect) {
      playSound('correct');
      dispatch({ type: QUIZ_ACTIONS.CHECK_ANSWER });
    } else {
      playSound('wrong');
      dispatch({ type: QUIZ_ACTIONS.CHECK_ANSWER });

      if (state.gamemode && state.lives - 1 <= 0) {
        gameOverTimeoutRef.current = setTimeout(() => {
          dispatch({ type: QUIZ_ACTIONS.TRIGGER_GAME_OVER });
        }, QUIZ_CONFIG.GAME_OVER_DELAY_MS);
      }
    }
  }, [
    state.selectedOption,
    state.showRationale,
    state.questions,
    state.currentIndex,
    state.gamemode,
    state.lives,
  ]);

  const handleNext = useCallback(() => {
    if (gameOverTimeoutRef.current) {
      clearTimeout(gameOverTimeoutRef.current);
    }
    dispatch({ type: QUIZ_ACTIONS.NEXT_QUESTION });
  }, []);

  const handleSkip = useCallback(() => {
    if (state.showRationale) return;
    dispatch({ type: QUIZ_ACTIONS.SKIP_QUESTION });
  }, [state.showRationale]);

  const selectOption = useCallback((optionId) => {
    dispatch({ type: QUIZ_ACTIONS.SELECT_OPTION, payload: optionId });
  }, []);

  const clearOption = useCallback(() => {
    dispatch({ type: QUIZ_ACTIONS.CLEAR_OPTION });
  }, []);

  return {
    ...state,
    currentQuestion: state.questions[state.currentIndex] || null,
    totalQuestions: state.questions.length,
    accuracy:
      state.questions.length > 0
        ? Math.round((state.correctAnswers / state.questions.length) * 100)
        : 0,
    startNewGame,
    handleCheck,
    handleNext,
    handleSkip,
    selectOption,
    clearOption,
  };
}
