import React, { useState } from 'react'
import { FiPlus, FiSearch, FiEdit, FiTrash2 } from 'react-icons/fi'

const Tickets = () => {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: 'Internet not working',
      customer: 'John Doe',
      status: 'Open',
      assignedTo: 'Tech 1',
      createdAt: '2023-07-15',
      updatedAt: '2023-07-15'
    },
    {
      id: 2,
      title: 'Router replacement',
      customer: 'Jane Smith',
      status: 'In Progress',
      assignedTo: 'Tech 2',
      createdAt: '2023-07-14',
      updatedAt: '2023-07-15'
    }
  ])
  const [newTicket, setNewTicket] = useState({
    title: '',
    customer: '',
    description: ''
  })

  const handleCreateTicket = () => {
    const ticket = {
      id: tickets.length + 1,
      title: newTicket.title,
      customer: newTicket.customer,
      status: 'Open',
      assignedTo: '',
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    }
    setTickets([...tickets, ticket])
    setNewTicket({ title: '', customer: '', description: '' })
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tickets</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
          <FiPlus className="mr-2" /> Create Ticket
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Create New Ticket</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={newTicket.title}
              onChange={(e) => setNewTicket({...newTicket, title: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Customer</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={newTicket.customer}
              onChange={(e) => setNewTicket({...newTicket, customer: e.target.value})}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              className="w-full p-2 border rounded"
              rows="3"
              value={newTicket.description}
              onChange={(e) => setNewTicket({...newTicket, description: e.target.value})}
            ></textarea>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleCreateTicket}
          >
            Submit Ticket
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center">
          <div className="relative w-64">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search tickets..."
              className="pl-10 pr-4 py-2 w-full border rounded"
            />
          </div>
          <div>
            <select className="p-2 border rounded">
              <option>All Status</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Closed</option>
            </select>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ticket.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    ticket.status === 'Open' ? 'bg-yellow-100 text-yellow-800' :
                    ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.assignedTo || 'Unassigned'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    <FiEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Tickets