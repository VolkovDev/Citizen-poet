import './Main.css';
import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main({ articles, showBth, loggedIn, keyword, handleAuthClick, findMySevedNews, mySavedNews, saved, setSaved }) {
    return(
      <main className="main">
        <NewsCardList
          showBth={showBth}
          articles={articles}
          loggedIn={loggedIn}
          keyword={keyword}
          handleAuthClick={handleAuthClick}
          findMySevedNews={findMySevedNews}
          mySavedNews={mySavedNews}
          saved={saved}
          setSaved={setSaved}
        />
      </main>
    );
}

export default Main;
