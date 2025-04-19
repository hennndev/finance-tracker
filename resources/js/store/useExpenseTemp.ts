import { create } from "zustand"

type ExpenseTempStoreTypes = {
  dataTemp: TransactionResponseTypes | null
  storeData: (data: TransactionResponseTypes) => void
  deleteData: () => void
}

export const useExpenseTemp = create<ExpenseTempStoreTypes>()((set) => ({
  dataTemp: null,
  storeData: (data: TransactionResponseTypes) => set(() => ({
    dataTemp: data
  })),
  deleteData: () => set(() => ({
    dataTemp: null
  })) 
}))