import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import logo from './assets/logo.png';
import { useState } from 'react';

function App() {
  const [cardsDone, setCardsDone] = useState(0);

  return (
    <Container>
      <GlobalStyle />
      <Header>
        <img src={logo} alt='Logo' />
        Zap Recall
      </Header>
      {/* <Flashcard /> */}
      <Footer>{cardsDone}/8 CONCLUÍDOS</Footer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fb6b6b;
  height: 100vh;
  padding: 40px;
`;

const Header = styled.div`
  display: flex;
  gap: 20px;
  color: #ffffff;
  font-size: 36px;
  font-family: Righteous;
  align-items: center;
  height: 60px;

  img {
    width: 60px;
    height: 60px;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  height: 70px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 18px;
  font-weight: 400;
`;
