import React from 'react';
import { BsInstagram, } from 'react-icons/bs';
import { FaWhatsapp, FaTwitter } from 'react-icons/fa';
// import { FaWhatsapp } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">More Info 'bout me</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Gallery</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.instagram.com/hfniiescr" target="_blank" rel="noreferrer" ><BsInstagram /></a>
      <a href="https://wa.me/6281298723196" target="_blank" rel="noreferrer" ><FaWhatsapp /></a>
      <a href="https://www.twitter.com/sfchnie" target="_blank" rel="noreferrer" ><FaTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
