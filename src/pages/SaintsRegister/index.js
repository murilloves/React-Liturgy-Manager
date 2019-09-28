import React from 'react';

import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { H2, H5 } from '../../components/Text';
import { InputText } from '../../components/Inputs';
import { ButtonSecondary, ButtonPrimary, ButtonDanger } from '../../components/Buttons';

import SaintsService from '../../services/Saints';
import LiturgyService from '../../services/Liturgy';

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

    let today = LiturgyService.getInputFormatDate(new Date())
    this.fetchDate(new Date())

    this.state = {
      inputDate: today,
      date: new Date(),
      text: '',
      name: '',
      canDelete: false
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

    this.fetchDate(date);
  }

  fetchDate = async (date) => {
    const res = await SaintsService.getSaintsFromDate(date)

    if (res.data) {
      this.setState({
        ...this.state,
        date: res.data.date,
        name: res.data.name,
        text: res.data.text,
        _id: res.data._id,
        canDelete: true
      });
    } else {
      this.setState({
        ...this.state,
        name: '',
        text: '',
        _id: null,
        canDelete: false
      });
    }
  }

  handleChangeName = (event) => {
    let name = event.target.value;

    this.setState({
      ...this.state,
      name
    })
  }

  handleChangeInputText = (text) => {
    this.setState({
      ...this.state,
      text
    })
  }

  setSaints = async () => {
    const res = await SaintsService.setSaints(this.state)

    if (res.status === 200) {
      this.refreshPage();
    }
  }

  deleteSaints = async () => {
    const res = await SaintsService.deleteSaints(this.state._id)

    if (res.status === 200) {
      this.refreshPage();
    }
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
            defaultValue={this.state.inputDate}
            onChange={this.handleChangeDate}>
          </InputText>
        </Flex>
        <Flex className="mv-10 flex-align-center">
          <H5 className="flex1">Nome do Santo</H5>
          <InputText className="flex5" onChange={this.handleChangeName} value={this.state.name}></InputText>
        </Flex>
        <Flex className="mv-10 flex-align-center">
          <div className="flex1 align-self-start mv-10">
            <H5>Mensagem</H5>
            {
              this.state.canDelete &&
              <ButtonDanger className="mt-30" onClick={() => this.deleteSaints()}>Apagar</ButtonDanger>
            }
          </div>
          <div className="flex5">
            <FroalaEditor model={this.state.text} onModelChange={this.handleChangeInputText} tag='textarea'/>
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
