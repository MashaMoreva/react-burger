import React, { FormEventHandler } from 'react';
import { useSelector, useDispatch } from '../services/hooks';
import styles from './pages.module.css';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect } from 'react-router-dom';
import { forgotPassword } from '../services/actions/forgot-password';

export const ForgotPassword = () => {

    const dispatch = useDispatch();

    const success = useSelector((state) => state.forgotPassword.success);
    const authorization = useSelector((state) => state.userAuthorization.authorization);

    const [value, setValue] = React.useState({
        email: ''
    })

    const handleRecover: FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault();
        dispatch(forgotPassword(value.email));

    }

    if (success) {
        return (
            <Redirect to={'/reset-password'} />
        )
    }
    
    if (authorization) {
        return (
            <Redirect to={'/profile'} />
        )
    }

    return (
        <form className={styles.default} onSubmit={handleRecover}>
            <h2 className="text text_type_main-medium">Восстановление пароля</h2>
            <EmailInput
                onChange={(evt) => setValue({ ...value, email: evt.target.value })}
                value={value.email}
                name={'email'}
                extraClass="mt-6"
                placeholder='Укажите e-mail'
            />
            <Button type="primary" size="medium" htmlType="submit" extraClass="mt-6">Восстановить</Button>
            <div className={`${styles.choice} mt-20`}>
                <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                <Link to='/login' className={`${styles.link} text text_type_main-default`}>Войти</Link>
            </div>
        </form>
    )
}
