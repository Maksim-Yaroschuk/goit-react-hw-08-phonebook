import { useSelector } from 'react-redux';
import { getItems } from 'redux/selectors';
import { ContactListItem } from './ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(getItems);
  return (
    <>
      {!contacts.length && (
        <p className="inputName">Your contactlist is empty</p>
      )}
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactListItem
              id={id}
              name={name}
              number={number}
              key={id}
            />
          );
        })}
      </ul>
    </>
  );
};
