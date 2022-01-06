import axios from 'axios';
import { Dispatch } from 'redux';
import { apiGit } from '../../services/apiGit';

import * as types from './types';

export const getTotalFeaturesRepoGit =
  () =>
  (dispatch: Dispatch): void => {
    apiGit
      .get('/repos/facebook/react/issues')
      .then((response) => {
        console.log('chamou');
        console.log(response.data);
        dispatch({ type: types.NUMBER_ISSUES, payload: response.data.length });
      })
      .catch((err) => {
        console.log(err);
        console.log('erro');
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
