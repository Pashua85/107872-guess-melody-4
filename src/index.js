import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

ReactDOM.render(
    <App errorAmount={3} />,
    document.querySelector(`#root`)
);
