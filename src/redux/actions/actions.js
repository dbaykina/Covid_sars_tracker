import { GET_CHART, GET_CARDS, GET_COUNTRIES , GET_PICKED_COUNTRY } from './actionTypes';



export function getChart (payload) {
    return {type: GET_CHART, payload}
}


export function getCards (payload) {
    return {type: GET_CARDS, payload}
}

export function getCountries (payload) {
    return {type: GET_COUNTRIES, payload}
}

export function getPickedCountry (payload) {
    return {type: GET_PICKED_COUNTRY, payload}
}



