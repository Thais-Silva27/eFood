import styled from 'styled-components'
import { cores } from '../../styles'

export const Botao = styled.div`
  background-color: ${cores.white};
  width: 210px;
  padding-bottom: 25px;
  height: 12px;
  padding-top: 10px;
  marging-bottom: -20px;
  marging-top: -20px;
  padding-right: -35px;

  p {
    color: ${cores.white};
    marging-bottom: -220px;
    padding-left: 175px;
    marging-top: -20px;
    margin-left: 10px;
    background-color: ${cores.darkPink};
    padding: 10px;
    font-size: 13px;
    margin-right: 115px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`
