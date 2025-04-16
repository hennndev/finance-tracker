import React from 'react'
import { LuSearch, LuBellRing, LuChevronDown } from 'react-icons/lu'

const Header = () => {
  return (
    <header className='w-full border-b border-gray-100 flex-between py-4 px-5'>
      <div className='flexx w-[400px]'>
        <LuSearch className='text-gray-400 mr-3 text-lg'/>
        <input type="text" placeholder='Search...' className='border-none outline-none ring-0 focus:ring-0 flex-1 text-gray-500'/>
      </div>

      <div className='flexx space-x-5'>
        <LuBellRing className='text-gray-400 text-lg'/>

        <div className='flexx space-x-2'>
          <div className='w-7 h-7 rounded-full'>
            <img src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" alt="avatar" className='w-full h-full rounded-full'/>
          </div>
          <p className='text-[15px] text-gray-500'>Hendra Adri</p>
          <LuChevronDown className='text-gray-400 text-lg'/>
        </div>
      </div>
    </header>
  )
}

export default Header