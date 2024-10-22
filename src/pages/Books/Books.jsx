
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../../Component/Loading/Loading';

export default function Book() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(8); // Number of books per page
  const [sortOrder, setSortOrder] = useState('asc'); // Default sort order (asc or desc)

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    axios.get('https://www.dbooks.org/api/recent')
      .then(({ data: { books } }) => {
        setBooks(books);
      })
      .catch((err) => { console.log(err) });
  }

  // Sort books by title
  const sortedBooks = books.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  // Pagination logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = sortedBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Change sorting order
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <>
      <div className='container mb-5 mt-5 pb-5'>
        <h2 className='text-center mb-5'>Recommended Books</h2>

        {/* Sorting Dropdown */}
        <div className="d-flex justify-content-end mb-3">
          <label className="mr-2">Sort by:</label>
          <select value={sortOrder} onChange={handleSortChange} className="form-control w-auto">
            <option value="asc">Title: A to Z</option>
            <option value="desc">Title: Z to A</option>
          </select>
        </div>

        <div className="row">
          {currentBooks.length ? currentBooks.map((book) => (
            <div key={book.id} className="col-md-3 my-5">
              <Link className='text-decoration-none' to={`.././details/${book.id}`}>
                <img className="h-100 w-100" src={book.image} alt="" />
                <h1
                  className="text-truncate h6 text-center mt-1 text-success"
                  data-toggle="tooltip"
                  data-placement="start"
                  title={book.title ? book.title : "Unknown"}
                >
                  {book.title ? book.title : "Unknown"}
                </h1>
              </Link>
            </div>
          )) : <Loading />}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-4">
          <Pagination
            booksPerPage={booksPerPage}
            totalBooks={books.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
}

// Pagination Component
const Pagination = ({ booksPerPage, totalBooks, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};