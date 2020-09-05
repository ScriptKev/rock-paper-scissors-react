import React from 'react';
import styled from 'styled-components';

const PxScoreStyled = styled.div`
  background: white;
  text-align: center;
  padding: 10px 0;
  border-radius: 8px;
  width: 80px;

  small {
    color: #2A45C2;
    text-transform: upperCase;
    font-size: 10px;
    font-weight: bold;
  }

  p {
    color: #565468;
    font-size: 40px;
    margin: 0;
    font-weight: 700;
  }
`

function PxScore() {
  return (
    <PxScoreStyled>
      <small>Score</small>
      <p>12</p>
    </PxScoreStyled>
  )
}

export default PxScore;