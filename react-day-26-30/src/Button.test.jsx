import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('button click should call function', () => {
  const handleClick = vi.fn(); // mock function

  render(<Button onClick={handleClick} />);

  const btn = screen.getByText('Click Me');

  fireEvent.click(btn);

  expect(handleClick).toHaveBeenCalled();
});