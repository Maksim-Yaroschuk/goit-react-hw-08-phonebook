import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLogIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      {isLogIn && (
        <NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
