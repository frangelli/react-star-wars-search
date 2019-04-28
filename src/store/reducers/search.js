import { handle } from "redux-pack";
import * as types from "../actionTypes";
const initialState = {};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SEARCH:
      return handle(state, action, {
        start: prevState => ({
          ...prevState
        }),
        success: prevState => ({
          ...prevState
        }),
        failure: prevState => ({
          ...prevState
        })
      });
    default:
      return state;
  }
};
