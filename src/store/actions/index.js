import axios from "axios";
import * as types from "../actionTypes";

const apiRootUrl = "https://swapi.co/api";

export const search = searchTerm => {
  const req = axios.get(`${apiRootUrl}/people/?search=${searchTerm}`);
  return {
    type: types.SEARCH,
    promise: req
  };
};

export const setSearchData = data => {
  return {
    type: types.SET_SEARCH_DATA,
    payload: data
  };
};
