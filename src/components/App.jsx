import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { selectError, selectStatusLoading } from 'redux/selectors';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LogInForm } from './LogInForm/LogInForm';
import { LogoutBtn } from './Logout.btn';

export const App = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const user = useSelector(state => state.user.user.name);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectStatusLoading);

  console.log(isLoggedIn);
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <Form />

      <h2>Contacts:</h2>
      <Filter />
      <RegisterForm />
      <LogInForm />
      {!error && isLoading && <p>Request in progress...</p>}
      <ContactsList />
      {isLoggedIn && <h2>{user} here</h2>}
      {isLoggedIn && <LogoutBtn />}
    </div>
  );
};
