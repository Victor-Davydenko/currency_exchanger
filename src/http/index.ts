import {RatesResponseItem} from '@/interfaces/interfaces';
import {CURRENCY_RATES_URL} from '@/constants/constants';

export const getRates = async (date: string):Promise<RatesResponseItem[]> => {
  const response = await fetch(`${CURRENCY_RATES_URL}${date}`)
  if (!response.ok) {
    throw new Error('something went wrong!')
  }
  return await response.json()
}