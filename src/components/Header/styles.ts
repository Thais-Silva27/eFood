import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.pink};
  padding: 40px;
  width: 100%;
  height: 400px;
  margin-top: -32px;
  margin-left: -16px;
  margin-right: 10px;
  margin-bottom: 0;

  p {
    color: ${cores.darkPink};
    text-align: center;
    font-size: 36px;
  }

  img {
    margin-left: 570px;
    padding-top: 45px;
    padding-bottom: 115px;
  }
`
