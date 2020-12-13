import './Footer.css';
import React from 'react';
import github from '../../images/social/github.svg';
import telegram from '../../images/social/telegram.png';
import mail from '../../images/social/mailto.png';

function Footer() {
    return(
      <footer className="footer">

        <p className="footer__author">© 2020. Андрей, Павел, Мария</p>

        <div className="footer__navigation">
          {/* <ul className="footer__links">
            <li className="footer__links-item">
              <a className="footer__link" href="/">Главная</a>
            </li>
            <li className="footer__links-item">
              <a className="footer__link" href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
          </ul> */}

          <ul className="footer__social">
            <li className="footer__social-link">
              <a className="footer__social-link-item" href="https://github.com/VolkovDev" target="_blank" rel="noreferrer">
                <img className="footer__social-link-img" alt="github" src={github}/>
              </a>
            </li>
            <li className="footer__social-link">
              <a className="footer__social-link-item" href="https://t.me/joinchat/FH-5bRmAV0JxshtRuJF4ag" target="_blank" rel="noreferrer">
                <img className="footer__social-link-img" alt="telegram" src={telegram}/>
              </a>
            </li>
            <li className="footer__social-link">
              <a className="footer__social-link-item" href="fullon1988@gmail.com" target="_blank" rel="noreferrer">
                <img className="footer__social-link-img" alt="mail" src={mail}/>
              </a>
            </li>
          </ul>
        </div>

      </footer>
    );
}

export default Footer;
