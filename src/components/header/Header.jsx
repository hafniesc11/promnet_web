import React from 'react';
import CTA from './CTA';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h3>Holaaa Aku</h3>
        <h1>Hafnie Saufa Chandrika</h1>
        <h5 className="text-light">Pendidikan Ilmu Komputer - B</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
