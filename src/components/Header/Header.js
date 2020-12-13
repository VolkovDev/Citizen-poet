import './Header.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header(props) {

  const { pathname } = useLocation();

  const headerStyle = `${pathname === '/saved-news' ? 'header_white' : ''}`;
  const headerLogoBlack = `${pathname === '/saved-news' ? 'header__logo_black' : ''}`;
  const headerBg = `${pathname === '/' && props.isOpenBurger ? `header header_ckeck-burger ${headerStyle}` : `header ${headerStyle}`}`;

    return(
      <header className={headerBg}>
        <div className="header__container">
          <Link to="/" className={`header__logo ${headerLogoBlack}`}>Гражданин Поэт</Link>
          <Navigation handleAuthClick={props.handleAuthClick} loggedIn={props.loggedIn} handleLogout={props.handleLogout}/>
          <BurgerMenu handleAuthClick={props.handleAuthClick} loggedIn={props.loggedIn} handleLogout={props.handleLogout}isOpen={props.isOpen}/>
        </div>

      </header>
    );
}

export default Header;
