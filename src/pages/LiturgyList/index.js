import React from 'react'

import { Flex } from '../../components/Flex'
import { InputText } from '../../components/Inputs'
import { ButtonSecondary } from '../../components/Buttons'
import { H2, H3 } from '../../components/Text'

import LiturgyService from '../../services/Liturgy'

class LiturgyList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dia: new Date(),
      text: ''
    }
    this.handleChangeDate = this.handleChangeDate.bind(this)
  }

  componentDidMount () {
    this.getEndpointStatus();
    this.getLiturgy(new Date());
  }

  handleChangeDate = (event) => {
    let date = new Date(event.target.value)
    date.setDate(date.getDate() + 1)

    this.getLiturgy(date);
  }

  getEndpointStatus = async () => {
    const test = await LiturgyService.tryGet();
    console.log('status ', test.data.msg);
  }

  getLiturgy = async (date) => {
    const res = await LiturgyService.getLiturgyFromDate(date)
    const text = res && res.data && res.data.text ? res.data.text : ''

    console.log(res)

    this.setState({
      ...this.state,
      dia: date,
      text
    })
  }

  setDay = (prop) => {
    let date = this.state.dia
    date.setDate(date.getDate() + prop)

    this.getLiturgy(date)
  }

  getFormatedDate = () => {
    let date = this.state.dia;

    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    let month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    let year = date.getFullYear()

    return `${day} / ${month} / ${year}`
  }

  getRawFormatDate = () => {
    let date = this.state.dia;

    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    let month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    let year = date.getFullYear()

    return `${year}-${month}-${day}`
  }

  render() {
    return (
      <>
        <Flex className="flex-justify-center mb-25">
          <H2>
            Liturgia do dia &nbsp;
            { this.getFormatedDate() }
          </H2>
        </Flex>
        <Flex className="mh-30 mb-30">
          <Flex className="flex2">
            <ButtonSecondary onClick={() => this.setDay(-1)}>&lt;&nbsp; Dia Anterior</ButtonSecondary>
          </Flex>
          <Flex className="flex1 flex-align-center">
            <InputText type="date"
              value={this.getRawFormatDate()}
              onChange={this.handleChangeDate}
            />
          </Flex>
          <Flex className="flex2 flex-justify-end">
            <ButtonSecondary onClick={() => this.setDay(+1)}>Próximo Dia &nbsp;&gt;</ButtonSecondary>
          </Flex>
        </Flex>
        { !this.state.text
            ?
              (
                <Flex className="flex8 flex-justify-center">
                  <H3>* Liturgia ainda não cadastrada para este dia *</H3>
                </Flex>
              )
            :
              (
                <Flex className="flex8 mh-30 bg-white sans br-5 pd-30">
                  { this.state.text && this.state.text.indexOf('</') !== -1 
                    ?
                      (
                        <div dangerouslySetInnerHTML={{__html: this.state.text.replace(/(<? *script)/gi, 'illegalscript')}} >
                        </div>
                      )
                    : this.state.text
                  }
                </Flex>
              )
          }
      </>
    )
  }
}

export default LiturgyList
