import React, { Component } from 'react'
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions'
import Section from './section/Section'
import Statistics from './statistics/Statistics'


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  updateStatistics = (feedBack) => {
    this.setState(prevState => ({ [feedBack]: prevState[feedBack] + 1 }));
  }
  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100)
  }
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  render() {
    const { good, neutral, bad } = this.state
    return (
      <>
        <Section tittle="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.updateStatistics} />
        </Section>
        <Section tittle="Statistics">
          {this.countTotalFeedback() ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            total={this.countTotalFeedback()} /> :
            <p>No feedback given</p>
          }
        </Section>
      </>
    )
  }
}

