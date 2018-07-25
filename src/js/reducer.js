import { combineReducers } from "redux";
import searchReducer from "./containers/searchReducer";

const reducer = combineReducers({
  // add reducers
  search: searchReducer
});

export default reducer;
