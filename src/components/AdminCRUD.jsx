import React, { useState } from 'react';
import { Box, Button, TextField, Typography, List, ListItem } from '@mui/material';

const initialData = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

const AdminCRUD = () => {
  const [data, setData] = useState(initialData);
  const [form, setForm] = useState({ id: null, name: '', email: '' });
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setData([...data, { ...form, id: Date.now() }]);
    setForm({ id: null, name: '', email: '' });
  };

  const handleEdit = (entry) => {
    setEditing(true);
    setForm(entry);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setData(data.map(d => (d.id === form.id ? form : d)));
    setEditing(false);
    setForm({ id: null, name: '', email: '' });
  };

  const handleDelete = (id) => {
    setData(data.filter(d => d.id !== id));
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 2, boxShadow: 2, borderRadius: 2 }}>
      <Typography variant="h5" mb={2}>Admin CRUD Operations</Typography>
      <form onSubmit={editing ? handleUpdate : handleAdd}>
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 1 }}>
          {editing ? 'Update' : 'Add'}
        </Button>
        {editing && (
          <Button type="button" onClick={() => { setEditing(false); setForm({ id: null, name: '', email: '' }); }} sx={{ mt: 1, ml: 1 }}>
            Cancel
          </Button>
        )}
      </form>
      <List>
        {data.map(entry => (
          <ListItem key={entry.id} secondaryAction={
            <>
              <Button variant="outlined" size="small" onClick={() => handleEdit(entry)} sx={{ mr: 1 }}>Edit</Button>
              <Button variant="outlined" color="error" size="small" onClick={() => handleDelete(entry.id)}>Delete</Button>
            </>
          }>
            {entry.name} ({entry.email})
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AdminCRUD;
