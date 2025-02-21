import styled from 'styled-components'
import { cores } from '../../styles'

export const RodaPe = styled.footer`
  background-color: ${cores.lightPink};
  width: 1366px;
  height: 298px;
  margin-left: 0;
  
  img {
    width:125px
    height:57px;
    margin-left: 621px;
    margin-top: 40px;
    padding-bottom: 20px;
    cursor: pointer;
  }

  .container {
  margin-left: 400px;
  display: flex;
  align-items: center; 
  justify-content: space-between;
  display: flex;
}

.social-media-list {
  list-style: none;
  display: flex; 
  gap: 8px; 
  margin: 0;
}

.social-media-list li a img {
  width: 24px; 
  height: 38px; 
  margin-left: 230px;
  margin-right: -220px;
  margin-top: 12px;
  gap: 8px; 
}

  p {
    color: ${cores.darkPink};
    text-align: center;
    margin-left: 344px;
    margin-bottom: 40px;
    display: block;
    margin-right: 300px;
    margin-top: 15px;
    padding: 10px;
    text-align: center;
    font-family: Roboto; 
    font-weight: 400; 
    font-size: 10px; 
    line-height: 11.72px; 
    letter-spacing: 0%; 
    text-align: center; 
  }
`
