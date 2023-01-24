import css from './Contact.module.css';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contact__item}>
      <p className={css.contact_info}>
        <span className={css.name}>{name}:</span> ({number})
      </p>
      <button
        className={css.contact__btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};
