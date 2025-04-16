import React from 'react'
import { LuX } from 'react-icons/lu'
import IncomeForm from '../forms/IncomeForm'

type PropsTypes = {
  closeModal: () => void
}

const IncomeModal = ({closeModal}: PropsTypes) => {
  return (
    <div className='fixed bg-[rgba(0,0,0,0.5)] top-0 right-0 left-0 bottom-0 z-[999] flex-center'>
      <div className='relative w-[750px] bg-white shadow-lg rounded-md p-10'>
        <LuX className='absolute top-4 right-4 text-red-500 text-2xl cursor-pointer' onClick={closeModal}/>
        <IncomeForm closeModal={closeModal}/>
      </div>
    </div>
  )
}

export default IncomeModal