import { combineReducers, createStore, applyMiddleware } from 'redux';

import { Count } from './count/reducer';
import thunk from 'redux-thunk';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const reducers = combineReducers({
  countReducer: Count,
});

export const store = createStore(reducers, applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
