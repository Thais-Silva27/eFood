import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.darkPink};
  padding: 40px;
  width: 100%;
  height: 400px;
  margin-top: -32px;
  margin-left: -16px;
  margin-right: 10px;
  margin-bottom: 0;
  margin: auto;

  p {
    color: ${cores.lightPink};
    text-align: center;
    font-size: 36px;
    padding-top: 15px;
    margin-top: 170px;
    margin-bottom: -180px;
  }

  img {
    align-item: center;
    margin-left: 700px;
    margin-top: 75px;
    padding: 2px;
    position: absolute;
    border: 1px solid white;
    border-radius: 3px;
    cursor: pointer;
  }
`
