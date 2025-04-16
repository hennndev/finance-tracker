import React from 'react'
import { format } from 'date-fns'
import { Head } from "@inertiajs/react"
import MainLayout from '../../layout/MainLayout'
import IncomeTableHeader from '../../components/IncomeTableHeader'

type PropsTypes = {
  title: string
  data: any
}

const Incomes = ({title, data}: PropsTypes) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MainLayout>
        <section className='p-10'>
          <IncomeTableHeader/>

          {/* table */}
          <div className="relative overflow-x-auto mt-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-600 uppercase bg-gray-50 font-medium">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Payment
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Transaction date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((tr: any, index: number) => (
                  <tr className="bg-white border-b border-gray-200">
                    <td scope="row" className="px-6 py-4">
                      {index+1}
                    </td>
                    <td scope="row" className="px-6 py-4 whitespace-nowrap">
                      {tr.name}
                    </td>
                    <td className="px-6 py-4">
                      ${tr.amount}
                    </td>
                    <td className="px-6 py-4">
                      {tr.category}
                    </td>
                    <td className="px-6 py-4 capitalize">
                      <p className='bg-purple-100 px-1 rounded-md text-center w-max'>{tr.payment}</p>
                    </td>
                    <td className="px-6 py-4">
                      {format(tr.transaction_date, "dd/MM/yyyy, HH:mm")}
                    </td>
                    <td className="px-6 py-4">
                      <button className='border-none outline-none cursor-pointer text-blue-500 hover:text-blue-600 duration-200 hover:ring-0 mr-2'>Edit</button>
                      <button className='border-none outline-none cursor-pointer text-red-500 hover:text-red-600 duration-200 hover:ring-0'>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </section>
      </MainLayout>
    </>
  )
}

export default Incomes