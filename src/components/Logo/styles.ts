import styled from 'styled-components'
import { cores } from '../../styles'

export const LogoBar = styled.header`
  width: 100%;
  height: 400px;
  margin-top: -42px;
 
  p {
    color: ${cores.darkPink};
    text-align: center;
    font-size: 36px;
  }

  img {
    margin-left: -5px;
    padding-top: 45px;
    padding-bottom: 115px;
    width: 100%;
  }
`
