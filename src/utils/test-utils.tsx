import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { Count as countReducer } from '../store/count/reducer';
import { reducers } from '../store/index';

function render(
  ui: any,
  {
    //@ts-ignore
    preloadedState,
    store = configureStore({
      reducer: reducers,
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export { render };
