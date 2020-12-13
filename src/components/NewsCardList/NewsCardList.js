import './NewsCardList.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ articles, loggedIn, keyword, handleAuthClick, findMySevedNews, mySavedNews, saved, setSaved }) {

  const [newArticles, setNewArticles] = React.useState([]);
  const [showBth, setShowBth] = React.useState(false)

  React.useEffect(() => {
    setNewArticles(articles.slice(0, 3));
    if (articles.length <= 3) {
      setShowBth(false);
    } else {
      setShowBth(true);
    }

  }, [articles]);

  function handlerClick() {
    setNewArticles(articles.slice(0, newArticles.length + 3));
    if (newArticles.length >= articles.length - 3) {
      setShowBth(false);
    }
  }

    return(
      <section className={`news ${newArticles.length > 0 ? '' : 'news_none'}`}>
        <h2 className="news__title">Результаты поиска</h2>

        <div className="articles">
          {
            newArticles.map((article, key) => (
            <NewsCard
              key={key}
              article={article}
              keyword={keyword}
              title={article.title}
              text={article.description}
              date={article.publishedAt}
              source={article.source.name}
              link={article.url}
              image={article.urlToImage}
              mySavedNews={mySavedNews}
              saved={saved}
              setSaved={setSaved}
              loggedIn={loggedIn}
              handleAuthClick={handleAuthClick}
              findMySevedNews={findMySevedNews}
            />))
          }
        </div>

        <button className={`news__bth ${showBth ? '' : 'news__bth_none'}`} onClick={handlerClick}>Показать еще</button>
      </section>
    );
}

export default NewsCardList;
