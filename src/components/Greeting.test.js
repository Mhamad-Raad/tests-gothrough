import { render, screen } from '@testing-library/react';
import Geeting from './Geeting';

it('should render a hello world text', () => {
  render(<Geeting />);
  const helloWorldElement = screen.getByText('Hello World');
  expect(helloWorldElement).toBeInTheDocument();
});
