import React from 'react';

import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { H2, H5 } from '../../components/Text';
import { InputText } from '../../components/Inputs';
import { ButtonSecondary, ButtonPrimary } from '../../components/Buttons';

// FROALA
import FroalaEditor from 'react-froala-wysiwyg';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Saint of the day
const SaintsRegister = () => {
  return (
    <Container>
      <Flex className="flex-align-center flex-justify-center">
        <H2 className="mt-0">Santo do Dia</H2>
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
        <Flex className="flex5">
          <FroalaEditor tag='textarea'/>
        </Flex>
      </Flex>
      <Flex className="flex-space-between mt-30">
        <ButtonSecondary>Voltar</ButtonSecondary>
        <ButtonPrimary>Salvar</ButtonPrimary>
      </Flex>
    </Container>
  );
}

export default SaintsRegister;
