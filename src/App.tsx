import { useSelector } from 'react-redux';

import * as actions from './store/count/actions';

import './App.css';

import { useDispatch } from 'react-redux';
import { RootState } from './store';
import { useEffect } from 'react';

function App() {
  const { count, issues, loading } = useSelector(
    (state: RootState) => state.countReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getTotalFeaturesRepoGit());
  }, [dispatch]);

  function handleIncrement(): void {
    dispatch(actions.increment());
  }

  function handleDecrement(): void {
    dispatch(actions.decrement());
  }

  return (
    <div>
      <button type="button" onClick={handleIncrement}>
        Add
      </button>
      {count}
      <button type="button" onClick={handleDecrement}>
        Subtract
      </button>
      {loading ? (
        <span data-testid="loading">loading</span>
      ) : (
        <div>
          <strong data-testid="reducer">{issues}</strong>
        </div>
      )}
    </div>
  );
}

export default App;
