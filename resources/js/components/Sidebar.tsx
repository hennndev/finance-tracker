import React from 'react'
import clsx from "clsx"
import { usePage, Link } from '@inertiajs/react'
import { IoLogoAmplify } from "react-icons/io5"
import { sidebarItems } from '../constants/sidebarItems'

const Sidebar = () => {
  const page = usePage()
  const currentUrl = page.url

  return (
    <aside className='flex flex-col w-[230px] h-screen sticky top-0 border-r border-gray-200 bg-white'>
      <div className='flex-center py-4'>
        <IoLogoAmplify className='text-3xl mr-2 text-purple-500' />
        <p className='text-purple-500 font-normal text-2xl'>Amplitudo</p>
      </div>
      <div className='flex flex-col space-y-2 mt-10'>
        {sidebarItems.map(({Icon, ...item}) => (
          <Link href={item.link} className={clsx("group flexx pl-10 space-x-2 mx-2 py-3 rounded-md hover:bg-purple-100 cursor-pointer text-gray-500", currentUrl === item.link ? "bg-purple-100" : "")}>
            <Icon className={clsx("text-xl group-hover:text-[#222]", currentUrl === item.link ? "text-[#222]" : "")} />
            <p className={clsx("text-md group-hover:text-[#222] group-hover:font-medium", currentUrl === item.link ? "font-medium text-[#222]" : "font-normal")}>{item.name}</p>
          </Link>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar