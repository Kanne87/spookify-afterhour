import {
    SWITCH_PAGE,
  } from "../constants/types";
 
  
  const initialState = {
    page: 1,
    name: "main",
    titel: "Dashboard",
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case SWITCH_PAGE:
        return {
          ...state,
          page: action.payload,
        };
      default:
        return state;
    }
  }
  