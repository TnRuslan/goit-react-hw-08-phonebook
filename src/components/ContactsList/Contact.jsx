import css from './Contact.module.css';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { BsTrash } from 'react-icons/bs';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contact__item}>
      <div className={css.contact_wrapper}>
        <span className={css.first_letter}>{name[0].toUpperCase()}</span>

        <div className={css.contact_info}>
          <p className={css.name}>{name}</p>
          <p className={css.number}>Number: ({number})</p>
        </div>
      </div>
      <button
        className={css.contact__btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        <BsTrash className={css.icon} />
      </button>
    </li>
  );
};
