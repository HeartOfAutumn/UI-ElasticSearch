import React, { useEffect, useState } from 'react';
import ListBook from '../components/ListBook';
import Search from '../components/Search';

const BookScreen = (props) => {
  const [books, setBooks] = useState([]);
  const [searchBy, setSearchBy] = useState({});
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  // Mock API với json server
  useEffect(() => {
    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return response.json();
    }

    const bodyData = () => {
      if (!searchBy.startAt) {
        return {
          field: [searchBy.category, searchBy.title, searchBy.author],
          content: searchBy.text,
          from: 1
        }
      } else {
        return {
          field: ["date"],
          beginDay: searchBy.startAt,
          endDay: searchBy.endAt,
          from: 1
        }
      }
    }

    postData('http://localhost:4000/search', bodyData())
      .then(data => {
        setBooks(data.data);
        setScore(data.score);
        setTotal(data.total);
      });
  }, [searchBy])

  const matchBooks = (searchBy) => {
    setSearchBy(searchBy);
  }

  return (
    <div className="container-fluid">
      <Search matchBooks={matchBooks} />
      <ListBook books={books} total={total} max_score={score} />
    </div>
  );
};

export default BookScreen;