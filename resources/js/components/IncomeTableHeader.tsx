import React, { useState } from 'react'
import { format } from 'date-fns'
import { toast } from 'sonner'
import IncomeModal from './modals/IncomeModal'
import { useIncomeTemp } from '../store/useIncomeTemp'
import { LuChevronDown, LuPlus, LuDownload } from 'react-icons/lu'

const IncomeTableHeader = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const { dataTemp, deleteData } = useIncomeTemp()

  const handleOpenModal = () => setOpenModal(true) 
  const handleCloseModal = () => {
    setOpenModal(false)
    deleteData()
  } 
  
  return (
    <>
      <div className='flex flex-col space-y-3'>
        <h1 className='text-lg text-gray-700 font-medium'>Incomes Transaction</h1>
        <div className='flex-between'>
          <div className='flexx space-x-3'>
            <button className='border-none outline-none bg-purple-500 hover:bg-purple-600 duration-200 py-2 px-4 rounded-md text-white cursor-pointer text-sm flexx' onClick={handleOpenModal}>
              <LuPlus className='mr-1.5 text-lg text-white' />
              Add Income
            </button>
            <button className='group border border-purple-500 hover:border-transparent outline-none bg-transparent hover:bg-purple-600 duration-200 py-2 px-4 rounded-md text-gray-700 hover:text-white cursor-pointer text-sm flexx' onClick={() => toast.success("Hello World")}>
              <LuDownload className='mr-1.5 text-lg text-gray-700 group-hover:text-white' />
              Export PDF
            </button>
          </div>
          <div className='flexx space-x-5'>
            <button className='flexx border-none outline-none text-base text-gray-500 cursor-pointer'>
              Filter by
              <LuChevronDown className='ml-1' />
            </button>
            <button className='flexx border-none outline-none text-base text-gray-500 cursor-pointer'>
              Sort by
              <LuChevronDown className='ml-1' />
            </button>
          </div>
        </div>
        <h3 className='text-gray-500 text-sm mt-5'>{format(new Date(), "ddMM/yyyy")}</h3>
      </div>
      {(openModal || dataTemp) && (
        <IncomeModal closeModal={handleCloseModal}/>
      )}
    </>
  )
}

export default IncomeTableHeader