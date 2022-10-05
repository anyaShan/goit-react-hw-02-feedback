import { Component } from 'react';
import { Container } from 'components/App.styled';
import { Section } from 'components/Section/Section';
import { FeedbackCard } from 'components/FeedbackCard/FeedbackCard';
import { StatisticsCard } from 'components/StatisticsCard/StatisticsCard';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackCard />
        </Section>

        <Section title="Statistics">
          <StatisticsCard />
        </Section>
      </Container>
    );
  }
}
