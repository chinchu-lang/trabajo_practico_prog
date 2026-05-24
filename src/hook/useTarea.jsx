import { useState } from "react";

export default function useTarea() {
    const [prioridad, setPrioridad] = useState("");
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");

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