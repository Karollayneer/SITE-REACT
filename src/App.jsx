import './App.css'

// reaproveitando estrutura
import { Outlet } from 'react-router-dom'

// importando os componentes
import Menu from './components/Menu'


function App() {

  return (
    <div className="App">
      <Menu />
      <Outlet />
      <p>footer</p>
    </div>
  )
}

export default App
