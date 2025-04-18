import React from 'react'

const Overlay = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='fixed bg-[rgba(0,0,0,0.5)] top-0 right-0 left-0 bottom-0 z-[999] flex-center'>
      {children}
    </div>
  )
}

export default Overlay