/**
 * Safe LocalStorage abstraction service
 * Handles parsing, serialization, and private browsing / quota exceptions cleanly.
 */

export const storage = {
  get(key, defaultValue = null) {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : defaultValue;
    } catch (err) {
      console.warn(`[storage] Error reading key "${key}":`, err);
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (err) {
      console.warn(`[storage] Error writing key "${key}":`, err);
      return false;
    }
  },

  remove(key) {
    try {
      window.localStorage.removeItem(key);
      return true;
    } catch (err) {
      console.warn(`[storage] Error removing key "${key}":`, err);
      return false;
    }
  },
};
