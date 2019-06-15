import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import authReducer from './modules/auth/reducer';
import categoriesReducer from './modules/categories/reducer';
import chatReducer from './modules/chat/reducer';
import ordersReducer from './modules/orders/reducer';
import productsReducer from './modules/products/reducer';

export default createStore(
  combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    chat: chatReducer,
    orders: ordersReducer,
    products: productsReducer,
  }),
  applyMiddleware(thunkMiddleware)
);
