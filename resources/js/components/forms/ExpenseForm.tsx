import React, { useEffect } from 'react'
import clsx from 'clsx'
import { format } from 'date-fns'
import { toast } from 'sonner'
import { useForm } from '@inertiajs/react'
import { useExpenseTemp } from '../../store/useExpenseTemp'

type PropsTypes = {
  closeModal: () => void
}

const ExpenseForm = ({ closeModal }: PropsTypes) => {

  const { data, setData, post, put, processing, reset, errors } = useForm({
    name: "",
    category: "",
    amount: "",
    description: "",
    transaction_date: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
    payment: ""
  })

  const { dataTemp } = useExpenseTemp()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(!dataTemp) {
      post('/admin/expenses', {
        onSuccess: () => {
          reset()
          closeModal()
          toast.success("New expense has added")
        },
      })
    } else {
      if(dataTemp.name === data.name && dataTemp.category === data.category && dataTemp.amount.toString() === data.amount && dataTemp.description === data.description && new Date(dataTemp.transaction_date).toDateString() === new Date(data.transaction_date).toDateString() && dataTemp.payment === data.payment) {
        toast.warning('No data has changed')
        return
      }
      put(`/admin/expenses/${dataTemp.id}`, {
        onSuccess: () => {
          reset()
          closeModal()
          toast.success("Expense data has updated")
        }
      })
    }
  }

  useEffect(() => {
    if(dataTemp) {
      setData("name", dataTemp.name)
      setData("category", dataTemp.category)
      setData("amount", dataTemp.amount.toString())
      setData("payment", dataTemp.payment)
      setData("description", dataTemp.description)
      setData("transaction_date", format(new Date(dataTemp.transaction_date), "yyyy-MM-dd'T'HH:mm"))
    }
  }, [dataTemp])

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-gray-700 text-xl font-medium mb-5'>Add new expense</h2>
      <div className='flexx space-x-5'>
        {/* income name */}
        <div className='flex flex-1 flex-col space-y-2 mb-4'>
          <label htmlFor="name" className='text-gray-700'>Expense name</label>
          <input
            type="text"
            id='name'
            disabled={processing}
            value={data.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData("name", e.target.value)}
            placeholder='Type income name here...'
            className='border border-gray-300 outline-none rounded-md p-3 text-gray-500 focus:ring focus:ring-purple-500' />
          {errors.name && <p className='text-red-400 text-sm'>{errors.name}</p>}
        </div>
        {/* income amount */}
        <div className='flex flex-1 flex-col space-y-2 mb-4'>
          <label htmlFor="amount" className='text-gray-700'>Expense amount</label>
          <input
            type="number"
            id='amount'
            disabled={processing}
            value={data.amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData("amount", e.target.value)}
            placeholder='Type income amount here...'
            className='border border-gray-300 outline-none rounded-md p-3 text-gray-500 focus:ring focus:ring-purple-500' />
          {errors.amount && <p className='text-red-400 text-sm'>{errors.amount}</p>}
        </div>
      </div>
      <div className='flexx space-x-5'>
        {/* income category */}
        <div className='flex flex-1 flex-col space-y-2 mb-4'>
          <label htmlFor="category" className='text-gray-700'>Expense category</label>
          <select
            id='category'
            disabled={processing}
            value={data.category}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setData("category", e.target.value)}
            className='border border-gray-300 outline-none rounded-md p-3 text-gray-500 focus:ring focus:ring-purple-500'>
            <option value="">Choose income category</option>
            <option value="works">Works</option>
            <option value="entertain">Entertain</option>
            <option value="rent">Rent</option>
            <option value="selling">Selling</option>
            <option value="gifts">Gifts</option>
            <option value="bonus">Bonus</option>
          </select>
          {errors.category && <p className='text-red-400 text-sm'>{errors.category}</p>}
        </div>
        {/* income transaction date */}
        <div className='flex flex-1 flex-col space-y-2 mb-4'>
          <label htmlFor="transaction_date" className='text-gray-700'>Expense transaction date</label>
          <input
            type="datetime-local"
            id='transaction_date'
            disabled={processing}
            value={data.transaction_date}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData("transaction_date", e.target.value)}
            className='border border-gray-300 outline-none rounded-md p-3 text-gray-500 focus:ring focus:ring-purple-500' />
          {errors.transaction_date && <p className='text-red-400 text-sm'>{errors.transaction_date}</p>}
        </div>
      </div>
      {/* income payment */}
      <div className='flex flex-1 flex-col space-y-2 mb-4'>
        <label htmlFor="payment" className='text-gray-700'>Expense payment</label>
        <select
          id='payment'
          disabled={processing}
          value={data.payment}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setData("payment", e.target.value)}
          className='border border-gray-300 outline-none rounded-md p-3 text-gray-500 focus:ring focus:ring-purple-500'>
          <option value="">Choose income payment</option>
          <option value="cash">Cash</option>
          <option value="debit">Debit</option>
          <option value="credit">Credit</option>
          <option value="e-wallet">E-wallet</option>
          <option value="coin">Coin</option>
          <option value="gold">Gold</option>
        </select>
        {errors.payment && <p className='text-red-400 text-sm'>{errors.payment}</p>}
      </div>
      {/* income description */}
      <div className='flex flex-1 flex-col space-y-2 mb-4'>
        <label htmlFor="description" className='text-gray-700'>Expense description</label>
        <textarea
          rows={7}
          id='description'
          disabled={processing}
          value={data.description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData("description", e.target.value)}
          placeholder='Type income description here...'
          className='border border-gray-300 outline-none rounded-md p-3 text-gray-500 focus:ring focus:ring-purple-500' />
        {errors.description && <p className='text-red-400 text-sm'>{errors.description}</p>}
      </div>
      <div className='flex-end space-x-3'>
        <button type="submit" disabled={processing} className={clsx("duration-200 text-white py-1.5 px-3 border-none outline-none ring-0 rounded-md", processing ? "bg-gray-400 hover:bg-gray-400 cursor-default" : "bg-purple-500 hover:bg-purple-600 cursor-pointer")}>
          {processing ? "Loading" : "Submit"}
        </button>
        <button type="button" disabled={processing} onClick={closeModal} className={clsx("bg-gray-400 duration-200 text-white py-1.5 px-3 border-none outline-none ring-0 rounded-md", processing ? "cursor-default" : "cursor-pointer")}>
          Close
        </button>
      </div>
    </form>
  )
}

export default ExpenseForm