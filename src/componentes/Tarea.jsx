import Tarjeta from "./Tarjeta";


export default function ListadoDeTareas({tareas}) {

    return(
        <div style={{flex: 3}}> 
            <h1>ListadoDeTareas</h1>
            <div className="ListadoDeTareas">
            {tareas.map((tareas, index) =>

            <Tarjeta 
                key={tareas.id}
                prioridad={tareas.prioridad}
                titulo={tareas.titulo}
                categoria={tareas.categoria}
                descripcion={tareas.descripcion}
                eliminar={() => eliminar(tareas.id)}
            />

            )}
            </div>
        </div>
    )
}