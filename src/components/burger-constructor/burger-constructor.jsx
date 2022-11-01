import styles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { OrderRegistration } from '../order-registration/order-registration';
import { useDrop } from 'react-dnd';
import { nanoid } from 'nanoid';
import { setBun, addIngredient } from '../../services/actions/burger-constructor';
import { useDispatch, useSelector } from 'react-redux';
import { BurgerConstructorElement } from '../burger-constructor-element/burger-constructor-element';
import { deleteIngredient } from '../../services/actions/burger-constructor';
import { PropTypes } from 'prop-types';

export function BurgerConstructor({ handleOrderClick }) {
    const dispatch = useDispatch()

    const main = useSelector(state => state.burgerConstructor.mainList)
    const buns = useSelector(state => state.burgerConstructor.bunsList)

    const [, dropIngredient] = useDrop(() => ({
        accept: 'ingredient',
        drop: (item => addElement(item.ingredient))
    }))

    const addElement = (element) => {
        element = { ...element, id: nanoid() }
        if (element.type === 'bun') {
            dispatch(setBun(element))
        }
        if (element.type !== 'bun') {
            dispatch(addIngredient(element))
        }

    }

    const deleteElement = (element) => {
        dispatch(deleteIngredient(element))
    }

    return (
        <section className={`${styles.burger_constructor} mt-25`} ref={dropIngredient}>
            <ul className={`${styles.order_list} pl-3`}>
                {buns.map((element) => {
                    if (element.type === 'bun')
                        return (
                            <li className={`${styles.default_ingredient} mb-4 ml-8`} key={element.id}>
                                <ConstructorElement
                                    type="top"
                                    isLocked={true}
                                    text={`${element.name} (верх)`}
                                    price={element.price}
                                    thumbnail={element.image}
                                />
                            </li>
                        )
                }
                )}
                <div className={`${styles.scroll_right} pr-2`}>
                    {main.map((element, index) => {
                        if (element.type !== 'bun')
                            return (
                                <BurgerConstructorElement
                                    element={element}
                                    index={index}
                                    id={element.id}
                                    key={element.id}
                                    deleteElement={deleteElement}
                                />
                            )
                    }
                    )}
                </div>
                {buns.map((element) => {
                    if (element.type === 'bun')
                        return (
                            <li className={`${styles.default_ingredient} mt-4 ml-8`} key={element.id}>
                                <ConstructorElement
                                    type="bottom"
                                    isLocked={true}
                                    text={`${element.name} (низ)`}
                                    price={element.price}
                                    thumbnail={element.image}
                                />
                            </li>
                        )
                }
                )}
            </ul>
            {buns.length > 0 ?
                <OrderRegistration handleOrderClick={handleOrderClick} />
                : null}
        </section>
    )
}

BurgerConstructor.propTypes = {
    handleOrderClick: PropTypes.func.isRequired
}
