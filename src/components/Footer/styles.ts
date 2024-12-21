import styled from 'styled-components'
import { cores } from '../../styles'

export const RodaPe = styled.footer`
  background-color: ${cores.pink};
  padding: 20px;
  width: 100%;
  height: 320px;
  margin-left: -16px;
  margin-right: 10px;
  margin-top: -80px;

  img {
    margin-left: 580px;
    padding-top: 25px;
    padding-bottom: 115px;
    margin-botton: -200px;
  }

  ul {
    display: flex;
    margin-left: 730px;
    margin-top: -140px;
  }

  li {
    margin-left: -640px;
    padding-top: 25px;
    margin-bottom: -50px;
    cursor: pointer;
  }

  p {
    font-size: 10px;
    color: ${cores.darkPink};
    text-align: center;
    margin-left: 220px;
    display: block;
    margin-right: 300px;
  }
`
