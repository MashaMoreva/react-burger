import styles from './order-details.module.css';
import done from '../../images/done.png'
import { useSelector } from 'react-redux';

export function OrderDetails() {

    const orderNumber = useSelector(state => state.orderDetails.id)

    return (
        <>
            <div className={`${styles.order_details} pl-25 pr-25`}>
                <p className={`${styles.order_identifier} text text_type_digits-large mt-30 mb-8`}>{orderNumber}</p>
                <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
                <img src={done} className={styles.done} alt="Заказ подтвержден" />
                <p className="text text_type_main-default mt-15 mb-2">Ваш заказ начали готовить</p>
                <p className="text text_type_main-default text_color_inactive mb-30">Дождитесь готовности на орбитальной станции</p>
            </div>
        </>
    )
}
