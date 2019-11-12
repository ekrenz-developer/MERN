import { GET_CITIES } from './actionTypes';

export const getCities = payload => {
  return {
    type: GET_CITIES,
    payload: payload
  }
}