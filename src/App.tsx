import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalCSS } from './styles'
import Home from './pages/Home'
import Menu from './pages/Menu'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS /> {/* Coloque o GlobalCSS aqui, fora das rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
