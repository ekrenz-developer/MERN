import { FETCH_LOADING , FETCH_SUCCESS , FETCH_FAILURE } from '../actionTypes';

export const fetchLoading = payload => {
	return {
		type: FETCH_LOADING,
		payload: payload
	}
}

export const fetchSucces = payload => {
	return {
		type: FETCH_SUCCESS,
		payload: payload
	}
}

export const fetchFailure = payload => {
	return {
		type: FETCH_FAILURE,
		payload: payload
	}
}