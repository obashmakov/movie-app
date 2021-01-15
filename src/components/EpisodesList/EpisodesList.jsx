import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './episodes.scss';

export const EpisodesList = ({ episodes, setEpisodeInfo }) => (
  <ul className="list">
    {episodes.map(episode => (
      <li
        className="list__item"
        key={episode.id}
        onClick={() => setEpisodeInfo({
          id: episode.id,
          name: episode.name,
          image: episode.image,
          season: episode.season,
          number: episode.number,
          summary: episode.summary,
        })}
      >
        <Link className="list__link" to={`/${episode.id}`}>
          <p className="list__name">
            {episode.name}
          </p>
          <p className="list__info">
            {`S:${episode.season} E:${episode.number}`}
          </p>
        </Link>
      </li>
    ))}
  </ul>
);

EpisodesList.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    season: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
  })).isRequired,
  setEpisodeInfo: PropTypes.func.isRequired,
};
