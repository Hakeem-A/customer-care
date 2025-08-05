import React, { useState } from 'react';

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
    <div>
      <h2>Add Client Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact:</label>
          <input name="contact" value={form.contact} onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input name="address" value={form.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input name="email" value={form.email} onChange={handleChange} required />
        </div>
        <button type="submit">Add Client</button>
      </form>
    </div>
  );
};

export default AddClient;
