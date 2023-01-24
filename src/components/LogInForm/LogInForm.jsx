import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth.operation';
import css from './LogInForm.module.css';

export const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const inputChange = e => {
    switch (e.currentTarget.name) {
      case 'logIn-email':
        setEmail(e.currentTarget.value);
        break;

      case 'logIn-password':
        setPassword(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.logIn_form} onSubmit={handleFormSubmit}>
      <label htmlFor="logIn-email" className={css.label}>
        Email:
        <input
          type="email"
          name="logIn-email"
          id="logIn-email"
          value={email}
          onChange={inputChange}
        />
      </label>

      <label htmlFor="logIn-password" className={css.label}>
        Password:
        <input
          type="password"
          name="logIn-password"
          id="logIn-password"
          value={password}
          onChange={inputChange}
        />
      </label>

      <button className={css.logIn_btn} type="submit">
        Log In
      </button>
    </form>
  );
};
