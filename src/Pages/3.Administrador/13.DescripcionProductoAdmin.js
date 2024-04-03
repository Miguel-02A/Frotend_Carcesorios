import React, { useState, useEffect } from 'react'
import axios from 'axios';


import '../../Styles/StylesComponents/6.ListaProductos.css'
import '../../Styles/StylesComponents/5.Titulo.css'
import '../../Styles/StylesPages/5.DescripcionProductos.css'

import HeaderUnoAdmin from '../../components/9.HeaderAdmin';
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import Modificar from '../../components/12.ModificarProductoAdmin';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';



const DescripcionProducto = () => {

    const [productos, setProducto] = useState([]);

    useEffect(() => {
        const Productos = async () => {
            try {
                const response = await axios.get('http://localhost:4000/carcesorios/Descripcion/Producto', {
                    params: {
                        idProductoSeleccionado
                    }
                });
                setProducto(response.data);
            } catch (error) {
                console.error('Error al llamar a la API:', error);
            }
        };
        Productos();
    }, []);


    const idProductoSeleccionado = JSON.parse(localStorage.getItem('id_producto_seleccionado'));
    console.log(idProductoSeleccionado)
    const Documento = JSON.parse(localStorage.getItem('documentoUsuario'));
    console.log("Documento del usuario:", Documento);

    const url = "http://localhost:4000/carcesorios/Cliente/Carrito"

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            documento_f: Documento,
            id_producto_f: idProductoSeleccionado,

        })
            .then(res => {
                console.log(res.data)
                alert("Se agrego al carrito")
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
                alert("Error al agregar al carrito.");
            });

    }

    const Eliminar = async () => {
        try {
            const EliminarProducto = JSON.parse(localStorage.getItem('id_producto_seleccionado'));
            await axios.delete('http://localhost:4000/carcesorios/ADMIN/EliminarProducto', {
                params: {
                    EliminarProducto
                }
            });
            localStorage.removeItem('id_producto_seleccionado');
        } catch (error) {
            console.error('Error al eliminar el producto del carrito:', error);
        }
    };
    const EliminarDelCarrito = async () => {
        try {
            const EliminarProducto = JSON.parse(localStorage.getItem('id_producto_seleccionado'));
            await axios.delete('http://localhost:4000/carcesorios/ADMIN/EliminarProducto/Carrito', {
                params: {
                    EliminarProducto
                }
            });
            localStorage.removeItem('id_producto_seleccionado');
        } catch (error) {
            console.error('Error al eliminar el producto del carrito:', error);
        }
    };


    return (
        <div>
            <HeaderUnoAdmin />
            <Informacion link1={"/PrincipalAdmin"} link2={'/CarritoAdmin'} />
            <HeaderDos link1={"/PrincipalAdmin"} link2={'/OfertasAdmin'} link3={'/AyudaAdmin'} />
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
                            <li class='BotonComprarAdmin'><a onClick={() => { EliminarDelCarrito(); Eliminar(); window.history.back(); }} href="#">Eliminar</a></li>
                        </ul>
                    </nav>
                </article>
                <article class="BotonesCarrito">
                    <nav>
                        <ul>
                            <li class='BotonCarrito'><a href="" onClick={submit}>Agregar al Carrito</a></li>
                        </ul>
                    </nav>
                </article>

            </article>

            <Modificar />

            <PieUno />
            <PieDos />
        </div>
    )
}
export default DescripcionProducto;