import GlobalStyle from './globalStyles';
import { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import DeckPage from './pages/DeckPage';

function App() {
  const [page, setPage] = useState('welcome');

  return (
    <>
      <GlobalStyle />
      {page === 'welcome' ? <WelcomePage setPage={setPage} /> : <DeckPage />}
    </>
  );
}

export default App;
