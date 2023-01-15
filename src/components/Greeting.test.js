import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';
describe('Greeting Component', () => {
  it('should render a hello world text', () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText('Hello World');
    expect(helloWorldElement).toBeInTheDocument();
  });

  it('should render a good to see you text if the button is not clicked', () => {
    render(<Greeting />);
    const goodToSeeYouElement = screen.getByText('good to see you', {
      exact: false,
    });
    expect(goodToSeeYouElement).toBeInTheDocument();
  });

  it('should render a changed text', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const changedElement = screen.getByText('Changed');

    expect(changedElement).toBeInTheDocument();
  });
});
