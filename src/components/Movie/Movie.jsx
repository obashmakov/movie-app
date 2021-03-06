import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../../redux/actions';
import { Seasons } from '../Seasons';
// import { EpisodesList } from '../EpisodesList';

import './movie.scss';

const Movie = ({ setEpisodeInfo }) => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => {
    if (Object.keys(state.movies.movies).length > 0) {
      return state.movies.movies;
    }
  });

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch, getMovie]);

  return (
    <div className="movie">
      {movie && (
        <>
          <h1 className="movie__title">
            {movie.name}
          </h1>
          <p className="movie__description">
            <img
              className="movie__image"
              src={movie.image.medium}
              alt={movie.name}
            />
            {movie.summary.replace('<p>', '').replace('</p>', '').replace('<b>', '').replace('</b>', '')}
          </p>
          <Seasons
            episodes={movie._embedded.episodes}
            setEpisodeInfo={setEpisodeInfo}
          />
        </>
      )}
    </div>
  );
};

export default Movie;
