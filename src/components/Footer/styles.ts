import styled from 'styled-components'
import { cores } from '../../styles'

export const RodaPe = styled.footer`
  background-color: ${cores.pink};
  padding: 20px;
  width: 100%;
  height: 320px;
  margin-left: -16px;
  margin-right: 10px;
  margin-top: -80px;
  margin: auto;

  img {
    margin-left: 700px;
    margin-top: 45px;
    padding-bottom: 115px;
    margin-botton: 200px;
    border: 1px solid white;
    border-radius: 3px;
    cursor: pointer;
    padding: 2px;
  }

  ul {
    display: flex;
    margin-left: 900px;
    margin-top: -140px;
    padding: 10px;
  }

  li {
    margin-left: -540px;
    padding-top: 25px;
    margin-bottom: -100px;
    cursor: pointer;
    margin-right: -40px;
    padding-right: 2px;
    gap: 15px;
    display: flex;
    padding: 5px;
    margin-top: 15px;
  }

  li img {
    margin-left: 340px;
    margin-right: 240px;
    border: 1px solid white;
    border-radius: 23px;
    cursor: pointer;
    padding: 2px;
    margin-top: 120px;
    display: flex;
    gap: 100px;
    &:hover {
      transform: scale(1.1);
    }
  }

  p {
    font-size: 10px;
    color: ${cores.lightPink};
    text-align: center;
    margin-left: 350px;
    display: block;
    margin-right: 300px;
    margin-top: 95px;
    padding: 10px;
    text-align: center;
  }
`
