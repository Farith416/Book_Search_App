import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Our book application is your gateway to a vast collection of literature, spanning genres, authors and eras. Designed with book lovers in mind, it offers a seamless and intuitive experience, allowing you to easily find and explore books that resonate with your interests. Whether you’re searching for a classic novel, a contemporary bestseller or a hidden gem, our app is here to connect you with stories that inspire, entertain and educate. Dive in and let your reading journey begin!</p>
            <p className='fs-17'>Stay connected with the literary world, discover new authors and keep track of your reading journey. Whether you're a casual reader or a dedicated bookworm, our application is designed to meet your needs. </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
