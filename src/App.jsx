import React, { useState } from 'react';
import { LandingPage } from './pages/LandingPage';
import { HomePage } from './pages/HomePage';
import { GlobalStyle } from './styles/globalStyles';
import './styles/reset.css';

const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <>
      <GlobalStyle />
      {login ? (
        <HomePage setLogin={setLogin} />
      ) : (
        <LandingPage setLogin={setLogin} />
      )}
    </>
  );
};

export default App;
