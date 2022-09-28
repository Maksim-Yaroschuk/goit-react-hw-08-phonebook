import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useState('');

  // const addContact = e => {
  //   e.preventDefault();
  //   const {
  //     elements: { name, number },
  //   } = e.currentTarget;

  //   let addedContact = {
  //     name: name.value,
  //     number: number.value,
  //     id: nanoid(),
  //   };

  //   let isAdded = false;

  //   contacts.map(contact => {
  //     if (contact.name === name.value) {
  //       alert(`${name.value} is already in contacts`);
  //       return (isAdded = true);
  //     }
  //     return isAdded;
  //   });

  //   e.currentTarget.reset();

  //   if (!isAdded) {
  //     setContacts([addedContact, ...contacts]);
  //   }
  // };

  // const findContact = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const renderContacts = () => {
  //   let filtered = contacts;
  //   if (filter.toLowerCase()) {
  //     filtered = contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(filter)
  //     );
  //   }
  //   return filtered;
  // };

  // const deleteContact = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2 className="contactsHeader">Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </div>
  );
};
