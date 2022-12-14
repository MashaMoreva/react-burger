import React from 'react';
import { useDispatch } from '../../services/hooks';
import { AppHeader } from '../app-header/app-header';
import { Modal } from '../modal/modal';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { getBurgerIngredients } from '../../services/actions/burger-ingredients';
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
import { Order } from '../order/order';
import { OrderInfo } from '../../pages/order-info';
import { OrderUser } from '../order-user/order-user';
import { ProfileOrderInfo } from '../../pages/profile-order-info';
import { useSelector } from '../../services/hooks';

export function App() {

  const dispatch = useDispatch();
  const location = useLocation<TLocation>();
  const background = location.state && location.state.background;

  React.useEffect(() => {
    dispatch(getBurgerIngredients())
  }, [dispatch])

  const ingredients = useSelector((store) => store.burgerIngredients.burgerIngredients);
  console.log(ingredients)

  return (
    <>
      <AppHeader />

      <Switch location={background || location}>
        <Route exact path="/" component={Main} />
        <Route exact path="/ingredients/:id" component={IngredientInfo} />
        <Route exact path="/register" component={Registration} />
        <Route exact path="/login" component={Authorization} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/feed/:id" component={OrderInfo} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/profile/orders" component={Profile} />
        <ProtectedRoute exact path="/profile/orders/:id" component={ProfileOrderInfo} />
      </Switch>

      {background && (
        <>
          <Route path="/ingredients/:id" >
            <Modal>
              <IngredientDetails />
            </Modal>
          </Route>
          <Route path="/feed/:id">
            <Modal>
              <Order />
            </Modal>
          </Route>
          <Route path="/profile/orders/:id">
            <Modal>
              <OrderUser />
            </Modal>
          </Route>
        </>
      )}
    </>
  )
}

// 
