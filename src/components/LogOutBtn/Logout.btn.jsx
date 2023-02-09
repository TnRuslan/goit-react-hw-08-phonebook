import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/auth.operation';
import css from './LogOutBtn.module.css';

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  return (
    <button
      className={css.btn}
      type="button"
      onClick={() => dispatch(logout())}
    >
      Sign out
    </button>
  );
};
