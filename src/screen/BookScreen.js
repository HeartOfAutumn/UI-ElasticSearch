import React, { useEffect, useState } from 'react';
import ListBook from '../components/ListBook';
import Search from '../components/Search';
import data from '../data';

const BookScreen = (props) => {
  const [books, setBooks] = useState(data.books);
  const [searchBy, setSearchBy] = useState({});

  // Work with API
  useEffect(() => {

  }, [searchBy])

  const matchBooks = (searchBy) => {
    setSearchBy(searchBy);
  }

  // Test với dữ liệu ở máy
  // const matchBooks = (searchBy) => {
  // console.log(searchBy);
  //   if (searchBy.text === "") {
  //     setBooks(data.books);
  //   } else {
  //     let rightBooks = books.filter(
  //       book =>
  //         book.category.toLowerCase().includes(searchBy.text.toLowerCase())
  //         || book.title.toLowerCase().includes(searchBy.text.toLowerCase())
  //         || book.author.toLowerCase().includes(searchBy.text.toLowerCase())
  //     );
  //     setBooks(rightBooks);
  //   }
  // };

  return (
    <div className="container-fluid">
      <Search matchBooks={matchBooks} />
      <ListBook books={books} />
    </div>
  );
};
export default BookScreen;