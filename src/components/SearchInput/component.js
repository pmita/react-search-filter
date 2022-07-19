import PropTypes from 'prop-types';
// STYLES
import './style.scss';

function SearchInput(props) {
  // STATE & VARIABLES
  const {
    value, onClick, formId, ...inputProps
  } = props;
  return (
    <div className="search-input">
      <label htmlFor={formId}>
        <input
          id={formId}
          {...inputProps}
        />
      </label>
      {value && (
        <button
          className="btn primary"
          type="submit"
          onClick={onClick}
          data-testid="cancel-button"
        >
          Clear
        </button>
      )}
    </div>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  formId: PropTypes.string
};

SearchInput.defaultProps = {
  value: '',
  onClick: () => {},
  formId: ''
};

export default SearchInput;
