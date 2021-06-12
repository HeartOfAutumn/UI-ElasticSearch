import React, { useState } from 'react';

const Search = (props) => {
  const { matchBooks } = props;
  const [text, setText] = useState('');
  const [categoryIsChecked, setCategoryIsChecked] = useState(false);
  const [titleIsChecked, setTitleIsChecked] = useState(false);
  const [authorIsChecked, setAuthorIsChecked] = useState(false);

  const searchBy = {
    category: categoryIsChecked,
    title: titleIsChecked,
    author: authorIsChecked
  }

  const submitHandler = (e) => {
    e.preventDefault();
    matchBooks(text, searchBy);
  }

  return (
    <div className="search">
      <form onSubmit={submitHandler}>
        <div className="container-fluid">
          <div className="row">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Tìm</button>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="category">Thể loại</label>
              <input
                id="category"
                type="checkbox"
                checked={categoryIsChecked}
                onChange={(e) => setCategoryIsChecked(e.target.checked)}
              />
            </div>

            <div className="col">
              <label htmlFor="title">Tên sách</label>
              <input
                id="title"
                type="checkbox"
                checked={titleIsChecked}
                onChange={(e) => setTitleIsChecked(e.target.checked)}
              />
            </div>

            <div className="col">
              <label htmlFor="author">Tác giả</label>
              <input
                id="author"
                type="checkbox"
                checked={authorIsChecked}
                onChange={(e) => setAuthorIsChecked(e.target.checked)}
              />
            </div>

            <div className="col">
              <label htmlFor="startDay">Ngày bắt đầu:</label>
              <input
                type="date"
                id="startDay"
              />
            </div>

            <div className="col">
              <label htmlFor="endDay">Ngày bắt đầu:</label>
              <input
                type="date"
                id="endDay"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;