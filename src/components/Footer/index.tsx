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
    <div className="container">
      <ul className="social-media-list">
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram.com" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook.com" />
          </a>
        </li>
        <li>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="X.com" />
          </a>
        </li>
      </ul>
    </div>
    <p>
      A Efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br />
      dos produtos é toda do estabelecimento contratado.
    </p>
  </RodaPe>
)

export default Rodape
