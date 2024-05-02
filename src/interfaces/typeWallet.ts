import { TypeAmount } from "./typeAmount"

export type TypeWallet = {
  description: string,
  value: number,
  currency: string,
  incoming: TypeAmount[],
  outcoming: TypeAmount[],
}