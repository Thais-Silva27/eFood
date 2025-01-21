import { BrowserRouter } from 'react-router-dom'
import { GlobalCSS } from './styles'
import Rotas from './Routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
