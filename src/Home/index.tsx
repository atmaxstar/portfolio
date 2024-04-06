import styled from 'styled-components'
import { RelativePaper } from '../Components/Paper'
import github_icon from '../assets/images/github_icon.png'
import linkedin_icon from '../assets/images/linkedin_icon.png'
import { GITHUB_URL, LINKEDIN_URL } from '../config'

const Role = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 10px;
    margin: 0;
    max-width: 70%;
    background-color: white;
    transform: translateY(-50%) translateX(1em);  
    border: 1px solid black;
    border-radius: 10px;

    font-size: 40px;
    font-family: 'Caveat', cursive;
`

const NameContainer = styled.div`
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Name = styled.div`
    font-size: 55px;
    font-family: 'Caveat', cursive;
    color: black;
    justify-self: start;
`

const SocialLinks = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1em;
    justify-self: end;
`

const Introduction = styled.div`
    font-size: 20px;
    font-family: 'Vollkorn', serif;
    color: black;
`

const Home = () => {
  return (
    <RelativePaper>
        <Role>
            {"FULL-STACK WEB DEVELOPER"}
        </Role>
        <NameContainer>
            <Name>
                {"Atsutoshi Honda"}
            </Name>
            <SocialLinks>
                
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                    <img width="30" src={github_icon} alt="github"/>
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                    <img width="30" src={linkedin_icon} alt="linkedin"/>
                </a>
            </SocialLinks>
        </NameContainer>
        <Introduction>
            {"Software engineering with a passion for developing software that solves people's problems"}
            <br/>
            {"Have 1.5 years experience in web development as an intern, dedicated to improving UX with an emphasis on system performance and intuitive usability."}
        </Introduction>
    </RelativePaper>
  )
}

export default Home
