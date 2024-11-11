import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Hero from './components/Hero'
import Listagem from './components/Listagem'
import Footer from './components/Footer'
import { GlobalCSS } from './styles'
import Home from './pages/Home'

// Definindo as rotas
const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <RouterProvider router={rotas}>
      <GlobalCSS />
      <div>
        <Hero />
        <Listagem />
        <Footer />
      </div>
    </RouterProvider>
  )
}

export default App
