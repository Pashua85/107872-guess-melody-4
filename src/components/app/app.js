import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';


const App = (props) => {
  const {errorAmount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <WelcomeScreen errorAmount={errorAmount} onStartClick={() => {}} />
        </Route>
        <Route exact path='/dev-artist'>
          <ArtistQuestionScreen />
        </Route>
        <Route exact path='/dev-genre'>
          <GenreQuestionScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorAmount: PropTypes.number.isRequired
};

export default App;
