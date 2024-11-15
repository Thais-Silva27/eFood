import { Link } from 'react-router-dom'
import lista from '../../assets/images/lista.png'
import { Card2 } from './styles'

const Listagem = () => (
  <Card2>
    {/* Link com a imagem dentro */}
    <Link to="/">
      <img src={lista} alt="eFood" />
    </Link>
  </Card2>
)

export default Listagem
