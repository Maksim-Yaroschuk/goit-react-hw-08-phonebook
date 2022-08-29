import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, number, deleteContact }) => {
   return (
    <li key={id}>
    <p className="listItem">
      {name} - {number}
    </p>
    <button
      className="button buttonList"
      type="button"
      onClick={() => deleteContact(id)}
    >
      Delete
    </button>
      </li>
)};

ContactListItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
