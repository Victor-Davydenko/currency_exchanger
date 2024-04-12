export const getCurrentDate = () => {
  const date = new Date()
  return date.toLocaleDateString().split('.').reverse().join('-')
}

export const reverseDate = (date: string) => date.split('-').reverse().join('-')

export const removeDashesFromDateString = (date: string) => date.split('-').join('')