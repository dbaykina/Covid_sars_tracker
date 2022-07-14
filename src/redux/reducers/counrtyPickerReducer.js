import { GET_COUNTRIES, GET_PICKED_COUNTRY } from "../actions/actionTypes";
const initState = {
  countries: [],
  pickedCountry: "",
};

export default function chartReducer(state = initState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      
      return {
        ...state,
        countries: action.payload,
      };
    case GET_PICKED_COUNTRY:
      return {
        ...state,
        pickedCountry: action.payload,
      };

    default:
      return state;
  }
}
