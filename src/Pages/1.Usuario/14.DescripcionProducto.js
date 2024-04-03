import React, { useState, useEffect } from 'react'
import axios from 'axios';


import '../../Styles/StylesComponents/6.ListaProductos.css'
import '../../Styles/StylesComponents/5.Titulo.css'
import '../../Styles/StylesPages/5.DescripcionProductos.css'

import HeaderUno from '../../components/1.Header';
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';



const DescripcionProducto = () => {

        const [productos, setProducto] = useState([]);

        const idProductoSeleccionado = JSON.parse(localStorage.getItem('id_producto_seleccionado'));
        console.log(idProductoSeleccionado);
        const userData = JSON.parse(localStorage.getItem('userData'));
        console.log(userData)
        

        useEffect(() => {
                const Productos = async () => {
                        try {
                                const response = await axios.get('http://localhost:4000/carcesorios/Descripcion/Producto', {
                                        params: {
                                                idProductoSeleccionado // Aquí asumo que userData tiene una propiedad llamada "correo"
                                        }
                                });
                                setProducto(response.data);
                        } catch (error) {
                                console.error('Error al llamar a la API:', error);
                        }
                };
                Productos();
        }, []);




        return (
                <div>
                        <HeaderUno />
                        <Informacion link1={"/"} link2={'/iniciarsesion'} />
                        <HeaderDos link1={"/"} link2={'/ofertas'} link3={'/ayuda'} />
                        <section id="Titulo_categoria">
                                {productos.map(producto => (
                                        <h1 class="Contenido_Titulo" key={producto.id_titulo}>{producto.nombre_producto}</h1>
                                ))}
                        </section>

                        {productos.map((producto, index) => (
                                <div class='ConteDescripcionProductos' href="#" key={index}>
                                        <article class='IMGDescripcionProducto'>
                                                <img src={producto.url_imagen_producto} />
                                        </article>
                                        <article>
                                                <h1>{producto.nombre_producto}</h1>
                                                <h4 class='Envio'>Envió gratis a nivel nacional</h4>
                                                <h4 class='Precio'>precio: ${producto.precio}</h4>
                                                {producto.descuento > 0 && <h4>descuento: {producto.descuento}%</h4>}
                                                <h4>Descripcion: {producto.descripcion}</h4>
                                                <h4>Stock: {producto.stock}</h4>
                                                {producto.stock === 0 && <p>¡Producto agotado!</p>}
                                        </article>

                                </div>
                        ))}

                        <article class='BotonesComprarCarrito'>
                                <article class="BotonesComprar">
                                        <nav>
                                                <ul>
                                                        <li class='BotonComprar'><a href="/iniciarsesion">Comprar</a></li>
                                                </ul>
                                        </nav>
                                </article>
                                <article class="BotonesCarrito">
                                        <nav>
                                                <ul>
                                                        <li class='BotonCarrito'><a href="/iniciarsesion">Agregar al Carrito</a></li>
                                                </ul>
                                        </nav>
                                </article>

                        </article>

                        <PieUno />
                        <PieDos />
                </div>
        )
}
export default DescripcionProducto;