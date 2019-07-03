import mainReducer from './index';
import * as actionCreators from '../actions/index.js';

test('should return initial state', () => {
  expect(mainReducer(undefined, {})).toEqual({});
});

test('should handle LOAD_USER', () => {
  const startAction = {
    type: actionCreators.LOAD_USER
  };
  expect(mainReducer({}, startAction)).toEqual({});
})
