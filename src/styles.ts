import { createGlobalStyle } from 'styled-components'

// Definir o objeto cores fora do createGlobalStyle
export const cores = {
  darkPink: '#F15A5A', // Cor rosa escuro
  pink: '#E85353', // Cor rosa claro
  lightPink: '#FFF8F2', // Cor rosa muito claro
  white: '#ffffff', // Cor branca
  lightGray: '#e66767d2', // Cor cinza claro com opacidade
  black: '#000000'
}

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0; /* Remove a margem padrão de todos os elementos */
    padding: 0; /* Remove o padding padrão de todos os elementos */
    box-sizing: border-box; /* Define o box-sizing como border-box para todos os elementos */
    font-family: 'Roboto', sans-serif; /* Define a fonte padrão como Roboto */
}
`
