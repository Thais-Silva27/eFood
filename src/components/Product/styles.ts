import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.lightPink};
  padding-top: 82px;
  margin-bottom: 75px;
  width: 99%;
  padding-right: 70px;
  padding-bottom: 150px;
  padding-left: 15px;
  display: flex;
  justify-content: space-between;

  img {
    margin-left: 50px;
    padding-left: 20px;
    max-width: 500px;
    object-fit: cover;
    padding: 10px;
    &:hover {
      transform: scale(1.1);
    }
`
