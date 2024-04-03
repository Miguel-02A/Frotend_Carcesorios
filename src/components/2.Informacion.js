import React, { useState, useEffect } from 'react'
import '../Styles/StylesComponents/2.Informacion.css'
import Logo from '../Assets/1.Logo/Logo.png'
import Carrito from '../Assets/2.Iconos/1.Carrito.png'


function Informacion(LogoProps){

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
        <article id="Informacion">

            <nav class="Logo">
                <ul>
                    <li><a href={LogoProps.link1}><img src={Logo} alt="Logo"/></a></li>
                </ul>
            </nav>

            {Numero.map(Numero => (
                <h1 class="Tel" key={Numero.id_contacto}>Tel:+57-{Numero.telefono}</h1>
            ))}

            <nav class="Carrito">
                <ul>
                    <li><a href={LogoProps.link2}><img src={Carrito} alt="Logo"/></a></li>
                </ul>
            </nav>

        </article>
    )
}

export default Informacion;