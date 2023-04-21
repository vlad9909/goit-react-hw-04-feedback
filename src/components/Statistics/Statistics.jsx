import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, goodPersentage }) => (
  <div className={css.stats_conteiner}>
    <h3 className={css.title}>Statistic</h3>
    <span className={css.grade}>Good: {good}</span>
    <span className={css.grade}>Neutral: {neutral}</span>
    <span className={css.grade}>Bad: {bad}</span>
    <span className={css.grade}>Total: {total()}</span>
    <span className={css.grade}>Positive feedback: {goodPersentage()}</span>
  </div>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  goodPersentage: PropTypes.number.isRequired,
};
