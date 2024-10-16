import React from 'react'
import Loading from '../../Component/Loading/Loading'
import axios from "axios";
import {  useEffect, useState } from "react";

export default function Author() {
  let [book, setBooks] = useState([]);
  
 useEffect(()=>{
  getData();
 },[])
 
 async function getData(){
  let {data:fetchbook}= await axios.get(`https://www.dbooks.org/api/book/${1503212300}`
  )
  // .then(({data:{books:fetchBooks}})=>{console.log({books:fetchBooks})   
  // }).catch((err)=>{console.log(err)})
  setBooks(fetchbook)
  console.log(fetchbook)
  
 }
 
 
  return (
    <div>

<div className="row">
<div className="col-md-4">
           <img className='w-100' src={book.image} alt="" />
      
          </div>

          <div className="col-md-6">
          
         <span>authors:</span>     <h4>{book.authors}</h4>
         <span>subtitle:           <h5>{book.subtitle}</h5></span> 
         <span>pages:</span>       <h6>{book.pages}</h6>
         <span>year:</span>        <h6>{book.year}</h6>
         <span>description:</span> <p>{book.description}</p>
         <a href={book.download}>download</a>
         
          </div>
</div>
        





     {/* <div className="row">
        
      { books.length?
        books.map((book)=>(   
         <div className="col-md-4">
           <img className='w-100' src={book.image} alt="" />
           <h5>{book.title}</h5>
           <p>{book.authors}</p>
          </div>
          
      )) : <Loading/>}
      
        </div> */}

</div>
 
  
        
        
    
  );
}
