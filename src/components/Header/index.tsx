import { HeaderBar } from './styles'
import topo from '../../assets/images/topo.png'
import { GlobalCSS } from '../../styles'

const Header = () => (
  <HeaderBar>
    <GlobalCSS />
    <>
      <div>
        <img src={topo} alt="eFood" />
      </div>
      <div>
        <p>
          <strong>Viva experiências gastronômicas</strong>
        </p>
        <p>
          <strong>no conforto de sua casa</strong>
        </p>
      </div>
    </>
  </HeaderBar>
)

export default Header
