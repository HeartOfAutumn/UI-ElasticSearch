import React, { useState } from 'react';
import ListBook from '../components/ListBook';
import Search from '../components/Search';
import data from '../data';

const BookScreen = (props) => {
  const [books, setBooks] = useState(data.books);

  const matchBooks = (text) => {
    if (books.length === 0) {
      setBooks(data.books);
    }
    let rightBooks = books.filter(book => book.title.includes(text));
    setBooks(rightBooks);
  };

  return (
    <div className="container">
      <Search matchBooks={matchBooks} />
      <ListBook books={books} />
    </div>
  );
};
export default BookScreen;