import styled from 'styled-components'
import { cores } from '../../styles'

export const Card2 = styled.div`
  background-color: ${cores.white};
  padding-top: 82px;
  margin-bottom: 75px;
  width: 472px;
  padding-right: 170px;
  padding-bottom: 150px;
  padding-left: 15px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  margin-left: 171px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;

  img {
    width: 472px;
    height: 217px;
  }

  h2 {
    margin-left: -10px;
    margin-bottom: -62px;
    font-family: robot;
    font-size: 18px;
    padding-left: auto;
    padding: 16px;
    color: ${cores.darkPink};
    text-decoration: none;
    margin-top: -10px;
    width: 300px;
    font-family: 'Roboto';
    font-weight: 700;
    line-height: 21.09px;
    letter-spacing: 0%;px;
  }

  h3 {
    margin-left: 400px;
    margin-bottom: -68px;
    font-family: robot;
    font-size: 18px;
    padding-left: auto;
    padding: 16px;
    color: ${cores.darkPink};
    text-decoration: none;
    margin-top: 8px;
    padding-bottom: 50px;
  }

  p {
    margin-left: -10px;
    margin-top: -10px;
    font-family: Roboto;
    text-decoration: none;
    font-size: 14px;
    padding-left: 40px;
    padding: 20px;
    color: ${cores.darkPink};
    margin-botom: -10px;
  }

  .cardapio {
    border-radius: 1px;
    border: 1px solid #f15a5a;
    padding-bottom: 25px;
    padding-right: auto;
    padding: auto;
  }

  .cardapio_2 {
    margin-left: 80px;
    border-radius: 1px;
    border: 1px solid #f15a5a;
    padding-bottom: 25px;
    padding-right: auto;
    padding: auto;
  }

  .container-star img {
    width: 21px;
    height: 20px;
    margin-left: 444px;
    margin-right: 8px;
    margin-top: -14px;
    margin-right: -8px;
  }
`
