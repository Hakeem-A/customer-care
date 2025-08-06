import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const AddClient = ({ onClientAdded }) => {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    address: '',
    email: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: Replace with API call
    if (onClientAdded) onClientAdded(form);
    alert('Client added!');
    setForm({ name: '', contact: '', address: '', email: '' });
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 2, boxShadow: 2, borderRadius: 2 }}>
      <Typography variant="h5" mb={2}>Add Client Information</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Contact"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Address"
          name="address"
          value={form.address}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Add Client
        </Button>
      </form>
    </Box>
  );
};

export default AddClient;
