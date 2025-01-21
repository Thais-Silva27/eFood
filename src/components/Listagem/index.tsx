import { Link } from 'react-router-dom'
import { GlobalCSS } from '../../styles'
import Praatos from '../../components/Praatos'

const Listagem = () => (
  <>
    <GlobalCSS />
    <Link to="/Menu">
      <Praatos />
    </Link>
  </>
)

export default Listagem
