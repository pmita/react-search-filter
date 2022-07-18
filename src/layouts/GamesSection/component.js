import { useState, useCallback } from 'react';
// HOOKS
import { useFetch } from '../../hooks/useFetch';
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
  const {
    data: games, showData: showGames, setShowData, isPending, error
  } = useFetch(url);
  const [searchInput, setSearchInput] = useState('');

  // EVENTS
  const onChange = useCallback((e) => {
    setSearchInput(e.target.value);
    const searchedGames = games.filter((game) => (
      game.gameName.toLowerCase().includes(e.target.value.toLowerCase())));
    setShowData(searchedGames);
  }, [games, setSearchInput, setShowData]);

  const onClick = useCallback(() => {
    setSearchInput('');
    setShowData(games);
  }, [games, setSearchInput, setShowData]);

  const handleFilter = useCallback((e) => {
    if (e.target.value === 'all') {
      setShowData(games);
    } else {
      const filteredGames = games.filter((game) => game.categories.includes(e.target.value));
      setShowData(filteredGames);
    }
  }, [games, setShowData]);

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
          options={categories}
        />
      </nav>
      <div className="games-section">
        {error && <p>{error}</p>}
        {isPending && <p>Loading...</p>}
        {showGames && (
        <GamesGrid games={showGames} fallback="https://via.placeholder.com/350x320" />
        )}
      </div>
    </>
  );
}

export default GamesSection;
