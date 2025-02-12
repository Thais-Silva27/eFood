import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.lightPink};
  width: 1366px;
  height: 384px;
  margin-top: -224px;

  p {
    color: ${cores.darkPink};
    font-size: 36px;
    text-align: center;
    width: 539px;
    height: 84px;
    margin-top: 236px;
    padding-top: 236px;
    margin-left: 414px;
    font-family: robot;
  }

  img {
    align-item: center;
    margin-left: 621px;
    margin-top: 40px;
    padding: 2px;
    position: absolute;
    border-radius: 3px;
    cursor: pointer;
  }
`
