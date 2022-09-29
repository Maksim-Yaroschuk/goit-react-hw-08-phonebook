import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
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
