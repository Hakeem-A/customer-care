import { useState } from 'react'
import { MessageSquare, Clock, ChevronDown, ChevronUp } from 'lucide-react'

const TicketCard = ({ ticket }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border rounded-lg overflow-hidden mb-4">
      <div 
        className="p-4 bg-white hover:bg-gray-50 cursor-pointer flex justify-between items-center"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <h3 className="font-medium">{ticket.title}</h3>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <span className={`px-2 py-1 rounded-full text-xs mr-3 ${
              ticket.status === 'Open' ? 'bg-yellow-100 text-yellow-800' :
              ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
              'bg-green-100 text-green-800'
            }`}>
              {ticket.status}
            </span>
            <span className="mr-3">{ticket.customerId}</span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {ticket.timeSpent || 'Not started'}
            </span>
          </div>
        </div>
        {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </div>
      
      {expanded && (
        <div className="p-4 border-t bg-gray-50">
          <p className="mb-4">{ticket.description}</p>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2 flex items-center">
              <MessageSquare className="w-4 h-4 mr-2" />
              Comments ({ticket.comments?.length || 0})
            </h4>
            {ticket.comments?.length > 0 ? (
              <div className="space-y-3">
                {ticket.comments.map(comment => (
                  <div key={comment.id} className="border-l-2 border-blue-200 pl-3 py-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{comment.author}</span>
                      <span className="text-gray-500">{new Date(comment.createdAt).toLocaleString()}</span>
                    </div>
                    <p className="text-sm mt-1">{comment.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No comments yet</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default TicketCard