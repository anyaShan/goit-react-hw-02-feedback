import { Container } from 'components/App.styled';
import { FeedbackCard } from 'components/FeedbackCard/FeedbackCard';
import { StatisticsCard } from 'components/StatisticsCard/StatisticsCard';

export const App = () => {
  return (
    <Container>
      <FeedbackCard />

      <StatisticsCard />
    </Container>
  );
};
