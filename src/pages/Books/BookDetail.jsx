import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Component/Loading/Loading';
import axios from 'axios';

const BookDetail = () => {
  const { id } = useParams();
  const [bookInfo, setBookInfo] = useState(null); // الحالة الأولية كـ null

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        setBookInfo(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  // دالة لتنظيف الوصف من أكواد HTML واستبدال علامات الاقتباس، المزدوجة
  const cleanDescription = (description) => {
    if (!description) return ''; // إذا لم يكن هناك وصف

    // إزالة جميع الأكواد HTML باستخدام تعبير منتظم
    let strippedDescription = description.replace(/<\/?[^>]+(>|$)/g, '');

    // استبدال علامات الاقتباس المزدوجة بـ &quot;
    strippedDescription = strippedDescription.replace(/"/g, '&quot;');

    return strippedDescription;
  };

  return (
    <>
      {bookInfo ? (
        <div className='container text-start mt-5'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-4'>
              <img className='d-block w-75' src={bookInfo.volumeInfo.imageLinks?.thumbnail} alt={bookInfo.volumeInfo.title} />
              <h6 className='mt-2 mb-2'><span>Author:</span> {bookInfo.volumeInfo.authors.join(', ')}</h6>
            </div>
            <div className='col-12 col-md-6 col-lg-8 row justify-content-around'>
              <h2>{bookInfo.volumeInfo.title}</h2>
              <h4>{bookInfo.volumeInfo.subtitle}</h4>

              {/* استخدام الدالة لتنظيف الوصف قبل عرضه */}
              <p>{cleanDescription(bookInfo.volumeInfo.description)}</p>

              <h6><span>Publisher:</span> {bookInfo.volumeInfo.publisher}</h6>
              <h6><span>No. of Pages:</span> {bookInfo.volumeInfo.pageCount}</h6>
              <h6><span>Published Year:</span> {bookInfo.volumeInfo.publishedDate}</h6>
              <a target='_blank' rel='noreferrer' href={bookInfo.volumeInfo.infoLink}>More Info</a>
            </div>
          </div>
        </div>
      ) : (
        <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
          <Loading />
        </div>
      )}
    </>
  );
};

export default BookDetail;
