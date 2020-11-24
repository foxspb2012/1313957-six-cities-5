import React from 'react';
import App from './app/app';
import thunk from 'redux-thunk';
import createAPI from './api.js';
import ReactDOM from 'react-dom';
import reducer from './store/reducer';
import {AuthorizationStatus} from './const.js';
import {Operation as OffersOperation} from './store/offers/offers';
import {ActionCreator as UserActionCreator, Operation as UserOperation} from './store/user/user';
import {createStore, compose, applyMiddleware} from 'redux'; import {Provider} from 'react-redux';

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
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
