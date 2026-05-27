import { useState } from "react";
 
const ESTADOS = ["pendiente", "en proceso", "finalizado"];
 
export default function Tarjeta({ titulo, categoria, prioridad, descripcion, eliminar }) {
    const [estadoIndex, setEstadoIndex] = useState(0);
 
    const avanzarEstado = () => {
        setEstadoIndex((prev) => Math.min(prev + 1, ESTADOS.length - 1));
    }
 
    return (
        <div className={`Tarjeta ${prioridad} estado-${estadoIndex}`}>
            <span
                className="Eliminar"
                onClick={() => eliminar()}
            >X</span>
            <h1>{prioridad}</h1>
            <h2>{titulo}</h2>
            <h2>{categoria}</h2>
            <h3>{descripcion}</h3>
            <button className="BtnEstado" onClick={avanzarEstado}>
                {ESTADOS[estadoIndex]}
            </button>
        </div>
    )
}
 