import React from 'react';
import './styles.css';

import { Route, Link } from 'react-router-dom';
import { Flex } from '../Flex';

import SaintsRegister from '../../pages/Saints';
import LiturgyRegister from '../../pages/Liturgy';

const Header = () => {
  return (
    <>
      <div className="flex flex flex-align-center flex-justify-start header-div">
        <Flex>
          <Link className="no-text-decoration" to="/liturgy-register">
            <div className="nav-btn">Cadastrar Liturgia</div>
          </Link>
          <Link className="no-text-decoration" to="/saints-register">
            <div className="nav-btn">Cadastrar Santo do Dia</div>
          </Link>
        </Flex>
      </div>
      <div>
        <Route path="/liturgy-register" component={LiturgyRegister} />
        <Route path="/saints-register" component={SaintsRegister} />
      </div>
    </>
  );
}

export default Header;
