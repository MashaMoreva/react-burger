import { useEffect } from "react";
import { useDispatch } from '../services/hooks';
import styles from './pages.module.css';
import { OrderFeed } from '../components/order-feed/order-feed';
import { Orders } from '../components/orders/orders';
import { wsConnectionStart, wsConnectionClosed } from '../services/actions/websockets';

export const Feed = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsConnectionStart());
        return () => {
            dispatch(wsConnectionClosed());
        };
    }, []);

    return (
        <section className={styles.content}>
            <OrderFeed />
            <Orders />
        </section>
    )
}
