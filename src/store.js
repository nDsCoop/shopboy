import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer } from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';
import { userSigninReducer, userRegsisterReducer } from './reducers/userReducers';


const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialSate = { cart: { cartItems }, userSignin : { userInfo } };
const reducer = combineReducers ({
    productList : productListReducer ,
    productDetails : productDetailsReducer,
    cart : cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegsisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose;
const store = createStore(reducer, initialSate,  composeEnhancer(applyMiddleware(thunk)));
export default store;