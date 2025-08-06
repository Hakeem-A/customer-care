import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiUser, FiLock } from 'react-icons/fi'
import { AuthContext } from '../context/AuthContext'
import { Box, Button, Typography, TextField, InputAdornment, MenuItem, Select, FormControl, InputLabel, Paper } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('customer_care')
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()
    login({ username, role })
    if (role === 'admin') {
      navigate('/admin')
    } else if (role === 'technician') {
      navigate('/technician')
    } else {
      navigate('/')
    }
  }

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgcolor="#f3f4f6">
      <Paper elevation={3} sx={{ p: 4, minWidth: 350 }}>
        <Typography variant="h4" align="center" mb={2} fontWeight={700}>
          Customer Care System
        </Typography>
        <form onSubmit={handleLogin}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="role-label">Login As</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              name="role"
              value={role}
              label="Login As"
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="customer_care">Customer Care</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="technician">Technician</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            required
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FiUser />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FiLock />
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </Box>
  )
}

export default Login