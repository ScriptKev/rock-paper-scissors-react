import React from 'react';
import styled from 'styled-components';
import PxToken from './PxToken';

const PxTableStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`

function PxTable() {
  return (
    <PxTableStyled>
      <PxToken name="rock" />
      <PxToken name="scissors" />
      <PxToken name="paper" />
    </PxTableStyled>
  );
}

export default PxTable;
