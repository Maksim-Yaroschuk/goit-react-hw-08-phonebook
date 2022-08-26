import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p className='listItem'>{name} - {number}</p>
              <button className='button buttonList' type="button" onClick={() => deleteContact(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

ContactList.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  deleteContact: PropTypes.func.isRequired,
}
