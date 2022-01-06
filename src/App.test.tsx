import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  cleanup,
  waitForElementToBeRemoved,
  act,
} from './utils/test-utils';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import MockerApi from 'axios-mock-adapter';
import * as actions from './store/count/actions';

import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './store';

import { Provider } from 'react-redux';
import axios from 'axios';
import { apiGit } from './services/apiGit';

// import { apiGit } from './services/apiGit';
// import { act } from 'react-dom/test-utils';

const mockerApi = new MockerApi(apiGit);

// const handlers = [
//   rest.get(
//     'https://api.github.com/repos/facebook/react/issues',
//     (req, res, ctx) => {
//       return res(ctx.json([{ ok: true }]), ctx.delay(150));
//     },
//   ),
// ];

describe('App', () => {
  afterEach(cleanup);

  // const server = setupServer(...handlers);

  // beforeAll(() => server.listen());

  // afterEach(() => server.resetHandlers());

  // afterAll(() => server.close());

  it('Increment count', async () => {
    render(<App />);

    fireEvent.click(screen.getByText('Add'));
    await waitFor(() => {
      expect(screen.getByText('1')).toBeTruthy();
    });
  });

  it('Decrement count', async () => {
    render(<App />);

    fireEvent.click(screen.getByText('Add'));
    await waitFor(() => {
      expect(screen.getByText('1')).toBeTruthy();
    });
    fireEvent.click(screen.getByText('Add'));
    await waitFor(() => {
      expect(screen.getByText('2')).toBeTruthy();
    });
    fireEvent.click(screen.getByText('Subtract'));
    await waitFor(() => {
      expect(screen.getByText('1')).toBeTruthy();
    });
  });

  it('get total issues', async () => {
    mockerApi.onGet('/repos/facebook/react/issues').reply(200, [{ ok: true }]);
    render(<App />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();

    //@ts-ignore

    await act(async () => {
      console.log(screen.getByTestId('reducer'));
    });
  });
});
