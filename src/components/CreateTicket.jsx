import React, { useState } from 'react';
import { Box, Button, TextField, Select, MenuItem, InputLabel, FormControl, Typography } from '@mui/material';

const CreateTicket = ({ onTicketCreated }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    client: '',
    priority: 'Normal',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: Replace with API call
    if (onTicketCreated) onTicketCreated(form);
    alert('Ticket created!');
    setForm({ title: '', description: '', client: '', priority: 'Normal' });
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 2, boxShadow: 2, borderRadius: 2 }}>
      <Typography variant="h5" mb={2}>Create Ticket</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
          multiline
          rows={3}
        />
        <TextField
          label="Client"
          name="client"
          value={form.client}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Priority</InputLabel>
          <Select
            name="priority"
            value={form.priority}
            label="Priority"
            onChange={handleChange}
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Normal">Normal</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Create Ticket
        </Button>
      </form>
    </Box>
  );
};

export default CreateTicket;
