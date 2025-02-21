import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.lightPink};
  width: 1366px;
  height: 384px;
  margin-top: -224px;

  p {
    color: ${cores.darkPink};
    text-align: center;
    width: 539px;
    height: 84px;
    margin-top: 236px;
    padding-top: 236px;
    margin-left: 414px;
    font-family: Roboto; /* Define a fonte como Roboto */
    font-weight: 900; /* Define a espessura da fonte como 900, que é bem grossa */
    font-size: 36px; /* Define o tamanho da fonte como 36 pixels */
    line-height: 42.19px; /* Define a altura da linha, ajustando o espaçamento entre as linhas de texto */
    letter-spacing: 0%; /* Define o espaçamento entre as letras, e o 0% significa que o espaçamento é o padrão */
    text-align: center; /* Alinha o texto no centro */
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
