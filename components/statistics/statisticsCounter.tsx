import StatisticCounterCell from "./statisticCounterCell";
import { counterData } from "@/data/pageData";

const StatisticsCounter = () => {
  return (
    <div id="counter">
      {counterData.map((value, index) => (
        <StatisticCounterCell
          key={index}
          dataCount={value.dataCount}
          desc={value.desc}
        />
      ))}
    </div>
  );
};

export default StatisticsCounter;
