import { USER_REQUEST , USER_SUCCESS , USER_FAILURE } from '../actionTypes';

const initialState = {
	user: {},
	token: ''
}

const user = (state = initialState, action) => {
	switch (action.type){
		case USER_REQUEST:
			return {
				user: action.payload.user
			}

		case USER_SUCCESS:
			return {
				user: action.payload.user,
				token: action.payload
			}
		
		case USER_FAILURE:
			return {
				error: action.payload.error
			}			

		default:
			return state;
	}
}

export default user;