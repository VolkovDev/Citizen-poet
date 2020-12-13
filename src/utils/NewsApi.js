import {apiKey} from './utils';
import {newsUrl} from './utils';

// формат даты для запроса к api
let now = new Date();

const startDate = now.toISOString().slice(0, 10);
now.setDate(now.getDate() - 7);
const finishDate = now.toISOString().slice(0, 10);

export const getNews = (keyword) => {
  return fetch(`${newsUrl}q=${keyword}&apiKey=${apiKey}&from=${finishDate}&to=${startDate}&sortBy=publishedAt&pageSize=100`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
};
