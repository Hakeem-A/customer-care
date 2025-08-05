import { useParams, useNavigate } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getTicket, updateTicket } from '../../api/tickets'
import TicketStatusBadge from './TicketStatusBadge'
import TicketPriorityBadge from './TicketPriorityBadge'
import TicketTimeTracking from './TicketTimeTracking'
import TicketComments from './TicketComments'
import TicketAssignment from './TicketAssignment'
import { FiChevronLeft, FiEdit } from 'react-icons/fi'
import { format } from 'date-fns'

const TicketDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { data: ticket, isLoading, error } = useQuery({
    queryKey: ['ticket', id],
    queryFn: () => getTicket(id)
  })

  const updateMutation = useMutation({
    mutationFn: updateTicket,
    onSuccess: () => {
      queryClient.invalidateQueries(['ticket', id])
      queryClient.invalidateQueries(['tickets'])
    }
  })

  const handleStatusChange = (newStatus) => {
    updateMutation.mutate({
      id,
      data: { ...ticket, status: newStatus }
    })
  }

  const handleTimeUpdate = (ticketId, timeEntries) => {
    updateMutation.mutate({
      id: ticketId,
      data: { ...ticket, timeEntries }
    })
  }

  const handleAddComment = (comment) => {
    const updatedComments = [...(ticket.comments || []), comment]
    updateMutation.mutate({
      id,
      data: { ...ticket, comments: updatedComments }
    })
  }

  const handleAssign = (ticketId, technicianId) => {
    updateMutation.mutate({
      id: ticketId,
      data: { ...ticket, assignedTo: technicianId }
    })
  }

  if (isLoading) return <div className="p-6">Loading ticket...</div>
  if (error) return <div className="p-6 text-red-500">Error loading ticket</div>
  if (!ticket) return <div className="p-6">Ticket not found</div>

  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 hover:text-blue-800"
      >
        <FiChevronLeft className="mr-1" /> Back to tickets
      </button>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold mb-2">{ticket.title}</h1>
            <div className="flex items-center space-x-4 mb-2">
              <TicketStatusBadge status={ticket.status} />
              <TicketPriorityBadge priority={ticket.priority} />
              <span className="text-sm text-gray-500">
                Created: {format(new Date(ticket.createdAt), 'MMM d, yyyy')}
              </span>
            </div>
            <p className="text-gray-600">Customer ID: {ticket.customerId}</p>
          </div>
          <button
            onClick={() => navigate(`/tickets/${id}/edit`)}
            className="flex items-center px-3 py-1 border rounded-md hover:bg-gray-50"
          >
            <FiEdit className="mr-1" /> Edit
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p className="whitespace-pre-line">{ticket.description}</p>
              </div>

              <TicketTimeTracking
                ticketId={id}
                initialTimeSpent={ticket.timeEntries || []}
                onTimeUpdate={handleTimeUpdate}
              />

              <TicketComments
                comments={ticket.comments || []}
                onAddComment={handleAddComment}
              />
            </div>

            <div className="space-y-6">
              <TicketAssignment
                ticketId={id}
                assignedTo={ticket.assignedTo}
                onAssign={handleAssign}
              />

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Ticket Actions</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleStatusChange('Open')}
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      ticket.status === 'Open'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-white border hover:bg-gray-50'
                    }`}
                  >
                    Reopen Ticket
                  </button>
                  <button
                    onClick={() => handleStatusChange('In Progress')}
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      ticket.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-white border hover:bg-gray-50'
                    }`}
                  >
                    Mark In Progress
                  </button>
                  <button
                    onClick={() => handleStatusChange('Resolved')}
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      ticket.status === 'Resolved'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-white border hover:bg-gray-50'
                    }`}
                  >
                    Mark Resolved
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketDetails