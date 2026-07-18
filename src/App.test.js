import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio owner name', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /khadija sajid/i })).toBeInTheDocument();
});
