import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders learn react link', async () => {
  jest.spyOn(axios, 'get').mockImplementation((url) => {
    if (url.includes('/api/category/')) {
      return Promise.resolve({
        data: {
          status: 'success',
          data: [],
        },
      });
    }

    return Promise.resolve({
      data: {
        status: 'fail',
      },
    });
  });

  render(<App />, { wrapper: BrowserRouter });
  expect(await screen.findByText(/Welcome/i)).toBeInTheDocument();
});
