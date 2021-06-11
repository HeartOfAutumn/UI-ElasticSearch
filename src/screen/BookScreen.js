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
        book =>
          book.category.toLowerCase().includes(text.toLowerCase())
          || book.title.toLowerCase().includes(text.toLowerCase())
          || book.author.toLowerCase().includes(text.toLowerCase())
      );
      setBooks(rightBooks);
    }
  };

  return (
    <div className="container-fluid">
      <Search matchBooks={matchBooks} />
      <ListBook books={books} />
    </div>
  );
};
export default BookScreen;