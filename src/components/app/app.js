import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <WelcomeScreen />
      </Route>
      <Route exact path='/dev-artist'>
        <ArtistQuestionScreen />
      </Route>
      {/* <Route exact path='/dev-genre'>
        <GenreQuestionScreen />
      </Route> */}
    </Switch>
  </BrowserRouter>
);


export default App;
