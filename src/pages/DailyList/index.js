import React from 'react'

import { Flex } from '../../components/Flex'
import { InputText } from '../../components/Inputs'
import { Container } from '../../components/Container'
import { ButtonSecondary } from '../../components/Buttons'

import LiturgyList from '../LiturgyList'
import SaintsList from '../SaintsList'

class DailyList extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      date: new Date()
    }

    this.handleChangeDate = this.handleChangeDate.bind(this)
  }

  setDay = (prop) => {
    let date = this.state.date
    date.setDate(date.getDate() + prop)

    this.setState({
      ...this.state,
      date
    })
  }

  handleChangeDate = (event) => {
    let date = new Date(event.target.value)
    date.setDate(date.getDate() + 1)

    this.setState({
      ...this.state,
      date
    })
  }

  getRawFormatDate = () => {
    let date = this.state.date;

    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    let month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    let year = date.getFullYear()

    return `${year}-${month}-${day}`
  }

  render() {
    return (
      <>
        <Flex className="flex-column">
          <Container>
            <Flex className="mh-30">
              <Flex className="flex2">
                <ButtonSecondary size="16" onClick={() => this.setDay(-1)}>&lt;&nbsp; Dia Anterior</ButtonSecondary>
              </Flex>
              <Flex className="flex1 flex-justify-center flex-align-center">
                <InputText type="date"
                  className="input-dark"
                  value={this.getRawFormatDate()}
                  onChange={this.handleChangeDate}
                />
              </Flex>
              <Flex className="flex2 flex-justify-end">
                <ButtonSecondary size="16" onClick={() => this.setDay(+1)}>Próximo Dia &nbsp;&gt;</ButtonSecondary>
              </Flex>
            </Flex>
          </Container>
          <Container className="pt-0 mt-0">
            <Flex className="flex1 flex-column">
              <LiturgyList date={this.state.date} />
            </Flex>
          </Container>
          <Container className="pt-0 mt-0">
            <Flex className="flex1 flex-column">
              <SaintsList date={this.state.date}/>
            </Flex>
          </Container>
        </Flex>
      </>
    )
  }
}

export default DailyList
