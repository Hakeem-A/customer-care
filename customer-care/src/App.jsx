import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Tickets from './pages/Tickets'
import TicketDetail from './pages/TicketDetails'
import Customers from './pages/Customers'
import CustomerDetail from './pages/CustomerDetail'
import AdminDashboard from './pages/admin/Dashboard'
import TechnicianDashboard from './pages/technician/Dashboard'
import Installations from './pages/Installations'
import './index.css'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* Customer Care Dashboard and routes */}
            <Route path="/" element={<Layout />}> 
              <Route index element={
                <ProtectedRoute allowedRoles={['customer_care']}>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="tickets" element={
                <ProtectedRoute allowedRoles={['customer_care']}>
                  <Tickets />
                </ProtectedRoute>
              } />
              <Route path="tickets/:id" element={
                <ProtectedRoute allowedRoles={['customer_care']}>
                  <TicketDetail />
                </ProtectedRoute>
              } />
              <Route path="customers" element={
                <ProtectedRoute allowedRoles={['customer_care']}>
                  <Customers />
                </ProtectedRoute>
              } />
              <Route path="customers/:id" element={
                <ProtectedRoute allowedRoles={['customer_care']}>
                  <CustomerDetail />
                </ProtectedRoute>
              } />
              <Route path="installations" element={
                <ProtectedRoute allowedRoles={['customer_care']}>
                  <Installations />
                </ProtectedRoute>
              } />
            </Route>
            {/* Admin Dashboard and routes */}
            <Route path="/admin" element={<Layout />}> 
              <Route index element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="tickets" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Tickets />
                </ProtectedRoute>
              } />
              <Route path="tickets/:id" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <TicketDetail />
                </ProtectedRoute>
              } />
              <Route path="customers" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Customers />
                </ProtectedRoute>
              } />
              <Route path="customers/:id" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <CustomerDetail />
                </ProtectedRoute>
              } />
              <Route path="installations" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Installations />
                </ProtectedRoute>
              } />
            </Route>
            {/* Technician Dashboard and routes */}
            <Route path="/technician" element={<Layout />}> 
              <Route index element={
                <ProtectedRoute allowedRoles={['technician']}>
                  <TechnicianDashboard />
                </ProtectedRoute>
              } />
              <Route path="tickets" element={
                <ProtectedRoute allowedRoles={['technician']}>
                  <Tickets />
                </ProtectedRoute>
              } />
              <Route path="tickets/:id" element={
                <ProtectedRoute allowedRoles={['technician']}>
                  <TicketDetail />
                </ProtectedRoute>
              } />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App