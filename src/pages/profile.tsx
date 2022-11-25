import styles from './pages.module.css';
import { Route } from 'react-router-dom';
import { ProfileMenu } from '../components/profile-menu/profile-menu';
import { UpdateProfileForm } from '../components/update-profile-form/update-profile-form';
import { OrderHistory } from '../components/order-history/order-history';

export function Profile() {

    return (
        <section className={styles.profile}>
            <ProfileMenu />
            <Route exact={true} path="/profile" component={UpdateProfileForm} />
            <Route exact={true} path="/profile/orders" component={OrderHistory} />
        </section>
    )
}
