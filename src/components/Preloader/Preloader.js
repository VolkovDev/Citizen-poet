import './Preloader.css';
import React from 'react';

function Preloader({ handlePreloader }) {

    return(
      <section className={`preloader ${handlePreloader? '' : 'preloader_none'}`}>
          <i className="preloader__circle"></i>
          <p  className="preloader__message">Идет поиск обращений...</p>
      </section>
    );
}

export default Preloader;
