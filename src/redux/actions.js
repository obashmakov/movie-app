import { GET_MOVIE } from './types';

const urlFindMovie = 'https://api.tvmaze.com/singlesearch/shows?q=';
const showToLoad = 'Powerpuff&Girls';

export function getMovie() {
  return async(dispatch) => {
    const response = await fetch(`${urlFindMovie}${showToLoad}&embed=episodes`);
    const json = await response.json();

    dispatch({
      type: GET_MOVIE,
      payload: json,
    });
  };
}
