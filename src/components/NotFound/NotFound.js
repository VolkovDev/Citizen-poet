import './NotFound.css';
import React from 'react';
import iconNotFound from '../../images/icon/not-found_v1.svg'

function NotFound({ handleNotFound, serverError }) {
  const errorText = `${
    serverError ?
    `Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз`
    :
    `К сожалению по вашему запросу ничего не найдено.`
  }`

    return(
      <section className={`not-found ${handleNotFound ? '' : 'not-found_none'}`}>
        <div className="not-found__container">
          <img className="not-found__icon" alt="Ничего не найдено" src={iconNotFound}/>
          <h2 className="not-found__title">Ничего не найдено</h2>
          <p className="not-found__description">{errorText}</p>
        </div>
      </section>
    );
}

export default NotFound;
