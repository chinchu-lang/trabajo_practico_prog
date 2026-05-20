import { useState } from "react"
import Listado from "./componentes/L"
import Formulario from "./componentes/Formulario"
import "./App.css"

const tareasDefault = [
    {titulo: "resolver tarea de prog", categoria: "escuela", prioridad: "urgente",descripcion:"entregar en tiempo y forma la tarea que pide el profe"},
    {titulo: "resolver tarea de prog", categoria: "escuela", prioridad: "urgente",descripcion:"entregar en tiempo y forma la tarea que pide el profe"},
    {titulo: "resolver tarea de prog", categoria: "escuela", prioridad: "urgente",descripcion:"entregar en tiempo y forma la tarea que pide el profe"},
    {titulo: "resolver tarea de prog", categoria: "escuela", prioridad: "urgente",descripcion:"entregar en tiempo y forma la tarea que pide el profe"},
]
export default function App() {
  const [tarea, setTarea] = useState(tareasDefault);
    
    let nuevastarea = [...tarea];
    nuevastarea.push(tarea);
    setTarea(nuevastarea);
  }

  return (
    <div className="App">
      <h1>Componente APP</h1>
      <div className="Contenedor">
      <Formulario
        tarea={(tarea) => guardar(tarea)}
      />
      <Listado
        tarea={tarea}
      />
      </div>
    </div>
  )
  
