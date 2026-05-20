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
//cambiarlo a dispocion
// export default function App() {
//   const [personas, setPersonas] = useState(tareasDefault);
    
//     let nuevasPersonas = [...personas];
//     nuevasPersonas.push(persona);
//     setPersonas(nuevasPersonas);
//   }

//   return (
//     <div className="App">
//       <h1>Componente APP</h1>
//       <div className="Contenedor">
//       <Formulario
//         guardar={(persona) => guardar(persona)}
//       />
//       <Listado
//         personas={personas}
//       />
//       </div>
//     </div>
//   )
  
