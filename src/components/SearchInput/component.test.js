import { fireEvent, render, screen } from '@testing-library/react';
import SearchInput from './component';
import '@testing-library/jest-dom/extend-expect';

describe('Searchbar value', () => {
  it('should render component', () => {
    render(<SearchInput data-testid="searchbar" />);
    const inputSearchBar = screen.getByTestId('searchbar');
    expect(inputSearchBar).toBeInTheDocument();
  });

  it('should render an empty input when component mounts', async () => {
    render(<SearchInput data-testid="searchbar" />);
    const searchInput = screen.getByTestId('searchbar');
    expect(searchInput.value).toBe('');
  });

  it('should update value', async () => {
    const handleChange = jest.fn();
    render(<SearchInput data-testid="searchbar" onChange={handleChange} />);
    const searchInput = screen.getByTestId('searchbar');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');
  });

  it('should display cancel button once input has a value', async () => {
    const handleChange = jest.fn();
    render(<SearchInput data-testid="searchbar" value="test" onChange={handleChange} id="searchbar" />);
    const clearButton = screen.getByTestId('cancel-button');
    expect(clearButton).toBeInTheDocument();
  });

  it('should clear the input when user presses clear button', async () => {
    const handleChange = jest.fn();
    render(<SearchInput data-testid="searchbar" value="test" onChange={handleChange} id="searchbar" />);
    const searchInput = screen.getByTestId('searchbar');
    const clearButton = screen.getByTestId('cancel-button');
    fireEvent.click(clearButton);
    fireEvent.change(searchInput, { target: { value: '' } });
    expect(searchInput.value).toBe('');
  });
});
