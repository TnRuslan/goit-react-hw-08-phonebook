import css from './Layout.module.css';
import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/selectors';

export const Laout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);

  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        {isLoggedIn ? <UserMenu /> : <AppBar />}
      </header>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  );
};
