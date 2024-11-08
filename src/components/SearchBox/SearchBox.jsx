import s from './SearchBox.module.css';
// import { useState } from 'react';

const SearchBox = () => {
  //   const [inputValue, setInputValue] = useState('');
  return (
    <label className={s.input}>
      <span>Name</span>
      <input type="text" name="search" />
    </label>
  );
};

export default SearchBox;
