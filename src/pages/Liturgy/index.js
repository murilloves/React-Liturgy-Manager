import React from 'react';

import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { H3, H5 } from '../../components/Text/TextTags';
import { InputText, InputTextarea } from '../../components/Inputs';
import { ButtonPrimary, ButtonSecondary } from '../../components/Button';

// Register Liturgy by day
const LiturgyRegister = () => {
  return (
    <Container>
      <Flex className="flex-align-center flex-justify-center">
        <H3 className="mt-0">Liturgia</H3>
      </Flex>
      <Flex className="mv-10 flex-align-center">
        <H5 className="flex1">Data</H5>
        <InputText className="flex5" placeholder="__/__/____" type="date"></InputText>
      </Flex>
      <Flex className="mv-10 flex-align-center">
        <H5 className="flex1 align-self-start mv-10">Liturgia do Dia</H5>
        <InputTextarea className="flex5" placeholder=""></InputTextarea>
      </Flex>
      <Flex className="flex-space-between mt-30">
        <ButtonSecondary>Voltar</ButtonSecondary>
        <ButtonPrimary>Salvar</ButtonPrimary>
      </Flex>
    </Container>
  );
}

export default LiturgyRegister;
