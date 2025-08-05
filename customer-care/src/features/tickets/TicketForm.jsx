import { useForm } from 'react-hook-form'
import { Ticket, User, AlertCircle, Clock } from 'lucide-react'

const TicketForm = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <div className="relative">
          <Ticket className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            {...register('title', { required: 'Title is required' })}
            className="w-full pl-10 pr-4 py-2 border rounded-md"
            placeholder="Ticket title"
          />
        </div>
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Customer</label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            {...register('customer', { required: 'Customer is required' })}
            className="w-full pl-10 pr-4 py-2 border rounded-md"
            placeholder="Customer name"
          />
        </div>
        {errors.customer && <p className="text-red-500 text-sm mt-1">{errors.customer.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Priority</label>
        <select
          {...register('priority', { required: 'Priority is required' })}
          className="w-full p-2 border rounded-md"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          {...register('description', { required: 'Description is required' })}
          rows={4}
          className="w-full p-2 border rounded-md"
          placeholder="Describe the issue..."
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {defaultValues ? 'Update Ticket' : 'Create Ticket'}
        </button>
      </div>
    </form>
  )
}

export default TicketForm