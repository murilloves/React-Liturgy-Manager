import React from 'react'

import { Flex } from '../../components/Flex'
import { InputText } from '../../components/Inputs'
import { ButtonSecondary } from '../../components/Buttons'
import { H2, H3, H5 } from '../../components/Text'

import LiturgyService from '../../services/Liturgy'

class LiturgyList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dia: new Date(),
      str: ''
    }
    this.handleChangeDate = this.handleChangeDate.bind(this)
  }

  handleChangeDate = (event) => {
    let date = new Date(event.target.value)
    date.setDate(date.getDate() + 1)
    this.setState({
      ...this.state,
      dia: date
    })
  }

  componentDidMount () {
    this.getLiturgy();
  }

  getLiturgy = async (date) => {
    const abc = await LiturgyService.tryGet();
    this.setState({...this.state, str: abc.data.title});
  }

  setDay = (prop) => {
    let dateBuffer = this.state.dia;
    dateBuffer.setDate(dateBuffer.getDate() + prop);
    this.setState({dia: dateBuffer})
  }

  getFormatedDate = () => {
    let date = this.state.dia;

    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    let month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    let year = date.getFullYear()

    return `${day} / ${month} / ${year}`
  }

  render() {
    return (
      <>
        <Flex className="flex-justify-center mb-25">
          <H2>
            Liturgia do dia &nbsp;
            { this.getFormatedDate() }
          </H2>
          <H5>
            { this.state.str }
          </H5>
        </Flex>
        <Flex className="mb-30 flex-align-center">
          <Flex className="flex2">
            <H5>Escolher dia:</H5>
          </Flex>
          <InputText
            className="flex2" type="date"
            onChange={this.handleChangeDate}
          />
          <Flex className="flex8"></Flex>
        </Flex>
        <Flex>
          <Flex className="flex1">
            <ButtonSecondary onClick={() => this.setDay(-1)}>Anterior</ButtonSecondary>
          </Flex>
          <Flex className="flex flex8 flex flex-justify-center">
            <H3>* Ainda não cadastrada *</H3>
          </Flex>
          <Flex className="flex1">
            <ButtonSecondary onClick={() => this.setDay(+1)}>Próximo</ButtonSecondary>
          </Flex>
        </Flex>
      </>
    )
  }
}

export default LiturgyList
