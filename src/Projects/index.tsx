import styled from 'styled-components'
import { RelativePaper } from '../Components/Paper'
import Project from './Project'
import { PROJECTS } from './Projects'

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

const Projects = () => {
  return (
    <RelativePaper>
        <Title>
            {"Projects"}
        </Title>

        {PROJECTS.map(project => 
            <Project 
                name={project.name} 
                description={project.description} 
                techContents={project.techContents} 
                link_github={project.link_github} 
                link_site={project.link_site} 
                img_src={project.img_src}
            />
        )}

    </RelativePaper>
  )
}

export default Projects
