import { GlobalCSS } from '../../styles'
import { Botao } from './styles'
import { useNavigate } from 'react-router-dom'

const SaibaMais = () => {
  const navigate = useNavigate() // Hook para navegação

  function handleClick(): void {
    navigate('/menu') // Caminho para a página Menu
  }

  return (
    <>
      <GlobalCSS />
      <Botao onClick={handleClick}>
        <p>Saiba mais</p>
      </Botao>
    </>
  )
}

export default SaibaMais
