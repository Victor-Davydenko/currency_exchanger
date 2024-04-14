import {format} from 'date-fns'

export const getCurrentDate = () => {
  const date = new Date()
  return format(new Date(), 'yyyy-MM-dd')
}

export const reverseDate = (date: string) => date.split('-').reverse().join('-')

export const removeDashesFromDateString = (date: string) => date.split('-').join('')

export const getMaxAndMinDate = (range: number) => {
  const maxDate = format( new Date(), 'yyyy-MM-dd')
  const minDate = new Date();
  minDate.setDate(minDate.getDate() - range)
  const minDateString = format(minDate, 'yyyy-MM-dd')
  return {
    maxDate,
    minDateString
  }
}