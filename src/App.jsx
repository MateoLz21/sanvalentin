import { useState } from 'react'
import './App.css'

function App() {
  
  const imagenes = ['imagen1','imagen2','imagen3','imagen4','imagen5','imagen6']
  const [indice, setIndice] = useState(0);
  const [aceptado, setAceptado] = useState(false);
  const [posicionNo, setPosicionNo] = useState({ top: '50%', left: '50%' });
  const [movimientos, setMovimientos] = useState(0);

  function boton_si() {
    setAceptado(true);
  }

  function boton_no() {
    setIndice((prevIndice) => (prevIndice + 1) % imagenes.length);
    setMovimientos(0)
  }

  function moverBotonNo() {
    if (movimientos < 4) {
      const nuevaPosicion = {
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`
      };
      setPosicionNo(nuevaPosicion);
      setMovimientos(movimientos + 1);
    }
  }

  return (
    <>
      <main className="contenedor">
        <div className='tarjeta'>
          <h2>PARA MI AMORCITO ❤️</h2>
          <h4>¿Te gustaria ser mi san Valentin?</h4>
          <img src={aceptado ? `/img/foto_aceptado.jpeg` : `/img/${imagenes[indice]}.jpg`} alt="imagen" />
          {aceptado ? (<>
            <h3>🥰😍 I LOVE U 😍🥰</h3>
            <p>🍰 La voy a recoger el 14 de Febrero 🌹</p>
          </>
          ) : (
          <div className='botones'>
            <button
              className='boton boton_si'
              type="button"
              onClick={boton_si }
            >
              Si
            </button>
            <button
              type="button"
              className='boton boton_no'
              onClick={boton_no }
              onMouseEnter={moverBotonNo} 
              style={{ position: 'absolute', top: posicionNo.top, left: posicionNo.left }}
            >
              No
            </button>
          </div>
          )}
        </div>
      </main>
    </>
  )
}

export default App
