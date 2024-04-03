import React from 'react'
import '../Styles/StylesComponents/3.HeaderDos.css'

function HeaderDos(HeaderDos){
    return(
        <header id="Cabecera2">

            <div class="MenuCabecera2">
                <nav class="Menu2">
                    <ul>
                        <li class="m1"><a href={HeaderDos.link1}><h4 class="C1">Inicio</h4></a></li>
                        <li class="m2"><a href={HeaderDos.link2}><h4 class="C1">%Ofertas</h4></a></li>
                        <li class="m3"><a href={HeaderDos.link3}><h4 class="C1">Ayuda/PQR</h4></a></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}
export default HeaderDos;