import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { getItems } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getItems);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} />

      <h2 className="contactsHeader">Contacts</h2>
      <Filter />
      <ContactList contacts={contacts} />
      <GlobalStyle />
    </div>
  );
};