import React from 'react'
import styled from 'styled-components'


const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
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
    
    @media (max-width: 600px) {
        font-size: 2em;
    }
`

const ProjectDescription = styled.div`
    font-size: 20px;
    color: black;

    @media (max-width: 600px) {
        font-size: 15px;
    }
`

const TechTitle = styled.div`
    font-size: 40px;
    font-family: 'Vollkorn', serif;
    color: black;

    @media (max-width: 600px) {
        font-size: 25px;
    }
`

const TechContent = styled.div`
    font-size: 20px;
    color: black;

    @media (max-width: 600px) {
        font-size: 15px;
    }
`

const LinkContent = styled.div`
    padding: 10px;
    font-size: 17px;
    color: black;
`

interface Props {
    name: string;
    description: string[];
    techContents: string[];
    link_github: string;
    link_site: string;
    img_src: string;
}

const Project = ({name, description, techContents, link_github, link_site, img_src}: Props) => {
  return (
    <Content>
        
    <img style={{borderRadius: 20, border: 'solid 1px #777777'}} src={img_src} alt={name} width="90%" height="auto"/>
    <ProjectContent>
        <ProjectName>
            {name}
        </ProjectName>
        <ProjectDescription>
            {description.map(des => <>
                {des}
                <br/>
            </>)}
        </ProjectDescription>

        <TechTitle>{"Techs"}</TechTitle>
        <TechContent>
            {techContents.map(content => <>
                {`・${content}`}
                <br/>
            </>)}
        </TechContent>

        <LinkContent>
            {"Github:"}<a href={link_github} target="_blank" rel="noopener noreferrer">{"Link"}</a>
            <br/>
            {"Website:"}<a href={link_site} target="_blank" rel="noopener noreferrer">{"Link"}</a>
        </LinkContent>
    </ProjectContent>

    </Content>

  )
}

export default Project
