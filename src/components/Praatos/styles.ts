import styled from 'styled-components'
import { cores } from '../../styles'

export const Card2 = styled.div`
  background-color: ${cores.white};
  padding-top: 82px;
  margin-bottom: 75px;
  width: 99%;
  padding-right: 170px;
  padding-bottom: 150px;
  padding-left: 15px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;

  img {
    margin-left: auto;
    margin-bottom: 15px;
    padding-left: auto;
    max-width: 500px;
    object-fit: cover;
    padding: auto;
    margin: auto;
  }

  h2 {
    margin-left: -10px;
    margin-bottom: -45px;
    font-size: 18px;
    padding-left: auto;
    padding: 16px;
    color: ${cores.darkPink};
    text-decoration: none;
    margin-top: -10px;
    padding-bottom: 40px;
  }

  p {
    margin-left: -10px;
    text-decoration: none;
    font-size: 15px;
    padding-left: 40px;
    padding: 20px;
    color: ${cores.darkPink};
  }

  .cardapio {
    border-radius: 5px;
    border: 1px solid #f15a5a;
    padding-bottom: 25px;
    margin-left: 50px;
    padding-right: auto;
    padding: auto;
  }
`
