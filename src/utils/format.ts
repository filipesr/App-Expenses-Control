
export const CurrFormat = (currency: string = 'USD') => Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency
})

export const usdFormat = CurrFormat()

export const pygFormat = CurrFormat('PYG')

export const brlFormat = CurrFormat('BRL')

const D0 = (d: number) => d <= 0 ? '' : `${ d < 10 ? '0' : ''}${d}`
const Sep = (d: string, sep: string = '.') => d.length == 0 ? '' : `${sep}${d}`
export const DateFormat = (day: number = 0, month: number = 0, year: number = 0) => `${D0(day)}${Sep(D0(month))}${Sep(D0(year))}`
