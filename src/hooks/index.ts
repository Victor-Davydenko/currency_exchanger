import {useEffect, useState} from 'react';
import {ISelectOption, RatesResponseItem} from '@/interfaces/interfaces';
import {getCurrentDate, removeDashesFromDateString} from '@/utils/utils';
import {getRates} from '@/http';

const currentDate = getCurrentDate()
interface IFormState {
  date: string,
  currencyToSell: string,
  currencyToBuy: string,
  amountToSell: string,
  amountToBuy: string,
  rate: number
}
const initialFormState: IFormState = {
  date: currentDate,
  currencyToSell: 'UAH',
  currencyToBuy: 'UAH',
  amountToSell: '0',
  amountToBuy: '0',
  rate: 1
}
export const useConverter = () => {
  const [formState, setFormState] = useState(initialFormState)
  const [rates, setRates] = useState<RatesResponseItem[]>([])
  const availableCurrencies: ISelectOption[] = [{value: 'UAH', label: 'UAH'}, ...rates.map((currency) => ({value: currency.cc, label: currency.cc}))]

  useEffect(() => {
    const date = removeDashesFromDateString(formState.date)
    getRates(date)
      .then((rates) => {
        setRates(rates)
        const currencyToSellRate = rates.find((currency) => currency.cc === formState.currencyToSell)?.rate || 1
        const currencyToBuyRate = rates.find((currency) => currency.cc === formState.currencyToBuy)?.rate || 1
        setFormState((prevState) => ({
          ...prevState,
          rate: currencyToSellRate / currencyToBuyRate
        }))
      })
  },[formState.date])
  useEffect(() => {
    const currencyToSellRate = rates.find((currency) => currency.cc === formState.currencyToSell)?.rate || 1
    const currencyToBuyRate = rates.find((currency) => currency.cc === formState.currencyToBuy)?.rate || 1
    setFormState((prevState) => ({
      ...prevState,
      rate: currencyToSellRate / currencyToBuyRate
    }))
  }, [formState.currencyToBuy, formState.currencyToSell])
  useEffect(() => {
    setFormState((prevState) => ({
      ...prevState,
      amountToBuy: (+prevState.amountToSell * prevState.rate).toFixed(2)
    }))
  }, [formState.currencyToSell, formState.amountToSell, formState.rate]);
  useEffect(() => {
    setFormState((prevState) => ({
      ...prevState,
      amountToSell: (+prevState.amountToBuy * (1 / prevState.rate)).toFixed(2)
    }))
  }, [formState.currencyToBuy, formState.amountToBuy, formState.rate]);

  return {
    formState,
    availableCurrencies,
    setFormState
  }
}