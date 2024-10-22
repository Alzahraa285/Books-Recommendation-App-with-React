import React from "react";

import Image from "../../Component/imageComponent/Image";

const Search = ({ searchData, setOnchange, onchange }) => {
  return (
    <div className='w-100 position-relative '>
      <input
        placeholder='Srearch'
        type='text'
        onChange={(e) => setOnchange(e.currentTarget.value)}
        className='form-control border-success p-4 w-75 m-auto '
      />
      <div
        className=' w-75 m-auto  position-absolute start-0 end-0 bg-white rounded search-100 '
        style={{ zIndex: 9999999 }}
      >
        {searchData ? (
          searchData.splice(0, 10)?.map((book) => (
            <>
              <div key={book.id} className='container row ms-1 me-1 pt-1'>
                <div className='col-3 col-lg-1 '>
                  <Image id={book.id} image={book.image} />
                </div>
                <div className='col-9 col-lg-11 text-start '>
                  <h6 className='mb-0'>{book.title}</h6>
                  <p>{book.subtitle}</p>
                </div>
              </div>
              <hr className='m-2' />
            </>
          ))
        ) : onchange.length !== 0 ? (
          <div
            style={{ height: 100 }}
            className='w-100  d-flex align-items-center justify-content-center'
          >
            No Matching Search{" "}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Search;
