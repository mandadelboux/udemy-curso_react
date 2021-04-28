import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComPareametro from './components/basicos/ComParametro'

const tag = <strong>Olá React!</strong>

ReactDOM.render( 
  <div>
      <Primeiro></Primeiro>
      <ComPareametro titulo="Segundo componente" subtitulo='Show de bola'/>
  </div>,  
    document.getElementById('root') 
)