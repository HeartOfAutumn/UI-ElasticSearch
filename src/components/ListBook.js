import React from 'react';

const ListBook = (props) => {
  const { books } = props;

  return (
    <div>
      {books.map((book, index) => (
        <div key={index} className="row">
          <div className="col-1">{index}</div>
          <div className="col">{book.title}</div>
          <div className="col-4">{book.price}</div>
        </div >
      ))}
    </div>
  );
};

export default ListBook;