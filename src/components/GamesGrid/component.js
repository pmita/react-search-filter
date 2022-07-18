/* eslint-disable no-return-assign */
import PropTypes from 'prop-types';
// STYLES
import './style.scss';

function GamesGrid({ games, fallback }) {
  return (
    <div className="games-grid">
      {games.map((game, index) => (
        /* Some of the slugs were encountered twice and could not use that as a unique key prop
         Best practise would be the backend to generate a unique id for us but for now
         I've combined slug and index in order for me to not introduce a uuid package */
        // eslint-disable-next-line react/no-array-index-key
        <div className="game-card" key={`${game.slug}_${index}`}>
          <img
            src={game.gameThumbnail}
            alt={game.slug}
            onError={(e) => (e.target.src = fallback)}
          />
          <h4>{game.gameName}</h4>
        </div>
      ))}
    </div>
  );
}

GamesGrid.propTypes = {
  games: PropTypes.array.isRequired,
  fallback: PropTypes.string.isRequired
};

export default GamesGrid;
