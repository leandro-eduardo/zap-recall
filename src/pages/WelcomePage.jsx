import logo from '../assets/logo.png';
import styled from 'styled-components';

export default function WelcomePage(props) {
  const { setPage } = props;

  return (
    <Container>
      <img src={logo} alt='Logo' />
      <h1>ZapRecall</h1>
      <Button onClick={() => setPage('deck')}>Iniciar Recall!</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 35px 35px 70px;
  background-color: #fb6b6b;
  min-height: 100vh;
  height: 100%;
  width: 100%;

  img {
    width: 135px;
  }

  h1 {
    font-size: 36px;
    font-family: Righteous;
    font-weight: 400;
    color: #ffffff;
    margin: 0;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 245px;
  height: 55px;
  font-size: 18px;
  font-weight: 400;
  color: #d70900;
  background-color: #ffffff;
  border: 1px solid #d70900;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 4px 4px 0px #00000026;
`;
