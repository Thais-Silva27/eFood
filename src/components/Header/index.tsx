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
      <div className="container-titulo">
        <strong>
          <p>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </p>
        </strong>
      </div>
    </>
  </HeaderBar>
)

export default Header
