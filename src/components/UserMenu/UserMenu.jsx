import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { selectUser } from 'redux/auth/selectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)

      return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.userMenuButton} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};