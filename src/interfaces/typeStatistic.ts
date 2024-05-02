export type TypeStatistic = {
  month: number,
  year: number,
  values: {
    day: number,
    total: number,
    currency: string,
  }[]
}