import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen';

const App = (props) => {
  const {errorAmount} = props;
  return <WelcomeScreen errorAmount={errorAmount} />;
};

App.propTypes = {
  errorAmount: PropTypes.number.isRequired
};

export default App;
