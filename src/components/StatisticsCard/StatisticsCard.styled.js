import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  width: 400px;
  padding: 25px;
  background-color: rgb(243, 240, 240);
  border-radius: 5px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
`;

export const StatisticsTitle = styled.h2`
  margin-bottom: 25px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StatisticsItem = styled.li`
  padding: 5px;
  border-radius: 5px;
  color: white;

  background-color: rgb(197, 194, 194);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

  font-weight: 600;
  font-size: 12px;
  line-height: 1.9;
  letter-spacing: 0.06em;
`;
