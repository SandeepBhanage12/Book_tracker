import React, { useState } from 'react';

const BookForm = ({ refresh }) => {
  const [form, setForm] = useState({ title: '', author: '', status: 'Not Started' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    setForm({ title: '', author: '', status: 'Not Started' });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
      <input placeholder="Author" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} required />
      <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
        <option>Not Started</option>
        <option>Reading</option>
        <option>Completed</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
