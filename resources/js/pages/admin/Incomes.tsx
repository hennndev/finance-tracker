import React from 'react'
import { Head } from "@inertiajs/react"
import MainLayout from '../../layout/MainLayout'
import { format } from "date-fns"
import { usePage }from '@inertiajs/react'
import { LuChevronDown, LuPlus, LuDownload } from 'react-icons/lu'


const Incomes = () => {
  return (
    <>
      <Head>
        <title>Incomes</title>
      </Head>

      <MainLayout>
        <section className='p-10'>
          <div className='flex flex-col space-y-3'>
            <h1 className='text-lg text-gray-700 font-medium'>Incomes Transaction</h1>
            <div className='flex-between'>
              <div className='flexx space-x-3'>
                <button className='border-none outline-none bg-purple-500 hover:bg-purple-600 duration-200 py-2 px-4 rounded-md text-white cursor-pointer text-sm flexx'>
                  <LuPlus className='mr-1.5 text-lg text-white'/>
                  Add Income
                </button>
                <button className='group border border-purple-500 hover:border-transparent outline-none bg-transparent hover:bg-purple-600 duration-200 py-2 px-4 rounded-md text-gray-700 hover:text-white cursor-pointer text-sm flexx'>
                  <LuDownload className='mr-1.5 text-lg text-gray-700 group-hover:text-white'/>
                  Export PDF
                </button>
              </div>
              <div className='flexx space-x-5'>
                <button className='flexx border-none outline-none text-base text-gray-500 cursor-pointer'>
                  Filter by
                  <LuChevronDown className='ml-1'/>
                </button>
                <button className='flexx border-none outline-none text-base text-gray-500 cursor-pointer'>
                  Sort by
                  <LuChevronDown className='ml-1'/>
                </button>
              </div>
            </div>
            <h3 className='text-gray-500 text-sm mt-5'>{format(new Date(), "ddMM/yyyy")}</h3>
          </div>

          {/* table */}
          <div className="relative overflow-x-auto mt-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-600 uppercase bg-gray-50 font-medium">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Payment
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-gray-200">
                  <td scope="row" className="px-6 py-4">
                    1
                  </td>
                  <td scope="row" className="px-6 py-4 whitespace-nowrap">
                    Work Salary
                  </td>
                  <td className="px-6 py-4">
                    $7500
                  </td>
                  <td className="px-6 py-4">
                    Works
                  </td>
                  <td className="px-6 py-4">
                    Debit Card
                  </td>
                  <td className="px-6 py-4">
                    <button className='border-none outline-none cursor-pointer text-blue-500 hover:text-blue-600 duration-200 hover:ring-0 mr-2'>Edit</button>
                    <button className='border-none outline-none cursor-pointer text-red-500 hover:text-red-600 duration-200 hover:ring-0'>Delete</button>
                  </td>
                </tr>
                <tr className="bg-white border-b border-gray-200">
                  <td scope="row" className="px-6 py-4">
                    1
                  </td>
                  <td scope="row" className="px-6 py-4 whitespace-nowrap">
                    Work Salary
                  </td>
                  <td className="px-6 py-4">
                    $7500
                  </td>
                  <td className="px-6 py-4">
                    Works
                  </td>
                  <td className="px-6 py-4">
                    Debit Card
                  </td>
                  <td className="px-6 py-4">
                    <button className='border-none outline-none cursor-pointer text-blue-500 hover:text-blue-600 duration-200 hover:ring-0 mr-2'>Edit</button>
                    <button className='border-none outline-none cursor-pointer text-red-500 hover:text-red-600 duration-200 hover:ring-0'>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>
      </MainLayout>
    </>
  )
}

export default Incomes