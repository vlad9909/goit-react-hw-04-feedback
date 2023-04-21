import React, { useState } from 'react';
import css from './App.module.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Sectoin';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const updateFeedback = button => {
    switch (button) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        console.log('');
    }
  };

  const totalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.round(
    (good / totalFeedback) * 100
  );

  return (
    <div className={css.feedback_container}>
      <div className={css.container}>
        <Section title={'Please leave feedback'} />
        <FeedbackOptions options={options} onLeaveFeedback={updateFeedback} />
        {totalFeedback === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            goodPersentage={countPositiveFeedbackPercentage}
          />
        )}
      </div>
    </div>
  );
}
