import React, { useState } from 'react';
import '../styles/contact-form.css';

export default function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          placeholder="name"
          pattern="^[a-zA-Zа-яА-Я'’\-\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        <input
          type="tel"
          name="number"
          placeholder="number"
          pattern="^\+?[\d\s\-\(\)]{5,}$"
          title="Phone number must be at least 5 digits, can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}
