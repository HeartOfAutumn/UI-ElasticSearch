import React, { useState } from 'react';
import ListBook from '../components/ListBook';
import Search from '../components/Search';
import data from '../data';

const BookScreen = (props) => {
  const [books, setBooks] = useState(data.books);

  const matchBooks = (text) => {
    if (text === "") {
      setBooks(data.books);
    } else {
      let rightBooks = books.filter(
        book => book.title.toLowerCase().includes(text.toLowerCase())
      );
      setBooks(rightBooks);
    }
  };

  return (
    <div className="container">
      <Search matchBooks={matchBooks} />
      <ListBook books={books} />
    </div>
  );
};
export default BookScreen;