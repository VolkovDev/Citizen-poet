import './NewsCard.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

function NewsCard(props) {

  const [saved, setSaved] = React.useState(false);

  const { pathname } = useLocation();

  const categoryNone = `${pathname === '/' ? 'article__category_none' : ''}`;
  const articleButtonImg = `${pathname === '/' ? 'article__button article__button-save' : 'article__button article__button-delete'}`;
  const articleButtonImgSave = `${pathname === '/' ? 'article__button article__button-save-news' : ''}`;

  const articleMessage = `${pathname === '/' ? 'Войдите, чтобы сохранять статьи' : 'Убрать из сохранённых'}`;
  const articleMessageClass = `${pathname === '/' && props.loggedIn ? 'article__message_none' : 'article__message' }`;

  function handleDate(date) {
    // формат даты для записи в карточку
    let month =[
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июнья",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    let now = new Date(date);
    const formatDate = `${now.getDate()} ${month[now.getMonth()]}, ${now.getFullYear()}`;
    return formatDate;
  }

  function handlerClick() {
    props.findMySevedNews(props.article, props.keyword, props.myArticle);
  }

  // если статья сохранена => меняем иконку
  React.useEffect(() => {
    if (props.mySavedNews) {
      setSaved(props.mySavedNews.find((c) => c.title === props.title));
    }
  }, [props.mySavedNews, props.title])

    return(
      <div className="article" >
        <div className="article__icons">
          <div className="article__icons-category">
          <p className={`article__category ${categoryNone}`}>{props.keyword}</p>
          </div>

          <div className="article__icons-message">
            <p className={articleMessageClass}>{articleMessage}</p>
            { props.loggedIn ?
              (<button className={saved && props.loggedIn ? `${articleButtonImgSave}` : `${articleButtonImg}`}  onClick={handlerClick} type="button" />)
              :
              (<button className={articleButtonImg} onClick={props.handleAuthClick} type="button" />)
            }
          </div>
        </div>

        <a className="article__link" href={props.link} target="_blank" rel="noreferrer">
          <img alt={props.title} className="article__img" src={props.image || 'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80'} />

          <div className="article__about">
            <div className="article__about-container">
              <p className="article__date">{handleDate (props.date)}</p>
              <h3 className="article__name">{props.title}</h3>
              <p className="article__description">{props.text || props.title}</p>
            </div>

            <div className="article__source-container">
            <p className="article__source">{props.source}</p>
            </div>
          </div>
        </a>

      </div>
    );
}

export default NewsCard;
