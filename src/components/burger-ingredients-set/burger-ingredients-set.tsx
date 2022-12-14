import { FC } from 'react';
import { BurgerIngredientsItem } from '../burger-ingredients-item/burger-ingredients-item';
import { useSelector } from '../../services/hooks';
import { TBurgerIngredientsSet } from '../../services/types/types';

export const BurgerIngredientsSet: FC<TBurgerIngredientsSet> = ({ type }) => {

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
