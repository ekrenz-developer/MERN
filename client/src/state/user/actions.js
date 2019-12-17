/*
import { 
	USER_REQUEST, 
	USER_SUCCESS, 
	USER_FAILURE
} from '../actionTypes';
*/
import { USER_SUCCESS } from '../actionTypes';
import { fetchSucces, fetchLoading, fetchFailure } from '../fetching/actions';

export const signUp = (endpoint, init = {}) => async (dispatch) => {
	await dispatch(fetchLoading('loading'))
	fetch(endpoint, init)
		.then(
			response => response.json()
		)
		.then(
			async (data) => {
				await dispatch(fetchSucces('success'))
			}
		)
		.catch(
			async (err) => {
				await dispatch(fetchFailure(err))
			}
		)
}

export const signIn = (endpoint, init = {}) => async (dispatch) => {
	await dispatch(fetchLoading('loading'))
	fetch(endpoint, init)
		.then(
			response => response.json()
		)
		.then(
			async (data) => {
				console.log(data)
				if(data.status){
					await dispatch(fetchFailure(data))
				}else{
					await dispatch(userSuccess(data))
					await dispatch(fetchSucces('success'))
				}
			}
		)
		.catch(
			async (err) => {
				await dispatch(fetchFailure(err))
			}
		)	
}

const userSuccess = payload => {
	return {
		type: USER_SUCCESS,
		payload: payload
	}
}

/*
const userRequest = payload => {
	return {
		type: USER_REQUEST,
		payload: payload
	}
}

const userFailure = payload => {
	return {
		type: USER_FAILURE,
		payload: payload
	}
}
*/