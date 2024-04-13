export const getCurrentDate = () => {
  const date = new Date()
  return date.toLocaleDateString().split('.').reverse().join('-')
}

export const reverseDate = (date: string) => date.split('-').reverse().join('-')

export const removeDashesFromDateString = (date: string) => date.split('-').join('')

export const getMaxAndMinDate = (range: number) => {
  const maxDate = new Date().toISOString().split('T')[0]
  const minDate = new Date();
  minDate.setDate(minDate.getDate() - range)
  const minDateString = minDate.toISOString().split('T')[0];
  return {
    maxDate,
    minDateString
  }
}