import {
	PRODUCTS_FETCH
} from "../actions/types";

const productReducer = (state = [], action)=> {
	switch (action.type) {
		case PRODUCTS_FETCH:
			return action.payload;
		default:
			return state;
	}
}

export default productReducer;
