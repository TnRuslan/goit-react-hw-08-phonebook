import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/auth.operation';
import css from './LogOutBtn.module.css';
// import { Button } from '@mui/material';

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  return (
    <>
      {/* <Button variant="contained" color="secondary">
        Button
      </Button> */}
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </>
  );
};
