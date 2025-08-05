import { useState } from 'react'
import { Check, Clock, MessageSquare, AlertTriangle, ChevronDown } from 'lucide-react'

export default function TechnicianDashboard() {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: 'Internet not working',
      customer: 'Alice Johnson',
      status: 'In Progress',
      priority: 'High',
      timeSpent: '1h 30m',
      comments: 3
    },
    {
      id: 2,
      title: 'Router configuration',
      customer: 'Bob Williams',
      status: 'Assigned',
      priority: 'Medium',
      timeSpent: '0h 45m',
      comments: 1
    },
    {
      id: 3,
      title: 'Slow connection',
      customer: 'Charlie Brown',
      status: 'Assigned',
      priority: 'Low',
      timeSpent: '0h 15m',
      comments: 0
    }
  ])

  const [activeTab, setActiveTab] = useState('assigned')
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [newComment, setNewComment] = useState('')
  const [timeEntry, setTimeEntry] = useState('')

  const handleStatusChange = (ticketId, newStatus) => {
    setTickets(tickets.map(ticket => 
      ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
    ))
  }

  const handleAddComment = (e) => {
    e.preventDefault()
    if (!newComment.trim()) return
    // In a real app, this would update the ticket's comments
    setNewComment('')
  }

  const handleAddTime = (e) => {
    e.preventDefault()
    if (!timeEntry.trim()) return
    // In a real app, this would update the ticket's time spent
    setTimeEntry('')
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Technician Dashboard</h1>
      
      {selectedTicket ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <button 
              onClick={() => setSelectedTicket(null)}
              className="mb-4 text-blue-600 hover:text-blue-800"
            >
              ← Back to tickets
            </button>
            
            <div className="mb-6">
              <h2 className="text-xl font-bold">{selectedTicket.title}</h2>
              <div className="flex items-center text-gray-600 mt-1">
                <span className="mr-4">Customer: {selectedTicket.customer}</span>
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  selectedTicket.priority === 'High' ? 'bg-red-100 text-red-800' :
                  selectedTicket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {selectedTicket.priority}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Ticket Details</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p>Customer reports that internet connection drops frequently throughout the day. Issue started 2 days ago.</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Time Tracking
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Time Spent:</span>
                  <span>{selectedTicket.timeSpent}</span>
                </div>
                <form onSubmit={handleAddTime} className="flex">
                  <input
                    type="text"
                    value={timeEntry}
                    onChange={(e) => setTimeEntry(e.target.value)}
                    placeholder="Add time (e.g. 1h 30m)"
                    className="flex-1 px-3 py-2 border rounded-l-md"
                  />
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Comments ({selectedTicket.comments})
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-3 space-y-4">
                <div className="border-b pb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">John Doe</span>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                  <p>Checked router logs, found multiple disconnections.</p>
                </div>
                <div className="border-b pb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Alice Johnson</span>
                    <span className="text-sm text-gray-500">1 hour ago</span>
                  </div>
                  <p>This happens mostly in the evenings.</p>
                </div>
              </div>
              <form onSubmit={handleAddComment} className="flex">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="flex-1 px-3 py-2 border rounded-l-md"
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
                >
                  Post
                </button>
              </form>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => handleStatusChange(selectedTicket.id, 'Resolved')}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                <Check className="w-5 h-5 mr-2" />
                Mark as Resolved
              </button>
              <button
                onClick={() => handleStatusChange(selectedTicket.id, 'Pending')}
                className="flex items-center px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
                Mark as Pending
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex border-b mb-6">
            <button
              onClick={() => setActiveTab('assigned')}
              className={`px-4 py-2 font-medium ${activeTab === 'assigned' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            >
              Assigned Tickets
            </button>
            <button
              onClick={() => setActiveTab('inprogress')}
              className={`px-4 py-2 font-medium ${activeTab === 'inprogress' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            >
              In Progress
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-4 py-2 font-medium ${activeTab === 'completed' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            >
              Completed
            </button>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Spent</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tickets
                    .filter(ticket => 
                      (activeTab === 'assigned' && ticket.status === 'Assigned') ||
                      (activeTab === 'inprogress' && ticket.status === 'In Progress') ||
                      (activeTab === 'completed' && ticket.status === 'Resolved')
                    )
                    .map((ticket) => (
                      <tr key={ticket.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ticket.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.customer}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            ticket.status === 'Assigned' ? 'bg-gray-100 text-gray-800' :
                            ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {ticket.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.priority}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.timeSpent}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button 
                            onClick={() => setSelectedTicket(ticket)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  )
}