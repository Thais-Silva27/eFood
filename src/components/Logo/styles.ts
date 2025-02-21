import styled from 'styled-components'
import { cores } from '../../styles'

export const LogoBar = styled.header`
  width: 1366px;
  height: 186px;
  background-color: ${cores.lightPink};

  .restaurant p {
    color: ${cores.darkPink};
    font-family: Roboto;
    text-align: align-items: flex-start;
    font-size: 18px;
    margin-left: 171px;
    margin-top: -100px;
    cursor: pointer;
    font-weight: 900;
    font-size: 18px;
    line-height: 21.09px;
    letter-spacing: 0%;
 }

  .carrinho p {
    color: ${cores.darkPink};
    font-family: Roboto;
    font-size: 18px;
    align-items: flex-end;
    margin-left:1000px;
    margin-top: -20px;
    cursor: pointer;
    font-weight: 900;
    font-size: 18px;
    line-height: 21.09px;
    letter-spacing: 0%;
  }

  img {
    width: 125px;
    height: 57px;
    align-item: center;
    margin-left: 621px;
    margin-top: 63px;
    margin-bottom: 65px;
  }

  .principal {
    color: ${cores.darkPink};
  }

`
