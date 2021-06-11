import React, { useState } from 'react';

const Search = (props) => {
  const { matchBooks } = props;
  const [text, setText] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    matchBooks(text);
  }

  return (
    <div className="search">
      <form onSubmit={submitHandler}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Tìm</button>
      </form>
    </div>
  );
};

export default Search;