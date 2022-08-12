import React from 'react';
import style from './Filter.module.css';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterItems, getFilter } from '../../redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const changeFilter = e => {
    dispatch(filterItems(e.currentTarget.value));
  };

  return (
    <label className={style.label}>
      <span>Find contacts by name</span>
      <input
        type="text"
        value={value}
        onChange={changeFilter}
        className={style.input}
      />
    </label>
  );
};

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
