import styled from 'styled-components'
import { RelativePaper } from '../Components/Paper'
import chatapp from "../assets/images/chatapp.png"
import { MYCHATAPP_GITHUB_URL, MYCHATAPP_LINK_URL } from '../config/project_url'

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

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const ProjectContent = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 450px) {
        width: 70%;
      }
`

const ProjectName = styled.div`
    font-size: 3em;
    font-family: 'Vollkorn', serif;
    color: black;
    
    @media (max-width: 450px) {
        font-size: 2em;
    }
`

const ProjectDescription = styled.div`
    font-size: 20px;
    color: black;
`

const TechTitle = styled.div`
    font-size: 40px;
    font-family: 'Vollkorn', serif;
    color: black;
`

const TechContent = styled.div`
    font-size: 20px;
    color: black;
`

const LinkContent = styled.div`
    padding: 10px;
    font-size: 17px;
    color: black;
`

const Projects = () => {
  return (
    <RelativePaper>
        <Title>
            {"Projects"}
        </Title>

        <Content>
            
        <img style={{borderRadius: 20}} src={chatapp} alt="chatapp" width="90%" height="auto"/>
        <ProjectContent>
            <ProjectName>
                {"My Chat App"}
            </ProjectName>
            <ProjectDescription>
                {"This is the app for real-time chatting."}
                <br/>
                {"It allow multiple users to communicate in a group."}
            </ProjectDescription>

            <TechTitle>{"Techs"}</TechTitle>
            <TechContent>
                {"・ASP.NET"}
                <br/>
                {"・Next.js"}
                <br/>
                {"・Material UI"}
                <br/>
                {"・SignalR"}
            </TechContent>

            <LinkContent>
                {"Github:"}<a href={MYCHATAPP_GITHUB_URL} target="_blank" rel="noopener noreferrer">{"Link"}</a>
                <br/>
                {"Website:"}<a href={MYCHATAPP_LINK_URL} target="_blank" rel="noopener noreferrer">{"Link"}</a>
            </LinkContent>
        </ProjectContent>

        </Content>

    </RelativePaper>
  )
}

export default Projects
