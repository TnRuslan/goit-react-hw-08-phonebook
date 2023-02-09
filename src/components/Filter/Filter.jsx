import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';
import css from './Filter.module.css';
import { CiSearch } from 'react-icons/ci';

export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const clearFilter = () => {
    setFilter('');
    dispatch(filterContacts(''));
  };

  const filterChange = e => {
    setFilter(e.currentTarget.value);
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <div className={css.filter_wrapper}>
      <label className={css.label}>
        <input
          className={css.input}
          placeholder={'Find contact'}
          type="text"
          value={filter}
          onChange={filterChange}
        />
        <CiSearch className={css.icon} />
      </label>
      <button className={css.clear_btn} type="button" onClick={clearFilter}>
        Clear
      </button>
    </div>
  );
};
