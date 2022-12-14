import React, { FormEventHandler } from 'react';
import { useSelector, useDispatch } from '../services/hooks';
import styles from './pages.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { userRegistration } from '../services/actions/registration';
import { Link, Redirect } from 'react-router-dom';

export const Registration = () => {

    const success = useSelector((state) => state.registration.success);

    const dispatch = useDispatch();
    const [value, setValue] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const handleRegistration: FormEventHandler<HTMLFormElement> = (evt) => {
        evt.preventDefault();
        dispatch(userRegistration(value.name, value.email, value.password));
    }
    const inputRef = React.useRef<HTMLInputElement>(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current?.focus(), 0)
        alert('Icon Click Callback')
    }

    // if (success) {
    //     return (
    //         <Redirect to={'/login'} />
    //     )
    // }

    return (
        <form className={styles.default} onSubmit={handleRegistration}>
            <h2 className="text text_type_main-medium">Регистрация</h2>
            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={(evt) => setValue({ ...value, name: evt.target.value })}
                value={value.name}
                name={'name'}
                error={false}
                ref={inputRef}
                onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="mt-6"
            />
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
            <Button type="primary" size="medium" htmlType="submit" extraClass="mt-6">Зарегистрироваться</Button>
            <div className={`${styles.choice} mt-20`}>
                <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
                <Link to='/login' className={`${styles.link} text text_type_main-default`}>Войти</Link>
            </div>
            {success ? <Redirect to={'/login'} /> : <Redirect to={'/register'} />}
        </form>
    )
}
