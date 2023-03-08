import styled from 'styled-components';
import partyEmoji from '../assets/partying-face.svg';
import sadEmoji from '../assets/sad-but-relieved-face.svg';
import closeIcon from '../assets/close-icon.svg';

export default function Footer(props) {
  const { sequenceOfAnswers, flashcardsLength } = props;

  return (
    <Container>
      {sequenceOfAnswers.length === flashcardsLength && (
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
        {sequenceOfAnswers.length}/{flashcardsLength} CONCLUÍDOS
        <div>
          {sequenceOfAnswers.map((icon, index) => (
            <img key={index} src={icon} alt='Icon' />
          ))}
        </div>
      </SequenceOfAnswersContainer>
    </Container>
  );
}

const Container = styled.div`
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
