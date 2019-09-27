import React from 'react';

import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { H2, H5 } from '../../components/Text';
import { InputText } from '../../components/Inputs';
import { ButtonPrimary, ButtonSecondary, ButtonDanger } from '../../components/Buttons';

import LiturgyService from '../../services/Liturgy';

// FROALA
import FroalaEditor from 'react-froala-wysiwyg';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Register Liturgy by day
class LiturgyRegister extends React.Component {
  constructor (props) {
    super(props)

    let today = LiturgyService.getInputFormatDate(new Date())
    this.fetchDate(new Date())

    this.state = {
      date: today,
      text: '',
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
    const res = await LiturgyService.getLiturgyFromDate(date)

    if (res.data) {
      this.setState({
        ...this.state,
        date: res.data.date,
        text: res.data.text,
        _id: res.data._id,
        canDelete: true
      });
    } else {
      this.setState({
        ...this.state,
        text: '',
        _id: null,
        canDelete: false
      });
    }
  }

  handleChangeInputText = (text) => {
    this.setState({
      ...this.state,
      text
    })
  }

  setLiturgy = async () => {
    const res = await LiturgyService.setLiturgy(this.state)

    if (res.status === 200) {
      this.refreshPage();
    }
  }

  deleteLiturgy = async () => {
    const res = await LiturgyService.deleteLiturgy(this.state._id)

    if (res.status === 200) {
      this.refreshPage();
    }
  }

  refreshPage = () => {
    window.location.reload(); 
  }


  render() {
    return (
      <Container>
        <Flex className="flex-align-center flex-justify-center">
          <H2 className="mt-0">Cadastrar Liturgia</H2>
        </Flex>
        <Flex className="mv-10 flex-align-center">
          <H5 className="flex1">Data</H5>
          <InputText
            className="flex5" placeholder="__/__/____" type="date"
            defaultValue={this.state.date}
            onChange={this.handleChangeDate}>
          </InputText>
        </Flex>
        <Flex className="mv-10 flex-align-center">
          <div className="flex1 align-self-start mv-10">
            <H5>Liturgia do Dia</H5>
            {
              this.state.canDelete &&
              <ButtonDanger className="mt-30" onClick={() => this.deleteLiturgy()}>Apagar</ButtonDanger>
            }
          </div>
          <div className="flex5">
            <FroalaEditor model={this.state.text} onModelChange={this.handleChangeInputText} tag='textarea'/>
          </div>
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
