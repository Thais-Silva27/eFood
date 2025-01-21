import lista from '../../assets/images/lista.png'
import lista2 from '../../assets/images/lista2.png'
import { Card2 } from './styles'

function Principal() {
  return (
    <Card2>
      <div className="cardapio">
        <img src={lista} alt="eFood" className="Sushi" />
        <img src={lista2} alt="eFood" className="Pasta" />
      </div>
    </Card2>
  )
}
export default Principal
