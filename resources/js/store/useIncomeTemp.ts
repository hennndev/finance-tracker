import { create } from "zustand"

type IncomeTempStoreTypes = {
  dataTemp: TransactionResponseTypes | null
  storeData: (data: TransactionResponseTypes) => void
  deleteData: () => void
}

export const useIncomeTemp = create<IncomeTempStoreTypes>()((set) => ({
  dataTemp: null,
  storeData: (data: TransactionResponseTypes) => set(() => ({
    dataTemp: data
  })),
  deleteData: () => set(() => ({
    dataTemp: null
  }))
}))