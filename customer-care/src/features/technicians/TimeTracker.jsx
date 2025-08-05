import { useState, useEffect } from 'react'
import { Clock, Play, Pause, StopCircle } from 'lucide-react'

const TimeTracker = ({ ticketId, onTimeUpdate }) => {
  const [isRunning, setIsRunning] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [startTime, setStartTime] = useState(null)

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - startTime) / 1000))
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning, startTime])

  const startTimer = () => {
    setIsRunning(true)
    setStartTime(Date.now() - timeElapsed * 1000)
  }

  const pauseTimer = () => {
    setIsRunning(false)
  }

  const stopTimer = () => {
    setIsRunning(false)
    onTimeUpdate(ticketId, formatTime(timeElapsed))
    setTimeElapsed(0)
  }

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours}h ${minutes}m ${secs}s`
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium flex items-center">
          <Clock className="mr-2" /> Time Tracking
        </h3>
        <div className="text-xl font-mono">
          {formatTime(timeElapsed)}
        </div>
      </div>

      <div className="flex space-x-2">
        {!isRunning ? (
          <button
            onClick={startTimer}
            className="flex items-center px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            <Play className="w-4 h-4 mr-1" /> Start
          </button>
        ) : (
          <button
            onClick={pauseTimer}
            className="flex items-center px-3 py-1 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
          >
            <Pause className="w-4 h-4 mr-1" /> Pause
          </button>
        )}
        <button
          onClick={stopTimer}
          disabled={timeElapsed === 0}
          className="flex items-center px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:bg-gray-400"
        >
          <StopCircle className="w-4 h-4 mr-1" /> Stop
        </button>
      </div>
    </div>
  )
}

export default TimeTracker