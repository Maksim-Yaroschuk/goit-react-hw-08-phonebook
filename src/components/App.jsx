import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { RegistredForm } from './RegistredForm/RegistredForm';
import { LoginForm } from './LoginForm/LoginForm';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<div>Home</div>} />
          <Route path="register" element={<RegistredForm/>} />
          <Route path="login" element={<LoginForm/>} />
          <Route path="contacts" element={<Contacts/>}/>
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
};
