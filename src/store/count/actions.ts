import { Dispatch } from 'redux';
import { api } from '../../services/api';

import * as types from './types';

export const getTotalFeaturesRepoGit =
  () =>
  (dispatch: Dispatch): void => {
    api.get('/').then((response) => {
      dispatch({ type: types.NUMBER, payload: 10 });
    });
  };

export const increment =
  () =>
  (dispatch: Dispatch): void => {
    dispatch({
      type: types.INCREMENT,
    });
  };

export const decrement =
  () =>
  (dispatch: Dispatch): void => {
    dispatch({
      type: types.DECREMENT,
    });
  };
