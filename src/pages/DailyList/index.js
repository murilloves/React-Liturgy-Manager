import React from 'react'

import { Flex } from '../../components/Flex'
import { Container } from '../../components/Container'
import LiturgyList from '../LiturgyList'
import SaintsList from '../SaintsList'

const DailyList = () => {
  return (
    <>
      <Flex className="flex-column">
        <Container>
          <Flex className="flex1 flex-column">
            <LiturgyList/>
          </Flex>
        </Container>
        <Container>
          <Flex className="flex1 flex-column">
            <SaintsList/>
          </Flex>
        </Container>
      </Flex>
    </>
  )
}

export default DailyList
