import { useState } from "react"
import ListadoDeTareas from "./componentes/Tarea"
import Formulario from "./componentes/Formulario"
import "./App.css"

const tareasDefault = [
    { id: 1, titulo: "resolver tarea de prog", categoria: "escuela", prioridad: "urgente", descripcion: "entregar en tiempo y forma la tarea que pide el profe" },
    { id: 2, titulo: "resolver tarea de prog", categoria: "escuela", prioridad: "urgente", descripcion: "entregar en tiempo y forma la tarea que pide el profe" },
    { id: 3, titulo: "resolver tarea de prog", categoria: "escuela", prioridad: "urgente", descripcion: "entregar en tiempo y forma la tarea que pide el profe" },
    { id: 4, titulo: "resolver tarea de prog", categoria: "escuela", prioridad: "urgente", descripcion: "entregar en tiempo y forma la tarea que pide el profe" },
];

export default function App() {
    const [tareas, setTareas] = useState(tareasDefault);

    const guardar = (tarea) => {
        console.log(tarea);

        let nuevasTareas = [...tareas];
        nuevasTareas.push(tarea);
        setTareas(nuevasTareas);
    }

    const eliminar = (tarea_id) => {
        const nuevasTareas = tareas.filter((tarea) => tarea.id != tarea_id);

        console.log(nuevasTareas);

        setTareas(nuevasTareas);
    }

    return (
        <div className="App">
            <h1>Componente APP</h1>
            <div className="Contenedor">
                <Formulario
                    guardar={(tarea) => guardar(tarea)}
                />
                <ListadoDeTareas
                    tareas={tareas}
                    eliminar={(tarea_id) => eliminar(tarea_id)}
                />
            </div>
        </div>
    )
}