import { Card } from './styles'
import produtos1 from '../../assets/images/produtos1.png'
import produtos2 from '../../assets/images/produtos2.png'

const Product = () => (
  <Card>
    <div className="cardapio">
      <img src={produtos1} alt="eFood" className="Pizza" />
      <img src={produtos2} alt="eFood" className="Pizza" />
      <img src={produtos1} alt="eFood" className="Pizza" />
    </div>
  </Card>
)

export default Product
