import { render, screen } from '@testing-library/react';
import App from './App';

test('should render searchbar on mount', () => {
  render(<App />);
  const searchBar = screen.getByPlaceholderText('Search here...');
  expect(searchBar).toBeInTheDocument();
});

test('should render categories dropdown on mount', () => {
  render(<App />);
  const dropdownInput = screen.getByTestId('select');
  expect(dropdownInput).toBeInTheDocument();
});
