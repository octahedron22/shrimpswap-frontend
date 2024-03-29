import React from 'react'
import { Flex } from '@shrimpswap/uikit'
import styled from 'styled-components'
import PageContainer from 'components/layout/Container'

const StyledCountdownBanner = styled.div`
  background: #21223b;
`

const Container = styled(PageContainer)`
  padding-bottom: 24px;
  padding-top: 24px;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.md} {
    text-align: left;
  }
`

const Countdown = styled.div`
  text-align: center;
  font-size: 24px;
  line-height: 110%;
  white-space: nowrap;
  color: white;
`

const CountdownBanner = () => (
  <StyledCountdownBanner>
    <Container>
      <Flex alignItems="center" justifyContent={['center', 'center', null, 'start']}>
        <Countdown>Farms, pools and oceans are now opened!</Countdown>
      </Flex>
    </Container>
  </StyledCountdownBanner>
)

export default CountdownBanner
