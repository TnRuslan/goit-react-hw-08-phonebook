import { useSelector } from 'react-redux';
import { LogoutBtn } from 'components/LogOutBtn/Logout.btn';
import { selectUserName } from 'redux/selectors';
import { FaUserCircle } from 'react-icons/fa';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const user = useSelector(selectUserName);
  return (
    <div className={css.user_menu}>
      <div className={css.user_wrapper}>
        <FaUserCircle className={css.user_icon} />

        <p className={css.user_name}>{user}</p>
      </div>

      <LogoutBtn />
    </div>
  );
};
