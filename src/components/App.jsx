import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operation';
import { selectIsRefreshing } from 'redux/auth/selectors';

export const App = () => {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)
  
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

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
