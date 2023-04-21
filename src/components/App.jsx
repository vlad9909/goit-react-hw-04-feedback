import React from 'react';
import css from './App.module.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Sectoin';
import Notification from './Notification/Notification';
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = button => {
    this.setState(prevState => ({
      [button]: prevState[button] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return `${Math.round((good / this.countTotalFeedback()) * 100)}%`;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const options = Object.keys(this.state);
    return (
      <div className={css.feedback_container}>
        <div className={css.container}>
          <Section title={'Please leave feedback'} />
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.updateFeedback}
          />
          {totalFeedback === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              goodPersentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
