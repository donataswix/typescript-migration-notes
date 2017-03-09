// @flow

type State = {counter: number}

type A1 = {|type: 'a1', incrementBy: number|}
type A2 = {|type: 'a2', decrementBy: number|}

type Action = A1 | A2

const initialState = {value: 0};

const reducers = {
  a1(state, action) {
    return state;
  },
  a2(state, action) {
    return state;
  },
};

function reducer(state: State, action: Action): State {
  if (action.type in reducers) {
    return reducers[action.type](state, action);
  }
  return state;
}
