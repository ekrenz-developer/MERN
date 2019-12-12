import { OPEN_ITINERARY , CLOSE_ITINERARY , INIT_ITINERARY } from '../actionTypes';

const initialState = {
    open: null
}

const itineraries = (state = initialState, action) => {
switch (action.type){
    case OPEN_ITINERARY:
        return {
            ...state,
            open: action.payload
        }
    
    case CLOSE_ITINERARY:
        return {
            ...state,
            open: action.payload
        }

    case INIT_ITINERARY:
        return {
            ...state,
            open: action.payload
        }

    default:
        return state;
}
}

export default itineraries;