import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  justify-content: space-between;
  margin-bottom: 50px;
  margin-left: 15px;
  padding: auto;
  margin-right: 45px;
  margin-top: 25px;
  width: 320px;

  img {
    margin-left: -8px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 8px;
    padding: 8px;
    width: 304px;
    height: 167px;
    gap: 10px;
    object-fit: cover;
    margin-right: -8px;
    margin-bottom: -25px;
    margin-top: -10px;
  }

  p {
    widht: 304px;
    height: 88px;
    padding-top: 8px;
    font-family: Roboto;
    margin-left: -30px;
    font-size: 14px;
    padding-left: 80px;
    padding: 35px;
    color: ${cores.white};
    margin-right: -20px;
    margin-bottom: 50px;
    margin-top: -12px;
  }

  h2 {
    margin-left: -8px;
    text-decoration: none;
    font-size: 16px;
    padding-left: 60px;
    padding: 8px;
    padding-bottom: 8px;
    margin-top: 10px;
    color: ${cores.white};
    margin-right: 80px;
    margin-bottom: -18px;
  }

  .menu1 {
    border: 1px solid #f15a5a;
    width: 320px;
    height: 338px;
    padding-bottom: 40px;
    margin-left: px;
    padding-right: 20px;
    padding: 10px;
    margin-right: 300px;
    padding-left: 10px;
    background-color: ${cores.darkPink};
  }

  .menu2 {
    border: 1px solid #f15a5a;
    width: 320px;
    height: 338px;
    padding-bottom: 40px;
    margin-left: -300px;
    padding-right: 20px;
    padding: 10px;
    margin-right: 300px;
    padding-left: 10px;
    background-color: ${cores.darkPink};
  }

  .menu3 {
    border: 1px solid #f15a5a;
    width: 320px;
    height: 338px;
    padding-bottom: 40px;
    margin-left: -290px;
    padding-right: 20px;
    padding: 10px;
    margin-right: 300px;
    padding-left: 10px;
    background-color: ${cores.darkPink};
  }

  .menu-container {
    margin-left: 171px;
    width: 40px;
    width: 320px;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    gap: 32px; /* Espaçamento entre os itens */
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
      .menu-container {
        width: 100%; /* Para telas menores, a largura será 100% */
        padding: 10px; /* Reduz o padding em telas menores */
      }
    }
  }
`
