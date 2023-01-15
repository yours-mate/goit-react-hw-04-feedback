import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <ul className={css.data_list}>
        <li className={css.data_list__item}>Good: {good}</li>
        <li className={css.data_list__item}>Neutral: {neutral}</li>
        <li className={css.data_list__item}>Bad: {bad}</li>
        <li className={css.data_list__item}>Total: {total}</li>
        <li className={css.data_list__item}>
          Positive feedback: {positivePercentage} %
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
