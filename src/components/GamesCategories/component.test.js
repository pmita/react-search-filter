import { fireEvent, render, screen } from '@testing-library/react';
import GamesCategories from './component';
import '@testing-library/jest-dom/extend-expect';

describe('GamesCategories component', () => {
  it('should render all options', () => {
    render(<GamesCategories options={['all', 'slot', 'roulette']} />);
    expect(screen.getAllByRole('option').length).toBe(3);
  });

  it('should allow user to change category', () => {
    const handleChange = jest.fn();
    render(<GamesCategories options={['all', 'slot', 'roulette']} value="all" onChange={handleChange} />);
    const selectInput = screen.getByTestId('select');
    fireEvent.change(selectInput, { target: { value: 'slot' } });
    expect(screen.getByText('slot')).toBeInTheDocument();
  });
});
