import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFeching } from 'redux/selectors';
import { fetchCurrentUser } from './../redux/auth/auth.operation';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LogInPage } from 'pages/LogInPage/LogInPage';
import { Laout } from './Layout/Layout';
import { useEffect } from 'react';
import { PrivetRoute } from '../Routes/Private.Rout';
import { PublicRoute } from '../Routes/Public.Routr';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';

export const App = () => {
  const dispatch = useDispatch();
  const isFechingUser = useSelector(selectIsFeching);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFechingUser && (
      <Routes>
        <Route path="/" element={<Laout />}>
          <Route path="/" element={<PublicRoute redirectTo="/contacts" />}>
            <Route index path="logIn" element={<LogInPage />} />
          </Route>
          <Route path="/" element={<PublicRoute redirectTo="/contacts" />}>
            <Route path="register" element={<RegisterPage />} />
          </Route>

          <Route path="/" element={<PrivetRoute redirectTo="/logIn" />}>
            <Route path="contacts" element={<ContactsPage />}></Route>
          </Route>
          <Route path="*" element={<LogInPage />} />
        </Route>
      </Routes>
    )
  );
};
