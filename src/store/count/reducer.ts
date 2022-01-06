import * as types from './types';

type Action = {
  type: string;
  payload: number;
};

type CountReducer = {
  count: number;
  issues: number;
  loading: boolean;
};

export const INITIAL_STATE: CountReducer = {
  count: 0,
  issues: 0,
  loading: true,
};

export function Count(state = INITIAL_STATE, action: Action): CountReducer {
  switch (action.type) {
    case types.NUMBER_ISSUES: {
      return {
        ...state,
        issues: action.payload,
        loading: false,
      };
    }
    case types.INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case types.DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default:
      return state;
  }
}
