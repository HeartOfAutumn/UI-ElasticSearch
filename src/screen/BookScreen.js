import React, { useEffect, useState } from 'react';
import ListBook from '../components/ListBook';
import Search from '../components/Search';

const BookScreen = (props) => {
  // const [books, setBooks] = useState(data.books);
  const [books, setBooks] = useState([]);
  const [searchBy, setSearchBy] = useState({});

  // Mock API với json server
  useEffect(() => {
    async function postData(url) {
      const response = await fetch(url, {
        method: 'GET',
      });
      return response.json();
    }

    postData('http://localhost:3000/books')
      .then(data => {
        setBooks(data);
      });
  }, [searchBy])

  const matchBooks = (searchBy) => {
    setSearchBy(searchBy);
  }

  // Test với dữ liệu ở máys
/*   const matchBooks = (searchBy) => {
    console.log(searchBy);
    if (searchBy.text === "") {
      setBooks();
    } else {
      let rightBooks = books.filter(
        book =>
          book.category.toLowerCase().includes(searchBy.text.toLowerCase())
          || book.title.toLowerCase().includes(searchBy.text.toLowerCase())
          || book.author.toLowerCase().includes(searchBy.text.toLowerCase())
      );
      setBooks(rightBooks);
    }
  } */;

  return (
    <div className="container-fluid">
      <Search matchBooks={matchBooks} />
      <ListBook books={books} />
    </div>
  );
};
export default BookScreen;