import React, { useCallback } from 'react';
import { useSelector, useDispatch  } from '../../services/hooks';
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
import { IngredientInfo } from '../../pages/ingredient-info';
import { ProtectedRoute } from '../protected-route/protected-route';
import { Feed } from '../../pages/feed';
import { TLocation } from '../../services/types/types';

export function App() {

  const dispatch = useDispatch();
  const location = useLocation<TLocation>();
  const background = location.state && location.state.background;

  React.useEffect(() => {
    dispatch(getBurgerIngredients())
  }, [dispatch])

  
  const openIngredientDetailsModal = useSelector(state => !!state.ingredientDetails.ingredientDetails);
  const closeIngredientsModal = useCallback(() => {
    dispatch(deleteIgredientDetails())
    window.history.pushState(null, '', '/')
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
        <ProtectedRoute path="/profile" component={Profile} />
        <Route path="/ingredients/:id" >
          <IngredientInfo />
        </Route>
        <ProtectedRoute path="/feed" component={Feed} />
      </Switch>

      {background && (
        <>
          <Route path="/ingredients/:id" >
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
