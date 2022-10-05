import { Component } from 'react';
import { Container } from 'components/App.styled';
import { Section } from 'components/Section/Section';
import { FeedbackCard } from 'components/FeedbackCard/FeedbackCard';
import { StatisticsCard } from 'components/StatisticsCard/StatisticsCard';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateValue = event => {
    const key = event.currentTarget.name;
    this.setState(prevState => ({
      [key]: (prevState[key] += 1),
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackCard updateValue={this.updateValue} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <StatisticsCard
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positiveFedback={
                this.countPositiveFeedbackPercentage()
                  ? this.countPositiveFeedbackPercentage()
                  : 0
              }
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
