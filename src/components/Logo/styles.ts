import styled from 'styled-components'
import { cores } from '../../styles'

export const LogoBar = styled.header`
  width: 100%;
  height: 400px;
  margin-top: -42px;
  background-color: ${cores.pink};

  .restaurant p {
    color: ${cores.lightPink};
    text-align: align-items: flex-start;
    font-size: 16px;
    margin-top: -150px;
    margin-left: 100px;
    cursor: pointer;
  }

  .carrinho p {
    color: ${cores.lightPink};
    align-items: flex-end;
    margin-left:750px;
    margin-top: -20px;
    cursor: pointer;
  }

  img {
    align-item: center;
    margin-left: 400px;
    padding-top: 100px;
    padding-bottom: 115px;
  }

  .principal {
    color: ${cores.pink};
  }

`
