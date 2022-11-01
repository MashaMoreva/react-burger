import { BurgerIngredientsItem } from '../burger-ingredients-item/burger-ingredients-item';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

export function BurgerIngredientsSet({ type }) {

  const ingredients = useSelector(state => state.burgerIngredients.burgerIngredients);

  return (
    <>
      {ingredients
        .filter((ingredient) => ingredient.type === type)
        .map((ingredient) => (
          <BurgerIngredientsItem
            key={ingredient._id}
            ingredient={ingredient}
          />
        ))}
    </>
  )
}

BurgerIngredientsSet.propTypes = {
  type: PropTypes.string.isRequired,
}
