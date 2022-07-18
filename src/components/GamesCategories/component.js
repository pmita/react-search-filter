import PropTypes from 'prop-types';
// STYLES
import './style.scss';

function GamesCategories(props) {
  // STATE & VARIALBES
  const { onChange, options } = props;

  return (
    <label htmlFor="filterOptions">
      <select id="filterOptions" onChange={onChange}>
        {options.map((category) => (
          <option value={category} key={category}>{category}</option>
        ))}
      </select>
    </label>
  );
}

GamesCategories.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array
};

GamesCategories.defaultProps = {
  options: ['all']
};

export default GamesCategories;
