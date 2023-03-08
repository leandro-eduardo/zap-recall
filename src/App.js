import { useState } from 'react';
import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage';
import DeckPage from './pages/DeckPage';

function App() {
  const [page, setPage] = useState('welcome');

  return (
    <>
      <GlobalStyle />
      {page === 'welcome' ? <HomePage setPage={setPage} /> : <DeckPage />}
    </>
  );
}

export default App;
