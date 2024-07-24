import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { addContact, deleteContact } from '../slices/contactSlice';
import { setFilter } from '../slices/filterSlice';
import '../styles/main.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleAddContact = (name, number) => {
    const newContact = {
      id: Date.now().toString(),
      name,
      number,
    };
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className="divForm">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChangeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
