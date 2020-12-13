import './BurgerMenu.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logout from '../../images/icon/logout.svg';
import logoutWhite from '../../images/icon/logout-white.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function BurgerMenu({ isOpen, handleAuthClick, loggedIn, handleLogout }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { pathname } = useLocation();

  const buttonAuth = `${loggedIn ? 'burger__link-bth_none' : 'burger__link-bth burger__link-bth_white burger__link-bth_auth'}`;
  const buttonLogout = `${pathname === '/saved-news' ? 'burger__link-bth burger__link-bth_dark burger__link-bth_logout' : 'burger__link-bth burger__link-bth_white burger__link-bth_logout'}`;
  const textStyle = `${pathname === '/' ? 'burger__link_white burger__link' : 'burger__link burger__link_dark'}`;
  const bgStyle = `${pathname === '/saved-news' ? 'burger__list burger__list_white' : 'burger__list burger__list_dark' }`;
  const iconStyle = `${pathname === '/' ? 'burger__icon burger__icon_white' : 'burger__icon burger__icon_dark'}`;
  const iconLogout = `${pathname === '/' ? `${logoutWhite}` : `${logout}`}`;

    return(
      <div className="burger">

        <input type="checkbox" id="checkbox" className="burger__checkbox" onClick={isOpen}/>
        <label htmlFor="checkbox" className="burger__btn">
          <div className={iconStyle}></div>
        </label>

        <div className={(isOpen ? `burger__list_active ${bgStyle}` : `${bgStyle}`)}>
          <div className="burger__container">
            <Link to="/" className={textStyle}>Главная</Link>
            {loggedIn && <Link to="/saved-news" className={textStyle}>Сохранённые статьи</Link>}

            <Link to="/" className={textStyle}>
              <button className={buttonAuth} onClick={handleAuthClick}>Авторизоваться</button>
            </Link>

            {loggedIn && <Link to="/" className={textStyle}>
              <button className={buttonLogout} onClick={handleLogout}>{currentUser.name}
                <img className="burger__link-img" alt="logout" src={iconLogout} />
              </button>
            </Link>}
          </div>
        </div>

      </div>

    );
}

export default BurgerMenu;
