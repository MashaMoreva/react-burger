import React, { FormEventHandler } from 'react';
import { useSelector, useDispatch } from '../services/hooks';
import styles from './pages.module.css';
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect } from 'react-router-dom';
import { userAuthorization } from '../services/actions/authorization';

export const Authorization = () => {
    const dispatch = useDispatch();
    const authorization = useSelector((state) => state.userAuthorization.authorization);

    const [value, setValue] = React.useState({
        email: '',
        password: ''
    })

    const handleAuthorization: FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault();
        dispatch(userAuthorization(value.email, value.password));
    }

    if (authorization) {
        return (
            <Redirect to={'/profile'} />
        )
    }

    return (
        <form className={styles.default} onSubmit={handleAuthorization}>
            <h2 className="text text_type_main-medium">Вход</h2>
            <EmailInput
                onChange={(evt) => setValue({ ...value, email: evt.target.value })}
                value={value.email}
                name={'email'}
                extraClass="mt-6"
            />
            <PasswordInput
                onChange={(evt) => setValue({ ...value, password: evt.target.value })}
                value={value.password}
                name={'password'}
                icon="ShowIcon"
                extraClass="mt-6"
            />
            <Button type="primary" size="medium" htmlType="submit" extraClass="mt-6">Войти</Button>
            <div className={`${styles.choice} mt-20`}>
                <p className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</p>
                <Link to='/register' className={`${styles.link} text text_type_main-default`}>Зарегистрироваться</Link>
            </div>
            <div className={`${styles.choice} mt-4`}>
                <p className="text text_type_main-default text_color_inactive">Забыли пароль?</p>
                <Link to='/forgot-password' className={`${styles.link} text text_type_main-default`}>Восстановить пароль</Link>
            </div>
        </form>
    )
}
