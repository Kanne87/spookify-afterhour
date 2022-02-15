import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import pageReducer from "./pageReducer";

export default combineReducers({
  player: playerReducer,
  page: pageReducer,
});
