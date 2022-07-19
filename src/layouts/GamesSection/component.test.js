import { act, render, screen } from '@testing-library/react';
import GamesSection from './component';
import '@testing-library/jest-dom/extend-expect';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(
    [{
      gameName: 'Exclusive Live Roulette',
      slug: 'exclusive-live-roulette',
      gameThumbnail: 'https://cdn.21.co.uk/images/games/21-exclusive-live-roulette/21-exclusive-live-roulette-thumb-hi-res.jpg',
      categories: ['table', 'slot']
    }]
  )
}));

describe('GameSection component', () => {
  it('should load the items on mount', async () => {
    await act(async () => render(<GamesSection />));
    expect(screen.getByText('Exclusive Live Roulette')).toBeInTheDocument();
  });
});
