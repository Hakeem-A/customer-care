import React, { useState } from 'react';

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
    <div>
      <h2>Admin CRUD Operations</h2>
      <form onSubmit={editing ? handleUpdate : handleAdd}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <button type="submit">{editing ? 'Update' : 'Add'}</button>
        {editing && <button type="button" onClick={() => { setEditing(false); setForm({ id: null, name: '', email: '' }); }}>Cancel</button>}
      </form>
      <ul>
        {data.map(entry => (
          <li key={entry.id}>
            {entry.name} ({entry.email})
            <button onClick={() => handleEdit(entry)}>Edit</button>
            <button onClick={() => handleDelete(entry.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCRUD;
