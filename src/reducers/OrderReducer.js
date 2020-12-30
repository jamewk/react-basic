import {
	ORDERS_FETCH
} from "../actions/types";

const orderReducer = (state = [], action)=> {
	switch (action.type) {
		case ORDERS_FETCH:
			return action.payload;
		default:
			return state;
	}
}

export default orderReducer;
