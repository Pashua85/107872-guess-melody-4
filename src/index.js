import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import questions from './mocks/questions';
import settings from './mocks/settings';

ReactDOM.render(
    <App
      errorAmount={settings.errorAmount}
      questions={questions}
    />,
    document.querySelector(`#root`)
);
