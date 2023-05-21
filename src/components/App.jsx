import React, { Component } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

import Section from './Section/Section';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateStatistice = option => {
    return this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;

    const positiveRewev = good + neutral;
    const totalRewev = good + neutral + bad;
    const persenOfPositiveRewev = Math.floor(
      (positiveRewev / totalRewev) * 100
    );

    return totalRewev !== 0 ? persenOfPositiveRewev : '0';
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback" children={FeedbackOptions}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.updateStatistice}
          />
        </Section>

        <Section title="Statistics">
          {this.state.good + this.state.neutral + this.state.bad > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
