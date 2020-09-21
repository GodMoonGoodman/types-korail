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

export const string2dateString: (YMD: string) => string = YMD => {
  const year = YMD.substr(0,4)
  const month = YMD.substr(4,2)
  const date = YMD.substr(6,2)
  return `${month}월 ${date}일`
}