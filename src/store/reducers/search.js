import { handle } from "redux-pack";
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
          people: payload.data.results
        }),
        failure: prevState => ({
          ...prevState,
          loading: false,
          people: []
        })
      });
    case types.SET_SEARCH_DATA:
      return { ...state, ...payload };
    default:
      return state;
  }
};
