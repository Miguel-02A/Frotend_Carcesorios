import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../Styles/StylesComponents/9.HeaderAdmin.css';

function HeaderUnoAdmin() {

    const [Nombre, setNombre] = useState([]);
    const userData = JSON.parse(localStorage.getItem('userData'));  

    useEffect(() => {
        const Productos = async () => {
            try {
                const response = await axios.get('http://localhost:4000/carcesorios/ADMIN/Datos', {
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
        <header id="CabeceraAdmin">
            <div class="Menu_cabeceraAdmin">
                <nav class="Inicio_registroAdmin">
                    <ul class="navAdmin">
                        <li>
                            {Nombre.map((usuario, index) => (
                                <a href="#" key={index}>
                                    <h4 class='NombreAdmin'>{usuario.primer_nombre} {usuario.primer_apellido} - Administrador ▼</h4>
                                </a>
                            ))}

                            <ul class="minimenuAdmin">
                                <li><a href="/PerfilAdmin"><p>Perfil administrador</p></a></li>
                                <li><a href="/EditarPerfilesAdmin"><p>Administrar clientes</p></a></li>
                                <li><a href="/PedidosAdmin"><p>Pedidos clientes</p></a></li>
                                <li><a href="/iniciarsesion" onClick={cerrarSesion}><p>Cerrar sesión</p></a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default HeaderUnoAdmin;
