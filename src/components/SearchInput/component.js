import PropTypes from 'prop-types';
// STYLES
import './style.scss';

function SearchInput(props) {
  // STATE & VARIABLES
  const {
    value, onChange, onClick, formId, ...inputProps
  } = props;
  return (
    <div className="search-input">
      <label htmlFor={formId}>
        <input
          onChange={onChange}
          value={value}
          id={formId}
          {...inputProps}
        />
      </label>
      {value && <button className="btn primary" type="submit" onClick={onClick}>Clear</button>}
    </div>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  formId: PropTypes.string
};

SearchInput.defaultProps = {
  value: '',
  formId: ''
};

export default SearchInput;
