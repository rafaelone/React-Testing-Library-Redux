import { fireEvent, render, screen, waitFor, act } from './utils/test-utils';

import MockerApi from 'axios-mock-adapter';

import App from './App';

import { api } from './services/api';

const mockerApi = new MockerApi(api);

describe('App', () => {
  beforeEach(() => {
    mockerApi.onGet('/').reply(200, 10);
  });

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
    render(<App />);

    expect(screen.getByTestId('loading')).toBeInTheDocument();

    await screen.findByText('10');

    act(() => {
      expect(screen.getByTestId('reducer')).toHaveTextContent('10');
    });
  });
});
