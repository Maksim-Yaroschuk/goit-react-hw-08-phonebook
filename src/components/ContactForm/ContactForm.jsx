import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  collectContact = (e) => {
    e.preventDefault();
    console.log("submit");
    const {
      elements: { name, number } 
    } = e.currentTarget;
    console.log(name.value, number.value);
    e.currentTarget.reset();

    return {name: name.value, number: name.number, id: nanoid()}

    // this.setState(() => ({
    //   name: name.value,
    //   number: number.value,
    //   id: nanoid()
    // }))
    // console.log(this.state)
    // e.currentTarget.reset()
  };

  render() {
    const { addContact } = this.props;
    return (
      <form onSubmit={ addContact }>
        <label>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <h2>Number</h2>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
