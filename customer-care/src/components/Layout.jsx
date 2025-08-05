import { Outlet, Link } from 'react-router-dom'
import { FiHome, FiUsers, FiSettings, FiClock, FiMessageSquare } from 'react-icons/fi'

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">Customer Care</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="flex items-center p-2 rounded hover:bg-gray-200">
                <FiHome className="mr-2" /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/tickets" className="flex items-center p-2 rounded hover:bg-gray-200">
                <FiMessageSquare className="mr-2" /> Tickets
              </Link>
            </li>
            <li>
              <Link to="/customers" className="flex items-center p-2 rounded hover:bg-gray-200">
                <FiUsers className="mr-2" /> Customers
              </Link>
            </li>
            <li>
              <Link to="/admin" className="flex items-center p-2 rounded hover:bg-gray-200">
                <FiSettings className="mr-2" /> Admin
              </Link>
            </li>
            <li>
              <Link to="/technician" className="flex items-center p-2 rounded hover:bg-gray-200">
                <FiClock className="mr-2" /> Technician
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout