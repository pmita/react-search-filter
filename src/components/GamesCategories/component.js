import PropTypes from 'prop-types';
// STYLES
import './style.scss';

function GamesCategories(props) {
  // STATE & VARIALBES
  const { onChange, value, options } = props;

  return (
    <label htmlFor="filterOptions">
      <select id="filterOptions" onChange={onChange} data-testid="select" value={value}>
        {options.map((category) => (
          <option value={category} key={category}>{category}</option>
        ))}
      </select>
    </label>
  );
}

GamesCategories.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  options: PropTypes.array
};

GamesCategories.defaultProps = {
  onChange: () => {},
  value: '',
  options: ['all']
};

export default GamesCategories;
