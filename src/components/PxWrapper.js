import React from 'react'
import styled from 'styled-components';

const PxWrapperStyled = styled.div`
  max-width: 1024px;
  margin: auto;
`

function PxWrapper({ children }) {
  return (
    <PxWrapperStyled>
      { children }
    </PxWrapperStyled>
  )
}

export default PxWrapper;