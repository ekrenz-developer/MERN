import { SIGNUP_REQUEST , USER_SUCCESS , USER_FAILURE } from './actionTypes';

export const signUp = payload => {
	return {
		type: SIGNUP_REQUEST,
		payload: payload
	}
}

export const success = payload => {
	return {
		type: USER_SUCCESS,
		payload: payload
	}
}

export const failure = payload => {
	return {
		type: USER_FAILURE,
		payload: payload
	}
}