import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

  const [contacts, setContacts] = useState([...parsedContacts]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = e => {
    e.preventDefault();
    const {
      elements: { name, number },
    } = e.currentTarget;

    let addedContact = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    };

    let isAdded = false;

    contacts.map(contact => {
      if (contact.name === name.value) {
        alert(`${name.value} is already in contacts`);
        return (isAdded = true);
      }
      return isAdded;
    });

    e.currentTarget.reset();

    if (!isAdded) {
      setContacts([addedContact, ...contacts]);
    }
  };

  const findContact = e => {
    setFilter(e.currentTarget.value);
  };

  const renderContacts = () => {
    let filtered = contacts;
    if (filter.toLowerCase()) {
      filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    }
    return filtered;
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2 className="contactsHeader">Contacts</h2>
      <Filter findContact={findContact} />
      <ContactList contacts={renderContacts()} deleteContact={deleteContact} />
      <GlobalStyle />
    </div>
  );
};
