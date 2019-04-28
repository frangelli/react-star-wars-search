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

export const fetchFilms = () => {
  const req = axios.get(`${apiRootUrl}/films/`);
  return {
    type: types.FETCH_FILMS,
    promise: req
  };
};

export const getFilmsByPerson = person => {
  return {
    type: types.GET_FILMS_BY_PERSON,
    payload: person
  };
};

export const setSearchData = data => {
  return {
    type: types.SET_SEARCH_DATA,
    payload: data
  };
};
