import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  height: 280px;
  width: 1366px;
  margin-top: 0 auto;
  margin-left: 0px;
  margin-bottom: 0 auto px;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
export const Titulo = styled.h2`
  margin-left: 170px;
  padding-top: 33px;
  color: ${cores.lightPink};
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 32px;
  line-height: 21.09px;
  letter-spacing: 0%;
  text-align: right;
  width: 101px;
  height: 33px;
`
export const SubTitulo = styled.h3`
  font-size: 32px;
  margin-left: -100px;
  padding-top: 216px;
  color: ${cores.lightPink};
  font-family: Roboto; /* Define a fonte como Roboto */
  font-weight: 900; /* Define a espessura da fonte como 900, que é bem ousada e grossa */
  font-size: 32px; /* Define o tamanho da fonte como 32 pixels, o que é relativamente grande */
  line-height: 37.5px; /* Define o espaçamento entre as linhas (altura da linha) */
  letter-spacing: 0%; /* Define o espaçamento entre as letras, e o 0% significa o espaçamento padrão */
`
