import { handle } from "redux-pack";
import { starWarsDataParser } from "utils";

import * as types from "../actionTypes";
const initialState = {
  searchTerm: "",
  people: []
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SEARCH:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          loading: true,
          people: []
        }),
        success: prevState => ({
          ...prevState,
          loading: false,
          people: starWarsDataParser(payload.data.results)
        }),
        failure: prevState => ({
          ...prevState,
          loading: false,
          people: []
        })
      });
    case types.SET_SEARCH_DATA:
      const newState = { ...state, ...payload };
      console.log("-----------------------");
      console.log("SET_SEARCH_DATA REDUCER: ", newState);
      console.log("-----------------------");
      return newState;
    default:
      return state;
  }
};
