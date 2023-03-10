import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async Component', () => {
  // it('should render the asynchrnous code', async () => {
  //   render(<Async />)

  //   const listItemElements = await screen.findAllByRole('listitem');
  //   expect(listItemElements).not.toHaveLength(0);
  // })

  it('should render asynchronous code (MOCKED)', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ name: 'Mhamad' }],
    });

    render(<Async />);
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
