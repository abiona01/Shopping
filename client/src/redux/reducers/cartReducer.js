import * as actionTypes from "../types/cartTypes";

const initialState = {
	cartItems: [],
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			return {
				state,
			};
		default:
			return state;
	}
};

export default cartReducer;
