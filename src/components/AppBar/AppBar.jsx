import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';

const NavItem = styled(NavLink)`
  font-size: 20px;
  padding: 10px;
  &.active {
    color: red;
  }
`;

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav_list}>
      <NavItem to="/home">Home</NavItem>
      {isLoggedIn ? (
        <NavItem to="/contacts">Contacts</NavItem>
      ) : (
        <>
          <NavItem to="/register">Register</NavItem>
          <NavItem to="/logIn">Log in</NavItem>
        </>
      )}
    </nav>
  );
};
