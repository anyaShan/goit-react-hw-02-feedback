import { StatisticsList, StatisticsItem } from './StatisticsCard.styled';

export const StatisticsCard = () => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <p>Good: </p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Neutral: </p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Bad: </p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Total: </p>
      </StatisticsItem>
      <StatisticsItem>
        <p>Positive fedback: </p>
      </StatisticsItem>
    </StatisticsList>
  );
};
