import { LogoBar } from './styles'
import logo from '../../assets/images/logo.png'

const Logo = () => (
  <LogoBar>
    <div>
      <img src={logo} alt="eFood" />
    </div>
  </LogoBar>
)

export default Logo
