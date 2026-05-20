import Tarjeta from "./Tarjeta";


export default function ListadoDeTareas({tareas}) {

    return(
        <div style={{flex: 3}}> 
            <h1>ListadoDeTareas</h1>
            <div className="ListadoDeTareas">
            {tareas.map((tareas, index) =>

            <Tarjeta 
                key={index}
                prioridad={persona.prioridad}
                titulo={persona.titulo}
                categoria={persona.categoria}
                descripcion={persona.descripcion}

            />

            )}
            </div>
        </div>
    )
}
