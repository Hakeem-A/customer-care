import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001'
})

export const getCustomers = () => api.get('/customers')
export const getCustomer = (id) => api.get(`/customers/${id}`)
export const createCustomer = (customer) => api.post('/customers', customer)
export const updateCustomer = (id, customer) => api.put(`/customers/${id}`, customer)
export const deleteCustomer = (id) => api.delete(`/customers/${id}`)

export const getTickets = () => api.get('/tickets')
export const getTicket = (id) => api.get(`/tickets/${id}`)
export const createTicket = (ticket) => api.post('/tickets', ticket)
export const updateTicket = (id, ticket) => api.put(`/tickets/${id}`, ticket)
export const deleteTicket = (id) => api.delete(`/tickets/${id}`)
export const addComment = (ticketId, comment) => 
  api.patch(`/tickets/${ticketId}`, { comments: [...ticket.comments, comment] })

export const getTechnicians = () => api.get('/technicians')
export const getInstallations = () => api.get('/installations')
export const getAnalytics = () => api.get('/ticketAnalytics')

export default api