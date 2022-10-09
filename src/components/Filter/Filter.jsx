import { useDispatch } from 'react-redux';
import { setSearchValue } from 'redux/contacts/searchSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleSearch = e => {
    dispatch(setSearchValue(e.currentTarget.value));
  };

  return (
    <label className="label">
      Find contacts by name
      <input className="form" type="text" onChange={handleSearch} />
    </label>
  );
};
