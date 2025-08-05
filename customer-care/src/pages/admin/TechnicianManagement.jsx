import { useState, useEffect } from 'react'
import { User, Plus, Trash2, Edit } from 'lucide-react'
import api from '../../api'

const TechnicianManagement = () => {
  const [technicians, setTechnicians] = useState([])
  const [newTech, setNewTech] = useState({
    name: '',
    email: '',
    phone: '',
    specialization: ''
  })

  useEffect(() => {
    const fetchTechnicians = async () => {
      try {
        const response = await api.get('/technicians')
        setTechnicians(response.data)
      } catch (error) {
        console.error('Error fetching technicians:', error)
      }
    }
    fetchTechnicians()
  }, [])

  const handleCreateTech = async (e) => {
    e.preventDefault()
    try {
      const response = await api.post('/technicians', {
        ...newTech,
        id: Date.now(),
        activeTickets: 0
      })
      setTechnicians([...technicians, response.data])
      setNewTech({ name: '', email: '', phone: '', specialization: '' })
    } catch (error) {
      console.error('Error creating technician:', error)
    }
  }

  const handleDeleteTech = async (id) => {
    try {
      await api.delete(`/technicians/${id}`)
      setTechnicians(technicians.filter(tech => tech.id !== id))
    } catch (error) {
      console.error('Error deleting technician:', error)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Technician Management</h1>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Add New Technician</h2>
        <form onSubmit={handleCreateTech} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={newTech.name}
              onChange={(e) => setNewTech({...newTech, name: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={newTech.email}
              onChange={(e) => setNewTech({...newTech, email: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              value={newTech.phone}
              onChange={(e) => setNewTech({...newTech, phone: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Specialization</label>
            <input
              type="text"
              value={newTech.specialization}
              onChange={(e) => setNewTech({...newTech, specialization: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 text-white px-4 py-2 rounded flex items-center justify-center"
          >
            <Plus className="mr-2" /> Add Technician
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active Tickets</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {technicians.map(tech => (
              <tr key={tech.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{tech.name}</div>
                      <div className="text-sm text-gray-500">{tech.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {tech.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {tech.specialization}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {tech.activeTickets}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    <Edit className="inline mr-1" /> Edit
                  </button>
                  <button 
                    onClick={() => handleDeleteTech(tech.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="inline mr-1" /> Delete
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

export default TechnicianManagement