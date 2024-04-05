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
    scales: {
        r: {
            min: 0,
            max: 5,
            stepSize: 1,
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
