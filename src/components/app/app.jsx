import React, { useCallback } from 'react';
import styles from './app.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeader } from '../app-header/app-header';
import { Modal } from '../modal/modal';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { getBurgerIngredients } from '../../services/actions/burger-ingredients';
import { deleteIgredientDetails } from '../../services/actions/ingredient-details';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Registration } from '../../pages/registration';
import { Authorization } from '../../pages/authorization';
import { ForgotPassword } from '../../pages/forgot-password';
import { ResetPassword } from '../../pages/reset-password';
import { Profile } from '../../pages/profile';
import { Main } from '../../pages/main';
import { IngredientInfo } from '../../pages/ingredient-details';
import { ProtectedRoute } from '../protected-route/protected-route';
import { Feed } from '../../pages/feed';
import { getUser } from '../../services/actions/user';

export default function App() {

  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;

  React.useEffect(() => {
    dispatch(getBurgerIngredients())
  }, [dispatch])

  React.useEffect(() => {
    dispatch(getUser());
}, [dispatch])

  const openIngredientDetailsModal = useSelector(state => !!state.ingredientDetails.ingredientDetails);
  const closeIngredientsModal = useCallback(() => {
    dispatch(deleteIgredientDetails())
  }, [dispatch])


  return (
    <>
      <AppHeader />

      <Switch location={background || location}>
        <Route exact={true} path="/" component={Main} />
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Authorization} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password" component={ResetPassword} />
        {/* <Route path="/profile" component={Profile} /> */}
        <ProtectedRoute path="/profile" component={Profile} />
        <Route path="/ingredients/:id" >
          <IngredientInfo />
        </Route>
        <Route path="/feed" component={Feed} />
      </Switch>

      {background && (
        <>
          <Route path="/ingredients/:id">
            {openIngredientDetailsModal && (
              <Modal onClose={closeIngredientsModal}>
                <IngredientDetails />
              </Modal>
            )}
          </Route>
        </>
      )}
    </>
  )
}

// 
