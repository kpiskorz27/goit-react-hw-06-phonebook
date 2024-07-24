import React from 'react';

export default function Filter({ value, onChange }) {
  return (
    <label>
      <input
        type="text"
        placeholder="find contacts by name"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
