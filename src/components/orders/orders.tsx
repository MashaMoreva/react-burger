import styles from './orders.module.css';
import { useSelector } from '../../services/hooks';

export function Orders() {

    const { orders, total, totalToday } = useSelector(state => state.webSocket)

    return (
        <section className={`${styles.orders} ml-4 mt-25`}>
            <div className={styles.orders_status}>
                <div className={styles.title}>
                    <h3 className="text text_type_main-medium">Готовы:</h3>
                    <ul className={styles.list}>
                        {orders && orders.slice(0, 30)
                        .map((order) => {
                            if (order.status === 'done') {
                                return (
                                    <li key={order._id} className={`${styles.done} text text_type_digits-default`} >{order.number}</li>
                                )
                            }
                        })}
                    </ul>
                </div>
                <div className={styles.title}>
                    <h3 className="text text_type_main-medium">В работе:</h3>
                    <ul className={styles.list}>
                        {orders.map((order) => {
                            if (order.status === 'pending') {
                                return (
                                    <li key={order._id} className="text text_type_digits-default" >{order.number}</li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
            <div>
                <h3 className="text text_type_main-medium">Выполнено за все время:</h3>
                <p className={`${styles.counter} text text_type_digits-large`}>{total}</p>
            </div>
            <div>
                <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
                <p className={`${styles.counter} text text_type_digits-large`}>{totalToday}</p>
            </div>
        </section>
    )
}
