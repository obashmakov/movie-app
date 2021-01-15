import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Movie from './components/Movie/Movie';
import './App.scss';
import { Episode } from './components/Episode';

export const App = () => {
  const [episodeInfo, setEpisodeInfo] = useState({});

  return (
    <div className="container">
      <Switch>
        <Route path={`/${episodeInfo.id}`}>
          <Episode episode={episodeInfo} />
        </Route>

        <Route path="/">
          <Movie setEpisodeInfo={setEpisodeInfo} />
        </Route>
      </Switch>
    </div>
  );
};
