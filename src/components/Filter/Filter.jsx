import PropTypes from 'prop-types';

export const Filter = ({ findContact }) => {
  return (
    <label>
      <p className="inputName">Find contacts by name</p>
      <input type="text" onChange={findContact} />
    </label>
  );
};

Filter.propType = {
  findContact: PropTypes.func.isRequired,
};
