import { USER_SUCCESS } from '../actionTypes';

const initialState = {
	user: {},
	token: ''
}

const user = (state = initialState, action) => {
	switch (action.type){
		/*
		case USER_REQUEST:
			return {
				user: action.payload.user
			}
		*/
		case USER_SUCCESS:
			return {
				...state,
				user: action.payload.user,
				token: action.payload.token
			}
		/*
		case USER_FAILURE:
			return {
				...state,
				error: action.payload.error
			}			
		*/
		default:
			return state;
	}
}

export default user;