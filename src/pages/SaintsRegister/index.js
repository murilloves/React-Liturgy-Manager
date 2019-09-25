import React from 'react';

import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { H2, H5 } from '../../components/Text';
import { InputText } from '../../components/Inputs';
import { ButtonSecondary, ButtonPrimary } from '../../components/Buttons';

import SaintsService from '../../services/Saints';

// FROALA
import FroalaEditor from 'react-froala-wysiwyg';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Saint of the day
class SaintsRegister extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
      text: '',
      name: ''
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
  handleChangeName = (event) => {
    let name = event.target.value;

    this.setState({
      ...this.state,
      name
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


  setSaints = async () => {
    const res = await SaintsService.setSaints(this.state)

    if (res.status === 200) {
      this.refreshPage();
    }
    console.log(res)
  }

  refreshPage = () => { 
    window.location.reload(); 
  }

  render () {
    return (
      <Container>
        <Flex className="flex-align-center flex-justify-center">
          <H2 className="mt-0">Santo do Dia</H2>
        </Flex>
        <Flex className="mv-10 flex-align-center">
          <H5 className="flex1">Dia da comemoração</H5>
          <InputText
            className="flex5" placeholder="__/__/____" type="date"
            onChange={this.handleChangeDate}>
          </InputText>
        </Flex>
        <Flex className="mv-10 flex-align-center">
          <H5 className="flex1">Nome do Santo</H5>
          <InputText className="flex5" onChange={this.handleChangeName}></InputText>
        </Flex>
        <Flex className="mv-10 flex-align-center">
          <H5 className="flex1 align-self-start mv-10">Mensagem</H5>
          <div className="flex5">
            <FroalaEditor onModelChange={this.handleChangeInputText} tag='textarea'/>
          </div>
        </Flex>
        <Flex className="flex-space-between mt-30">
          <ButtonSecondary>Voltar</ButtonSecondary>
          <ButtonPrimary onClick={() => this.setSaints()}>Salvar</ButtonPrimary>
        </Flex>
      </Container>
    )
  }
}

export default SaintsRegister;
