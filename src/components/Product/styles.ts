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
