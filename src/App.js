import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import DeckPage from './components/DeckPage';

function App() {
  const [page, setPage] = useState('welcome');

  return (
    <Container>
      <GlobalStyle />
      {page === 'welcome' ? <WelcomePage setPage={setPage} /> : <DeckPage />}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fb6b6b;
  min-height: 100vh;
  padding: 35px 35px 70px;
  height: 100%;
`;
