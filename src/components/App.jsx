import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { getItems } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(getItems);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {/* {error && <p className="inputName">{error}</p>} */}
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} />
      <h2 className="contactsHeader">Contacts</h2>
      <Filter />
      {isLoading && <p className="inputName">Loading contacts...</p>}
      <ContactList contacts={contacts} error={error} />
      <GlobalStyle />
    </div>
  );
};
