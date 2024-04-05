import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '../config';


const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
`

const Title = styled.div`
    font-size: 55px;
    font-family: 'Vollkorn', serif;
    color: black;
`

const InputContainer = styled.div`
    position: relative;
    width: 50%;
    margin: 10px 3%;
    &:after {
        display: block;
        width: 100%;
        height: 4px;
        margin-top: -1px;
        content: '';
        border-width: 0 1px 1px 1px;
        border-style: solid;
        border-color: black;
    }
`

const StyledInput = styled.input`
    font: 15px/24px sans-serif;
    box-sizing: border-box;
    width: 100%;
    padding: 0.3em;
    padding-left: 40px;
    letter-spacing: 1px;
    border: 0;
    background: inherit;
    &:focus {
        outline: none;
        &:after {
            outline: none;
        }
    }
`

const StyledIcon = styled.i`
    position: absolute;
    top: 0;
    left: 0;
    padding: 9px 5px;
    transition: 0.3s;
    color: #aaaaaa;
`

const StyledComment = styled.textarea`
    font: 15px/24px sans-serif;
    box-sizing: border-box;
    width: 50%;
    height: 200px;
    margin: 10px 3%;
    padding: 0.3em;
    letter-spacing: 1px;
    background: inherit;
    resize: none;
    &:focus {
        outline: none;
        &:after {
            outline: none;
        }
    }
`

const StyledButton = styled.button`
    width: 50%;
    margin: 25px;
    padding: 7px;
    font-size: 20px;
    font-weight: bold;
    border: 2px solid #27acd9;
    color: #fff;
    background: #27acd9;
    border-radius: 30px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
        color: #27acd9;
        background: #fff;
    }
`

const Contact = () => {
    
    const processing = useRef(false)

    const form = useRef<null|HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {

        if(processing.current) return

        processing.current = true
    
        emailjs
            .sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                form.current as HTMLFormElement,
                PUBLIC_KEY
            )
            .then(
            (result) => {
                alert('message sent successfully!');
                (form.current as HTMLFormElement).reset();
                console.log(result.text);
            },
            (error) => {
                alert('Error -Unable to send message-');
                console.log(error.text);
            }
            );
            
        processing.current = false
        e.preventDefault();
    };

  return (
    <Container ref={form} onSubmit={sendEmail}>
        <Title>{"Contact me"}</Title>
        <InputContainer>
            <StyledInput name='from_name' type="text" placeholder="Name" required />
            <StyledIcon className="fa fa-user fa-lg fa-fw" aria-hidden="true"/>
        </InputContainer>
        {/* {errors.error_n && <ErrorMessage>{"This field is empty."}</ErrorMessage>} */}
        
        <InputContainer>
            <StyledInput name='email' type="email" placeholder="E-mail"required />
            <StyledIcon className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"/>
        </InputContainer>
        {/* {errors.error_e && <ErrorMessage>{"This field is empty."}</ErrorMessage>} */}
        
        <StyledComment name='message' placeholder='Comment' required />
        {/* {errors.error_c && <ErrorMessage>{"This field is empty."}</ErrorMessage>} */}

        <StyledButton>{"Submit"}</StyledButton>

    </Container>
  )
}

export default Contact
