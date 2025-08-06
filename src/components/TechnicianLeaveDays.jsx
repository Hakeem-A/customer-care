import React, { useState } from 'react';
import { Box, Button, TextField, Typography, List, ListItem } from '@mui/material';

const TechnicianLeaveDays = () => {
  const [leaves, setLeaves] = useState([
    { id: 1, date: '2024-06-10', reason: 'Medical', status: 'Approved' },
    { id: 2, date: '2024-06-15', reason: 'Personal', status: 'Pending' },
  ]);
  const [form, setForm] = useState({ date: '', reason: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLeaves([
      ...leaves,
      { id: Date.now(), date: form.date, reason: form.reason, status: 'Pending' },
    ]);
    setForm({ date: '', reason: '' });
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 2, boxShadow: 2, borderRadius: 2 }}>
      <Typography variant="h5" mb={2}>Leave Days</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          name="reason"
          value={form.reason}
          onChange={handleChange}
          placeholder="Reason"
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Request Leave
        </Button>
      </form>
      <Typography variant="h6" mt={3}>My Leave Requests</Typography>
      <List>
        {leaves.map(leave => (
          <ListItem key={leave.id}>
            {leave.date} - {leave.reason} ({leave.status})
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TechnicianLeaveDays;
