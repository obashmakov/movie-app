import { GET_MOVIE } from './types';

const initialState = {
  movies: {},
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
};
