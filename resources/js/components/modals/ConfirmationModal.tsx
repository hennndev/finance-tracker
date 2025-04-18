import React from 'react'
import clsx from 'clsx'
import Overlay from './Overlay'
import { LuTriangleAlert } from 'react-icons/lu'

type PropsTypes = {
  text: string
  isLoading: boolean
  handleSubmit: () => void
  closeModal: () => void
}

const ConfirmationModal = ({ text, isLoading, handleSubmit, closeModal }: PropsTypes) => {
  return (
    <Overlay>
      <div className='w-[400px] bg-white shadow-md p-7 rounded-md'>
        <div className='flex-center mb-3'>
          <LuTriangleAlert className='text-red-500 text-5xl'/>
        </div>
        <p className='text-gray-700 mb-7 text-xl text-center'>{text}</p>
        <div className='flex-center space-x-3'>
          <button type="button" disabled={isLoading} onClick={handleSubmit} className={clsx("duration-200 text-white py-1.5 px-3 border-none outline-none ring-0 rounded-md", isLoading ? "bg-gray-400 hover:bg-gray-400 cursor-default" : "bg-purple-500 hover:bg-purple-600 cursor-pointer")}>
            {isLoading ? "Loading" : "Submit"}
          </button>
          <button type="button" disabled={isLoading} onClick={closeModal} className={clsx("bg-gray-400 duration-200 text-white py-1.5 px-3 border-none outline-none ring-0 rounded-md", isLoading ? "cursor-default" : "cursor-pointer")}>
            Close
          </button>
        </div>
      </div>
    </Overlay>
  )
}

export default ConfirmationModal