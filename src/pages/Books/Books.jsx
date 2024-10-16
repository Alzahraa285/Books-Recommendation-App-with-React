import React from 'react'
import Loading from '../../Component/Loading/Loading'
import axios from "axios";
import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";

import BookCard from '../../Component/BookCard'
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
        books.map((book)=>(  
          
          <div key={book.id} className="col-md-3 my-5 ">
             <Link className='text-decoration-none' to={`/book/${book.id}`}>
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
    </div> 
    </>
  );
}




