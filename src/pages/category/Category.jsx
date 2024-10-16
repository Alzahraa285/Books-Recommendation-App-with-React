import React from "react";

const Category = () => {
  return (
    <div class='container text-center mt-5 mb-5 ' >
      <h2 className='text-center mb-5'>Suggestion Category</h2>
      <div class='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3 ' >
        <div class='col '>
          <div class='p-3  border border-3 rounded-5 rounded-top-0'>Fiction</div>
        </div>
        <div class='col'>
          <div class='p-3  border border-3 rounded-5 rounded-top-0'>Time Travel</div>
        </div>
        <div class='col'>
          <div class='p-3  border border-3 rounded-5 rounded-top-0'>Romance</div>
        </div>
        <div class='col'>
          <div class='p-3  border border-3 rounded-5 rounded-top-0'>History</div>
        </div>
        <div class='col'>
          <div class='p-3  border border-3 rounded-5 rounded-top-0'>IT</div>
        </div>
        <div class='col'>
          <div class='p-3  border border-3 rounded-5 rounded-top-0'>ChildHood</div>
        </div>
        <div class='col'>
          <div class='p-3  border border-3 rounded-5 rounded-top-0'>Economy</div>
        </div>
        <div class='col'>
          <div class='p-3  border border-3 rounded-5 rounded-top-0'>Money</div>
        </div>
        <div class='col'>
          <div class='p-3  border border-3 rounded-5 rounded-top-0'>Human</div>
        </div>
      </div>
    </div>
  );
};

export default Category;
