import { FETCH_LOADING , FETCH_SUCCESS , FETCH_FAILURE } from '../actionTypes';

const initialState = {
	isFetching: '',
	error: ''
}

const fetching = (state = initialState, action) => {
	switch (action.type){
		case FETCH_LOADING:
			return {
				...state,
				isFetching: action.payload
			}

		case FETCH_SUCCESS:
			return {
				...state,
				isFetching: action.payload
			}
		
		case FETCH_FAILURE:
			return {
				...state,
				isFetching: action.payload.status,
				error: action.payload.error
			}			

		default:
			return state;
	}
}

export default fetching;