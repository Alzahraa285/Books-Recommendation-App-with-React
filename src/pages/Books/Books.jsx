import React, { useEffect, useState } from 'react';
import Loading from '../../Component/Loading/Loading';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Book() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('relevance'); // خيارات: relevance, newest, alphabetical_asc, alphabetical_desc
  const [language, setLanguage] = useState(''); // خيارات: '', 'ar', 'en'
  const booksPerPage = 8;

  useEffect(() => {
    getData(); // جلب البيانات عند تحميل الصفحة
  }, [sort, query, language]); // إضافة language إلى قائمة الاعتماديات

  const getData = async () => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes`, {
      params: {
        q: query || 'bestsellers',
        orderBy: sort === 'alphabetical_asc' ? 'relevance' : sort === 'alphabetical_desc' ? 'relevance' : sort,
        maxResults: 40,
        langRestrict: language,
      },
    });
    let fetchedBooks = response.data.items || [];

    // ترتيب الكتب بناءً على الخيار المحدد
    if (sort === 'alphabetical_asc') {
      fetchedBooks.sort((a, b) => {
        const titleA = a.volumeInfo.title.toLowerCase();
        const titleB = b.volumeInfo.title.toLowerCase();
        return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
      });
    } else if (sort === 'alphabetical_desc') {
      fetchedBooks.sort((a, b) => {
        const titleA = a.volumeInfo.title.toLowerCase();
        const titleB = b.volumeInfo.title.toLowerCase();
        return titleA > titleB ? -1 : titleA < titleB ? 1 : 0;
      });
    }

    setBooks(fetchedBooks);
  };

  const getPaginatedBooks = () => {
    const startIndex = page * booksPerPage;
    return books.slice(startIndex, startIndex + booksPerPage);
  };

  const totalPages = Math.ceil(books.length / booksPerPage);
  
  const defaultImage = 'https://via.placeholder.com/150'; // رابط الصورة الافتراضية

  return (
    <div className='container mb-5 mt-5 pb-5'>
      <h2 className='text-center mb-5'>Our Books</h2>
      
      <input 
        type="text" 
        placeholder="Search for books..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            getData(); // جلب البيانات عند الضغط على Enter
            setPage(0); // إعادة ضبط الصفحة إلى 0
          }
        }}
        className="form-control mb-3"
      />
      
      <div className="row mb-3">
        <div className="col-md-4">
          {/* <label>Language:</label> */}
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="form-select">
            <option value="">All Languages</option>
            <option value="ar">Arabic</option>
            <option value="en">English</option>
          </select>
        </div>
        <div className="col-md-4">
          {/* <label>Sort by:</label> */}
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="form-select">
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div className="col-md-4">
          {/* <label>Alphabetical:</label> */}
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="form-select">
            <option value="alphabetical_asc">A-Z</option>
            <option value="alphabetical_desc">Z-A</option>
          </select>
        </div>
      </div>

      
<div className="row">
  {books.length ? getPaginatedBooks().map((book) => (
    <div key={book.id} className="col-md-3 my-5">
      <Link className='text-decoration-none' to={`/book/${book.id}`}>
        <img 
          className="img-fluid" 
          style={{ height: "345px", width: "214px" }}
          src={book.volumeInfo.imageLinks?.thumbnail || defaultImage} // استخدم الصورة الافتراضية إذا لم توجد
          alt={book.volumeInfo.title} 
        />
        <h1 className="text-truncate h6 text-center mt-1 text-success" title={book.volumeInfo.title}>
          {book.volumeInfo.title || "Unknown"}
        </h1>
      </Link>
    </div>
  )) : <Loading />}
</div>


      <nav aria-label="...">
        <ul className="pagination pagination-md d-flex justify-content-center">
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              className={`page-item ${page === i ? 'active' : ''}`} // تمييز الصفحة النشطة
              onClick={() => setPage(i)}
            >
              <a className="page-link" href="#">
                {i + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}