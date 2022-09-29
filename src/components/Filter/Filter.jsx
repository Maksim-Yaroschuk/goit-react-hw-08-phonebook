import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSearchValue } from 'redux/searchSlice';

export const Filter = ({ findContact }) => {
  const dispatch = useDispatch();
  const handleSearch = e => {
    dispatch(setSearchValue(e.currentTarget.value));
  };

  return (
    <label>
      <p className="inputName">Find contacts by name</p>
      <input type="text" onChange={handleSearch} />
    </label>
  );
};

Filter.propType = {
  findContact: PropTypes.func.isRequired,
};
