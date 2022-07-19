import { useState, useCallback, useEffect } from 'react';
// COMPONENTS
import GamesGrid from '../../components/GamesGrid/component';
import SearchInput from '../../components/SearchInput/component';
import GamesCategories from '../../components/GamesCategories';
// ASSETS
import { categories } from '../../assets/util';
// STYLES
import './style.scss';

function GamesSection() {
  // STATE & VARIABLES
  const url = 'https://run.mocky.io/v3/0f89d26e-25e6-4fdd-ac35-a847ad4352c6';
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [games, setGames] = useState(null);
  const [showGames, setShowGames] = useState(null);

  // EVENTS
  const onChange = useCallback((e) => {
    setSearchInput(e.target.value);
    const searchedGames = games.filter((game) => (
      game.gameName.toLowerCase().includes(e.target.value.toLowerCase())));
    setShowGames(searchedGames);
  }, [games, setSearchInput, setShowGames]);

  const onClick = useCallback(() => {
    setSearchInput('');
    setShowGames(games);
  }, [games, setSearchInput, setShowGames]);

  const handleFilter = useCallback((e) => {
    setSelectedCategory(e.target.value);
    if (e.target.value === 'all') {
      setShowGames(games);
    } else {
      const filteredGames = games.filter((game) => game.categories.includes(e.target.value));
      setShowGames(filteredGames);
    }
  }, [games, setShowGames]);

  // useEffect
  useEffect(() => {
    const controller = new AbortController();

    // We define the function within useEffect to avoid memoisation
    const fetchItems = async () => {
      setIsPending(false);

      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = await response.json();
        setGames(json);
        setShowGames(json);
        setIsPending(false);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError('Oopps, could not fetch items right now');
      }
    };

    fetchItems();

    // ensure we clean up any request in case our component unmounts during fetching
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <nav className="games-navbar">
        <SearchInput
          type="text"
          placeholder="Search here..."
          onChange={onChange}
          onClick={onClick}
          value={searchInput}
          formId="searchbar-input"
        />
        <GamesCategories
          onChange={handleFilter}
          value={selectedCategory}
          options={categories}
        />
      </nav>
      <div className="games-section">
        {error && <p>{error}</p>}
        {isPending && <p>Loading...</p>}
        {showGames && <GamesGrid games={showGames} fallback="https://via.placeholder.com/350x320" />}
      </div>
    </>
  );
}

export default GamesSection;
