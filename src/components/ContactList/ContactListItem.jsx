import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li key={id}>
      <p className={css.listItem}>
        {name} - {number}
      </p>
      <button
        className={css.buttonList}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
