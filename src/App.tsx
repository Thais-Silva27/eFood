import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCSS } from './styles'
import Home from './pages/Home'
import Menu from './pages/Menu'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/menu',
    element: <Menu />
  }
])

function App() {
  return (
    <>
      <GlobalCSS />
      <Home />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
