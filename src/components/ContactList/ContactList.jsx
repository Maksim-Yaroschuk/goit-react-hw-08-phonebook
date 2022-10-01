import { useSelector } from 'react-redux';
import { getSearchValue } from 'redux/selectors';
import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contacts }) => {
  const filter = useSelector(getSearchValue);
  let filteredContacts = contacts;

  if (filter.searchValue.toLowerCase()) {
    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.searchValue.toLowerCase())
    );
  }

  return (
    <>
      {!contacts.length && (
        <p className="inputName">Your contactlist is empty</p>
      )}
      {!filteredContacts.length && (
        <p className="inputName">No contacts found</p>
      )}
      <ul>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactListItem id={id} name={name} number={number} key={id} />
          );
        })}
      </ul>
    </>
  );
};
