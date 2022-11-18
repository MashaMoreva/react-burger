import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './profile-menu.module.css';
import { NavLink, useHistory, Redirect } from 'react-router-dom';
import { userLogout } from '../../services/actions/logout';


export function ProfileMenu() {

    const dispatch = useDispatch();
    const history = useHistory();
    const authorization = useSelector((state) => state.userAuthorization.authorization);

    const handleLogout = React.useCallback(() => {
        dispatch(userLogout());
    }, [dispatch])

    // React.useEffect(() => {
    //     if (!authorization) {
    //         history.push('/login')
    //     }
    // }, [authorization, history])

    if (!authorization) {
        return (
            <Redirect to={'/login'} />
        )
    }


    return (
        <nav className={styles.menu}>
            <NavLink
                to='/profile'
                exact={true}
                className={`${styles.link} text text_type_main-medium text_color_inactive`}
                activeClassName={styles.link_active}>
                Профиль
            </NavLink>
            <NavLink
                to='/profile/orders'
                className={`${styles.link} text text_type_main-medium text_color_inactive`}
                activeClassName={styles.link_active}>
                История заказов
            </NavLink>
            <button
                onClick={handleLogout}
                className={`${styles.button} text text_type_main-medium text_color_inactive`}>
                Выход
            </button>
            <span className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете</span>
            <span className="text text_type_main-default text_color_inactive">изменить свои персональные данные</span>
        </nav>
    )
}


