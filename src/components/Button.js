import React from 'react';
import styled from 'styled-components';


export default function Button({content}) {
  return <StyledButton>{content}</StyledButton>
}

const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 150%;
  height: 2.5rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  line-height: 3rem;
  margin-left: -9px;
`;
