import { useState } from 'react'
import './App.css'
import Controles from './components/Controles'
import Display from './components/Display'

function App() {
  const [partido, setPartido] = useState({
    golesLocal: 0,
    golesVisitante: 0
  })

  const onGolLocal = () => {
    setPartido({ ...partido, golesLocal: partido.golesLocal + 1 })
  }
  const onGolVisitante=()=> {
    setPartido({...partido,golesVisitante: partido.golesVisitante + 1})
  }

  return (
    <div className='container'>
      <h1>Partido</h1>
      <Controles onGolLocal={onGolLocal} onGolVisitante={onGolVisitante} />
      <Display partido={partido} />
    </div>
  )
}

export default App
