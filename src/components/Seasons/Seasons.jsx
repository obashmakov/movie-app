/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import dropdown from '../../images/dropdown.svg';
import { EpisodesList } from '../EpisodesList';
import './seasons.scss';

export const Seasons = ({ episodes, setEpisodeInfo }) => {
  const [seasons, setSeasons] = useState([]);
  let numberOfSeasons = Math.max(...episodes.map(episode => episode.season));
  const arr = [];

  while (numberOfSeasons > 0) {
    const newSeason = {
      season: numberOfSeasons,
      active: false,
      id: numberOfSeasons,
    };

    arr.push(newSeason);
    numberOfSeasons -= 1;
  }

  useEffect(() => {
    setSeasons(arr);
  }, []);

  const handleClick = (id) => {
    const selectedSeason = seasons.map((season) => {
      if (season.id === id) {
        season.active = !season.active;
      }

      return season;
    });

    setSeasons(selectedSeason);
  };

  return (
    <div className="seasons">
      {[...seasons].reverse().map(season => (
        <>
          <button
            className="seasons__button"
            type="button"
            onClick={() => handleClick(season.id)}
            key={season.id}
          >
            {`Season: ${season.season}`}
            <img
              className={classNames(
                'seasons__dropdown',
                { 'seasons__dropdown--active': season.active === true },
              )}
              src={dropdown}
              alt="dropdown"
            />
          </button>
          <CSSTransition
            in={season.active}
            timeout={400}
            classNames="display"
            unmountOnExit
          >
            <EpisodesList
              episodes={episodes.filter(
                series => series.season === season.season,
              )}
              setEpisodeInfo={setEpisodeInfo}
            />
          </CSSTransition>
        </>
      ))}
    </div>
  );
};
