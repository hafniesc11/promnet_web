import React from 'react';
import IMG1 from '../../assets/alc.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/shelter.png';
import IMG4 from '../../assets/fake.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/path.jpeg';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Pantai Indah Kapuk - PIK2',
      img: IMG1,
      description:
        'Tempat ini aku kunjungi bersama sahabat aku dari SMP, tempat ini indah sekali banyak tempat yang bagus dan angin yang sepoy-sepoy.',
      technologies: '23 Juli 2023 | 14.33',
      link: 'https://adventistlearningcenter-257375ab1970.herokuapp.com/',
      github: 'https://github.com/Meri-MG/school',
    },
    {
      id: 2,
      title: 'KICHI',
      img: IMG4,
      description:
        'KICHI adalah nama kita semua yang terdiri dari Khusnul, Insania, Chika, Hafnie, dan Inka. Kita awal dekat pada kelas 9 SMP - sekarang. Kita selalu main kalau kita semua free karena kita berkuliah dan bekerja diberbeda kota semua:( tapi jarak tidak memisahkan kia dengan cara komunikasi kita yan selalu rame di grup. Mereka sahabat yang selalu ada dan selalu merayakan apa yang bisa kita rayakan bersama Luv u<3',
      technologies: 'Bekasi, 05 Juli 2023 | 16.20',
      link: 'https://fakestore-metrics.netlify.app/',
      github: 'https://github.com/Meri-MG/Fakestore---react',
    },
    {
      id: 3,
      title: 'Undangan Saudara',
      img: IMG2,
      description: 'Ini keluarga sederhana yang aku punya! Aku senang berada di dalam rumah yang nyaman. Ibu dan ayahku selalu menanyakan kabarku disini dan selalu mendengarkan cerita keluh-kesahku. Sayang sekali<3',
      technologies: 'Subang, 30 April 2023 | 13.00',
      link: 'https://meri-mg.github.io/To-Do-List/dist/',
      github: 'https://github.com/Meri-MG/To-Do-List',
    },
    {
      id: 4,
      title: 'Aku',
      img: IMG3,
      description:
        'Ini aku, pertama kali ikut organisasi dan langsung menjadi sekretaris saat di Kampus. Menurutku ini merupakan awal aku karena aku suka dengan dengan hal-hal yang mengetik ataupun menulis, aku dulu pernah membuat cerita di Watpad dan tidak aku publish hehe..',
      technologies: 'Bandung, 05 Maret 2023 | 13.40',
      link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
      github: 'https://github.com/Meri-MG/shelter',
    },
    {
      id: 5,
      title: 'Bestie Kost',
      img: IMG5,
      description:
        'ini eka dan tata, kita bertemu saat di MOKAKU-UPI. Kita selalu bermain, ngobrol dan tidur di kost siapa? iya kost aku dan eka, sebenernya rencana kita banyak cuman masih wacana saja.. Dan ini moment saat aku ulang tahun dimana mereka memberikan surprice ke kost. Luv u<3',
      technologies: 'Bandung, 09 November 2023 | 19.00',
      link: 'https://meri-mg.github.io/Unilab-world-news/',
      github: 'https://github.com/Meri-MG/Unilab-world-news',
    },
    {
      id: 6,
      title: 'Alif dan Nahla',
      img: IMG6,
      description:
        'Ini ponakan aku, aku dekat dengan mereka saat 2020 karena pada masa itu aku tinggal bersama bude pakde aku, mereka lucu cuman kadang menyebalkan.. Mereka jail kalau ketemu aku pasti nyubit kalau ga coel-coel tapi ak sayang ndapapa mwhehe',
      technologies: 'Bekasi, 19 Mei 2023 | 16.30',
      link: 'https://lukinoo.github.io/math-resource/',
      github: 'https://github.com/lukinoo/math-resource',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Photos</h5>
      <h2>Gallery</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {/* <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a> */}
              {/* <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
