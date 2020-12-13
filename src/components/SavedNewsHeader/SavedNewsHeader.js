import './SavedNewsHeader.css'
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader({ myNews }) {

  const currentUser = React.useContext(CurrentUserContext);

  // собираем массив уникальных ключевых слов
  const myArray = myNews.map(i => i = i.keyword);
  const keywordsArr = [...new Set(myArray)];

  // меняем текст в зависимости от количества стататей
  function handlerMainText(number) {
    if (number >= 5 || number === 0) {
      return 'сохраненных обращения';
    } else if (number > 1 && number < 5) {
      return 'сохраненные обращения';
    } else if (number === 1) {
      return 'сохраненная обращения';
    }
  }

  // меняем текст в зависимости от количества стататей
  function handlerText(number) {
    if (number >= 2) {
      return 'По ключевым словам';
    } else if (number < 2 ) {
      return 'По ключевому слову';
    }
  }

  // меняем текст в зависимости от количества стататей
  function handlerSpanText(number) {
    if (number >= 4) {
      return '-м другим';
    } else {
      return ''
    }
  }

  // вывести ключевые слова с большой буквы
  function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }

  const firstKeyword = `${ucFirst(keywordsArr[0])}`;
  const secondKeyword =`${ucFirst(keywordsArr[1])}`;
  const thirdKeyword =`${ucFirst(keywordsArr[2])}`;

  const keys = `${keywordsArr.length !== 0 ? `news-header__keys` : `news-header__keys_none`}`;
  const span = `${keywordsArr.length > 3 ? `news-header__keys-span` : `news-header__keys-span_none` }`
  const keyword = `${keywordsArr.length === 3 ? ` ${firstKeyword}, ${secondKeyword}, ${thirdKeyword}` : ` ${firstKeyword}, ${secondKeyword}`}`

    return(
      <section className="news-header">
        <div className="news-header__container">
          <p className="news-header__tile">Сохранённые статьи</p>
          <h1 className="news-header__counter">{currentUser.name}, у вас {myNews.length} {handlerMainText(myNews.length)}</h1>
          <p className={keys}>{handlerText(keywordsArr.length)}
            <span className="news-header__keys-span">{keywordsArr.length < 2  ? ` ${firstKeyword}` : `${keyword}`}</span>
            <span className={span}> и {keywordsArr.length - 2}{handlerSpanText(keywordsArr.length)}</span>
          </p>
        </div>

      </section>
    );
}

export default SavedNewsHeader;
