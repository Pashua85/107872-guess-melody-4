import stepReducer from './stepReducer';

describe(`stepReducer`, () => {
  test(`When it is invoked with 3 and increase step action as arguments, it should return 4`, () => {
    const result = stepReducer(3, {type: `INC_STEP`});
    expect(result).toBe(4);
  });

  test(`When it is invoked with 3 and increase mistakes action as arguments, it should return 3`, () => {
    const result = stepReducer(3, {type: `INC_MISTAKES`});
    expect(result).toBe(3);
  });

  test(`When it is invoked with 3 and restart game as arguments, it should return 0`, () => {
    const result = stepReducer(3, {type: `RESTART_GAME`});
    expect(result).toBe(0);
  });
});
