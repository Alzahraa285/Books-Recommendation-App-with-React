//هذا الكود لسكشن الهوم وهو مؤقت سوف احوله لكمبوننت بعد وضع الكونتكست
// import React from 'react'
// import Loading from '../../Component/Loading/Loading'
// import axios from "axios";
// import {  useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// //import BookCard from '../../Component/BookCard'
// export default function BooksSection() {

//   let [books, setBooks] = useState([]);
//   useEffect(()=>{ getData()},[])
 
// async function getData(){
//  axios.get('https://www.dbooks.org/api/recent')
// .then(({data:{books:fetchBooks}})=>{ 
//   setBooks(fetchBooks)
//   console.log(fetchBooks)
// })
// .catch((err)=>{console.log(err)})
//  }
 
//   return (
//     <>
//     <div className='container   mb-5 mt-5  pb-5' >
//       <h2 className='text-center mb-5'>Recommended   Books</h2>
//            <div className="row mb-4 ">
        
//       { books.length?
//         books.splice(0,4).map((book)=>(   
//          <div key={book.id} className="col-md-3">
//            <img className="w-100 h-100" src={book.image} alt="" />
//            <h1
//           className="text-truncate h6 text-center mt-2 text-success"
//           data-toggle="tooltip"
//           data-placement="start"
//           title={book.title ? book.title : "unkown"}
//         >
//           {book.title ? book.title : "unkown"}
//         </h1>
        
//           </div>
          
//       )) : <Loading/>}
      
import React, { useContext } from 'react'
import Loading from '../../Component/Loading/Loading'
import axios from "axios";
import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BookCard from '../../Component/BookCard'
import { RecentApiContext } from '../../contexts/RecentApiContext';
import { FixDetailsPageId } from '../../contexts/FixDetailsPageId';
export default function Book() {
  const {recentdata} = useContext(RecentApiContext);
  const {moveTo}=useContext(FixDetailsPageId)
//   let [books, setBooks] = useState([]);
//   useEffect(()=>{ getData()},[])
 
// async function getData(){
//  axios.get('https://www.dbooks.org/api/recent')
// .then(({data:{books}})=>{ 
//   setBooks(books)
//   console.log(books)
// })
// .catch((err)=>{console.log(err)})
//  }
 const books=[...recentdata]
  return (
    <>
    <div className='container   mb-5 mt-5  pb-5' >
      <h2 className='text-center mb-5'>Recommended   Books</h2>
           <div className="row  ">
        
      { books.length?
        books.splice(0,4).map((book)=>(  
          
          <div key={book.id} className="col-md-3 my-5 "  >
             <div className='text-decoration-none'onClick={() => moveTo(book.id)}  >
            <img className="h-100 w-100" src={book.image} alt="" />
             <h1
             className="text-truncate h6 text-center mt-1 text-dark"
            data-toggle="tooltip"
            data-placement="start"
            title={book.title ? book.title : "unkown"}
             >
            {book.title ? book.title : "unkown"}
            </h1>
            </div>
          </div>
    //<BookCard books={book}/>
          
      )) : <Loading/>}
           </div>
           <Link className="btn btn-dark mt-5 px-20" to="/Books" role="button">More Books</Link>
    </div> 
    </>
  );
}




// import React from 'react'
// import Loading from '../../Component/Loading/Loading'
// import axios from "axios";
// import {  useEffect, useState } from "react";
// export default function Books() {
//   let [books, setBooks] = useState([]);
//  useEffect(()=>{
//   getData();
//  },[])
 
//  async function getData(){
//   let {data:{books:fetchBooks}}= await axios.get('https://www.dbooks.org/api/recent'
//   )
//   // .then(({data:{books:fetchBooks}})=>{console.log({books:fetchBooks})   
//   // }).catch((err)=>{console.log(err)})
//   setBooks(fetchBooks)
//   console.log(fetchBooks)
  
//  }
 
 
//   return (
//     <div>
//       <div className="row">
        
//       { books.length?
//         books.map((book)=>(   
//          <div className="col-md-5 m-auto h-300 w-240">
//            <img className='w-100' src={book.image} alt="" />
//            <h4>{book.authors}</h4>
//            <p>{book.subtitle}</p>
//            <a href={book.url}>Refrence</a>

//           </div>
          
//       )) : <Loading/>}
      
     
//       </div>
  
        
        
//     </div>
//   );
// }
