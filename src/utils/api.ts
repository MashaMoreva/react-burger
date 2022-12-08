import { setCookie, deleteCookie, getCookie } from "./сookies";

interface IApiConfig {
  baseUrl: string,
  defaultHeaders: {
    'Content-Type': string
  },
  ingredients: string,
  order: string,
  registration: string,
  authorization: string,
  logout: string,
  token: string,
  forgot: string,
  reset: string,
  user: string
}

interface IOptions {
  method: string,
  headers: {
    'Content-Type': string,
    authorization?: string
  },
  body?: string
}

const config = {
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
  readonly baseUrl: string
  readonly defaultHeaders: {
    'Content-Type': string
  };
  readonly ingredientsEndpoint: string
  readonly orderEndpoint: string
  readonly registrationEndpoint: string
  readonly authorizationEndpoint: string
  readonly logoutEndpoint: string
  readonly tokenEndpoint: string
  readonly forgotEndpoint: string
  readonly resetEndpoint: string
  readonly userEndpoint: string

  constructor({
    baseUrl, defaultHeaders,
    ingredients, order,
    registration, authorization,
    logout, token,
    forgot, reset,
    user
  }: IApiConfig) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = defaultHeaders;
    this.ingredientsEndpoint = ingredients;
    this.orderEndpoint = order;
    this.registrationEndpoint = registration;
    this.authorizationEndpoint = authorization;
    this.logoutEndpoint = logout;
    this.tokenEndpoint = token;
    this.forgotEndpoint = forgot;
    this.resetEndpoint = reset;
    this.userEndpoint = user;
  }

  // сборка конечного url 
  _makeUrl(endpoint: string) {
    return `${this.baseUrl}${endpoint}`;
  }

  _handleResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }
    return res.json()
      .then(function (err) {
        err.code = res.status;
        return Promise.reject(`Ошибка: ${res.status}`)
      });
  };

  _request(
    url: string,
    options: IOptions
  ) {
    return fetch(url, options)
      .then(this._handleResponse)
      .catch((error) => {
        if (error === '403')
          console.log(error)
        deleteCookie('access');
        this.refresh()
          .then(({ accessToken }) => {
            setCookie('access', accessToken.split('Bearer ')[1])
          })
            .then(() => this._request(url, options))
      })
  }

  // получатель ингредиентов
  getBurgerIngredients() {
    const options = { // объект опций для fetch
      method: 'GET',
      headers: this.defaultHeaders
    }
    return this._request(this._makeUrl(this.ingredientsEndpoint), options)
  }

  getOrderDetails(idIngredientsList: string[]) {
    const options = {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' + getCookie('access'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ingredients: idIngredientsList
      })
    }
    return this._request(this._makeUrl(this.orderEndpoint), options)
  }

  registration(
    name: string,
    email: string,
    password: string
  ) {
    const options = {
      method: 'POST',
      headers: this.defaultHeaders,
      body: JSON.stringify({
        name,
        email,
        password
      })
    }
    return this._request(this._makeUrl(this.registrationEndpoint), options)
  }

  authorization(
    email: string,
    password: string
  ) {
    const options = {
      method: 'POST',
      headers: this.defaultHeaders,
      body: JSON.stringify({
        email,
        password
      })
    }
    return this._request(this._makeUrl(this.authorizationEndpoint), options)
  }

  logout() {
    const options = {
      method: 'POST',
      headers: this.defaultHeaders,
      body: JSON.stringify({
        token: getCookie('refresh'),
      })
    }
    return this._request(this._makeUrl(this.logoutEndpoint), options)
  }


  forgot(email: string) {
    const options = {
      method: 'POST',
      headers: this.defaultHeaders,
      body: JSON.stringify({
        email: email
      })
    }
    return this._request(this._makeUrl(this.forgotEndpoint), options)
  }

  reset(
    password: string,
    token: string
  ) {
    const options = {
      method: 'POST',
      headers: this.defaultHeaders,
      body: JSON.stringify({
        password,
        token
      })
    }
    return this._request(this._makeUrl(this.resetEndpoint), options)
  }

  refresh() {
    const options = {
      method: 'POST',
      headers: this.defaultHeaders,
      body: JSON.stringify({
        token: getCookie('refresh'),
      })
    }
    return this._request(this._makeUrl(this.tokenEndpoint), options)
  }

  getProfile() {
    const options = {
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + getCookie('access'),
        'Content-Type': 'application/json'
      },
    }
    return this._request(this._makeUrl(this.userEndpoint), options)
  }

  updateProfile(
    name: string,
    email: string,
    password: string
  ) {
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
    return this._request(this._makeUrl(this.userEndpoint), options)
  }

}

export const apiBurger = new Api(config);



