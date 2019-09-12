import React from 'react';
import { Button, ButtonPrimary, ButtonSecondary, ButtonDanger, ButtonSuccess, ButtonWarning } from './components/Button/Button';
import { InputText, InputTextarea } from './components/Input/Input';
import { H3, H5 } from './components/Text/Text';
import { Application } from './components/Application';
import { Container } from './components/Container';
import { Flex } from './components/Flex';
import './global/AppStyles.css';

function App() {
  return (
    <Application>
      <Flex className="flex-column flex-space-between">

        {/* Santo do Dia */}
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

        {/* Liturgia */}
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

        {/* <Container>
          <Flex className="flex-space-between">
            <Button>Butona</Button>
            <ButtonPrimary size={12}>Primary</ButtonPrimary>
            <ButtonSecondary size={13}>Secondary</ButtonSecondary>
            <ButtonDanger size={14}>Danger</ButtonDanger>
            <ButtonWarning size={15}>Warning</ButtonWarning>
            <ButtonSuccess size={16}>Success</ButtonSuccess>
          </Flex>
        </Container>
        <Container>
          <Flex className="flex-space-between">
            <Button>Butona</Button>
            <ButtonPrimary>Primary</ButtonPrimary>
            <ButtonSecondary>Secondary</ButtonSecondary>
            <ButtonDanger>Danger</ButtonDanger>
            <ButtonWarning>Warning</ButtonWarning>
            <ButtonSuccess>Success</ButtonSuccess>
          </Flex>
        </Container> */}

      </Flex>
    </Application>
  );
}

export default App;
