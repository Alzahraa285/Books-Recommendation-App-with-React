
import React from 'react'
import Loading from '../../Component/Loading/Loading'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RecommendedBooks() {
  let num = new Array(3).fill().map((item, i) => i + 1);

  let [books, setBooks] = useState([]);
  let [page, setPage] = useState(0); // نبدأ الصفحة من 0
  const booksPerPage = 8; // عدد الكتب المعروضة في كل صفحة

  // استدعاء البيانات عند تحميل المكون
  useEffect(() => {getData();}, []);

  // دالة لجلب البيانات من API
  async function getData() {
    axios.get('https://www.dbooks.org/api/recent')
      .then(({ data: { books } }) => {
        setBooks(books);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // دالة لتحديد الكتب التي سيتم عرضها حسب الصفحة الحالية
  const getPaginatedBooks = () => {
    let startIndex = (page * booksPerPage) % books.length;
    let endIndex = startIndex + booksPerPage;

    // إعادة التدوير من البداية إذا تجاوزنا عدد الكتب
    if (endIndex > books.length) {
      return [...books.slice(startIndex), ...books.slice(0, endIndex % books.length)];
    } else {
      return books.slice(startIndex, endIndex);
    }
  };

  return (
    <>
      <div className='container mb-5 mt-5 pb-5'>
        <h2 className='text-center mb-5'>Recommended Books</h2>
        <div className="row">
          {books.length ? getPaginatedBooks().map((book) => (
            <div key={book.id} className="col-md-3 my-5">
              <Link className='text-decoration-none' to={`/RecommendedBooks/${book.id}`}>
                <img className="h-100 w-100" src={book.image} alt="" />
                <h1 className="text-truncate h6 text-center mt-1 text-success" title={book.title}>
                  {book.title || "Unknown"}
                </h1>
              </Link>
            </div>
          )) : <Loading />}
        </div>

        <nav aria-label="...">
          <ul className="pagination pagination-md d-flex justify-content-center">
            {num.map((item, i) => (
              <li
                key={i}
                className="page-item"
                onClick={() => {
                  setPage(i);
                  console.log(`Page: ${item}`);
                }}
              >
                <a className="page-link" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
