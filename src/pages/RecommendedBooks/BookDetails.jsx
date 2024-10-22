import React, {  useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import Loading from '../../Component/Loading/Loading'

export default function BookDetails() {
 
  const{id}=useParams();
  
  let [bookDetails, setDetails] = useState();
  useEffect(()=>{getDetails()},[])


  function getDetails(){
   axios.get(`https://www.dbooks.org/api/book/${id}`
 )
 .then((res)=>{  setDetails(res.data)
 console.log(res.data)   
 }).catch((err)=>{console.log(err)})
}
 
  return (
    <> 
{  BookDetails?  (<div className='container'>
      <div className="row ">
           <div className="col-md-4 my-5">
           <img className='w-100' src={bookDetails?.image} alt="" />
    </div>
    <div className="col-md-6 my-5 ">
          
           <span>authors:</span>     <h4>{bookDetails?.authors}</h4>
            <span>subtitle:           <h5>{bookDetails?.subtitle ? bookDetails?.subtitle :bookDetails?.Title}</h5></span> 
            <span>pages:</span>       <h6>{bookDetails?.pages}</h6>
            <span>year:</span>        <h6>{bookDetails?.year}</h6>
    <span>description:</span> <p>{bookDetails?.description}</p>
            <a href={bookDetails?.download}>download</a>
         </div>
    </div>
   </div>):(<Loading></Loading>)}
    </>
    
 
  
        
        
    
  );
}

