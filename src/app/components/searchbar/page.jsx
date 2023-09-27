'use client';

import { useState } from 'react';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(term);
    setTerm('');
  };

  return (
    <div className='segment'>
      <form onSubmit={onFormSubmit} className='form'>
        <div>
          <div>
            <span>Giphy Search</span>
          </div>
          <input
            type='text'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type='submit'>Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
