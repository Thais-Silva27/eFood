import styled from 'styled-components'
import { cores } from '../../styles'

export const Botao = styled.div`
  background-color: ${cores.white};
  width: 210px;
  padding-bottom: 25px;
  height: 18px;
  marging-bottom: -20px;
  marging-top: -20px;
  position: absolute; /* Para aplicar as propriedades top e left corretamente */

  p {
    color: ${cores.white};
    marging-bottom: -220px;
    padding-left: 175px;
    marging-top: -20px;
    margin-left: 10px;
    background-color: ${cores.darkPink};
    padding: 5px;
    font-size: 13px;
    margin-right: 115px;
    cursor: pointer;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 14px;
    line-height: 16.41px;
    letter-spacing: 0%;
    text-align: center;
  }
`
