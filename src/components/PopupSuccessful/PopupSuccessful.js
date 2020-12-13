import './PopupSuccessful.css';
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function PopupSuccessful({ isOpen,  onClose, onClickPopup }) {

  return(
    <PopupWithForm
    isOpen={isOpen}
    onClose={onClose}
    name='popup-successful'
    title='Пользователь успешно зарегистрирован!'
    children={
      <>
        <p className="popup__change-auth" onClick={onClickPopup}>Войти</p>
      </>
    }
    />
  )

}


export default PopupSuccessful;
