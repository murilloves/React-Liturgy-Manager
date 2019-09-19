import React from 'react'

import { Flex } from '../../components/Flex'
import { InputText } from '../../components/Inputs'
import { ButtonPrimary, ButtonSecondary } from '../../components/Buttons'
import { H2, H3, H5 } from '../../components/Text'

class SaintsList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dia: new Date()
    }
  }

  setDay = (prop) => {
    let dateBuffer = this.state.dia;
    dateBuffer.setDate(dateBuffer.getDate() + prop);
    this.setState({dia: dateBuffer})
  }

  render() {
    return (
      <>
        <Flex className="flex-justify-center mb-25">
          <H2>
            Santo do dia &nbsp;
            {this.state.dia.getDate()} / {this.state.dia.getMonth()+1} / {this.state.dia.getFullYear()}
          </H2>
        </Flex>
        <Flex className="mb-30 flex-align-center">
          <Flex className="flex2">
            <H5>Escolher dia:</H5>
          </Flex>
          <InputText className="flex2" type="date" />
          <Flex className="flex8">
            <ButtonPrimary className="ml-30">MUDASSE</ButtonPrimary>
          </Flex>
        </Flex>
        <Flex>
          <Flex className="flex1">
            <ButtonSecondary onClick={() => this.setDay(-1)}>Anterior</ButtonSecondary>
          </Flex>
          <Flex className="flex flex8 flex flex-justify-center">
            <H3>* Ainda não cadastrado *</H3>
          </Flex>
          <Flex className="flex1">
            <ButtonSecondary onClick={() => this.setDay(+1)}>Próximo</ButtonSecondary>
          </Flex>
        </Flex>
      </>
    )
  }
}

export default SaintsList;
