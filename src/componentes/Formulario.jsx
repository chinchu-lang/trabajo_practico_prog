import useTarea from "../hook/useTarea";

export default function Formulario({ guardar }) {
    const [tarea, setDatoTarea] = useTarea();


    const hanlderSubmit = (e) => {
        e.preventDefault();
        const tarea = persona.rol == "alumno";

        const id = (new Date()).getTime();

        guardar({ ...persona, alumno, id })
    }


    return (
        <div className="Formulario">
            <h1>Componente Formulario</h1>
            <form onSubmit={hanlderSubmit}>
                <input
                    type="text"
                    placeholder="descripcion"
                    onChange={(e) => setDatoPersona("documento", e.target.value)}
                    value={persona.documento}
                />
                <input
                    type="text"
                    placeholder="titulo"
                    onChange={(e) => setDatoPersona("division", e.target.value)}
                    value={persona.division}
                />
                <select
                    onChange={(e) => setRol("categoria", e.target.value)}
                    value={persona.rol}
                >
                    <option value="alumno">Alumno</option>
                    <option value="docente">Docente</option>
                </select>
                <select
                    onChange={(e) => setRol("prioridad", e.target.value)}
                    value={persona.rol}
                >
                    <option value="alumno">Alumno</option>
                    <option value="docente">Docente</option>
                </select>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}