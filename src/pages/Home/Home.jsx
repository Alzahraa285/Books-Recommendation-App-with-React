import React, { useContext } from "react";
// import Loading from '../Component/Loading/Loading'

import axios from "axios";
import { useEffect, useState } from "react";
import Category from "../category/Category";

import BannarCard from "../../Component/bannarCard/BannarCard";

import Books from "../BooksSection/BooksSection";
import { Link } from "react-router-dom";
import Search from "../../Component/search/Search";
import { RecentApiContext } from "../../contexts/RecentApiContext";


export default function Home() {
  const {recentdata} = useContext(RecentApiContext);
  const [searchData, setSearchData] = useState([]);
  const [onchange, setOnchange] = useState([]);


  useEffect(() => {
    axios
      .get(`https://www.dbooks.org/api/search/${onchange}`)
      .then((response) => setSearchData(response.data.books))
      .catch((error) => {
        console.log(error);
      });
  }, [onchange]);

  return (
    <>
      <div
        className='w-100 container mb-5 mt-5 pt-5 pb-5'
        style={{ backgroundColor: "rgb(243, 247, 236)" }}
      >
        <div
          className='w-100  text-center p-4'
          style={onchange.length > 0 ? { opacity: 0.3 } : { opacity: 1 }}
        >
          <h1>Discover books you'll love!</h1>
          <h5 className='text-muted p-2 w-75 m-auto'>
            Enter a book you like and the site will analyse our huge database of
            real readers' favorite books to provide book recommendations and
            suggestions for what to read next.
          </h5>
        </div>
        <Search
          setOnchange={setOnchange}
          onchange={onchange}
          searchData={searchData}
        />
      </div>
      <section
        className='text-center container-fluid pt-5 pb-5'
        style={{ backgroundColor: "rgb(0, 0, 0)" }}
      >
        <h2 className='text-white'>Our Recent Books</h2>
        <div className='row align-items-center container pt-5 pb-5'>
          <div className='col-12 hoverRound p-5 col-md-6'>
            <img
              src='./assets/shop1.jpg'
              className='d-block w-75 m-auto  rounded '
              alt=''
            />
          </div>
          <div className='col-12 col-md-6'>
            <h4 className='text-white'>Take A look</h4>
            <BannarCard data={recentdata} key={recentdata.id} />
          </div>
        </div>
      </section>
      <section>
        <Books />
      </section>
      <section>
        <Link className='btn btn-dark m-5' to='/CategoryPage'>
          CategoryPage
        </Link>
      </section>
    </>
  );
}
