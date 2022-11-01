import React, { useCallback } from 'react';
import styles from './app.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { Modal } from '../modal/modal';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { OrderDetails } from '../order-details/order-details';
import { getBurgerIngredients } from '../../services/actions/burger-ingredients';
import { deleteIgredientDetails } from '../../services/actions/ingredient-details';
import { getOrderDetails } from '../../services/actions/order-details';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

export default function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBurgerIngredients())
  }, [dispatch])

  const ingredients = useSelector(state => state.burgerIngredients.burgerIngredients);
  const openIngredientDetailsModal = useSelector(state => !!state.ingredientDetails.ingredientDetails);
  const idIngredientsList = (ingredients.map((item) => item._id))
  const [openModal, setOpenModal] = React.useState(false);
  const handleOrderClick = () => {
    setOpenModal(!openModal)
    dispatch(getOrderDetails(idIngredientsList))
  }

  const closeIngredientsModal = useCallback(() => {
    dispatch(deleteIgredientDetails())
  }, [dispatch])

  const closeModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <AppHeader />
      <main className={styles.content}>
        <BurgerIngredients />
        <BurgerConstructor handleOrderClick={handleOrderClick} />
      </main>
      {openIngredientDetailsModal && (
        <Modal onClose={closeIngredientsModal}>
          <IngredientDetails />
        </Modal>
      )}
      {openModal && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </DndProvider>
  )
}
