import './SavedNews.css'
import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCard from '../NewsCard/NewsCard';
import iconNotFound from '../../images/icon/not-found_v1.svg'

function SavedNews({ loggedIn, myNews, findMySevedNews }) {

    return(
      <section className="saved-news">
        <SavedNewsHeader myNews={myNews} />
        <div className="saved-news__background">
          <div className="saved-news__container">

            {myNews.length > 0 ?
              (
              <div className="articles">
                {
                  myNews.map((article, key) => (
                  <NewsCard
                    key={key}
                    keyword={article.keyword}
                    myArticle={article}
                    title={article.title}
                    text={article.text}
                    date={article.date}
                    source={article.source}
                    link={article.link}
                    image={article.image}
                    loggedIn={loggedIn}
                    findMySevedNews={findMySevedNews}
                  />))
                }
              </div>
              )
              :
              (
              <div className="not-found-saved-news">
                <img className="not-found-saved-news__icon" alt="Ничего не найдено" src={iconNotFound}/>
                <h2 className="not-found-saved-news__title">Ничего не найдено</h2>
                <p className="not-found-saved-news__description">Вернитесь на  <a className="not-found-saved-news__link" href="/">главную</a> и сохраните интересные обращения</p>
              </div>
              )
            }
          </div>
        </div>

      </section>
    );
}

export default SavedNews;
