import { Link } from 'react-router-dom'; 
import lista from '../../assets/images/lista.png'; 
import { Card2 } from './styles'; 

const Listagem = () => (
  <Card2> 
    <Link to="/Menu">
      <img src={lista} alt="Lista de itens" /> 
    </Link>
  </Card2>
);

export default Listagem; 
