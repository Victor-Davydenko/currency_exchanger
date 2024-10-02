import { create } from 'zustand'
import {HistoryItem, initialStore} from '@/interfaces/interfaces';

const useConverterStore = create<initialStore>((set) => ({
  history: [],
  addToHistory: (item: HistoryItem) => set(state => ({
    history: [item, ...state.history].slice(0, 10)
  })),
  clearHistory: () => set(state => ({
    history: []
  }))
}))

export default useConverterStore