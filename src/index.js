import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

ReactDOM.render(
    <App errorsAmount={3} />,
    document.querySelector(`#root`)
);
