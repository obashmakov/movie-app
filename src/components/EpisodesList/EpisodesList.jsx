import React from 'react';
import PropTypes from 'prop-types';
import './episodes.scss';

export const EpisodesList = ({ episodes }) => (
  <ul className="list">
    {episodes.map(episode => (
      <li className="list__item" key={episode.id}>
        <p className="list__name">
          {episode.name}
        </p>
        <p className="list__info">
          {`S:${episode.season} E:${episode.number}`}
        </p>
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
};
