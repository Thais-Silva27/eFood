import lista from '../../assets/images/lista.png'
import lista2 from '../../assets/images/lista2.png'
import { Card2 } from './styles'
import Bottom from '../../components/Bottom'

function Principal() {
  return (
    <Card2>
      <div className="cardapio">
        <img src={lista} alt="eFood" className="Sushi" />
        <h2>Hioki Sushi</h2>
        <p>
          Peça já o melhor da culinária japonesa no conforto da sua casa! <br />
          Sushis frescos, sashimis deliciosos e pratos quentes irresistiveis.{' '}
          <br />
          Entrega rápida, embalagem cuidadosa e qualidade garantida. <br />
          Experimente o Japão sem sair do seu lar com nosso delivery!
        </p>
        <Bottom />
      </div>
      <div className="cardapio">
        <img src={lista2} alt="eFood" className="Massa" />
        <h2>La Dolce Trattoria</h2>
        <p>
          La Dolce Trattoria leva a autêntica cozinha italiana até você!
          <br />
          Desfrute de massas caseiras,pizzas deliciosas e risotos incriveis,
          <br />
          tudo no conforto do seu lar. Entrega rápida, pratos bem <br />
          embalados e sabor inesquecível.Peça já!
        </p>
        <Bottom />
      </div>
    </Card2>
  )
}
export default Principal
