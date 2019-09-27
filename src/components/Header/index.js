import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
import { Flex } from '../Flex';

const Header = () => {
  return (
    <>
      <Flex className="flex-align-center flex-justify-start header-div">
        <Link className="no-text-decoration flex-justify-end ml-30" to="/listagem-dia">
          <div className="nav-btn">Visualizar Liturgia e Santos</div>
        </Link>
        <Flex className="flex-justify-end">
          <Link className="no-text-decoration" to="/cadastrar-liturgia">
            <div className="nav-btn">Cadastrar Liturgia</div>
          </Link>
          <Link className="no-text-decoration" to="/cadastrar-santo-do-dia">
            <div className="nav-btn">Cadastrar Santo do Dia</div>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}

export default Header;
