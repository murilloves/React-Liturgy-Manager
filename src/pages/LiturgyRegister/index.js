import React from 'react';

import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { H2, H5 } from '../../components/Text';
import { InputText } from '../../components/Inputs';
import { ButtonPrimary, ButtonSecondary } from '../../components/Buttons';

// FROALA
import FroalaEditor from 'react-froala-wysiwyg';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import LiturgyService from '../../services/Liturgy';

// Register Liturgy by day
class LiturgyRegister extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
      text: ''
    }
    this.handleChangeDate = this.handleChangeDate.bind(this)
    this.handleChangeInputText = this.handleChangeInputText.bind(this)
  }

  handleChangeDate = (event) => {
    let date = new Date(event.target.value)
    date.setDate(date.getDate() + 1)

    this.setState({
      ...this.state,
      date
    })

    console.log(this.state);
  }

  handleChangeInputText = (text) => {
    this.setState({
      ...this.state,
      text
    })

    console.log(this.state);
  }


  setLiturgy = async () => {
    const res = await LiturgyService.setLiturgy(this.state)

    if (res.status === 200) {
      this.refreshPage();
    }
    console.log(res)
  }

  refreshPage = () => { 
    window.location.reload(); 
  }


  render() {
    return (
      <Container>
        <Flex className="flex-align-center flex-justify-center">
          <H2 className="mt-0">Liturgia</H2>
        </Flex>
        <Flex className="mv-10 flex-align-center">
          <H5 className="flex1">Data</H5>
          <InputText
            className="flex5" placeholder="__/__/____" type="date"
            onChange={this.handleChangeDate}>
          </InputText>
        </Flex>
        <Flex className="mv-10 flex-align-center">
          <H5 className="flex1 align-self-start mv-10">Liturgia do Dia</H5>
          <Flex className="flex5">
            <FroalaEditor onModelChange={this.handleChangeInputText} tag='textarea'/>
          </Flex>
        </Flex>
        <Flex className="flex-space-between mt-30">
          <ButtonSecondary>Voltar</ButtonSecondary>
          <ButtonPrimary onClick={() => this.setLiturgy()}>Salvar</ButtonPrimary>
        </Flex>
      </Container>
    )
  }
}

export default LiturgyRegister;
