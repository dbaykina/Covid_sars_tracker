import { GET_CARDS } from "./../actions/actionTypes";
const initState = {
  
};

export default function cardReducer(state = initState, action) {
  switch (action.type) {
    case GET_CARDS:
  
      return {
        ...state,
        cards: action.payload,
      };
     
    
    default:
      return state;
  }
 
}
