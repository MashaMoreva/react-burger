import { Route, Redirect, useLocation, RouteProps } from "react-router-dom";
import { useSelector } from '../../services/hooks';

export const ProtectedRoute = ({ component, path }: RouteProps) => {
  const authorization = useSelector((state) => state.userAuthorization.authorization);
  const location = useLocation();

  if (!authorization) {

    return (
      <Route path={path}>
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      </Route>
    )
  }
  return <Route path={path} component={component} />
}

// return (
//   <Route
//     render={() =>
//       authorization ? (
//         children
//       ) : (<Redirect to='/login' />)
//     }
//   />
// );
