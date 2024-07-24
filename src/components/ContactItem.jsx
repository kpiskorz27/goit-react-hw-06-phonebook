import React from 'react';
import '../styles/contact-item.css';
export default function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <li className="contact-item">
      <span className="contact-info">
        {name}: {number}
      </span>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
}
