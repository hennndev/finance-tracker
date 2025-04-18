import { create } from "zustand"

type IncomeTempStoreTypes = {
  dataTemp: IncomeResponseTypes | null
  storeData: (data: IncomeResponseTypes) => void
  deleteData: () => void
}

export const useIncomeTemp = create<IncomeTempStoreTypes>()((set) => ({
  dataTemp: null,
  storeData: (data: IncomeResponseTypes) => set(() => ({
    dataTemp: data
  })),
  deleteData: () => set(() => ({
    dataTemp: null
  }))
}))