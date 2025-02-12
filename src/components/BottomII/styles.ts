import styled from 'styled-components'
import { cores } from '../../styles'

export const BotaoStyle = styled.div`
  background-color: ${cores.darkPink};
  width: 210px;
  height: 24px;
  padding-top: 10px;
  marging-top: -30px;

  p {
    color: ${cores.darkPink};
    height: 24px;
    width: 292px;
    padding-right: 8px;
    marging: 0;
    font-family: Roboto;
    background-color: ${cores.white};
    padding: 6px;
    padding-bottom: 4px;
    font-size: 14px;
    font-family: Roboto;
    cursor: pointer;
    text-align: center;
    margin-left: 0;
  }
`
