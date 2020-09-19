export const date2string: (date: Date) => string = date => {
  const year = date.getFullYear()
  let month = String(date.getMonth() + 1)
  let day = String(date.getDate())

  if (month.length === 1) {
    month = '0' + month
  }
  if (day.length === 1) {
    day = '0' + day
  }

  return `${year}${month}${day}`
}