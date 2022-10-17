import React from 'react';
import styles from './app.module.css';
import { apiBurger } from '../api/api';
import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { Modal } from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';

export default function App() {
  const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    apiBurger.getIngredients()
      .then(({ success, data }) => {
        if (success) {
          setIngredients(data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(ingredients)

  const [openModal, setOpenModal] = React.useState(false);
  const [item, setItem] = React.useState(false);

  const handleOnButtonClick = () => {
    setItem(false);
    setOpenModal(!openModal);
  }

  const handleIngredientClick = (item) => {
    setItem(item)
    setOpenModal(!openModal);
  }

  const closeModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <>
      <AppHeader />
      <main className={styles.content}>
        <BurgerIngredients ingredients={ingredients} handleIngredientClick={handleIngredientClick} />
        <BurgerConstructor handleOnButtonClick={handleOnButtonClick} />
      </main>
      {openModal && <Modal onClose={closeModal} >
        {item ? <IngredientDetails ingredient={item} /> :
          <OrderDetails />}
      </Modal>}
    </>
  )
}