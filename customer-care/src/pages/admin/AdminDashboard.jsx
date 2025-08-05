import React from 'react'
import { FiUsers, FiClock, FiBarChart2, FiActivity } from 'react-icons/fi'

const AdminDashboard = () => {
  const stats = [
    { name: 'Total Tickets', value: '142', icon: FiActivity, change: '+12%', changeType: 'positive' },
    { name: 'Open Tickets', value: '24', icon: FiActivity, change: '-5%', changeType: 'negative' },
    { name: 'Customers', value: '156', icon: FiUsers, change: '+8%', changeType: 'positive' },
    { name: 'Avg. Resolution Time', value: '2.4 days', icon: FiClock, change: '-0.5 days', changeType: 'positive' }
  ]

  const recentActivity = [
    { id: 1, action: 'Ticket #45 closed', user: 'Tech 1', time: '2 hours ago' },
    { id: 2, action: 'New ticket created', user: 'Customer Care', time: '4 hours ago' },
    { id: 3, action: 'Customer updated', user: 'Admin', time: '1 day ago' },
    { id: 4, action: 'Ticket #32 assigned', user: 'Tech 2', time: '1 day ago' }
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className={`text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last week
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Ticket Analytics</h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Chart would be displayed here</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <ul className="divide-y divide-gray-200">
            {recentActivity.map((activity) => (
              <li key={activity.id} className="py-3">
                <div className="flex items-center">
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-500">by {activity.user} • {activity.time}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard