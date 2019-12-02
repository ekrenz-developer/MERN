import { OPEN_ITINERARY , CLOSE_ITINERARY , INIT_ITINERARY} from './actionTypes';

export const openItinerary = payload => {
    return {
        type: OPEN_ITINERARY,
        payload: payload
    }
}

export const closeItinerary = (payload) => {
    return {
        type: CLOSE_ITINERARY,
        payload: payload
    }
}

export const initItinerary = (payload) => {
    return {
        type: INIT_ITINERARY,
        payload: payload
    }
}