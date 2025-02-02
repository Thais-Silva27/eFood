import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  justify-content: space-between;
  margin-bottom: 50px;
  margin-left: 50px;
  padding: auto;
  margin-right: 45px;
  margin-top: 25px;

  img {
    margin-left: -10px;
    padding-left: 20px;
    max-width: 400px;
    object-fit: cover;
    padding: 10px;
    margin-right: -15px;
    margin-bottom: -20px;
    margin-top: -10px;
  }

  p {
    margin-left: -25px;
    font-size: 13px;
    padding-left: 80px;
    padding: 30px;
    color: ${cores.white};
    margin-right: -20px;
    margin-bottom: -15px;
  }

  h2 {
    margin-left: -15px;
    text-decoration: none;
    font-size: 14px;
    padding-left: 60px;
    padding: 20px;
    color: ${cores.white};
    margin-right: 80px;
    margin-bottom: -40px;
  }

  .menu1 {
    border-radius: 5px;
    border: 1px solid #f15a5a;
    padding-bottom: 35px;
    margin-left: 30px;
    padding-right: 20px;
    padding: 10px;
    margin-right: 310px;
    padding-left: 10px;
    background-color: ${cores.darkPink};
  }

  .menu2 {
    border-radius: 5px;
    border: 1px solid #f15a5a;
    padding-bottom: 35px;
    margin-left: -280px;
    padding-right: 20px;
    padding: 10px;
    margin-right: 710px;
    padding-left: 10px;
    background-color: ${cores.darkPink};
  }

  .menu3 {
    border-radius: 5px;
    border: 1px solid #f15a5a;
    padding-bottom: 35px;
    margin-left: -680px;
    padding-right: 20px;
    padding: 10px;
    margin-right: 71px;
    padding-left: 10px;
    background-color: ${cores.darkPink};
  }

  .menu-container {
    margin-top: 25px;
    display: flex;
    justify-content: space-between; /* Espaço entre os itens */
    gap: 5px; /* Espaçamento entre os itens */
  }
`
