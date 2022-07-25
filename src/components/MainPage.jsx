import { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const MainPage = () => {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);

  const searchBook = (e) => {
    if (e.key === 'Enter' || e.button === 0) {
      e.preventDefault();
      axios
        .get(
          'https://www.googleapis.com/books/v1/volumes?q=' +
            search +
            '&key=AIzaSyCTYM1ojTE3BI52iGw1eRtFtlpz9F_CWdI' +
            '&maxResults=40',
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="header">
        <div className="row">
          <h1>Find Your Book</h1>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              autoFocus
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
            <button href="#" onClick={searchBook}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="bookshelf">
        <BookCard book={bookData} />
      </div>
    </>
  );
};

export default MainPage;
