import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCSS } from './styles'
import Home from './pages/Home'
import Menu from './pages/Menu'

// Define suas rotas aqui
const rotas = createBrowserRouter([
  {
    path: '/', // Rota para a página inicial
    element: <Home />
  },
  {
    path: '/', // Rota para a página Principal
    element: <Menu />
  }
])

function App() {
  return (
    <>
      <GlobalCSS />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
