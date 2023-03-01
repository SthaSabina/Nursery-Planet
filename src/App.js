import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  return (
   <MainContainer>
    <WelcomeText>Welcome</WelcomeText>
    <InputContainer>
    <Input type="text" placeholder="Email"/>
    <Input type="password" placeholder="Password"/>
    </InputContainer>
    <RememberMeContainer>
    <input type="checkbox" id="remembermecheckbox" />
    <label>Remember me</label>
    </RememberMeContainer>
    <ButtonContainer>
    <Button content='Log In' />
    </ButtonContainer>
    <Forgot>forgot password</Forgot>
    <LoginWith>or Login With</LoginWith>
    <HorizontalRule/>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;

`;

const WelcomeText = styled.h2`
margin: 5rem 0 4re, 0;
color: black;
margin-top: 5px;
letter-spacing: 3px;
`;

const Forgot = styled.p`
color: black;
font-size: 10px;
margin-top: -20px;
margin-bottom: 8px;
letter-spacing: 1.5px;
`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 20%;
width: 100%
`;

const ButtonContainer = styled.div`
margin: 1rem 0 2rem 0;
width: 10%
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`;


const RememberMeContainer = styled.div`
  display: flex;
  align-items: left-center;
  justify-content: flex-start;
  color: black;
  margin-top: 1rem;
  margin-left: -5rem;
  label {
    margin-left: 0.5rem;
    cursor: pointer;
    font-size: 10px;
    letter-spacing: 1.5px;
  }

  input[type="checkbox"] {
    order: -1;
    margin-right: 0rem;
  }
`;


const LoginWith = styled.h5`
cursor: pointer;
color: black;
letter-spacing: 2px;
`;

const HorizontalRule = styled.hr`
width: 90%;
height: 0.3rem;
border-radius: 0.8rem;
border: none;
margin: 1.5rem 0 1rem 0;
background: linear-gradient(to right, #14163c 0%, #03217b 79%);
backdrop-filter: blur(25px);
`;
export default App;
