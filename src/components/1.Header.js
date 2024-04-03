import React from 'react'
import '../Styles/StylesComponents/1.Header.css'

function HeaderUno(){
    return(
        <header id="Cabecera">

            <div class="MenuCabecera">
                <nav class="Menu1">
                    <ul>
                        <li class="M1"><a href="/iniciarsesion">Iniciar sesión</a></li>
                        <li class="M2"><a href="/CrearCuenta">Crear cuenta</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default HeaderUno;