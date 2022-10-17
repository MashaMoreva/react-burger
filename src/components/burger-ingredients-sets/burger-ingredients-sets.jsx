import styles from './burger-ingredients-sets.module.css'; 
import { BurgerIngredientsItem } from '../burger-ingredients-item/burger-ingredients-item';
import { ingredientType } from '../../utils/types';
import PropTypes from 'prop-types';

export function BurgerIngredientsSets({ingredients, handleIngredientClick}) {
    return (
        <div className={`${styles.scroll_left} mt-10 pr-2`}>
            <div>
                <h3 className="text text_type_main-medium  mb-6">Булки</h3>
                <ul className={`${styles.list} pl-4`}>
                    {ingredients.filter((item) => item.type === 'bun').map((item) => (<BurgerIngredientsItem handleIngredientClick={handleIngredientClick} key={item._id} ingredient={item}/>))}
                </ul>
            </div>
            <div>
                <h3 className="text text_type_main-medium mt-10 mb-6">Соусы</h3>
                <ul className={`${styles.list} pl-4`}>
                    {ingredients.filter((item) => item.type === 'sauce').map((item) => (<BurgerIngredientsItem handleIngredientClick={handleIngredientClick} key={item._id} ingredient={item} />))}
                </ul>
            </div>
            <div>
                <h3 className="text text_type_main-medium mt-10 mb-6">Начинки</h3>
                <ul className={`${styles.list} pl-4`}>
                    {ingredients.filter((item) => item.type === 'main').map((item) => (<BurgerIngredientsItem handleIngredientClick={handleIngredientClick} key={item._id} ingredient={item} />))}
                </ul>
            </div>
        </div>
    )
}

BurgerIngredientsSets.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
  }