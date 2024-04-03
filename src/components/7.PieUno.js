import React, { useState, useEffect } from 'react'
import '../Styles/StylesComponents/7.PieUno.css'

function PieUno(){

    const [Numero, setNumero] = useState([])

    useEffect(() => {
        const getNumero = () => {
            fetch('http://localhost:4000/carcesorios/Contacto')
                .then(res => res.json())
                .then(res => setNumero(res))
        }
        getNumero()
    }, [])

    return(
        <footer id="Pie_1">

            <ul class="menupie">
                <li class="contactenos"><h2>Contáctenos</h2>{Numero.map(Numero => (
                <h4 key={Numero.id_contacto}>Tel:+57-{Numero.telefono} <br/> {Numero.correo}</h4>
            ))}
            </li>
                <li class="reportar"><a href="#"><h2>Reportar un problema</h2></a></li>
                <li class="redes"><h2>Redes</h2><a href="https://twitter.com/?lang=es">Twitter</a><a href="https://www.youtube.com/?hl=es">Youtube</a><a href="https://es-la.facebook.com/">Facebook</a><a href="https://www.instagram.com/">Instagram</a></li>
            </ul>

        </footer>
    )
}
export default PieUno;