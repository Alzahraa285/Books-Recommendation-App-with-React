
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const BookPage = () => {
    const {id}=useParams()
    const [bookInfo, setBookInfo] = useState({})
   
    useEffect(() => {
        axios.get(`https://www.dbooks.org/api/book/${id}`)
       .then(response => setBookInfo(response.data))
       .catch(error => {console.log(error)}) 
   }, [])
  return (

    <>
    {bookInfo?
    <div className='container text-start mt-5  '>
       
        <div className='row '>
            <div className='col-12  col-md-6 col-lg-4 '>
                <div>
                <img className='d-block w-75' src={bookInfo?.image} alt="" />
                </div>
                <h6> <span> author : </span>{bookInfo?.authors}</h6>
            </div>
            <div className='col-12  col-md-6 col-lg-8 row justify-content-around '>
                <h2>{bookInfo?.title}</h2>
                <h4>{bookInfo?.subtitle}</h4>
                <p>{bookInfo?.description}</p>
               
                <h6><span>Publisher :</span> {bookInfo?.publisher}</h6>
                <h6><span>No.Pages</span> {bookInfo?.pages}</h6>
                <h6><span>Year :</span>{bookInfo?.year}</h6>
                <a target='_blank' rel='noreferrer' href={bookInfo?.url}>URL</a>
                
            </div>
        </div>
    </div> :<div>Loddinggggggggggggggggggg</div>}
    </>
  )
}

export default BookPage