import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
// import { RegisterForm } from 'components/RegistredForm/RegistredForm';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.header}>
          <Navigation />
          <AuthNav/>
    </header>
  );
};
