import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import css from './Form.module.css';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;

      case 'number':
        setNumber(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const names = [];

    contacts.map(contact => {
      return names.push(contact.name);
    });

    if (names.includes(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(
      addContact({
        name,
        number,
      })
    );

    resetForm();
    // setName('');
    // setNumber('');
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="name" className={css.label}>
        <input
          className={css.input_name}
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={inputChange}
        />
      </label>
      <label htmlFor="tel" className={css.label}>
        <input
          className={css.input_phone}
          id="tel"
          type="tel"
          name="number"
          placeholder="Phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={inputChange}
        />
      </label>
      <button className={css.form__btn} type="submit">
        Add contact
      </button>
      <button className={css.clear_btn} type="button" onClick={resetForm}>
        Clear
      </button>
    </form>
  );
};
