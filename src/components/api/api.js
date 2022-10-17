export const config = {
    baseUrl: 'https://norma.nomoreparties.space/api', // базовый путь к серверу
    defaultHeaders: {
        'Content-Type': 'application/json'
    },
    ingredients: '/ingredients', // эндпоинт ингредиентов
};

class Api {
    constructor({ baseUrl, ingredients, defaultHeaders }) {
        this._baseUrl = baseUrl;
        this._ingredientsEndpoint = ingredients;
        this._defaultHeaders = defaultHeaders;
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

    // получатель ингредиентов
    getIngredients() {
        const options = { // объект опций для fetch
            method: 'GET',
            headers: this._defaultHeaders
        };
        return fetch(this._makeUrl(this._ingredientsEndpoint), options)
            .then(this._handleResponse);
    }
}

export const apiBurger = new Api (config);