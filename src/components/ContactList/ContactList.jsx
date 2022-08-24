import { Component } from 'react';

export class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name} {number}
              <button type="button" onClick={() => deleteContact(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
