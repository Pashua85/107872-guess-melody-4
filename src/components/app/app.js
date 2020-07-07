import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import WellcomeScreen from '../wellcome-screen/wellcome-screen';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import ResultScreen from '../result-screen/result-screen';
import FailScreen from '../fail-screen/fail-screen';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <WellcomeScreen />
      </Route>
      <Route exact path='/dev-artist'>
        <ArtistQuestionScreen />
      </Route>
      <Route exact path='/dev-genre'>
        <GenreQuestionScreen />
      </Route>
      <Route exact path='/dev-result'>
        <ResultScreen />
      </Route>
      <Route exact path='/dev-fail'>
        <FailScreen />
      </Route>
    </Switch>
  </BrowserRouter>

);


export default App;
