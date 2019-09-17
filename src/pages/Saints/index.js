import React from 'react';

import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { H3, H5 } from '../../components/Text/TextTags';
import { InputText, InputTextarea } from '../../components/Inputs';
import { ButtonSecondary, ButtonPrimary } from '../../components/Button';

// Saint of the day
const SaintsRegister = () => {
  return (
    <Container>
      <Flex className="flex-align-center flex-justify-center">
        <H3 className="mt-0">Santo do Dia</H3>
      </Flex>
      <Flex className="mv-10 flex-align-center">
        <H5 className="flex1">Dia da comemoração</H5>
        <InputText className="flex5" placeholder="__/__/____" type="date"></InputText>
      </Flex>
      <Flex className="mv-10 flex-align-center">
        <H5 className="flex1">Nome do Santo</H5>
        <InputText className="flex5"></InputText>
      </Flex>
      <Flex className="mv-10 flex-align-center">
        <H5 className="flex1 align-self-start mv-10">Mensagem</H5>
        <InputTextarea className="flex5" placeholder=""></InputTextarea>
      </Flex>
      <Flex className="flex-space-between mt-30">
        <ButtonSecondary>Voltar</ButtonSecondary>
        <ButtonPrimary>Salvar</ButtonPrimary>
      </Flex>
    </Container>
  );
}

export default SaintsRegister;
