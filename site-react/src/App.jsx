import './App.css'

// reaproveitando estrutura
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <p>navbar</p>
      <h1>React Router</h1>
      <Outlet />
      <p>footer</p>
    </div>
  )
}

export default App
