import React from 'react';
import './PopupWithForm.css'

function PopupWithForm(props) {
  return(
    <div className={(props.isOpen ? `popup ${props.name} popup_bg-opacity-light popup_opened` : `popup ${props.name} popup_bg-opacity-light`)}>
      <div className="popup__container">
        <form className="popup__form" action="#" noValidate name={props.name} onSubmit={props.onSubmit}>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <p className="popup__text">{props.text}<span className="popup__click" onClick={props.onClickPopup}>{props.clickButtonText}</span></p>
        </form>
        <button className="popup__button-close popup__edite-close" type="button" onClick={props.onClose} />
      </div>
    </div>
  );
}

export default PopupWithForm;
