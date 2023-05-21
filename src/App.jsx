import './App.css'

// reaproveitando estrutura
import { Outlet } from 'react-router-dom'

// importando os componentes
import Menu from './components/Menu'
import Footer from './components/Footer'


function App() {

  return (
    <div className="App">
      <Menu />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
