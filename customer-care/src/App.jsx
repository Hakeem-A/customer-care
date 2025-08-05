import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Tickets from './pages/Tickets'
import TicketDetail from './pages/TicketDetail'
import Customers from './pages/Customers'
import CustomerDetail from './pages/CustomerDetail'
import AdminDashboard from './pages/admin/Dashboard'
import TechnicianDashboard from './pages/technician/Dashboard'
import Installations from './pages/Installations'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={
              <ProtectedRoute allowedRoles={['customer_care', 'admin', 'technician']}>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="tickets" element={
              <ProtectedRoute allowedRoles={['customer_care', 'admin', 'technician']}>
                <Tickets />
              </ProtectedRoute>
            } />
            <Route path="tickets/:id" element={
              <ProtectedRoute allowedRoles={['customer_care', 'admin', 'technician']}>
                <TicketDetail />
              </ProtectedRoute>
            } />
            <Route path="customers" element={
              <ProtectedRoute allowedRoles={['customer_care', 'admin']}>
                <Customers />
              </ProtectedRoute>
            } />
            <Route path="customers/:id" element={
              <ProtectedRoute allowedRoles={['customer_care', 'admin']}>
                <CustomerDetail />
              </ProtectedRoute>
            } />
            <Route path="installations" element={
              <ProtectedRoute allowedRoles={['customer_care', 'admin']}>
                <Installations />
              </ProtectedRoute>
            } />
            <Route path="admin" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="technician" element={
              <ProtectedRoute allowedRoles={['technician']}>
                <TechnicianDashboard />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App