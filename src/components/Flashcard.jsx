import { useState } from 'react';
import styled from 'styled-components';
import playIcon from '../assets/play-icon.svg';
import flipIcon from '../assets/flip-icon.svg';
import closeIcon from '../assets/close-icon.svg';
import helpIcon from '../assets/help-icon.svg';
import checkIcon from '../assets/check-icon.svg';

export default function Flashcard(props) {
  const { index, flashcard, sequenceOfAnswers, setSequenceOfAnswers } = props;
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
    setSequenceOfAnswers([...sequenceOfAnswers, icon]);
  }

  if (stage === 'closed') {
    return (
      <ClosedContainer stage={stage}>
        Pergunta {index + 1}
        <PlayIcon>
          <img src={playIcon} onClick={openFlashcard} />
        </PlayIcon>
      </ClosedContainer>
    );
  }
  if (stage === 'opened') {
    return (
      <OpenedContainer>
        {flashcard.question}
        <FlipIcon>
          <img src={flipIcon} onClick={flipFlashcard} />
        </FlipIcon>
      </OpenedContainer>
    );
  }
  if (stage === 'flipped') {
    return (
      <OpenedContainer stage={stage}>
        {flashcard.answer}
        <ButtonsContainer>
          <Button color={'#ff3030'} onClick={() => answerFlashcard(closeIcon)}>
            Não lembrei
          </Button>
          <Button color={'#ff922e'} onClick={() => answerFlashcard(helpIcon)}>
            Quase não lembrei
          </Button>
          <Button color={'#2fbe34'} onClick={() => answerFlashcard(checkIcon)}>
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
        <img src={icon} />
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
      : icon === checkIcon
      ? '#2fbe34'
      : icon === helpIcon
      ? '#ff922e'
      : '#ff3030'};
  text-decoration: ${({ stage }) => (stage === 'done' ? 'line-through' : 'none')};
`;

const PlayIcon = styled.div`
  display: flex;
  font-size: 30px;
  cursor: pointer;
`;

const OpenedContainer = styled.div`
  position: relative;
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
`;

const FlipIcon = styled.div`
  position: absolute;
  display: flex;
  bottom: 10px;
  right: 15px;
  font-size: 25px;
  cursor: pointer;
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
