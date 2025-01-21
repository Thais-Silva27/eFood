import styled from 'styled-components'
import { cores } from '../../styles'

export const Card2 = styled.div`
  background-color: ${cores.lightPink};
  padding-top: 82px;
  margin-bottom: 75px;
  width: 99%;
  padding-right: 170px;
  padding-bottom: 150px;
  padding-left: 15px;
  display: flex;
  justify-content: space-between;

  img {
    margin-left: 70px;
    padding-left: 30px;
    max-width: 500px;
    object-fit: cover;
    padding: 40px;
    &:hover {
      transform: scale(1.1);
    }

    cardapio {
      padding-right: 20px;
    }
  }
`
