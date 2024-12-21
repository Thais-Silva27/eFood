import { HeaderBar } from './styles'
import topo from '../../assets/images/topo.png'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={topo} alt="eFood" />
      <p>
        <strong>Viva experiências gastronômicas</strong>
      </p>
      <p>
        <strong>no conforto de sua casa</strong>
      </p>
    </div>
  </HeaderBar>
)

export default Header
