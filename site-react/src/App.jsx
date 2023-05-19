import './App.css'
// Antes de chamar o componente, este deve ser importado
import Footer from './components/footer'
import Menu from './components/menu/menu'
import './index.css'

// reaproveitando estrutura
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="App">
        {/* Formato de chamada de componentes */}
        <Menu />
        <Outlet />     
        <Footer />
      </div>

    </>
  )
}

export default App
