import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './episode.scss';

export const Episode = ({ episode }) => (
  <div className="episode">
    <h1 className="episode__title">
      {episode.name}
    </h1>
    {episode.image && (
      <img
        className="episode__image"
        src={episode.image.medium}
        alt="cartoon"
      />
    )}
    {episode.summary && (
      <p className="episode__description">
        {episode.summary.replace('<p>', '').replace('</p>', '').replace('<b>', '').replace('</b>', '')}
      </p>
    )}
    <p className="episode__info">
      {`Season: ${episode.season} Episode: ${episode.number}`}
    </p>

    <Link className="episode__link" to="/">
      Back
    </Link>
  </div>
);

Episode.propTypes = {
  episode: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    medium: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    replace: PropTypes.func.isRequired,
    season: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
  })).isRequired,
};
