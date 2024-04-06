import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    ChartData,
  } from 'chart.js';
  import { Radar } from 'react-chartjs-2';
  

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const options = {
    scale: {
      ticks: {
        stepSize: 1, // 目盛りの間隔を1に設定
      },
    },
    scales: {
        r: {
            min: 0,
            max: 5,
        },
    },
};

interface Props {
    data: ChartData<"radar", (number | null)[], unknown>;
}

const RaderChart = ({data}: Props) => {
  return <Radar data={data} options={options}/>;
}

export default RaderChart
