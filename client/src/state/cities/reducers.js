import { GET_CITIES } from './actionTypes';

const initialState = {
  cities: []
}

const cities = (state = initialState, action) => {
  switch (action.type){
      case GET_CITIES:
        return {
          cities: action.payload
        }

      default:
          return state;
  }
}

export default cities;
