import { LastExchangeRate } from "../data/data";
import { TypeWallet } from "../interfaces/typeWallet";

export const convertValueUSD = (value: number, curency: string) => {
  if(curency === 'BRL') return value / LastExchangeRate().valueBRL
  else if(curency === 'PYG') return value / LastExchangeRate().valuePYG
  else return value
}

export const getTotaUSDlWallets = (wallets: TypeWallet[]) : number => {
  return wallets
  .map((w) => convertValueUSD(w.value, w.currency))
  .reduce((p, c) => p + c)
}