import { nepaliWords, ones, teens, tens } from './numberTexts'
export const digitToWordNe = (n: number): string => {
  if (n < 100) {
    return nepaliWords[n]
  } else if (n < 1000) {
    // Handle numbers in hundreds
    const hundreds = Math.floor(n / 100)
    const remainder = n % 100
    return nepaliWords[hundreds] + ' सय' + (remainder !== 0 ? ' ' + digitToWordNe(remainder) : '')
  } else if (n < 100000) {
    // Handle numbers in thousands
    const thousands = Math.floor(n / 1000)
    const remainder = n % 1000
    return digitToWordNe(thousands) + ' हजार' + (remainder !== 0 ? ' ' + digitToWordNe(remainder) : '')
  } else if (n < 10000000) {
    // Handle numbers in millions
    const millions = Math.floor(n / 100000)
    const remainder = n % 100000
    return digitToWordNe(millions) + ' लाख' + (remainder !== 0 ? ' ' + digitToWordNe(remainder) : '')
  } else if (n < 1000000000) {
    // Handle numbers in billions
    const billions = Math.floor(n / 10000000)
    const remainder = n % 10000000
    return digitToWordNe(billions) + ' करोड' + (remainder !== 0 ? ' ' + digitToWordNe(remainder) : '')
  } else if (n < 1000000000000) {
    // Handle numbers in trillions
    const trillions = Math.floor(n / 1000000000)
    const remainder = n % 1000000000
    return digitToWordNe(trillions) + ' अरब' + (remainder !== 0 ? ' ' + digitToWordNe(remainder) : '')
  }

  return 'Number not supported'
}

export const digitToWordEn = (num: number): string => {
  if (num < 0) return 'Negative ' + digitToWordEn(-num)
  if (num < 10) return ones[num]
  if (num < 20) return teens[num - 11]
  if (num < 100) return tens[Math.floor(num / 10) - 1] + (num % 10 !== 0 ? ' ' + ones[num % 10] : '')
  if (num < 1000)
    return ones[Math.floor(num / 100)] + ' Hundred' + (num % 100 !== 0 ? ' ' + digitToWordEn(num % 100) : '')
  if (num < 1000000)
    return (
      digitToWordEn(Math.floor(num / 1000)) + ' Thousand' + (num % 1000 !== 0 ? ' ' + digitToWordEn(num % 1000) : '')
    )
  if (num < 1000000000)
    return (
      digitToWordEn(Math.floor(num / 1000000)) +
      ' Million' +
      (num % 1000000 !== 0 ? ' ' + digitToWordEn(num % 1000000) : '')
    )
  if (num < 1000000000000)
    return (
      digitToWordEn(Math.floor(num / 1000000000)) +
      ' Billion' +
      (num % 1000000000 !== 0 ? ' ' + digitToWordEn(num % 1000000000) : '')
    )
  if (num < 1000000000000000)
    return (
      digitToWordEn(Math.floor(num / 1000000000000)) +
      ' Trillion' +
      (num % 1000000000000 !== 0 ? ' ' + digitToWordEn(num % 1000000000000) : '')
    )

  return 'Number out of range'
}
