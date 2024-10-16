import React from 'react'
import Loading from '../../Component/Loading/Loading'
import axios from "axios";
import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";

//import BookCard from '../../Component/BookCard'
export default function Book() {

  let [books, setBooks] = useState([]);
  useEffect(()=>{ getData()},[])
 
async function getData(){
 axios.get('https://www.dbooks.org/api/recent')
.then(({data:{books:fetchBooks}})=>{ 
  setBooks(fetchBooks)
  console.log(fetchBooks)
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
           <img className="h-100 w-100" src={book.image} alt="" />
           <h1
          className="text-truncate h6 text-center mt-1 text-success"
          data-toggle="tooltip"
          data-placement="start"
          title={book.title ? book.title : "unkown"}
        >
          {book.title ? book.title : "unkown"}
        </h1>
        
          </div>
          
      )) : <Loading/>}
      
     
           </div>
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
