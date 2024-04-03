import React, { useState, useEffect } from 'react'
import axios from 'axios';


import '../../Styles/StylesComponents/6.ListaProductos.css'
import '../../Styles/StylesComponents/5.Titulo.css'

import HeaderUnoCliente from '../../components/10.HeaderCliente';
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import Carrusel from '../../components/4.Carrusel';
import Busqueda from '../../components/13.Busqueda';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';



const Volantes = () => {

    const [Titulo, setTitulo] = useState([])
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getTitulo = () => {
            fetch('http://localhost:4000/carcesorios/PaginaAlerones/Titulo')
                .then(res => res.json())
                .then(res => setTitulo(res))
        }
        getTitulo()
    }, [])

    useEffect(() => {
        const Productos = async () => {
            try {
                const response = await axios.get('http://localhost:4000/carcesorios/PaginaAlerones');
                setProductos(response.data);
            } catch (error) {
                console.error('Error al llamar a la API:', error);
            }
        };
        Productos();
    }, []);

    const idDelProducto = (id_producto) => {
        localStorage.setItem('id_producto_seleccionado', id_producto);
    };

    return (
        <div>
            <HeaderUnoCliente />
            <Informacion link1={"/PrincipalCliente"} link2={'/CarritoCliente'} />
            <HeaderDos link1={"/PrincipalCliente"} link2={'/OfertasCliente'} link3={'/AyudaCliente'} />
            <Carrusel />
            <section id="Titulo_categoria">
                {Titulo.map(Titulo => (
                    <h1 class="Contenido_Titulo" key={Titulo.id_titulo}>{Titulo.nombre_titulo}</h1>
                ))}
            </section>

            <Busqueda />

            <section id="ListaProductos">
                {productos.map((producto, index) => (
                    <div className="caja" key={index}>
                        <a href='/DescripcionProductoCliente' onClick={() => idDelProducto(producto.id_producto)}><img src={producto.url_imagen_producto} alt={producto.id_producto} /><h2>{producto.nombre_producto}</h2><h4>{producto.precio}$</h4></a>
                    </div>
                ))}
            </section>

            <PieUno />
            <PieDos />
        </div>
    )
}
export default Volantes;