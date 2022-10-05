import { StatisticsList, StatisticsItem } from './StatisticsCard.styled';

export const StatisticsCard = ({
  good,
  neutral,
  bad,
  total,
  positiveFedback,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <p>Good: {good}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Neutral: {neutral}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Bad: {bad}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Total: {total}</p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Positive feedback: {positiveFedback}%</p>
      </StatisticsItem>
    </StatisticsList>
  );
};
