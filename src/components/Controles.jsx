const Controles = ({ onGolLocal, onGolVisitante, tarjetasAmLocal, tarjetasRoLocal, tarjetasAmVisitante, tarjetasRoVisitante }) => {
  return (
    <div className="controles">
      <div>
        <h3>Local</h3>
        <button onClick={() => onGolLocal()}>⚽ Gol</button>
        <button onClick={()=> tarjetasAmLocal()}>🟨 Amarilla</button>
        <button onClick={()=> tarjetasRoLocal()}>🟥 Roja</button>
      </div>
      <div>
        <h3>Visitante</h3>
        <button onClick={() => onGolVisitante()}>⚽ Gol</button>
        <button onClick={()=> tarjetasAmVisitante()}>🟨 Amarilla</button>
        <button onClick={()=> tarjetasRoVisitante()}>🟥 Roja</button>        
      </div>
    </div>
  )
}

export default Controles