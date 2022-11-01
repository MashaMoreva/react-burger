import styles from './burger-ingredients-item.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types';
import { useDispatch } from 'react-redux';
import { addIgredientDetails } from '../../services/actions/ingredient-details';
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export function BurgerIngredientsItem({ ingredient }) {

    const main = useSelector(state => state.burgerConstructor.mainList)
    const buns = useSelector(state => state.burgerConstructor.bunsList)

    const counter = useMemo(() => (
        main.filter((item) => item._id === ingredient._id).length || buns.filter((item) => item._id === ingredient._id).length * 2
    ), [main, buns, ingredient._id]);

    const dispatch = useDispatch();
    const handleIngredientClick = () => {
        dispatch(addIgredientDetails(ingredient))
    }

    const [, dragIngredient] = useDrag(() => ({
        type: 'ingredient',
        item: {
            ingredient,
            id: ingredient._id,
            type: ingredient.type
        },
    }), [])


    return (
        <article className={styles.item} onClick={handleIngredientClick} ref={dragIngredient}>
            {counter > 0 ? <Counter count={counter} size="default" /> : null}
            <img className="ml-4 mr-4" src={ingredient.image} alt={ingredient.name} />
            <div className={`${styles.price} mt-2 mb-2`}>
                <p className="text text_type_digits-default">{ingredient.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.subtitle} text text_type_main-default`}>{ingredient.name}</p>
        </article>
    )
}

BurgerIngredientsItem.propTypes = {
    ingredient: ingredientType.isRequired,
}
