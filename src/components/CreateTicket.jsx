import React, { useState } from 'react';

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
    <div>
      <h2>Create Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input name="title" value={form.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={form.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Client:</label>
          <input name="client" value={form.client} onChange={handleChange} required />
        </div>
        <div>
          <label>Priority:</label>
          <select name="priority" value={form.priority} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit">Create Ticket</button>
      </form>
    </div>
  );
};

export default CreateTicket;
