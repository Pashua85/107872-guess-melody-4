import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderGameScreen = this.renderGameScreen.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);

    this.state = {
      step: -1
    };
  }

  handleStartClick() {
    this.setState({
      step: 0
    });
  }

  renderGameScreen() {
    const {errorAmount, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <Route exact path='/'>
          <WelcomeScreen
            errorAmount={errorAmount}
            onStartClick={this.handleStartClick}
          />
        </Route>
      );
    } else if (step === 0) {
      return (
        <Redirect to='/dev-artist' />
      );
    } else if (step === 1) {
      return (
        <Redirect to='/dev-genre' />
      );
    }
    return null;
  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this.renderGameScreen}
          </Route>
          <Route exact path='/dev-artist'>
            <ArtistQuestionScreen question={questions[0]} />
          </Route>
          <Route exact path='/dev-genre'>
            <GenreQuestionScreen question={questions[1]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  errorAmount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default App;
