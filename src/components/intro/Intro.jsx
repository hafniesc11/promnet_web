import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Nama Panggilan</h5>
              <small>Apni</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Qoutes</h5>
              <small>"Just because it's hard doesn't mean it's imposibble, you can do it."</small>
            </article>
          </div>
          <p>Hallo semuanya, aku Hafnie Saufa Chandrika NIM 2210036 dari kelas Pendidikan Ilmu Komputer - B, aku suka dengan dokumentasi dan main, karena menurutku main bisa membuat pikiran kita better. Tapi aku suka mengisi waktu luangku dengan tidur atau scroll tiktok hehe.</p>
          <p>Ini adalah fotoku saat Ulang Tahunku yang ke 20. Wish ya si semoga lebih bahagia aamiin</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro