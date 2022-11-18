import React from 'react';
import styles from './update-profile-form.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../services/actions/user';
import { updateUser } from '../../services/actions/user';

export function UpdateProfileForm() {

    const dispatch = useDispatch();
    const userName = useSelector(state => state.profile.user.name);
    const userEmail = useSelector(state => state.profile.user.email);
   
    React.useEffect(() => {
        dispatch(getUser());
    }, [dispatch])    

    const [value, setValue] = React.useState({
        name: userName,
        email: userEmail,
        password: ''
    })

    React.useEffect(() => {
        setValue({
            name: userName,
            email: userEmail,
            password: ''
        })
    }, [userName, userEmail])

    const updateProfile = (evt) => {
        evt.preventDefault();
        dispatch(updateUser(value.name, value.email, value.password));
        // setValue({
        //   name: userName,
        //   email: userEmail,
        //   password: ''
        // })
    }

    const cancelEditing = () => {
        setValue({
            name: userName,
            email: userEmail,
            password: ''
        })
    }

    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
    }

    return (
        <form className={styles.form} onSubmit={updateProfile}>
            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={(evt) => setValue({ ...value, name: evt.target.value })}
                value={value.name}
                name={'name'}
                error={false}
                ref={inputRef}
                onIconClick={() => onIconClick()}
                errorText={'Ошибка'}
                size={'default'}
                icon="EditIcon"
            />
            <Input
                type={'email'}
                placeholder={'Логин'}
                onChange={(evt) => setValue({ ...value, email: evt.target.value })}
                value={value.email}
                name={'email'}
                icon="EditIcon"
                extraClass="mt-6"
                ref={inputRef}
                onIconClick={() => onIconClick()}
            />
            <Input
                type={'password'}
                placeholder={'Пароль'}
                onChange={(evt) => setValue({ ...value, password: evt.target.value })}
                ref={inputRef}
                onIconClick={() => onIconClick()}
                value={value.password}
                name={'password'}
                icon="EditIcon"
                extraClass="mt-6"
            />
            <div className={`${styles.choice} mt-6`}>
                <Button type="secondary" size="medium" htmlType="reset" extraClass="pr-7" onClick={cancelEditing}>Отмена</Button>
                <Button type="primary" size="medium" htmlType="submit">Сохранить</Button>
            </div>
        </form>
    )
}
