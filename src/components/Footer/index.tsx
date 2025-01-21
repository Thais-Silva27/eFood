import { RodaPe } from './styles'

import topo from '../../assets/images/topo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import { GlobalCSS } from '../../styles'

const Rodape = () => (
  <RodaPe>
    <GlobalCSS />
    <img src={topo} alt="Rodape" />
    <ul>
      <li>
        <img src={instagram} alt="instagram" />
      </li>
      <li>
        <img src={facebook} alt="facebook" />
      </li>
      <li>
        <img src={twitter} alt="twitter" />
      </li>
    </ul>
    <p>
      A Efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br />
      dos produtos é toda do estabelecimento contratado.
    </p>
  </RodaPe>
)

export default Rodape
