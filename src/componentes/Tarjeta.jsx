export default function Tarjeta({ titulo, categoria, prioridad, descripcion, eliminar }) {

    return (
        <div className="Tarjeta">
            <span
                className="Eliminar"
                onClick={() => eliminar()}
            >X</span>
            <h1>{prioridad}</h1>
            <h2>{titulo}</h2>
            <h2>{categoria}</h2>
            <h3>{descripcion}</h3>
        </div>
    )
}