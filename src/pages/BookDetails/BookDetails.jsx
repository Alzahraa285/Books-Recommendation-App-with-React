import React from 'react'
import Loading from '../../Component/Loading/Loading'
import axios from "axios";
import {  useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function Author() {
  const{id}=useParams();
  
  let [bookDetails, setDetails] = useState();
  useEffect(()=>{getDetails()},[])
 
//  async function getDetails(){
//    await axios.get(`https://www.dbooks.org/api/book/${bookDetails.id}`
//   )
//   .then(({bookDetails:fetchBooks})=>{  setDetails({bookDetails:fetchBooks})
//   console.log({bookDetails:fetchBooks})   
//   }).catch((err)=>{console.log(err)})
//  }

 async function getDetails(){
  await axios.get(`https://www.dbooks.org/api/book/${id}`
 )
 .then((res)=>{  setDetails(res.data)
 console.log(res.data)   
 }).catch((err)=>{console.log(err)})
}
 
  return (
    <div className='container'>
      <div className="row ">
           <div className="col-md-4 my-5">
           <img className='w-100' src={bookDetails?.image} alt="" />
    </div>
    <div className="col-md-6 my-5 ">
          
           <span>authors:</span>     <h4>{bookDetails?.authors}</h4>
            <span>subtitle:           <h5>{bookDetails?.subtitle}</h5></span> 
            <span>pages:</span>       <h6>{bookDetails?.pages}</h6>
            <span>year:</span>        <h6>{bookDetails?.year}</h6>
    <span>description:</span> <p>{bookDetails?.description}</p>
            <a href={bookDetails?.download}>download</a>
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

// import React from 'react'
// import Loading from '../../Component/Loading/Loading'
// import axios from "axios";
// import {  useEffect, useState } from "react";

// export default function BookDetails() {
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
