import styled from 'styled-components';
import logo from '../assets/logo.png';
import { useState } from 'react';
import Flashcard from '../components/Flashcard';
import { flashcards } from '../deck';

export default function DeckPage() {
  const [cardsDone, setCardsDone] = useState(0);

  return (
    <Container>
      <Header>
        <img src={logo} alt='Logo' />
        ZapRecall
      </Header>
      <FlashcardsContainer>
        {flashcards.map((flashcard, index) => (
          <Flashcard
            key={index}
            index={index}
            flashcard={flashcard}
            cardsDone={cardsDone}
            setCardsDone={setCardsDone}
          />
        ))}
      </FlashcardsContainer>
      <Footer>{cardsDone}/8 CONCLUÍDOS</Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FlashcardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 40px 0 25px;
`;

const Header = styled.div`
  display: flex;
  gap: 20px;
  color: #ffffff;
  font-size: 36px;
  font-family: Righteous;
  font-weight: 400;
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
