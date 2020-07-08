import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './store/reducers/reducer';
import App from './components/app/app';
import {createAPI} from './api';
import DataOperation from './store/operations/data-operation/data-operation';
import UserOperation from './store/operations/user-operation/user-operation';
import ActionCreator from './store/action-creator/action-creator';
import AUTH_STATUS from './store/reducers/userReducer/authStatusReducer/authStatusReducer';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AUTH_STATUS.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(UserOperation.checkAuth());
store.dispatch(DataOperation.loadQuestions());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.querySelector(`#root`)
);
