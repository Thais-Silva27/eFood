import { GlobalCSS } from '../../styles'
import { BotaoStyle } from './styles'
import { useNavigate } from 'react-router-dom'

const AdicionarAoCarrinho = () => {
  const navigate = useNavigate()

  function handleClick(): void {
    navigate(' ')
  }

  return (
    <>
      <GlobalCSS />
      <BotaoStyle onClick={handleClick}>
        <p>Adicionar ao carrinho</p>
      </BotaoStyle>
    </>
  )
}

export default AdicionarAoCarrinho
