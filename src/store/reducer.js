import {NameSpace} from '../const';
import {combineReducers} from 'redux';
import {reducer as appReducer} from './app/app';
import {reducer as userReducer} from './user/user';
import {reducer as offersReducer} from './offers/offers';
import {reducer as reviewsReducer} from './reviews/reviews';

const reducer = combineReducers({
  [NameSpace.APP]: appReducer,
  [NameSpace.OFFERS]: offersReducer,
  [NameSpace.USER]: userReducer,
  [NameSpace.REVIEWS]: reviewsReducer
});

export default reducer;
