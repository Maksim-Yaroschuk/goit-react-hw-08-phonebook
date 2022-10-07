import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="register" element={<Register/>} />
          <Route path="login" element={<Login/>} />
          <Route path="contacts" element={<Contacts/>}/>
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
};
