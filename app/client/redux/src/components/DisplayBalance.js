import { Statistic, StatisticValue } from 'semantic-ui-react';

function DisplayBalance({ title, value, color = 'black', size = 'tiny' }) {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ textAlign: 'left' }}>{title}</Statistic.Label>
      <StatisticValue>{value}</StatisticValue>
    </Statistic>
  );
}

export default DisplayBalance;
