import React, { useState, useEffect } from 'react'
import axios from 'axios';
import HeaderUnoCliente from '../../components/10.HeaderCliente';
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import Carrusel from '../../components/4.Carrusel';
import Titulo from '../../components/5.Titulo';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';


function Principal() {

    const direccion = ['/VolantesCliente', '/PalancasCliente', '/AleronesCliente', '/TomasDeAireCliente', '/TubosEscapeCliente', '/RinesCliente', '/NeumaticosCliente', '/BodykytCliente'];

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const Productos = async () => {
            try {
                const response = await axios.get('http://localhost:4000/carcesorios');
                setProductos(response.data);
            } catch (error) {
                console.error('Error al llamar a la API:', error);
            }
        };
        Productos();
    }, []);

    const userData = JSON.parse(localStorage.getItem('userData'));
    useEffect(() => {
        const Documento = async () => {
            try {
                const response = await axios.get('http://localhost:4000/carcesorios/IniciarSesion/Documento', {
                    params: {
                        correo: userData.correo
                    }
                });
                const documento = response.data[0].documento;
                localStorage.setItem('documentoUsuario', documento);
            } catch (error) {
                console.error('Error al llamar a la API:', error);
            }
        };
        Documento();
    }, []);

    const Documento = JSON.parse(localStorage.getItem('documentoUsuario'));
    console.log("Documento del usuario:", Documento);


    return (
        <div>
            <HeaderUnoCliente />
            <Informacion link1={"/PrincipalCliente"} link2={'/CarritoCliente'} />
            <HeaderDos link1={"/PrincipalCliente"} link2={'/OfertasCliente'} link3={'/AyudaCliente'} />
            <Carrusel />
            <Titulo />
            <section id="ListaProductos">
                {productos.map((producto, index) => (
                    <div className="caja" key={index}>
                        <a href={direccion[index]}><img src={producto.url_imagen_categoria} alt={producto.id_categorias} /><h2>{producto.nombre_categoria}</h2></a>
                    </div>
                ))}
            </section>
            <PieUno />
            <PieDos />
        </div>
    )
}
export default Principal;