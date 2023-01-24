import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/selectors';

export const PrivetRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/logIn" />;
};
