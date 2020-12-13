import './Navigation.css';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logout from '../../images/icon/logout.svg';
import logoutWhite from '../../images/icon/logout-white.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Navigation({ loggedIn, handleAuthClick, handleLogout }) {
  const currentUser = React.useContext(CurrentUserContext);

  const { pathname } = useLocation();

  const navLinkBlack = `${pathname === '/saved-news' ? 'navigation__link-item_black' : ''}`;
  const navButtonAuth = `${loggedIn ? 'navigation__button-none' : 'navigation__button navigation__button-auth'}`;
  const navButtonLogout = `${pathname === '/' ? 'navigation__button' : 'navigation__button navigation__button_logout'}`;
  const iconLogout = `${pathname === '/' ? `${logoutWhite}` : `${logout}`}`;
  return(
      <nav className="navigation">

        <div className="navigation__container">

          <NavLink to="/" activeClassName={`navigation__link-item_active`} className={`navigation__link-item navigation__link-decoration ${navLinkBlack}`}>Главная</NavLink>
          {loggedIn && <NavLink to="/saved-news" activeClassName={`navigation__link-item_active-black`} className={`navigation__link-item navigation__link-decoration ${navLinkBlack}`}>Сохранённые посты</NavLink>}

          <button className={navButtonAuth} onClick={handleAuthClick}>Авторизоваться</button>

          {loggedIn && <NavLink to="/" className="navigation__link-decoration">
            <button className={navButtonLogout} onClick={handleLogout}>{currentUser.name}
              <img className="navigation__button-img" alt="logout" src={iconLogout} />
            </button>
          </NavLink>}

        </div>



      </nav>
    );
}

export default Navigation;
