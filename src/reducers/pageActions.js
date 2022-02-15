import {
    SWITCH_PAGE,
  } from "../constants/types";

  export const switchPage = (page) => {
    return {
        type: SWITCH_PAGE,
        payload: page,
    }
  }