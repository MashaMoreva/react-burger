import React from 'react';
import styles from './burger-ingredients-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { setActiveTab, scrollIngredients } from '../../services/actions/burger-ingredients-scroll';
import { useDispatch, useSelector } from 'react-redux';

export function BurgerIngredientsTabs() {

    const dispatch = useDispatch()
    const current = useSelector(state => state.scrollIngredients.current)
    const setCurrent = (value) => {
        dispatch(setActiveTab(value))
        dispatch(scrollIngredients(value))
    }

    return (
        <div className={styles.tab_list}>
            <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    )
}
