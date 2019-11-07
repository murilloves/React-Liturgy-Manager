import React from 'react';

import { Container } from '../../components/Container';
import { Flex } from '../../components/Flex';
import { H2, H5 } from '../../components/Text';
import { InputText } from '../../components/Inputs';
import { ButtonPrimary, ButtonSecondary, ButtonDanger } from '../../components/Buttons';

import LiturgyService from '../../services/Liturgy';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Register Liturgy by day
class LiturgyRegister extends React.Component {
  constructor (props) {
    super(props)

    let today = LiturgyService.getInputFormatDate(new Date())
    this.fetchDate(new Date())

    this.state = {
      inputDate: today,
      date: new Date(),
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

  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean'],
      [{'color': [
        '#ff4444', '#ffbb33', '#00C851', '#33b5e5', '#5c6bc0', '#aa66cc', '#ec407a',
        '#cc0000', '#FF8800', '#007E33', '#0099CC', '#1a237e', '#9933CC', '#d81b60',
        '#cccccc', '#aaaaaa', '#777777', '#555555', '#333333', '#212121', '#000000'
      ]}],
    ],
  };

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
            defaultValue={this.state.inputDate}
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
            <ReactQuill
              value={this.state.text}
              modules={this.modules}
              onChange={this.handleChangeInputText}
            />
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
