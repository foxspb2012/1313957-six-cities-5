import React from 'react';
import {connect} from 'react-redux';
import * as Type from '../../prop-types';
import {Route, Redirect} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selectors';

const GuestRoute = ({authorizationStatus, path, exact, render}) => {
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

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

GuestRoute.propTypes = {
  authorizationStatus: Type.AUTHORIZATION_STATUS,
  path: Type.PATH,
  exact: Type.EXACT,
  render: Type.FUNCTION,
};

export {GuestRoute};
export default connect(mapStateToProps)(GuestRoute);
