import Tarjeta from "./Tarjeta";

export default function ListadoDeTareas({ tareas, eliminar }) {

    return (
        <div style={{ flex: 3 }}>
            <div className="ListadoDeTareas">
                {tareas.map((tarea) =>
                    <Tarjeta
                        key={tarea.id}
                        prioridad={tarea.prioridad}
                        titulo={tarea.titulo}
                        categoria={tarea.categoria}
                        descripcion={tarea.descripcion}
                        eliminar={() => eliminar(tarea.id)}
                    />
                )}
            </div>
        </div>
    )
}