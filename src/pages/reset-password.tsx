import React, { FormEventHandler } from 'react';
import { useSelector, useDispatch } from '../services/hooks';
import styles from './pages.module.css';
import { PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Redirect } from 'react-router-dom';
import { resetPassword } from '../services/actions/reset-password';

export const ResetPassword = () => {

    const dispatch = useDispatch();

    const forgot = useSelector((state) => state.forgotPassword.success);
    const authorization = useSelector((state) => state.userAuthorization.authorization);

    const [value, setValue] = React.useState({
        password: '',
        token: ''
    })

    const handleReset: FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault();
        dispatch(resetPassword(value.password, value.token));

    }

    const inputRef = React.useRef<HTMLInputElement>(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current?.focus(), 0)
        alert('Icon Click Callback')
    }

    if (!forgot) {
        return (
            <Redirect to={'/login'} />
        )
    }
    
    if (authorization) {
        return (
            <Redirect to={'/profile'} />
        )
    }

    return (
        <form className={styles.default} onSubmit={handleReset}>
            <h2 className="text text_type_main-medium">Восстановление пароля</h2>
            <PasswordInput
                placeholder='Введите новый пароль'
                onChange={(evt) => setValue({ ...value, password: evt.target.value })}
                value={value.password}
                name={'password'}
                icon="ShowIcon"
                extraClass="mt-6"
            />
            <Input
                type={'text'}
                placeholder={'Введите код из письма'}
                onChange={(evt) => setValue({ ...value, token: evt.target.value })}
                value={value.token}
                name={'name'}
                error={false}
                ref={inputRef}
                onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="mt-6"
            />
            <Button type="primary" size="medium" htmlType="submit" extraClass="mt-6">Сохранить</Button>
            <div className={`${styles.choice} mt-20`}>
                <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                <Link to='/login' className={`${styles.link} text text_type_main-default`}>Войти</Link>
            </div>
        </form>
    )
}
