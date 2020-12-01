import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux';
import {AuthorizationStatus} from './const';
import App from './components/app/app';
import createAPI from './api';
import reducer from './store/reducer';
import {Operation as OffersOperation} from './store/offers/offers';
import {ActionCreator as UserActionCreator, Operation as UserOperation} from './store/user/user';

const api = createAPI(() => store.dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.UNAUTHORIZED)));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(UserOperation.checkAuthorizationStatus());
store.dispatch(OffersOperation.loadOffers());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
