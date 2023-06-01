import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // for async function
import { composeWithDevTools } from 'redux-devtools-extension'

// Import Reducer
import { cartReducer } from './reducers/cartReducers';
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducers';

const reducer = combineReducers({
        cart: cartReducer,
        getProducts: getProductsReducer,
        getProductDetails: getProductDetailsReducer
})

const middleware = [thunk];


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;