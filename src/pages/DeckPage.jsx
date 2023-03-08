import styled from 'styled-components';
import { useState } from 'react';
import { flashcards } from '../deck';
import Header from '../components/Header';
import Flashcard from '../components/Flashcard';
import Footer from '../components/Footer';

export default function DeckPage() {
  const [sequenceOfAnswers, setSequenceOfAnswers] = useState([]);

  return (
    <Container gameIsOver={sequenceOfAnswers.length === flashcards.length}>
      <Header />
      <FlashcardsContainer>
        {flashcards.map((flashcard, index) => (
          <Flashcard
            key={index}
            index={index}
            flashcard={flashcard}
            sequenceOfAnswers={sequenceOfAnswers}
            setSequenceOfAnswers={setSequenceOfAnswers}
          />
        ))}
      </FlashcardsContainer>
      <Footer sequenceOfAnswers={sequenceOfAnswers} flashcardsLength={flashcards.length} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 35px 25px ${({ gameIsOver }) => (gameIsOver ? '180px' : '80px')};
  background-color: #fb6b6b;
  min-height: 100vh;
  height: 100%;
  width: 100%;
`;

const FlashcardsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  gap: 25px;
  margin: 40px 0 25px;
`;
