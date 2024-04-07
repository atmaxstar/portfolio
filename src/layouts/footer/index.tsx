import styled from 'styled-components'
import { mainColor } from '../../colors'

const Background = styled.div`
    padding: 30px 50px;
    background: ${mainColor};
    color: white;
    text-align: right;
`

const Footer = () => {
  return (
    <Background>
      {"Copyright © 2024 Atsutoshi Honda All Rights Reserved."}
    </Background>
  )
}

export default Footer
