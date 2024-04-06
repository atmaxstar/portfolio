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
import styled from 'styled-components';
  

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const options = {
    layout: {
      padding: 40, // チャートの余白を設定
    },
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

const Container = styled.div`
    width: 25em;
    height: 25em;

    @media (max-width: 450px) {
        width: 17em;
        height: 17em;
    }
`

interface Props {
    data: ChartData<"radar", (number | null)[], unknown>;
}

const RaderChart = ({data}: Props) => {
  return (
        <Container>
            <Radar data={data} options={options}/>
        </Container>
  );
}

export default RaderChart
