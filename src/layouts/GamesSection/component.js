// HOOKS
import { useFetch } from '../../hooks/useFetch';
// COMPONENTS
import GamesGrid from '../../components/GamesGrid/component';
// STYLES
import './style.scss';

function GamesSection() {
  // STATE & VARIABLES
  const url = 'https://run.mocky.io/v3/0f89d26e-25e6-4fdd-ac35-a847ad4352c6';
  const {
    showData: showGames, isPending, error
  } = useFetch(url);

  return (
    <div className="games-section">
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {showGames && (
        <GamesGrid games={showGames} fallback="https://via.placeholder.com/350x320" />
      )}
    </div>
  );
}

export default GamesSection;
