import { useDispatch } from 'react-redux';
import { logout } from './../redux/auth/auth.operation';

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => dispatch(logout())}>
      Logout
    </button>
  );
};
