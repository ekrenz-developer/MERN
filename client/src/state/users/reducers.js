import { SIGNUP_REQUEST , USER_SUCCESS , USER_FAILURE } from './actionTypes';

const initialState = {
	user: [],
	isFetching: 'init',
	error: ''
}

const users = (state = initialState, action) => {
	switch (action.type){
		case SIGNUP_REQUEST:
			return {
				user: action.payload.user,
				isFetching: action.payload.status
			}

		case USER_SUCCESS:
			return {
				user: action.payload.user,
				isFetching: action.payload.status
			}
		
		case USER_FAILURE:
			return {
				isFetching: action.payload.status,
				error: action.payload.error
			}			

		default:
			return state;
	}
}

export default users;