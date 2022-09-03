import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = e => {
    e.preventDefault();
    const { contacts } = this.state;

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
      this.setState(prevState => ({
        contacts: [addedContact, ...prevState.contacts],
      }));
    }
  };

  findContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  renderContacts = () => {
    const { contacts, filter } = this.state;
    let filtered = contacts;
    if (filter.toLowerCase()) {
      filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    }
    return filtered;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2 className="contactsHeader">Contacts</h2>
        <Filter findContact={this.findContact} />
        <ContactList
          contacts={this.renderContacts()}
          deleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </div>
    );
  }
}
