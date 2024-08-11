import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Unlock a world of stories with our intuitive search feature. Let us guide you to the book you're looking for—or perhaps an unexpected treasure. Start your literary adventure now and explore endless possibilities at your fingertips.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header