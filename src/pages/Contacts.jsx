import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { selectItems } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts () {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(selectItems);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} />
      <h2 className="contactsHeader">Contacts</h2>
      <Filter />
      {isLoading && <p className="inputName">Loading contacts...</p>}
      <ContactList contacts={contacts} error={error} />{' '}
    </main>
  );
};
