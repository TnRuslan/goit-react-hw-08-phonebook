import { NavLink } from 'react-router-dom';
import { LogInForm } from './../../components/LogInForm/LogInForm';

export const LogInPage = () => {
  return (
    <>
      <LogInForm />
      <NavLink to="/register"> Create Account </NavLink>
    </>
  );
};
