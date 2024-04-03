import React, { useState, useEffect } from 'react'
import '../Styles/StylesComponents/5.Titulo.css'

function Titulo() {

    const [Titulo, setTitulo] = useState([])

    useEffect(() => {
        const getTitulo = () => {
            fetch('http://localhost:4000/carcesorios/T1')
                .then(res => res.json())
                .then(res => setTitulo(res))
        }
        getTitulo()
    }, [])


    return (
        <section id="Titulo_categoria">
            {Titulo.map(Titulo => (
                <h1 class="Contenido_Titulo" key={Titulo.id_titulo}>{Titulo.nombre_titulo}</h1>
            ))}
        </section>
    )
}
export default Titulo;