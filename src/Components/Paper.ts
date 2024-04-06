import styled from "styled-components";

export const Paper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    background: white;
    display: flex;
    justify-content: center;
    border: 2px solid black;
    border-radius: 20px;
`

export const RelativePaper = styled.div`
    width: 80%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    margin: auto;
    background: white;
    border: 2px solid black;
    border-radius: 20px;
    
    @media (max-width: 450px) {
        width: 60%;
    }
`