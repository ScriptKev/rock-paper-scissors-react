import React from 'react';
import styled from 'styled-components';
import PxHeader from './components/PxHeader';
import PxWrapper from './components/PxWrapper';
import PxTable from './components/PxTable';

const AppStyled = styled.main`
  font-family: 'Barlow Semi Condensed';
  min-height: 100vh;
  padding: 2em;
  color: white;
  background: radial-gradient(circle, #1F3757 0%, #111f43 100%);
`

function App() {
  return (
    <AppStyled>
      <PxWrapper>
        <PxHeader />
        <PxTable />
      </PxWrapper>
    </AppStyled>
  );
}

export default App;
