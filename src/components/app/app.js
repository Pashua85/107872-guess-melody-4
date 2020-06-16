import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderGameScreen = this.renderGameScreen.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleContinueClick = this.handleContinueClick.bind(this);
    this.handleFinalClick = this.handleFinalClick.bind(this);
    this.increaseStep = this.increaseStep.bind(this);
    this.rebootStep = this.rebootStep.bind(this);

    this.state = {
      step: -1
    };
  }

  handleStartClick() {
    this.increaseStep();
  }

  handleContinueClick() {
    // получает questionType и answer
    this.increaseStep();
  }

  handleFinalClick() {
    // получает questionType и checkedAnswers
    this.rebootStep();
  }

  increaseStep() {
    this.setState((prevState) => ({
      step: prevState.step + 1
    }));
  }

  rebootStep() {
    this.setState({
      step: -1
    });
  }

  renderGameScreen() {
    const {errorAmount, questions} = this.props;
    const {step} = this.state;

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorAmount={errorAmount}
          onStartClick={this.handleStartClick}
        />
      );
    } else if (step === 0) {
      return (
        <ArtistQuestionScreen
          question={questions[0]}
          onAnswerSelect={this.handleContinueClick}
        />
      );
    } else if (step === 1) {
      return (
        <GenreQuestionScreen
          question={questions[1]}
          onAnswerClick={this.handleFinalClick}
        />
      );
    }
    return null;
  }

  render() {
    const {errorAmount, questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <WelcomeScreen
              errorAmount={errorAmount}
              onStartClick={this.handleStartClick}
            />
          </Route>
          <Route exact path='/dev-artist'>
            <ArtistQuestionScreen
              question={questions[0]}
              onAnswerSelect={this.handleContinueClick}
            />
          </Route>
          <Route exact path='/dev-genre'>
            <GenreQuestionScreen
              question={questions[1]}
              onAnswerClick={this.handleFinalClick}
            />
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
