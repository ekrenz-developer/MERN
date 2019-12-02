import { GET_CITIES } from './actionTypes';

const initialState = {
    citiesList: []
}

const cities = (state = initialState, action) => {
  switch (action.type){
      case GET_CITIES:
        return {
          citiesList: action.payload
        }

      default:
          return state;
  }
}

export default cities;
