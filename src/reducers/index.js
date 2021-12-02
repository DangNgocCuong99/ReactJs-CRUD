import { combineReducers } from 'redux';
import itemsReducer from './ItemReducer';
export default combineReducers({
    items: itemsReducer
});