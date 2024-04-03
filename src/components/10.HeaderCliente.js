import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../Styles/StylesComponents/10.HeaderCliente.css';

function HeaderUnoCliente() {

    const [Nombre, setNombre] = useState([]);
    const userData = JSON.parse(localStorage.getItem('userData'));                    
    useEffect(() => {
        const Productos = async () => {
            try {
                const response = await axios.get('http://localhost:4000/carcesorios/Cliente/Datos', {
                    params: {
                        correo: userData.correo 
                    }
                });
                setNombre(response.data);
            } catch (error) {
                console.error('Error al llamar a la API:', error);
            }
        };
        Productos();
    }, []);


    const cerrarSesion = () => {
        localStorage.removeItem('documentoUsuario');
        localStorage.removeItem('userData');
    };


    return (
        <header id="CabeceraCliente">
            <div class="Menu_cabeceraCliente">
                <nav class="Inicio_registroCliente">
                    <ul class="navCliente">
                        <li>
                            {Nombre.map((usuario, index) => (
                                <a href="#" key={index}>
                                    <h4 class='NombreCliente'>{usuario.primer_nombre} {usuario.segundo_nombre} {usuario.primer_apellido} {usuario.segundo_apellido} ▼</h4>
                                </a>
                            ))}

                            <ul class="minimenuCliente">
                                <li><a href="/PerfilCliente"><p>Perfil</p></a></li>
                                <li><a href="/ComprasCliente"><p>Mis compras</p></a></li>
                                <li><a href="/iniciarsesion" onClick={cerrarSesion}><p>Cerrar sesión</p></a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default HeaderUnoCliente;
