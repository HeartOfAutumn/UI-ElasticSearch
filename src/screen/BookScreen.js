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
    console.log(searchBy);
    setSearchBy(searchBy);
  }

  return (
    <div className="container-fluid">
      <Search matchBooks={matchBooks} />
      <ListBook books={books} />
    </div>
  );
};
export default BookScreen;