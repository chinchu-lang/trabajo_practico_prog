import { useState } from "react";

export default function useTarea() {
    const [prioridad, set] = useState("");
    const [titulo, set] = useState("");
    const [categoria, set] = useState("");
    const [descripcion, set] = useState("");

    

    const cambiarDato = (campo, valor) => {
        const opciones = {
            prioridad: (valor) => setPrioridad(valor),
            titulo: (valor) => setTitulo(valor),
            categoria: (valor) => setCategoria(valor),
            descripcion: (valor) => setDescripcion(valor),
        }

        opciones[campo](valor);
    }

    return [
        {prioridad, titulo, categoria, descripcion},
        cambiarDato
    ]
}