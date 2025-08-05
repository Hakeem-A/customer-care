import React, { useState } from 'react'
import { FiClock, FiCheckCircle, FiAlertCircle, FiMessageSquare } from 'react-icons/fi'

const TechnicianDashboard = () => {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: 'Internet not working',
      customer: 'John Doe',
      status: 'In Progress',
      priority: 'High',
      timeSpent: '1.5 hours',
      comments: [
        { id: 1, text: 'Checked connection', time: '2 hours ago' },
        { id: 2, text: 'Found faulty router', time: '1 hour ago' }
      ]
    },
    {
      id: 2,
      title: 'Router replacement',
      customer: 'Jane Smith',
      status: 'Assigned',
      priority: 'Medium',
      timeSpent: '0 hours',
      comments: []
    }
  ])
  const [newComment, setNewComment] = useState('')
  const [activeTicket, setActiveTicket] = useState(null)

  const handleUpdateStatus = (ticketId, newStatus) => {
    setTickets(tickets.map(ticket => 
      ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
    ))
  }

  const handleAddComment = (ticketId) => {
    if (!newComment.trim()) return
    
    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === ticketId) {
        return {
          ...ticket,
          comments: [
            ...ticket.comments,
            {
              id: ticket.comments.length + 1,
              text: newComment,
              time: 'Just now'
            }
          ]
        }
      }
      return ticket
    })
    
    setTickets(updatedTickets)
    setNewComment('')
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Technician Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">Assigned Tickets</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{ticket.title}</h3>
                      <p className="text-sm text-gray-500">Customer: {ticket.customer}</p>
                      <p className="text-sm text-gray-500">Priority: 
                        <span className={`ml-1 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          ticket.priority === 'High' ? 'bg-red-100 text-red-800' :
                          ticket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {ticket.priority}
                        </span>
                      </p>
                      <p className="text-sm text-gray-500">Time spent: {ticket.timeSpent}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleUpdateStatus(ticket.id, 'In Progress')}
                        className={`px-3 py-1 text-xs rounded ${
                          ticket.status === 'In Progress' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        Start
                      </button>
                      <button 
                        onClick={() => handleUpdateStatus(ticket.id, 'Completed')}
                        className={`px-3 py-1 text-xs rounded ${
                          ticket.status === 'Completed' 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        Complete
                      </button>
                      <button 
                        onClick={() => setActiveTicket(activeTicket === ticket.id ? null : ticket.id)}
                        className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded"
                      >
                        {activeTicket === ticket.id ? 'Hide' : 'View'}
                      </button>
                    </div>
                  </div>
                  
                  {activeTicket === ticket.id && (
                    <div className="mt-4 pl-4 border-l-2 border-gray-200">
                      <h4 className="font-medium mb-2 flex items-center">
                        <FiMessageSquare className="mr-2" /> Comments
                      </h4>
                      <div className="space-y-3 mb-4">
                        {ticket.comments.length > 0 ? (
                          ticket.comments.map((comment) => (
                            <div key={comment.id} className="text-sm">
                              <p>{comment.text}</p>
                              <p className="text-xs text-gray-500">{comment.time}</p>
                            </div>
                          ))
                        ) : (
                          <p className="text-sm text-gray-500">No comments yet</p>
                        )}
                      </div>
                      <div className="flex">
                        <input
                          type="text"
                          className="flex-1 p-2 border rounded-l"
                          placeholder="Add comment..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                        />
                        <button
                          onClick={() => handleAddComment(ticket.id)}
                          className="bg-blue-500 text-white px-4 py-2 rounded-r"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Time Tracking</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Current Ticket</label>
                <select className="w-full p-2 border rounded">
                  <option>Internet not working</option>
                  <option>Router replacement</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Time Spent</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="0.5"
                  />
                  <span className="ml-2">hours</span>
                </div>
              </div>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded">
                Record Time
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Leave Days</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Start Date</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">End Date</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Reason</label>
                <select className="w-full p-2 border rounded">
                  <option>Vacation</option>
                  <option>Sick Leave</option>
                  <option>Personal</option>
                </select>
              </div>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded">
                Request Leave
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnicianDashboard