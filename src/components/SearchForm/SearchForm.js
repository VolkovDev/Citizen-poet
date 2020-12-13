import './SearchForm.css';
import React from 'react';

function SearchForm({ serchNews }) {

  const [keyword, setKeyword] = React.useState('');
  const [searchErrorMessage, setSearchErrorMessage] = React.useState('');

  // обработчик изменения инпута поиска
  function handleChangeKeyword(e) {
    setKeyword(e.target.value);
  }

  // обработчик отправки формы поиска
  function handleSubmit(e) {
    e.preventDefault();
    if (!keyword) {
      setSearchErrorMessage('Нужно ввести ключевое слово');
      return;
    }
    serchNews(keyword)
    setSearchErrorMessage('');
  }

    return(
      <section className="search">
        <div className="search__container">
          <h1 className="search__title">Что творится в вашем дворе? </h1>
          <p className="search__subtitle">
            На дворе 2025 год, в стране цензура.
            Для защиты общественной нравственности к рассмотрению принимаются только обращения, написанные цитатами поэтов-классиков.</p>

          <form className="search__form" noValidate onSubmit={handleSubmit}>
            <input
              className="search__input"
              placeholder="Оставте свое обращение"
              required
              onChange={handleChangeKeyword}
              value={keyword || ''}
            />
            <button className="search__bth">Отправить</button>

            <span id="search-error" className="search__input-error">{searchErrorMessage}</span>
          </form>
        </div>
      </section>
    );
}

export default SearchForm;
