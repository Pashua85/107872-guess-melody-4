import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorsAmount} = props;
  return <WelcomeScreen errorsAmount={errorsAmount} />;
};

export default App;
