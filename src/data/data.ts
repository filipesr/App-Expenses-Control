import { TypeExchangeRate } from "../interfaces/typeExchangeRate";
import { TypeWallet } from "../interfaces/typeWallet";

export const wallets:TypeWallet[] = [
  {
    description: 'Banco Nubank',
    value: 12310,
    currency: 'BRL',
    incoming: [
      {
        day: 5,
        month: 5,
        year: 2024,
        description: 'Salário',
        value: 12345,
      },
    ],
    outcoming: [
      {
        day: 1,
        month: 5,
        year: 2024,
        description: 'Água 01',
        value: 5,
      },
      {
        day: 2,
        month: 5,
        year: 2024,
        description: 'Água 02',
        value: 5,
      },
      {
        day: 3,
        month: 5,
        year: 2024,
        description: 'Água 03',
        value: 5,
      },
      {
        day: 4,
        month: 5,
        year: 2024,
        description: 'Água 04',
        value: 5,
      },
      {
        day: 5,
        month: 5,
        year: 2024,
        description: 'Água 05',
        value: 5,
      },
      {
        day: 6,
        month: 5,
        year: 2024,
        description: 'Água 06',
        value: 5,
      },
      {
        day: 7,
        month: 5,
        year: 2024,
        description: 'Água 07',
        value: 5,
      },
    ],
  },
  {
    description: 'Caixa R$',
    value: 10,
    currency: 'BRL',
    incoming: [
      {
        day: 5,
        month: 5,
        year: 2024,
        description: 'Salário',
        value: 45,
      },
    ],
    outcoming: [
      {
        day: 1,
        month: 5,
        year: 2024,
        description: 'Água 01',
        value: 5,
      },
      {
        day: 2,
        month: 5,
        year: 2024,
        description: 'Água 02',
        value: 5,
      },
      {
        day: 3,
        month: 5,
        year: 2024,
        description: 'Água 03',
        value: 5,
      },
      {
        day: 4,
        month: 5,
        year: 2024,
        description: 'Água 04',
        value: 5,
      },
      {
        day: 5,
        month: 5,
        year: 2024,
        description: 'Água 05',
        value: 5,
      },
      {
        day: 6,
        month: 5,
        year: 2024,
        description: 'Água 06',
        value: 5,
      },
      {
        day: 7,
        month: 5,
        year: 2024,
        description: 'Água 07',
        value: 5,
      },
    ],
  },
  {
    description: 'Banco Familiar',
    value: 10000,
    currency: 'PYG',
    incoming: [
      {
        day: 5,
        month: 5,
        year: 2024,
        description: 'Salário',
        value: 45000,
      },
    ],
    outcoming: [
      {
        day: 1,
        month: 5,
        year: 2024,
        description: 'Água 01',
        value: 5000,
      },
    ],
  },
  {
    description: 'Caixa PYG',
    value: 10000,
    currency: 'PYG',
    incoming: [
      {
        day: 5,
        month: 5,
        year: 2024,
        description: 'Salário',
        value: 45000,
      },
    ],
    outcoming: [
      {
        day: 1,
        month: 5,
        year: 2024,
        description: 'Água 01',
        value: 5000,
      },
    ],
  },
  {
    description: 'Caixa USD',
    value: 400,
    currency: 'USD',
    incoming: [
      {
        day: 5,
        month: 5,
        year: 2024,
        description: 'Salário',
        value: 450,
      },
    ],
    outcoming: [
      {
        day: 1,
        month: 5,
        year: 2024,
        description: 'Água 01',
        value: 50,
      },
    ],
  },
  {
    description: 'Cartão de Crédito NuBank',
    value: 50,
    currency: 'BRL',
    incoming: [
      {
        day: 1,
        month: 5,
        year: 2024,
        description: 'Água 01',
        value: 50,
      },],
    outcoming: [
    ],
  },
]

export const exchangeRates: TypeExchangeRate[] = [
  {
    day: 1,
    month: 5,
    year: 2024,
    valueBRL: 5.24,
    valuePYG: 7329,
  },
]

export const LastExchangeRate = (): TypeExchangeRate => exchangeRates[0]