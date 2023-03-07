import React, { useState } from 'react';
import styled from 'styled-components';
import playButton from '../assets/play-button.png';
import flipButton from '../assets/flip-arrow.png';
import correctIcon from '../assets/correct-icon.png';
import almostIcon from '../assets/almost-icon.png';
import wrongIcon from '../assets/wrong-icon.png';

export default function Flashcard(props) {
  const { index, flashcard, cardsDone, setCardsDone } = props;
  const [stage, setStage] = useState('closed');
  const [icon, setIcon] = useState();

  function openFlashcard() {
    setStage('opened');
  }

  function flipFlashcard() {
    setStage('flipped');
  }

  function answerFlashcard(icon) {
    setStage('done');
    setIcon(icon);
    setCardsDone(cardsDone + 1);
  }

  if (stage === 'closed') {
    return (
      <ClosedContainer stage={stage}>
        Pergunta {index + 1}
        <img src={playButton} onClick={openFlashcard} alt='Play button' />
      </ClosedContainer>
    );
  }
  if (stage === 'opened') {
    return (
      <OpenedContainer>
        {flashcard.question}
        <img src={flipButton} onClick={flipFlashcard} alt='Flip button' />
      </OpenedContainer>
    );
  }
  if (stage === 'flipped') {
    return (
      <OpenedContainer stage={stage}>
        {flashcard.answer}
        <ButtonsContainer>
          <Button color={'#ff3030'} onClick={() => answerFlashcard(wrongIcon)}>
            Não lembrei
          </Button>
          <Button color={'#ff922e'} onClick={() => answerFlashcard(almostIcon)}>
            Quase não lembrei
          </Button>
          <Button color={'#2fbe34'} onClick={() => answerFlashcard(correctIcon)}>
            Zap!
          </Button>
        </ButtonsContainer>
      </OpenedContainer>
    );
  }

  if (stage === 'done') {
    return (
      <ClosedContainer stage={stage} icon={icon}>
        Pergunta {index + 1}
        <img src={icon} alt='Flashcard answer icon' />
      </ClosedContainer>
    );
  }
}

const ClosedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 65px;
  width: 300px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px #00000026;
  color: ${({ stage, icon }) =>
    stage === 'closed'
      ? '#000000'
      : icon === correctIcon
      ? '#2FBE34'
      : icon === almostIcon
      ? '#FF922E'
      : '#FF3030'};
  text-decoration: ${({ stage }) => (stage === 'done' ? 'line-through' : 'none')};

  img {
    cursor: pointer;
  }
`;

const OpenedContainer = styled.div`
  display: flex;
  flex-direction: ${({ stage }) => (stage === 'flipped' ? 'column' : 'row')};
  justify-content: space-between;
  padding: 15px;
  min-height: 130px;
  width: 300px;
  background-color: #ffffd4;
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px #00000026;
  font-size: 18px;
  font-weight: 400;
  gap: 10px;

  img {
    align-self: flex-end;
    cursor: pointer;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 85px;
  height: 40px;
  padding: 8px;
  background-color: ${({ color }) => color};
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  border-radius: 5px;
  cursor: pointer;
`;
