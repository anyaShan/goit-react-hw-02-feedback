import {
  StatisticsWrapper,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
} from './StatisticsCard.styled';

export const StatisticsCard = () => {
  return (
    <StatisticsWrapper>
      <StatisticsTitle>Statistics</StatisticsTitle>
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
      </StatisticsList>
    </StatisticsWrapper>
  );
};
