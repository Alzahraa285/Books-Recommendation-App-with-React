import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const user = true;
  return (
    <div>
      {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                 <div className="wrap">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col d-flex align-items-center">
              <p className="mb-0 phone"><span className="mailus">Phone no:</span> <a href="#">+00 1234 567</a> or <span className="mailus">email us:</span> <a href="#">emailsample@email.com</a></p>
            </div>
            <div className="col d-flex justify-content-end">
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <nav
        className='navbar navbar-expand-lg bg-body-tertiary pt-4 pb-4 '
        data-bs-theme='dark'
      >
        <div className='container'>
          <Link className='navbar-brand' to='home'>
            Books App
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarScroll'
            aria-controls='navbarScroll'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarScroll'>
            {/* {userData && ( */}
            <ul
              className='navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll'
              style={{ bsScrollHeight: 100 }}
            >
              <li className='nav-item'>
                <Link className='nav-link active' to='home'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link active' to='books'>
                  Books
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link active' to='author'>
                  Author
                </Link>
              </li>

              {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="TopSearch">
              TopSearch
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="CategoryPage">
              CategoryPage
              </Link>
            </li>
              <li className='nav-item'>
                <Link className='nav-link active' to='about'>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link active' to='contact'>
                  Contact
                </Link>
              </li>
            </ul>
            {user ? (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-nav-scroll">
                <li className='nav-item'>
                  <Link className='nav-link text-white' to='login'>
                    Sign In
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link  text-white' to='register'>
                    Sign Up
                  </Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li className='nav-item'>
                  <Link className='nav-link text-white' to='logout'>
                    Sign Out
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
