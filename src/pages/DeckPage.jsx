import { useState } from 'react';
import { flashcards } from '../deck';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import partyEmoji from '../assets/partying-face.svg';
import sadEmoji from '../assets/sad-but-relieved-face.svg';
import closeIcon from '../assets/close-icon.svg';
import Flashcard from '../components/Flashcard';

export default function DeckPage() {
  const [sequenceOfAnswers, setSequenceOfAnswers] = useState([]);

  return (
    <Container gameIsOver={sequenceOfAnswers.length === flashcards.length}>
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
            sequenceOfAnswers={sequenceOfAnswers}
            setSequenceOfAnswers={setSequenceOfAnswers}
          />
        ))}
      </FlashcardsContainer>
      <Footer>
        {sequenceOfAnswers.length === flashcards.length && (
          <>
            {!sequenceOfAnswers.includes(closeIcon) ? (
              <ResultTextContainer>
                <span>
                  <img src={partyEmoji} /> Parabéns!
                </span>
                <span>Você não esqueceu de nenhum flashcard!</span>
              </ResultTextContainer>
            ) : (
              <ResultTextContainer>
                <span>
                  <img src={sadEmoji} /> Putz...
                </span>
                <span>Ainda faltam alguns... Mas não desanime!</span>
              </ResultTextContainer>
            )}
          </>
        )}
        <SequenceOfAnswersContainer>
          {sequenceOfAnswers.length}/8 CONCLUÍDOS
          <div>
            {sequenceOfAnswers.map((icon, index) => (
              <img key={index} src={icon} alt='Icon' />
            ))}
          </div>
        </SequenceOfAnswersContainer>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 35px 35px ${({ gameIsOver }) => (gameIsOver ? '180px' : '80px')};
  background-color: #fb6b6b;
  min-height: 100vh;
  height: 100%;
  width: 100%;
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
    height: 100%;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  min-height: 70px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 18px;
  font-weight: 400;

  img {
    width: 23px;
  }

  span:first-child {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 700;
  }

  span:last-child {
    font-weight: 400;
  }
`;

const SequenceOfAnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-weight: 400;

  div {
    display: flex;
    gap: 5px;
  }
`;

const ResultTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 225px;
  text-align: center;
`;
