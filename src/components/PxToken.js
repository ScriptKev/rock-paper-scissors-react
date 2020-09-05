import React from 'react';
import styled from 'styled-components';

const PxTokenStyled = styled.div`
  width: 130px;
  height: 130px;
  border: 17px solid ${({color}) => color.base};
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0 5px 0 ${({color}) => color.border};
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:active {
    transform: scale(.9)
  }

  .box {
    box-shadow: 0 -5px 0 #bcc1d5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    align-self: stretch;
    border-radius: 50%
  }
`

const color = {
  paper: {
    base: '#516ef4',
    border: '#2543c3'
  },

  rock: {
    base: '#de3a5a',
    border: '#980e31'
  },
  
  scissors: {
    base: '#ecaB1e',
    border: '#c76c14'
  }
}

function PxToken({ name }) {
  return (
    <PxTokenStyled color={color[name]} >
      <div className="box">
        <img src={`./images/icon-${name}.svg`} alt={name} />
      </div>
    </PxTokenStyled>
  );
}

export default PxToken;
