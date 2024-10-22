//هذا الكود لسكشن الهوم وهو مؤقت سوف احوله لكمبوننت بعد وضع الكونتكست      
import React from 'react'
import Loading from '../../Component/Loading/Loading'
import axios from "axios";
import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";

//import BookCard from '../../Component/BookCard'
import Books from '../RecommendedBooks/RecommendedBooks'

export default function Book() {

  let [books, setBooks] = useState([]);
  useEffect(()=>{ getData()},[])
 
async function getData(){
 axios.get('https://www.dbooks.org/api/recent')
.then(({data:{books}})=>{ 
  setBooks(books)
  console.log(books)
})
.catch((err)=>{console.log(err)})
 }
 
  return (
    <>
    <div className='container   mb-5 mt-5  pb-5' >
      <h2 className='text-center mb-5'>Recommended   Books</h2>
           <div className="row  ">
        
      { books.length?
        books.splice(0,4).map((book)=>(  
          
          <div key={book.id} className="col-md-3 my-5 ">
             <Link className='text-decoration-none' to={`/RecommendedBooks/${book.id}`}>
            <img className="h-100 w-100" src={book.image} alt="" />
             <h1
             className="text-truncate h6 text-center mt-1 text-success"
            data-toggle="tooltip"
            data-placement="start"
            title={book.title ? book.title : "unkown"}
             >
            {book.title ? book.title : "unkown"}
            </h1>
            </Link>
          </div>
    //<BookCard books={book}/>
          
      )) : <Loading/>}
           </div>
           <Link className="btn btn-success mt-5 px-20" to="/RecommendedBooks" role="button">More Books</Link>
    </div> 
    </>
  );
}




