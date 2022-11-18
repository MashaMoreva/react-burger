import { getCookie } from "./сookies";

export const config = {
  baseUrl: 'https://norma.nomoreparties.space/api', // базовый путь к серверу
  defaultHeaders: {
    'Content-Type': 'application/json'
  },
  ingredients: '/ingredients', // эндпоинт ингредиентов
  order: '/orders', // эндпоинт номера заказа
  registration: '/auth/register', // эндпоинт регистрации
  authorization: '/auth/login', //эндпоинт авторизации
  logout: '/auth/logout', // эндпоинт выхода из системы
  token: '/auth/token', // эндпоинт обновления токена
  forgot: '/password-reset', // эндпоинт восстановления пароля
  reset: '/password-reset/reset', // эндпоинт создания нового пароля
  user: '/auth/user', // эндпоинт получения и обновления данных пользователя
};

class Api {
  constructor({
    baseUrl, defaultHeaders,
    ingredients, order,
    registration, authorization,
    logout, token,
    forgot, reset,
    user
  }) {
    this._baseUrl = baseUrl;
    this._defaultHeaders = defaultHeaders;
    this._ingredientsEndpoint = ingredients;
    this._orderEndpoint = order;
    this._registrationEndpoint = registration;
    this._authorizationEndpoint = authorization;
    this._logoutEndpoint = logout;
    this._tokenEndpoint = token;
    this._forgotEndpoint = forgot;
    this._resetEndpoint = reset;
    this._userEndpoint = user;
  }

  // сборка конечного url 
  _makeUrl(endpoint) {
    return `${this._baseUrl}${endpoint}`;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json()
      .then(function (err) {
        err.code = res.status;
        return Promise.reject(`Ошибка: ${res.status}`)
      });
  };

  _request(url, options) {
    return fetch(url, options)
      .then(this._handleResponse)
  }

  // получатель ингредиентов
  getBurgerIngredients() {
    const options = { // объект опций для fetch
      method: 'GET',
      headers: this._defaultHeaders
    }
    return this._request(this._makeUrl(this._ingredientsEndpoint), options)
  }

  getOrderDetails(idIngredientsList) {
    const options = {
      method: 'POST',
      headers: this._defaultHeaders,
      body: JSON.stringify({
        ingredients: idIngredientsList
      })
    }
    return this._request(this._makeUrl(this._orderEndpoint), options)
  }

  registration(name, email, password) {
    const options = {
      method: 'POST',
      headers: this._defaultHeaders,
      body: JSON.stringify({
        name,
        email,
        password
      })
    }
    return this._request(this._makeUrl(this._registrationEndpoint), options)
  }

  authorization(email, password) {
    const options = {
      method: 'POST',
      headers: this._defaultHeaders,
      body: JSON.stringify({
        email,
        password
      })
    }
    return this._request(this._makeUrl(this._authorizationEndpoint), options)
  }

  logout() {
    const options = {
      method: 'POST',
      headers: this._defaultHeaders,
      body: JSON.stringify({
        token: getCookie('refresh'),
      })
    }
    return this._request(this._makeUrl(this._logoutEndpoint), options)
  }


  forgot(email) {
    const options = {
      method: 'POST',
      headers: this._defaultHeaders,
      body: JSON.stringify({
        email
      })
    }
    return this._request(this._makeUrl(this._forgotEndpoint), options)
  }

  reset(password, token) {
    const options = {
      method: 'POST',
      headers: this._defaultHeaders,
      body: JSON.stringify({
        password,
        token
      })
    }
    return this._request(this._makeUrl(this._resetEndpoint), options)
  }

  refresh() {
    const options = {
      method: 'POST',
      headers: this._defaultHeaders,
      body: JSON.stringify({
        token: getCookie('refresh'),
      })
    }
    return this._request(this._makeUrl(this._tokenEndpoint), options)
  }

  getProfile() {
    const options = {
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + getCookie('access'),
        'Content-Type': 'application/json'
      },
    }
    return this._request(this._makeUrl(this._userEndpoint), options)
  }

  updateProfile(name, email, password) {
    const options = {
      method: 'PATCH',
      headers: {
        authorization: 'Bearer ' + getCookie('access'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    }
    return this._request(this._makeUrl(this._userEndpoint), options)
  }

}

export const apiBurger = new Api(config);
