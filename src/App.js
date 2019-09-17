import React from 'react';
import { Application } from './components/Application';
import { Flex } from './components/Flex';
import './global/AppStyles.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
// import ButtonSample from './pages/Sample/Buttons';

function App() {
  return (
    <Application>
      <Router>
        <Flex className="flex-column flex-space-between">
          <Header />
          {/* <ButtonSample /> */}
        </Flex>
      </Router>
    </Application>
  );
}

export default App;
