import React, { useState } from 'react'
import { format } from 'date-fns'
import { Head, Link, router } from "@inertiajs/react"
import MainLayout from '../../layout/MainLayout'
import IncomeTableHeader from '../../components/IncomeTableHeader'
import { useIncomeTemp } from '../../store/useIncomeTemp'
import ConfirmationModal from '../../components/modals/ConfirmationModal'
import { toast } from 'sonner'
import Pagination from '../../components/Pagination'

type PropsTypes = {
  title: string
  data: Pagination<IncomeResponseTypes>
}

const Incomes = ({ title, data }: PropsTypes) => {
  const { storeData } = useIncomeTemp()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [incomeId, setOpenModalDelete] = useState<number | null>(null)

  const deleteIncome = () => {
    setIsLoading(true)
    router.delete(`/admin/incomes/${incomeId}`, {
      onSuccess: () => {
        setIsLoading(false)
        toast.success("Income has deleted")
        setOpenModalDelete(null)
      }
    })
  }

  const handleClickDelete = (value: number) => {
    setOpenModalDelete(value)
  }

  console.log(data)

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <MainLayout>
        <section className='p-10'>
          <IncomeTableHeader />
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
                {data.data.map((tr: IncomeResponseTypes, index: number) => (
                  <tr className="bg-white border-b border-gray-200">
                    <td scope="row" className="px-6 py-4">
                      {(index + 1) + (data.current_page - 1) * 10}
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
                      <button className='border-none outline-none cursor-pointer text-blue-500 hover:text-blue-600 duration-200 hover:ring-0 mr-2' onClick={() => storeData(tr)}>Edit</button>
                      <button className='border-none outline-none cursor-pointer text-red-500 hover:text-red-600 duration-200 hover:ring-0' onClick={() => handleClickDelete(tr.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {data.data.length < 1 && (
            <p className='text-center text-sm text-gray-400 mt-10'>Income transaction didn't created yet for currently</p>
          )}

          {data.data.length > 0 && (
            <div className='flex-center mt-10'>
              <Pagination current_page={data.current_page} last_page={data.last_page}/>
            </div>
          )}
        </section>
      </MainLayout>
      {incomeId && (
        <ConfirmationModal
          isLoading={isLoading}
          text="Are you sure want to remove this transaction?"
          handleSubmit={deleteIncome}
          closeModal={() => setOpenModalDelete(null)} />
      )}
    </>
  )
}

export default Incomes