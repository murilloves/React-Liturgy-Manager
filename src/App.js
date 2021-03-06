import React from 'react';
import { Application } from './components/Application';
import { Flex } from './components/Flex';
import Header from './components/Header';
import './global/AppStyles.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import SaintsRegister from './pages/SaintsRegister';
import LiturgyRegister from './pages/LiturgyRegister';
import DailyList from './pages/DailyList';

// import ButtonSample from './pages/Sample/Buttons';

function App() {
  return (
    <Application>
      <Router>
        <Flex className="flex-column flex-space-between">

          <Header />

          <Route path="/cadastrar-liturgia" component={LiturgyRegister} />
          <Route path="/cadastrar-santo-do-dia" component={SaintsRegister} />
          <Route path="/listagem-dia" component={DailyList} />

          {/* <ButtonSample /> */}
        </Flex>
      </Router>
    </Application>
  );
}

export default App;
