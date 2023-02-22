import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from '../redux/selectors';

export const PublicRoute = ({ redirectTo = 'contacts' }) => {
  const token = useSelector(selectToken);
  return !token ? <Outlet /> : <Navigate to={redirectTo} />;
};
