import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addItem } from 'redux/itemsSlice';
import { nanoid } from 'nanoid';

export const ContactForm = ({ contacts }) => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    let isAdded = false;
    const {
      elements: { name, number },
    } = e.currentTarget;

    contacts.map(contact => {
      if (contact.name === name.value) {
        alert(`${name.value} is already in contacts`);
        return (isAdded = true);
      }
      return isAdded;
    });

    if (!isAdded) {
      const addedContact = {
        name: name.value,
        number: number.value,
        id: nanoid(),
      };
      dispatch(addItem(addedContact));
    }
    e.currentTarget.reset();
  };

  return (
    <form className={css.section} onSubmit={handleSubmit}>
      <label className={css.block}>
        <p className="inputName">Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <p className="inputName">Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className="button" type="submit">
        Add contact
      </button>
    </form>
  );
};
