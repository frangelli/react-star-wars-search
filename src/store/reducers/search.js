import { handle } from "redux-pack";
import { starWarsDataParser, filmsDataParser } from "utils";

import * as types from "../actionTypes";
const initialState = {
  searchTerm: "",
  people: [],
  searchMade: false,
  films: [],
  selectedPersonFilms: []
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SEARCH:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          loading: true,
          searchMade: true,
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
    case types.FETCH_FILMS:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          films: []
        }),
        success: prevState => ({
          ...prevState,
          films: filmsDataParser(payload.data.results)
        }),
        failure: prevState => ({
          ...prevState,
          films: []
        })
      });
    case types.SET_SEARCH_DATA:
      return { ...state, ...payload };
    case types.GET_FILMS_BY_PERSON:
      return {
        ...state,
        selectedPersonFilms: state.films.filter(f =>
          payload.films.includes(f.url)
        )
      };
    default:
      return state;
  }
};
