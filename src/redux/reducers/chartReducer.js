import { GET_CHART } from "./../actions/actionTypes";
const initState = {
  
};

export default function chartReducer(state = initState, action) {
  switch (action.type) {
    case GET_CHART:
    
      return {
        ...state,
        chart: action.payload,
      };

    default:
      return state;
  }
}
