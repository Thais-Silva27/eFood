import { LogoBar } from './styles'
import topo from '../../assets/images/topo.png'
import { GlobalCSS } from '../../styles'

const Logo = () => (
  <LogoBar>
    <GlobalCSS />
    <>
      <div className="principal">
        <img src={topo} alt="eFood" />
      </div>
      <div className="restaurant">
        <p>
          <strong>Restaurantes</strong>
        </p>
      </div>
      <div className="carrinho">
        <p>
          <strong>0 produto (s) no carrinho</strong>
        </p>
      </div>
    </>
  </LogoBar>
)

export default Logo
