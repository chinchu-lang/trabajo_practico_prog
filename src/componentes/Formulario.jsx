import { useState } from "react";

export default function Formulario({ tareas }) {
    const [titulo, setTitulo] = useState("")
    const [categoria, setCategorias] = useState("-1")
    const [prioridad, setPrioridad] = useState("-1")
    const [descripcion, setDescripcion] = useState("")

    const hanlderSubmit = (e) => {
        e.preventDefault();

        const tarea = {
            titulo,
            categoria,
            prioridad,
            descripcion,
        }
    }

    return (



        <><input
            type="text"
            placeholder="titulo"
            onChange={(e) => setTitulo(e.target.value)}
            value={titulo} />
            <input
            type="text"
            placeholder="descripcion"
            onChange={(e) => setDescripcion(e.target.value)}
            value={descripcion} />
            
            
            
            <><><select onChange={(e) => setCategorias(e.target.value)}
                value={categoria}
            >
                <option value="-1" disabled>Seleccionar una prioridad</option>
                <option value="hogar">Alumno</option>
                <option value="escuela">Docente</option>
                <option value="trabajo">Docente</option>
                <option value="particular">Docente</option>
            </select>
                <select
                    onChange={(e) => setPrioridad(e.target.value)}
                    value={prioridad}
                >
                    <option value="-1" disabled>Seleccionar una prioridad</option>
                    <option value="leve">leve</option>
                    <option value="importante">importante</option>
                    <option value="urgente">urgente</option>
                </select></><button type="submit">Guardar</button></></>
    )
}