import { useSelector } from 'react-redux';
import { selectError, selectStatusLoading } from 'redux/selectors';
import { Form } from './../../components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import css from './ContactsPage.module.css';

export const ContactsPage = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectStatusLoading);

  return (
    <div className={css.wrapper}>
      {/* <h1>Phonebook</h1> */}

      <Form />
      <div className={css.list_wrapper}>
        {/* <h2 className={css.subtitle}>Contacts:</h2> */}
        <Filter />

        {!error && isLoading && <p>Request in progress...</p>}
        <ContactsList />
      </div>
    </div>
  );
};
