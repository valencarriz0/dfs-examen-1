import { useState } from 'react'
import './App.css'
import Controles from './components/Controles'
import Display from './components/Display'

function App() {
  const [partido, setPartido] = useState({
    golesLocal: 0,
    golesVisitante: 0,
    amarillaLocal: 0,
    rojaLocal: 0,
    amarillaVisitante: 0,
    rojaVisitante: 0,
  })

  const onGolLocal = () => {
    setPartido({ ...partido, golesLocal: partido.golesLocal + 1 })
  }
  const onGolVisitante=()=> {
    setPartido({...partido,golesVisitante: partido.golesVisitante + 1})
  }
  const tarjetasAmLocal=()=> {
    setPartido({...partido,amarillaLocal: partido.amarillaLocal+1})
  }
  const tarjetasRoLocal=()=> {
    setPartido({...partido,rojaLocal: partido.rojaLocal+1})
  }
  const tarjetasAmVisitante=()=> {
    setPartido({...partido,amarillaVisitante: partido.amarillaVisitante+1})
  }
  const tarjetasRoVisitante=()=> {
    setPartido({...partido,rojaVisitante: partido.rojaVisitante+1})
  }

  return (
    <div className='container'>
      <h1>Partido</h1>
      <Controles onGolLocal={onGolLocal} onGolVisitante={onGolVisitante} tarjetasAmLocal={tarjetasAmLocal} tarjetasAmVisitante={tarjetasAmVisitante} />
      <Display partido={partido} />
    </div>
  )
}

export default App
