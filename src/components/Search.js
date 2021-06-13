import React, { useState } from 'react';

const Search = (props) => {
  const { matchBooks } = props;

  const [text, setText] = useState('');
  const [categoryIsChecked, setCategoryIsChecked] = useState(false);
  const [titleIsChecked, setTitleIsChecked] = useState(false);
  const [authorIsChecked, setAuthorIsChecked] = useState(false);
  const [dayIsChecked, setDayIsChecked] = useState(false);
  const [startAt, setStartAt] = useState('');
  const [endAt, setEndAt] = useState('');

  const searchBy = {
    text,
    category: (categoryIsChecked && !dayIsChecked ? 'category' : ''),
    title: (titleIsChecked && !dayIsChecked ? 'title' : ''),
    author: (authorIsChecked && !dayIsChecked ? 'author' : ''),
    startAt: (dayIsChecked ? startAt : ''),
    endAt: (dayIsChecked ? endAt : '')
  }

  const submitHandler = (e) => {
    e.preventDefault();
    matchBooks(searchBy);
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

          <label></label>

          <div className="row">
            {!dayIsChecked && (
              <>
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
              </>
            )}

            <div className="col">
              <label htmlFor="day">Ngày</label>
              <input
                id="day"
                type="checkbox"
                checked={dayIsChecked}
                onChange={(e) => setDayIsChecked(e.target.checked)}
              />
            </div>

            {dayIsChecked && (
              <>
                <div className="col">
                  <label htmlFor="startAt">Ngày bắt đầu:</label>
                  ' '
                  <input
                    type="date"
                    id="startAt"
                    value={startAt}
                    onChange={(e) => setStartAt(e.target.value)}
                  />
                </div>

                <div className="col">
                  <label htmlFor="endAt">Ngày kết thúc:</label>
                  ' '
                  <input
                    type="date"
                    id="endAt"
                    value={endAt}
                    onChange={(e) => setEndAt(e.target.value)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;