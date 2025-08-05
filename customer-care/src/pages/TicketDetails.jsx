import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MessageSquare, Clock, Check, AlertTriangle } from 'lucide-react'
import api from '../api'

const TicketDetails = () => {
  const { id } = useParams()
  const [ticket, setTicket] = useState(null)
  const [newComment, setNewComment] = useState('')
  const [timeEntry, setTimeEntry] = useState('')

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await api.get(`/tickets/${id}`)
        setTicket(response.data)
      } catch (error) {
        console.error('Error fetching ticket:', error)
      }
    }
    fetchTicket()
  }, [id])

  const handleAddComment = async (e) => {
    e.preventDefault()
    if (!newComment.trim()) return
    
    try {
      const comment = {
        id: Date.now(),
        text: newComment,
        author: 'Current User',
        createdAt: new Date().toISOString()
      }
      
      await api.patch(`/tickets/${id}`, {
        comments: [...ticket.comments, comment]
      })
      
      setTicket({
        ...ticket,
        comments: [...ticket.comments, comment]
      })
      setNewComment('')
    } catch (error) {
      console.error('Error adding comment:', error)
    }
  }

  const handleUpdateStatus = async (status) => {
    try {
      await api.patch(`/tickets/${id}`, { status })
      setTicket({ ...ticket, status })
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  if (!ticket) return <div>Loading...</div>

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h1 className="text-2xl font-bold mb-2">{ticket.title}</h1>
        <div className="flex items-center space-x-4 mb-4">
          <span className={`px-3 py-1 rounded-full text-sm ${
            ticket.status === 'Open' ? 'bg-yellow-100 text-yellow-800' :
            ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
            'bg-green-100 text-green-800'
          }`}>
            {ticket.status}
          </span>
          <span className="text-gray-600">Customer: {ticket.customer}</span>
          <span className="text-gray-600">Created: {new Date(ticket.createdAt).toLocaleDateString()}</span>
        </div>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{ticket.description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            <Clock className="mr-2" /> Time Tracking
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Time Spent:</span>
              <span>{ticket.timeSpent || 'Not tracked'}</span>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="text"
                value={timeEntry}
                onChange={(e) => setTimeEntry(e.target.value)}
                placeholder="Add time (e.g. 1h 30m)"
                className="flex-1 p-2 border rounded-l"
              />
              <button 
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r"
              >
                Add Time
              </button>
            </form>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => handleUpdateStatus('In Progress')}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded"
          >
            <Clock className="mr-2" /> Start Work
          </button>
          <button
            onClick={() => handleUpdateStatus('Resolved')}
            className="flex items-center bg-green-600 text-white px-4 py-2 rounded"
          >
            <Check className="mr-2" /> Mark Resolved
          </button>
          <button
            onClick={() => handleUpdateStatus('Pending')}
            className="flex items-center bg-yellow-600 text-white px-4 py-2 rounded"
          >
            <AlertTriangle className="mr-2" /> Mark Pending
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <MessageSquare className="mr-2" /> Comments
        </h2>
        
        <div className="space-y-4 mb-6">
          {ticket.comments?.length > 0 ? (
            ticket.comments.map(comment => (
              <div key={comment.id} className="border-b pb-4 last:border-b-0">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{comment.author}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(comment.createdAt).toLocaleString()}
                  </span>
                </div>
                <p>{comment.text}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet</p>
          )}
        </div>

        <form onSubmit={handleAddComment} className="flex">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 p-2 border rounded-l"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  )
}

export default TicketDetails