import React from 'react'
import Overlay from './Overlay'
import { LuX } from 'react-icons/lu'
import IncomeForm from '../forms/IncomeForm'

type PropsTypes = {
  closeModal: () => void
}

const IncomeModal = ({closeModal}: PropsTypes) => {
  return (
    <Overlay>
      <div className='relative w-[750px] bg-white shadow-lg rounded-md p-10'>
        <LuX className='absolute top-4 right-4 text-red-500 text-2xl cursor-pointer' onClick={closeModal}/>
        <IncomeForm closeModal={closeModal}/>
      </div>
    </Overlay>
  )
}

export default IncomeModal