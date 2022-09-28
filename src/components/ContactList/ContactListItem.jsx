import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteItem } from 'redux/reducer';
import css from './ContactList.module.css';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch()
  const handleDelete = () => dispatch(deleteItem(id));

  return (
    <li key={id}>
      <p className={css.listItem}>
        {name} - {number}
      </p>
      <button
        className={css.buttonList}
        type="button"
        onClick={handleDelete}
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
};
