import { useState, useCallback } from 'react';
import { storage } from '../services/storage';
import { STORAGE_KEYS } from '../config/constants';

/**
 * Custom hook to manage favorite mnemonics bookmark state with localStorage persistence
 */
export function useBookmarks() {
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    return storage.get(STORAGE_KEYS.FAVORITE_MNEMONICS, []);
  });

  const isBookmarked = useCallback((id) => {
    return bookmarkedIds.includes(id);
  }, [bookmarkedIds]);

  const toggleBookmark = useCallback((id) => {
    setBookmarkedIds((prev) => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter(item => item !== id) : [...prev, id];
      storage.set(STORAGE_KEYS.FAVORITE_MNEMONICS, updated);
      return updated;
    });
  }, []);

  return {
    bookmarkedIds,
    isBookmarked,
    toggleBookmark,
  };
}
