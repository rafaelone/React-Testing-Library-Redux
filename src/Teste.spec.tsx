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

import MockerApi from 'axios-mock-adapter';

import { apiGit } from './services/apiGit';
import { Teste } from './Teste';

const mockerApi = new MockerApi(apiGit, { delayResponse: 300 });

describe('App', () => {
  it('Increment count', async () => {
    render(<Teste />);

    mockerApi.onGet('/issues').reply(200);
  });
});
