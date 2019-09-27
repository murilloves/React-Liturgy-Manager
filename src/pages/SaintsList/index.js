import React from 'react'

import { Flex } from '../../components/Flex'
import { H2, H3, H4 } from '../../components/Text'

import SaintsService from '../../services/Saints'

class SaintsList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      dia: props.date,
      text: '',
      name: ''
    }
  }

  componentDidMount () {
    this.getEndpointStatus();
    this.getSaints(new Date());
  }

  componentWillReceiveProps (props) {
    this.getSaints(props.date)

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
            Santos do dia
            {/* &nbsp; { this.getFormatedDate() } */}
          </H2>
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
