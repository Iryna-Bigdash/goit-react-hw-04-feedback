import {
  StatisticsWraper,
  StatisticsText,
  StatisticsDataBox,
} from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <StatisticsWraper>
      <StatisticsText>
        Good: <StatisticsDataBox>{good}</StatisticsDataBox>
      </StatisticsText>
      <StatisticsText>
        Neutral: <StatisticsDataBox>{neutral}</StatisticsDataBox>
      </StatisticsText>
      <StatisticsText>
        Bad: <StatisticsDataBox>{bad}</StatisticsDataBox>
      </StatisticsText>
      <StatisticsText>
        Total: <StatisticsDataBox>{total}</StatisticsDataBox>
      </StatisticsText>
      <StatisticsText>
        Positive feedback:{' '}
        <StatisticsDataBox> {positivePercentage} %</StatisticsDataBox>
      </StatisticsText>
    </StatisticsWraper>
  );
}
