import { render, screen } from '@testing-library/react';
import Geeting from './Geeting';
describe('Greeting Component', () => {
  it('should render a hello world text', () => {
    render(<Geeting />);
    const helloWorldElement = screen.getByText('Hello World');
    expect(helloWorldElement).toBeInTheDocument();
  });
});
