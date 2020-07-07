import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './reducers/reducer';
import App from './components/app/app';
import {createAPI} from './api';
import {Operation as DataOperation} from './reducers/questionsReducer/questionsReducer';
// import questions from './mocks/questions';
// import settings from './mocks/settings';

const api = createAPI(() => {});
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadQuestions());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.querySelector(`#root`)
);
