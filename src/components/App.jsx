import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function Feedback(){
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);

  const updateStatistice = option => {
    if (option === 'good') {
      setGood( prevState => prevState + 1);
    } else if (option === 'neutral') {
      setNeutral(prevState => prevState + 1);
    } else if (option === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
        return good + neutral + bad;
      };
    
   const countPositiveFeedbackPercentage = () => {
        const positiveRewev = good + neutral;
        const totalRewev = good + neutral + bad;
        const persenOfPositiveRewev = Math.floor(
          (positiveRewev / totalRewev) * 100
        );
        return totalRewev !== 0 ? persenOfPositiveRewev : '0';
      }

return (
        <>
          <Section title="Please leave feedback" children={FeedbackOptions}>
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={updateStatistice}
            />
          </Section>
  
          <Section title="Statistics">
            {good + neutral + bad > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              ></Statistics>
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </>
      );
}