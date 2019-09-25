import React from 'react'

import { Flex } from '../../components/Flex'
import { InputText } from '../../components/Inputs'
import { ButtonSecondary } from '../../components/Buttons'
import { H2, H3, H4 } from '../../components/Text'

import SaintsService from '../../services/Saints'

class SaintsList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dia: new Date(),
      text: '',
      name: ''
    }
    this.handleChangeDate = this.handleChangeDate.bind(this)
  }

  componentDidMount () {
    this.getEndpointStatus();
    this.getSaints(new Date());
  }

  handleChangeDate = (event) => {
    let date = new Date(event.target.value)
    date.setDate(date.getDate() + 1)

    this.getSaints(date);
  }

  getEndpointStatus = async () => {
    const test = await SaintsService.tryGet();
    console.log('status ', test.data.msg);
  }

  getSaints = async (date) => {
    const res = await SaintsService.getSaintsFromDate(date)
    const text = res && res.data && res.data.text ? res.data.text : ''
    const name = res && res.data && res.data.name ? res.data.name : ''

    console.log(res)

    this.setState({
      ...this.state,
      dia: date,
      text,
      name
    })
  }

  setDay = (prop) => {
    let date = this.state.dia
    date.setDate(date.getDate() + prop)

    this.getSaints(date)
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
            Santos do dia &nbsp;
            { this.getFormatedDate() }
          </H2>
        </Flex>
        <Flex className="mb-30">
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
        </Flex>
        { !this.state.text
            ?
              (
                <Flex className="flex-justify-center">
                  <H3>* Nenhum Santo cadastrado para este dia *</H3>
                </Flex>
              )
            :
              (
                <Flex className="flex-column mh-30 bg-white sans br-5 pd-30">
                  <H4>
                    { this.state.name }
                  </H4>
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

export default SaintsList;
