import React from 'react';

import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { Button, ButtonPrimary, ButtonSecondary, ButtonDanger, ButtonWarning, ButtonSuccess } from '../../components/Button';


const ButtonSamples = () => {
  return (
    <>
      <Container>
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
      </Container>
    </>
  )
}

export default ButtonSamples;
