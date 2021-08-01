import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
//Reducers
import { cartReducer } from "./reducers/cartReducer";
import {
	getProductsReducer,
	getProductDetailsReducer,
} from "./reducers/productReducer";

const reducer = combineReducers({
	cart: cartReducer,
	getProducts: getProductsReducer,
	getProductDetails: getProductDetailsReducer,
});
const middleware = [thunk, logger];

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
