import React from 'react';
import styles from './burger-constructor.module.css';
import { Button, CurrencyIcon, ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export function BurgerConstructor({ handleOnButtonClick }) {
    return (
        <section className={`${styles.burger_constructor} mt-25`}>
            <ul className={`${styles.order_list} pl-3`}>
                <li className={`${styles.default_ingredient} mb-4 ml-8`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Флюоресцентная булка R2-D3 (верх)"
                        price={988}
                        thumbnail={'https://code.s3.yandex.net/react/code/bun-01.png'}
                    />
                </li>
                <div className={`${styles.scroll_right} pr-2`}>
                    <li className={`${styles.ingredient}`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Говяжий метеорит (отбивная)"
                            price={3000}
                            thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
                        />
                    </li>
                    <li className={`${styles.ingredient} mt-4`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Соус Spicy-X"
                            price={90}
                            thumbnail={'https://code.s3.yandex.net/react/code/sauce-02.png'}
                        />
                    </li>
                    <li className={`${styles.ingredient} mt-4`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Сыр с астероидной плесенью"
                            price={4142}
                            thumbnail={'https://code.s3.yandex.net/react/code/cheese.png'}
                        />
                    </li>
                    <li className={`${styles.ingredient} mt-4`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Плоды Фалленианского дерева"
                            price={874}
                            thumbnail={'https://code.s3.yandex.net/react/code/sp_1.png'}
                        />
                    </li>
                    <li className={`${styles.ingredient} mt-4`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Плоды Фалленианского дерева"
                            price={874}
                            thumbnail={'https://code.s3.yandex.net/react/code/sp_1.png'}
                        />
                    </li>
                    <li className={`${styles.ingredient} mt-4`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Плоды Фалленианского дерева"
                            price={874}
                            thumbnail={'https://code.s3.yandex.net/react/code/sp_1.png'}
                        />
                    </li>
                </div>
                <li className={`${styles.default_ingredient} ml-8 mt-4`}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Флюоресцентная булка R2-D3 (низ)"
                        price={988}
                        thumbnail={'https://code.s3.yandex.net/react/code/bun-01.png'}
                    />
                </li>
            </ul>
            <div className={`${styles.order_registartion} mt-10 mr-4`}>
                <div className={styles.order_cost}>
                    <p className="text text_type_digits-medium mr-2">000</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button onClick={handleOnButtonClick} type="primary" size="large" htmlType="button">Оформить заказ</Button>
            </div>
        </section>
    )
}