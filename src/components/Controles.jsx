const Controles = ({ onGolLocal, onGolVisitante }) => {
  return (
    <div className="controles">
      <div>
        <h3>Local</h3>
        <button onClick={() => { onGolLocal('local') }}>⚽ Gol</button>
        <button>🟨 Amarilla</button>
        <button>🟥 Roja</button>
      </div>
      <div>
        <h3>Visitante</h3>
        <button onClick={() => { onGolVisitante('visitante') }}>⚽ Gol</button>
        <button>🟨 Amarilla</button>
        <button>🟥 Roja</button>        
      </div>
    </div>
  )
}

export default Controles