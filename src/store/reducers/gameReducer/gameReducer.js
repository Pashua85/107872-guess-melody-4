import mistakesReducer from './mistakesReducer/mistakesReducer';
import mistakesLimitReducer from './mistakesLimitReducer/mistakesLimitReducer';
import stepReducer from './stepReducer/stepReducer';

const gameReducer = (gameState, action) => ({
  step: stepReducer(gameState.step, action),
  mistakesLimit: mistakesLimitReducer(gameState.mistakesLimit, action),
  mistakes: mistakesReducer(gameState.mistakes, action)
});

export default gameReducer;
