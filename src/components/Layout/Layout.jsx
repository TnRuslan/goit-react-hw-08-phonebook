import css from './Layout.module.css';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/selectors';
import { Logo } from './logo';

export const Laout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <Logo />
        {isLoggedIn ? <UserMenu /> : <AppBar />}
      </header>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  );
};
