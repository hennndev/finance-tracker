/// <reference types="vite/client" />



interface FlashProps {
  flash: {
    success?: string
    error?: string
  }
}

type Pagination<T> = {
  data: T[]
  current_page: number
  last_page: number
  per_page: number
  total: number
  links: {
    url: string | null
    label: string
    active: boolean
  }[]
}



interface TransactionTypes {
  name: string
  category: string
  amount: number
  payment: string
  description: string
  transaction_date: Date
}

type TransactionResponseTypes = TransactionTypes & {
  id: number
}