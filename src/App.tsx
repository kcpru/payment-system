import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './routes';
import { GlobalStyle } from './utils';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  );
};

export default App;
