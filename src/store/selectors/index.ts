import {initialStore} from '@/interfaces/interfaces';

export const addToHistorySelector = (state: initialStore) => state.addToHistory
export const clearHistorySelector = (state: initialStore) => state.clearHistory
export const historySelector = (state: initialStore) => state.history