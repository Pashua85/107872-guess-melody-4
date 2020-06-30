import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer, initialState} from './reducer';
import App from './components/app/app';
import questions from './mocks/questions';
import settings from './mocks/settings';

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
      <App
        errorAmount={settings.errorAmount}
        questions={questions}
      />
    </Provider>
    ,
    document.querySelector(`#root`)
);
