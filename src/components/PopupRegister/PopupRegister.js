import './PopupRegister.css';
import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import FormValidator from '../../hooks/FormValidator';

function PopupRegister({ isOpen,  onClose, onRegister, onClickPopup, message }) {

  // валидация формы
  const {values, handleChange, errors, isValid, resetForm} = FormValidator();
  React.useEffect(() => {
    resetForm();
  }, [ isOpen, resetForm ]);

  // обработчик отправки регистрации
  function handleSubmit(e) {
    e.preventDefault();
    if (!values.email || !values.password || !values.name) {
      return;
    }
    onRegister(values.email, values.password, values.name);
  }

  return(
    <PopupWithForm
    isOpen={isOpen}
    onClose={onClose}
    onClickPopup={onClickPopup}
    onSubmit={handleSubmit}
    name='popup-register'
    title='Регистрация'
    buttonText='Зарегистрироваться'
    text='или '
    clickButtonText='Войти'
    children={
      <>
        <label className="popup__label">Email</label>
        <input
          value={values.email|| ''}
          onChange={handleChange}
          id="email-input"
          className="popup__input popup__input_email"
          type="email"
          name="email"
          placeholder="Введите почту"
          required
          minLength="2"
          maxLength="30"
        />
        <span id="email-auth-error" className="popup__input-error" >{errors.email || ''}</span>

        <label className="popup__label">Пароль</label>
        <input
          value={values.password || ''}
          onChange={handleChange}
          id="password-input"
          className="popup__input popup__input_password"
          type="password"
          name="password"
          placeholder="Введите пароль"
          required
          minLength="10"
          maxLength="30"
        />
        <span id="password-error" className="popup__input-error" >{errors.password || ''}</span>

        <label className="popup__label">Имя</label>
        <input
          value={values.name|| ''}
          onChange={handleChange}
          id="name-input"
          className="popup__input popup__input_name"
          type="text"
          name="name"
          placeholder="Введите своё имя"
          required
          minLength="2"
          maxLength="30"
        />
        <span id="name-register-error" className="popup__input-error" >{errors.name || ''}</span>

        <span id="register-error" className="popup__input-error popup__register-error">{message}</span>

        <button className={`popup__button-save ${isValid ? 'popup__button-save_active' : 'popup__button-save_disabled'}`}  type="submit" disabled={!isValid}>Зарегистрироваться</button>
      </>
    }
    />
  )

}


export default PopupRegister;
