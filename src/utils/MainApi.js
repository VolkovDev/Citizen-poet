import {authUrl} from './utils';

// запросить регистрацию пользователя
export const register = ( email, password, name ) => {
  return fetch(
    `${authUrl}/signup`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password, email, name})
    }
  )

    .then((res) => {
      if (res.status === 200) {
        return res.json()
      } else {
        return Promise.reject(res)
      }
    })
}

// запросить авторизацию пользователя
export const authorize = ( email, password ) => {
  return fetch(
    `${authUrl}/signin`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    }
  )
    .then((res) => {
      if (res.status === 200) {
        return res.json()
      } else {
        return Promise.reject(res)
      }
    })

    .then(data => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data;
      }
      return;
    })
}

// проверить валидность токена и получить данные пользователя
export const getContent = (token) => {
  return fetch(`${authUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then((res) => {
      try {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 400) {
          throw new Error('Токен не передан или передан не в том формате');
        }
        if (res.status === 401) {
          throw new Error('Переданный токен некорректен');
        }
      }
      catch (e) {
        console.log(e);
        return e;
      }
    })
    .then(data => {
      return data;
    })
    .catch((err) => {return Promise.reject(err.message)});
}

// получить все сохраненные новости
export const getAllArticles = () => {
  return fetch(
    `${authUrl}/articles`,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => {return Promise.reject(err.message)});
}

// сохранить новость
export const saveNews = (article, keyword) => {
  const {
    owner,
    title,
    description,
    publishedAt,
    source,
    url,
    urlToImage,
  } = article
  return fetch(
    `${authUrl}/articles`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        owner,
        keyword: keyword,
        title,
        text: description || title,
        date: publishedAt,
        source: source.name,
        link: url,
        image: urlToImage || 'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80',
      })
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => {return Promise.reject(err.message)});
}

// удалить новость
export const deleteNews = (articleId) => {
  return fetch(
    `${authUrl}/articles/${articleId}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => {return Promise.reject(err.message)});
}
