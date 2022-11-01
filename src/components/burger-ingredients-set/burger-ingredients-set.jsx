import { BurgerIngredientsItem } from '../burger-ingredients-item/burger-ingredients-item';
import { useSelector } from 'react-redux';

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
