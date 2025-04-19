import React from 'react'
import Overlay from './Overlay'
import { LuX } from 'react-icons/lu'

type PropsTypes = {
  closeModal: () => void
  children: React.ReactNode
}

const TransactionModal = ({closeModal, children}: PropsTypes) => {
  return (
    <Overlay>
      <div className='relative w-[750px] bg-white shadow-lg rounded-md p-10'>
        <LuX className='absolute top-4 right-4 text-red-500 text-2xl cursor-pointer' onClick={closeModal}/>
        {children}
      </div>
    </Overlay>
  )
}

export default TransactionModal