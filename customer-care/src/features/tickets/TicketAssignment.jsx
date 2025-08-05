import { useState } from 'react'
import { FiUser, FiCheck, FiX } from 'react-icons/fi'
import { useQuery } from '@tanstack/react-query'
import { getTechnicians } from '../../api/technicians'

const TicketAssignment = ({ ticketId, assignedTo, onAssign }) => {
  const [isAssigning, setIsAssigning] = useState(false)
  const [selectedTech, setSelectedTech] = useState(assignedTo || '')

  const { data: technicians } = useQuery({
    queryKey: ['technicians'],
    queryFn: getTechnicians
  })

  const handleAssign = () => {
    onAssign(ticketId, selectedTech)
    setIsAssigning(false)
  }

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium flex items-center">
          <FiUser className="mr-2" /> Assigned To
        </h3>
        {!isAssigning && (
          <button
            onClick={() => setIsAssigning(true)}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            {assignedTo ? 'Reassign' : 'Assign'}
          </button>
        )}
      </div>

      {isAssigning ? (
        <div className="space-y-3">
          <select
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Select technician</option>
            {technicians?.map(tech => (
              <option key={tech.id} value={tech.id}>
                {tech.name} ({tech.specialization})
              </option>
            ))}
          </select>
          <div className="flex space-x-2">
            <button
              onClick={handleAssign}
              className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <FiCheck className="mr-1" /> Confirm
            </button>
            <button
              onClick={() => {
                setIsAssigning(false)
                setSelectedTech(assignedTo || '')
              }}
              className="flex items-center px-3 py-2 border rounded-md hover:bg-gray-100"
            >
              <FiX className="mr-1" /> Cancel
            </button>
          </div>
        </div>
      ) : (
        <p className="text-sm">
          {assignedTo ? (
            technicians?.find(t => t.id === assignedTo)?.name || 'Unknown technician'
          ) : (
            <span className="text-gray-500">Unassigned</span>
          )}
        </p>
      )}
    </div>
  )
}

export default TicketAssignment