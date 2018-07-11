import { combineReducers } from 'redux';
import searchReducer from './containers/Search/searchReducer';

const reducer = combineReducers({
// add reducers
search: searchReducer
});

export default reducer;