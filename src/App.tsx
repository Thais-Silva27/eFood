import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalCSS } from './styles'
import Home from './pages/Home'
import Menu from './pages/Menu'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
