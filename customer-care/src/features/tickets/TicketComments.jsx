import { useState } from 'react'
import { FiMessageSquare, FiSend } from 'react-icons/fi'

const TicketComments = ({ comments, onAddComment }) => {
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newComment.trim()) return
    
    onAddComment({
      id: Date.now(),
      text: newComment,
      author: 'Current User',
      createdAt: new Date().toISOString()
    })
    setNewComment('')
  }

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="font-medium flex items-center mb-3">
        <FiMessageSquare className="mr-2" /> Comments ({comments.length})
      </h3>

      <div className="space-y-4 mb-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="border-l-2 border-blue-200 pl-3 py-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{comment.author}</span>
                <span className="text-gray-500">
                  {new Date(comment.createdAt).toLocaleString()}
                </span>
              </div>
              <p className="mt-1">{comment.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No comments yet</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex">
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
          <FiSend />
        </button>
      </form>
    </div>
  )
}

export default TicketComments