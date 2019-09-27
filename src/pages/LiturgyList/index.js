import React from 'react'

import { Flex } from '../../components/Flex'
import { H2, H3 } from '../../components/Text'

import LiturgyService from '../../services/Liturgy'

class LiturgyList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dia: props.date,
      text: ''
    }
  }

  componentDidMount () {
    this.getEndpointStatus();
    this.getLiturgy(new Date());
  }

  componentWillReceiveProps (props) {
    this.getLiturgy(props.date)
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
            Liturgia
            {/* do dia &nbsp; { this.getFormatedDate() } */}
          </H2>
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
