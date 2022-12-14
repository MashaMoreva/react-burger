export const baseUrl = 'http://localhost:3000'

export const user = {
    name: 'Masha',
    email: 'masha@masha.masha'
};

export const payload = {
    success: true,
    user: {
        name: 'Masha',
        email: 'masha@masha.masha'
    },
}

export const start = 1
export const end = 2

export const number = `11111`

export const fluorescentBun = {
    "_id": "60d3b41abdacab0026a733c7",
    "name": "Флюоресцентная булка R2-D3",
    "type": "bun",
    "proteins": 44,
    "fat": 26,
    "carbohydrates": 85,
    "calories": 643,
    "price": 988,
    "image": "https://code.s3.yandex.net/react/code/bun-01.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    "image_large": "https://code.s3.yandex.net/react/code/bun-01-large.png",
    "__v": 0,
    id: '1'
}

export const craterBun = {
    "_id": "60d3b41abdacab0026a733c6",
    "name": "Краторная булка N-200i",
    "type": "bun",
    "proteins": 80,
    "fat": 24,
    "carbohydrates": 53,
    "calories": 420,
    "price": 1255,
    "image": "https://code.s3.yandex.net/react/code/bun-02.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
    "__v": 0,
    id: '2'
}

export const ingredientSauce = {
    "calories": 99,
    "carbohydrates": 42,
    "fat": 24,
    "image": "https://code.s3.yandex.net/react/code/sauce-03.png",
    "image_large": "https://code.s3.yandex.net/react/code/sauce-03-large.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
    "name": "Соус традиционный галактический",
    "price": 15,
    "proteins": 42,
    "type": "sauce",
    "__v": 0,
    "_id": "60d3b41abdacab0026a733ce",
    "id": "3"
}

export const ingredientMain = {
    "calories": 6,
    "carbohydrates": 3,
    "fat": 2,
    "image": "https://code.s3.yandex.net/react/code/salad.png",
    "image_large": "https://code.s3.yandex.net/react/code/salad-large.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/salad-mobile.png",
    "name": "Мини-салат Экзо-Плантаго",
    "price": 4400,
    "proteins": 1,
    "type": "main",
    "__v": 0,
    "_id": "60d3b41abdacab0026a733d3",
    "id": "4"
}

export const ingredients = [
    { "_id": "60d3b41abdacab0026a733c6", "name": "Краторная булка N-200i", "type": "bun", "proteins": 80, "fat": 24, "carbohydrates": 53, "calories": 420, "price": 1255, "image": "https://code.s3.yandex.net/react/code/bun-02.png", "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png", "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png", "__v": 0, id: '1' },
    { "_id": "60d3b41abdacab0026a733cc", "name": "Соус Spicy-X", "type": "sauce", "proteins": 30, "fat": 20, "carbohydrates": 40, "calories": 30, "price": 90, "image": "https://code.s3.yandex.net/react/code/sauce-02.png", "image_mobile": "https://code.s3.yandex.net/react/code/sauce-02-mobile.png", "image_large": "https://code.s3.yandex.net/react/code/sauce-02-large.png", "__v": 0, id: '2' },
    { "_id": "60d3b41abdacab0026a733c8", "name": "Филе Люминесцентного тетраодонтимформа", "type": "main", "proteins": 44, "fat": 26, "carbohydrates": 85, "calories": 643, "price": 988, "image": "https://code.s3.yandex.net/react/code/meat-03.png", "image_mobile": "https://code.s3.yandex.net/react/code/meat-03-mobile.png", "image_large": "https://code.s3.yandex.net/react/code/meat-03-large.png", "__v": 0, id: '2' },
];

export const allOrders = {
    "success": true,
    "orders": [
        {
            'createdAt': "2022-12-12T08:28:10.901Z",
            'ingredients': [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cb",
                "60d3b41abdacab0026a733c7"
            ],
            'name': "Био-марсианский флюоресцентный бургер",
            'number': 11111,
            'status': "done",
            'updatedAt': "2022-12-12T08:28:10.901Z",
            '_id': "6396e61a99a25c001cd6893c"
        },
        {
            'createdAt': "2022-12-12T07:38:02.547Z",
            'ingredients': [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733ce",
                "60d3b41abdacab0026a733c6"
            ],
            'name': "Традиционный-галактический краторный бургер",
            'number': 22222,
            'status': "done",
            'updatedAt': "2022-12-12T07:38:03.348Z",
            '_id': "6396da5a99a25c001cd6890d"
        }
    ],
    "total": 44444,
    "totalToday": 444
}

export const userOrders = {
    "success": true,
    "orders": [
        {
            'createdAt': "2022-12-12T08:28:10.901Z",
            'ingredients': [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cb",
                "60d3b41abdacab0026a733c7"
            ],
            'name': "Био-марсианский флюоресцентный бургер",
            'number': 11111,
            'status': "done",
            'updatedAt': "2022-12-12T08:28:10.901Z",
            '_id': "6396e61a99a25c001cd6893c"
        },
        {
            'createdAt': "2022-12-12T07:38:02.547Z",
            'ingredients': [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733ce",
                "60d3b41abdacab0026a733c6"
            ],
            'name': "Традиционный-галактический краторный бургер",
            'number': 22222,
            'status': "done",
            'updatedAt': "2022-12-12T07:38:03.348Z",
            '_id': "6396da5a99a25c001cd6890d"
        }
    ]
}

export const ingredientClass = '[class^=burger-ingredients-item_item]';
export const closeButtonClass = '[class^=modal_closeButton]';
export const tabClass = '[class^=tab]';
export const burgerConstructorClass = '[class^=burger-constructor_burger_constructor]';
export const burgerConstructorIngredientClass = '[class^=burger-constructor-element_constructor_element]';
