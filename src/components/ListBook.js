import React from 'react';
import Pagination from "react-js-pagination";

const ListBook = (props) => {
  const { books, total, max_score, activePage } = props;

  return (
    <div>
      <div className="row bold">
        <div className="col-1">Số thứ tự</div>
        <div className="col">Thể loại</div>
        <div className="col">Tên sách</div>
        <div className="col-1">Tác giả</div>
        <div className="col-1">Ngày xuất bản</div>
        <div className="col-1">Giá</div>
        <div className="col-1">Đánh giá</div>
        <div className="col-1">Số lượng người đánh giá</div>
        <div className="col-1">Hình ảnh</div>
        <div className="col">Max Score</div>
      </div>

      <div className="row">
        <div className="col-1">Total: {total}</div>
        <div className="col-1">Max Score: {max_score}</div>
      </div>

      {books && books.map((book, index) => (
        <div key={index} className="row book">
          <div className="col-1">{index}</div>
          <div className="col">{book.category}</div>
          <div className="col">{book.title}</div>
          <div className="col-1">{book.author}</div>
          <div className="col-1">{book.published_at}</div>
          <div className="col-1">{book.price}</div>
          <div className="col-1">{book.rate}</div>
          <div className="col-1">{book.total_customer_rate}</div>
          <div className="col-1 img">
            <img src={book.image} alt={book.title} />
          </div>
          <div className="col">{book._score}</div>
        </div >
      ))}

      <div className="row" style={{ justifyContent: "center" }}>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={total}
          pageRangeDisplayed={5}
          onChange={(e) => props.handlePageChange(e)}
        />
      </div>
    </div>
  );
};

export default ListBook;