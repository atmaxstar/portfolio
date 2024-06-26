import { RelativePaper } from '../Components/Paper'
import styled from 'styled-components'
import RaderChart from './RaderChart'
import { data_framework, data_language, data_tools } from './data'

const Title = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 10px;
    margin: 0;
    background-color: white;
    transform: translateY(-50%) translateX(1em);  
    border: 1px solid black;
    border-radius: 10px;

    font-size: 40px;
    font-family: 'Caveat', cursive;
`

const ChartLine = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* チャートの列を自動的に調整 */
    justify-items: center;
  
`
  
const Skills = () => {
  return (
    <RelativePaper>
        <Title>
            {"Skills"}
        </Title>

        <ChartLine>
            <RaderChart data={data_language}/>
            <RaderChart data={data_framework}/>
            <RaderChart data={data_tools}/>
        </ChartLine>
    </RelativePaper>
  )
}

export default Skills
