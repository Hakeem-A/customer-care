import { useState } from 'react'
import { FiClock, FiPlus } from 'react-icons/fi'

const TicketTimeTracking = ({ ticketId, initialTimeSpent, onTimeUpdate }) => {
  const [timeEntries, setTimeEntries] = useState(initialTimeSpent || [])
  const [newTimeEntry, setNewTimeEntry] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const handleAddTime = (e) => {
    e.preventDefault()
    if (!newTimeEntry) return
    
    const updatedEntries = [...timeEntries, {
      id: Date.now(),
      duration: newTimeEntry,
      date: new Date().toISOString(),
      technician: 'Current User'
    }]
    
    setTimeEntries(updatedEntries)
    onTimeUpdate(ticketId, updatedEntries)
    setNewTimeEntry('')
    setIsAdding(false)
  }

  const calculateTotalTime = () => {
    return timeEntries.reduce((total, entry) => {
      return total + parseInt(entry.duration)
    }, 0)
  }

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium flex items-center">
          <FiClock className="mr-2" /> Time Tracking
        </h3>
        <span className="text-sm font-medium">
          Total: {calculateTotalTime()} hours
        </span>
      </div>

      {timeEntries.length > 0 && (
        <div className="mb-4 space-y-2">
          {timeEntries.map((entry) => (
            <div key={entry.id} className="flex justify-between text-sm">
              <span>{entry.technician}: {entry.duration} hours</span>
              <span className="text-gray-500">
                {new Date(entry.date).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      )}

      {isAdding ? (
        <form onSubmit={handleAddTime} className="flex items-center">
          <input
            type="number"
            min="0.25"
            step="0.25"
            value={newTimeEntry}
            onChange={(e) => setNewTimeEntry(e.target.value)}
            placeholder="Hours (e.g. 1.5)"
            className="flex-1 px-3 py-2 border rounded-l-md"
          />
          <button
            type="submit"
            className="px-3 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
          >
            Add
          </button>
          <button
            type="button"
            onClick={() => setIsAdding(false)}
            className="ml-2 px-3 py-2 border rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
        </form>
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center px-3 py-2 text-sm bg-white border rounded-md hover:bg-gray-50"
        >
          <FiPlus className="mr-1" /> Add Time Entry
        </button>
      )}
    </div>
  )
}

export default TicketTimeTracking