import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth.operation';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const inputChange = e => {
    console.log(e.currentTarget.name);
    switch (e.currentTarget.name) {
      case 'register-name':
        setName(e.currentTarget.value);
        break;

      case 'register-email':
        setEmail(e.currentTarget.value);
        break;

      case 'register-password':
        setPassword(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.register_form} onSubmit={handleFormSubmit}>
      <label htmlFor="register-name">
        Name
        <input
          type="text"
          name="register-name"
          id="register-name"
          value={name}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="register-email">
        Email
        <input
          type="email"
          name="register-email"
          id="register-email"
          value={email}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="register-password">
        Password
        <input
          type="password"
          name="register-password"
          id="register-password"
          value={password}
          onChange={inputChange}
        />
      </label>

      <button className={css.register_btn} type="submit">
        Registr
      </button>
    </form>
  );
};
