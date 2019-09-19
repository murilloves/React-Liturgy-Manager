import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
import { Flex } from '../Flex';

const Header = () => {
  return (
    <>
      <div className="flex flex flex-align-center flex-justify-start header-div">
        <Flex>
          <Link className="no-text-decoration" to="/cadastrar-liturgia">
            <div className="nav-btn">Cadastrar Liturgia</div>
          </Link>
          <Link className="no-text-decoration" to="/cadastrar-santo-do-dia">
            <div className="nav-btn">Cadastrar Santo do Dia</div>
          </Link>
          <Link className="no-text-decoration" to="/liturgia">
            <div className="nav-btn">Liturgia</div>
          </Link>
          <Link className="no-text-decoration" to="/santo-do-dia">
            <div className="nav-btn">Santo do Dia</div>
          </Link>
        </Flex>
      </div>
    </>
  );
}

export default Header;
