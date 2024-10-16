import React from 'react'

import Image from '../imageComponent/Image'

const Search = ({searchData,setOnchange}) => {

  return (
    <div className='w-100 bg-success'>
        <label className='w-100 mb-3 mt-5  pb-2' htmlFor="text">Search</label>
        <input className=' mb-5   pb-2' type="text" onChange={(e)=>setOnchange(e.currentTarget.value)} />
        <div className=' bg-success w-100  row ' >
        { 
            searchData?
            searchData?.map((book)=>(<>
            <div  key={book.id}  className=' col-sm-6 col-md-4 col-lg-2 ' >   
            <Image id={book.id} image={book.image} key={book.id}/>  
               
            <p>{book.title}</p>
            </div>
            </>))
            :<div style={{height:100}} className='w-100  d-flex align-items-center justify-content-center'>
              No Matching Search </div>
        }
        </div>
    </div>
  )
}

export default Search