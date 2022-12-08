import React from 'react';
import styles from './order-user.module.css'
import { useSelector } from '../../services/hooks';
import { useParams } from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { dateWhen, dateFormat } from '../../utils/date';

function inNotUndefined<T>(item: T | undefined): item is T {
    return item !== undefined
}
export const OrderUser = () => {

    const ingredients = useSelector((store) => store.burgerIngredients.burgerIngredients);
    const orders = useSelector((store) => store.webSocketUser.orders);
    const { id } = useParams<{ id: string }>();
    const order = React.useMemo(() => {
        return orders.find(order => order._id === id)
    }, [orders, id])

    const orderIngredientsForImage = ingredients.filter((ingredient) => order?.ingredients.includes(ingredient._id))

    const orderIngredients =
        order?.ingredients.map(id => {
            return ingredients.find(item => item._id === id);
        }).filter(inNotUndefined);

    const totalOrderPrice = orderIngredients?.reduce(
        (acc, ingredient) => acc + ingredient.price,
        0
    );

    if (!order) {
        return null
    }

    const when = dateWhen(new Date(order.createdAt))

    return (
        <div className={styles.order_info}>
            <p className='text text_type_digits-default'>#{order?.number}</p>
            <p className={`${styles.title} text text_type_main-medium mt-10`}>{order?.name}</p>
            <p className={`${styles.status} text text_type_main-default mt-3`}>{order?.status === 'done' ? 'Выполнен' : 'Готовится'}</p>
            <p className={`${styles.title} text text_type_main-medium mt-15`}>Состав:</p>
            <ul className={styles.scroll}>
                {orderIngredientsForImage!
                    .map((item) =>
                        <li className={styles.item} key={item._id}>
                            <img className={styles.image} src={item.image_mobile} alt={item.name} />
                            <p className={`${styles.text} text_type_main-default`}>{item.name}</p>
                            <p className={`${styles.price} text text_type_digits-default`}>
                                {orderIngredients?.filter(i => i._id === item._id).length} x {item.price} <CurrencyIcon type='primary' /></p>
                        </li>
                    )}

            </ul>
            <div className={`${styles.total} mt-10 mb-10`}>
                <p className="text text_type_main-default text_color_inactive">
                    {`${when}, ${dateFormat(order!.createdAt)}`}
                </p>
                <div className={`${styles.total_price} mt-1 mb-2`}>
                    <p className="text text_type_digits-default">{totalOrderPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )
}
