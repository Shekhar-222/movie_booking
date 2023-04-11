import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-section">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/">
                <img src="assets/images/logo/logo.png" alt="logo" />
              </Link>
            </div>
            <ul className="menu">
              <li>
                <Link to="/" className="active">
                  Home
                </Link>
                <Navigation/>
              </li>
              <li>
                <Link to="#0">movies</Link>
                <ul className="submenu">
                  <li>
                    <Link to="movie-grid">Movie Grid</Link>
                  </li>
                  <li>
                    <Link to="movie-list">Movie List</Link>
                  </li>
                  <li>
                    <Link to="movie-details">Movie Details</Link>
                  </li>
                  <li>
                    <Link to="movie-details-2">Movie Details 2</Link>
                  </li>
                  <li>
                    <Link to="movie-ticket-plan">Movie Ticket Plan</Link>
                  </li>
                  <li>
                    <Link to="movie-seat-plan">Movie Seat Plan</Link>
                  </li>
                  <li>
                    <Link to="movie-checkout">Movie Checkout</Link>
                  </li>
                  <li>
                    <Link to="popcorn">Movie Food</Link>
                  </li>
                </ul>
              </li>
             
              
              <li>
                <Link to="#0">pages</Link>
                <ul className="submenu">
                  <li>
                    <Link to="about">About Us</Link>
                  </li>
                  <li>
                    <Link to="apps-download">Apps Download</Link>
                  </li>
                  <li>
                    <Link to="sign-in">Sign In</Link>
                  </li>
                  <li>
                    <Link to="sign-up">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="404">404</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#0">blog</Link>
                <ul className="submenu">
                  <li>
                    <Link to="blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="blog-details">Blog Single</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="contact">contact</Link>
              </li>
              <li className="header-button pr-0">
                <Link to="sign-up">join us</Link>
              </li>
            </ul>
            <div className="header-bar d-lg-none">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
