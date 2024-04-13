export interface IRoute {
    title: string,
    path: string
}

export interface ISelectOption {
    label: string
    value: string
}

export interface HistoryData {
    date: string
    amountToSell: string
    amountToBuy: string
}

export interface RatesResponseItem {
    r030: number
    txt: string
    rate: number
    cc: string
    exchangedate: string
}

export interface HistoryItem {
    date: string,
    amountToSell: string,
    amountToBuy: string
}
export interface initialStore {
    history: HistoryItem[]
    addToHistory: (item: HistoryItem) => void
    clearHistory: () => void,
}