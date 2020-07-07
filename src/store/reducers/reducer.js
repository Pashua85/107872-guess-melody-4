import {combineReducers} from 'redux';
import gameReducer from './gameReducer/gameReducer';
import dataReducer from './dataReducer/dataReducer';
import userReducer from './userReducer/userReducer';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.GAME]: gameReducer,
  [NameSpace.DATA]: dataReducer,
  [NameSpace.USER]: userReducer
});


