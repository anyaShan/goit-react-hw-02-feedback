import { Container } from 'components/App.styled';
import { FeedbackCard } from 'components/FeedbackCard/FeedbackCard';

export const App = () => {
  return (
    <Container>
      <FeedbackCard />

      <h2>Statistics</h2>
      <ul>
        <li>
          <p>Good: </p>
        </li>
        <li>
          <p>Neutral: </p>
        </li>
        <li>
          <p>Bad: </p>
        </li>
      </ul>
    </Container>
  );
};
