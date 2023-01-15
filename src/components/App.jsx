import { useState, useMemo } from 'react';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleIncrement(type) {
    switch (type) {
      case 'good':
        console.log(good);
        return setGood(good => good + 1);
      case 'neutral':
        return setNeutral(neutral => neutral + 1);
      case 'bad':
        return setBad(bad => bad + 1);
      default:
        throw new Error('Something is wrong');
    }
  }

  const total = useMemo(() => {
    return good + neutral + bad;
  }, [good, neutral, bad]);
  const positivePercentage = useMemo(() => {
    return Math.round((good / total) * 100);
  }, [good, total]);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          handleIncrement={handleIncrement}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
}
