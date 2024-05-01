const StatisticCounterCell = ({
  dataCount,
  desc,
}: {
  dataCount: string;
  desc: string;
}) => {
  return (
    <div className="cell">
      <div className="counter-value number-count" data-count={dataCount}>
        1
      </div>
      <p className="counter-info">{desc}</p>
    </div>
  );
};

export default StatisticCounterCell;
