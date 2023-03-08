import styled from 'styled-components';
import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt='Logo' />
      ZapRecall
    </Container>
  );
}

const Container = styled.div`
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
