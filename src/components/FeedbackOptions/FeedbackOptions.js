import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export function FeedbackOptions({ options, handleIncrement }) {
  return (
    <div className={css.set}>
      {options.map(option => (
        <button
          className={css.btn}
          type="button"
          key={option}
          id={option}
          onClick={() => {
            handleIncrement(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  handleIncrement: PropTypes.func.isRequired,
};
