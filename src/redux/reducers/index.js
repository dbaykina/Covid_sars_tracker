import { combineReducers } from 'redux';
import cardReducer from "./cardReducer";
import chartReducer from "./chartReducer";
import  counrtyPickerReducer from "./counrtyPickerReducer";


export default combineReducers({
    cardReducer,
    chartReducer,
    counrtyPickerReducer

})