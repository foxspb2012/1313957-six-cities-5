import React from 'react';
import {connect} from 'react-redux';
import * as Type from '../../prop-types';
import {Route, Redirect} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selectors';

const PrivateRoute = ({authorizationStatus, path, exact, render}) => {
  if (authorizationStatus === AuthorizationStatus.AUTHORIZED && path === AppRoute.LOGIN) {
    return <Redirect to={AppRoute.MAIN} />;
  }
  if (authorizationStatus !== AuthorizationStatus.AUTHORIZED && path !== AppRoute.LOGIN) {
    return <Redirect to={AppRoute.LOGIN} />;
  }
  return (
    <Route path={path} exact={exact} > {render()} </Route>
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: Type.AUTHORIZATION_STATUS.isRequired,
  path: Type.PATH.isRequired,
  exact: Type.EXACT.isRequired,
  render: Type.FUNCTION.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
