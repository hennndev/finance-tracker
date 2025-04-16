import React from 'react'
import { IoLogoAmplify } from "react-icons/io5";
import { LuBlocks, LuBriefcaseBusiness, LuTrendingUp, LuChartSpline, LuTrendingDown, LuHousePlus } from "react-icons/lu"
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='flex'>
      <Sidebar/>

      <section className='flex flex-1 flex-col'>
        <Header/>
        {children}
      </section>
    </main>
  )
}

export default MainLayout