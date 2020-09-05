import React from 'react';
import styled from 'styled-components';
import PxScore from './PxScore';

const HeaderStyled = styled.header`
  color: white;
  padding: 12px 12px 12px 23px;
  border: 3px solid rgba(255,255,255, .29);
  border-radius: .5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }
`

function PxHeader() {
  return (
    <HeaderStyled>
      <h1>Rock <br/> Paper <br/> Scissor</h1>
      <PxScore />
    </HeaderStyled>
  )
}

export default PxHeader;