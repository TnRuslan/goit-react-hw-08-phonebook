import { useSelector } from 'react-redux';
import { LogoutBtn } from 'components/LogOutBtn/Logout.btn';
import { selectUserName } from 'redux/selectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const user = useSelector(selectUserName);
  return (
    <div className={css.user_menu}>
      {/* <img
        src="https://via.placeholder.com/100x150.png?text=Profile/"
        alt="user photo"
      /> */}
      <p className={css.user_name}>{user}</p>
      <LogoutBtn />
    </div>
  );
};
