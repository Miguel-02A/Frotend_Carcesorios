import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../../Styles/StylesPages/6.Carrito.css'
import HeaderUnoAdmin from '../../components/9.HeaderAdmin';
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';



const Carrito = () => {

    const [Titulo, setTitulo] = useState([])

    useEffect(() => {
        const getTitulo = () => {
            fetch('http://localhost:4000/carcesorios/Cliente/Carrito/Titulo')
                .then(res => res.json())
                .then(res => setTitulo(res))
        }
        getTitulo()
    }, [])

    const [Carrito, setCarrito] = useState([]);
    const userData = JSON.parse(localStorage.getItem('userData'));

    useEffect(() => {
        const Carrito = async () => {
            try {
                const Documento = JSON.parse(localStorage.getItem('documentoUsuario'));
                const response = await axios.get('http://localhost:4000/carcesorios/Cliente/Carrito', {
                    params: {
                        Documento
                    }
                });
                setCarrito(response.data);
            } catch (error) {
                console.error('Error al llamar a la API:', error);
            }
        };
        Carrito();
    }, []);



    const IdProductoCarrito = (id_producto) => {
        localStorage.setItem('id_producto_seleccionado_carrito', id_producto);
    };

    useEffect(() => {
        const IdProductoCarritoR = JSON.parse(localStorage.getItem('id_producto_seleccionado_carrito'));
        const eliminarProductoCarrito = async () => {
            try {
                await axios.delete('http://localhost:4000/carcesorios/Cliente/Carrito', {
                    params: {
                        IdProductoCarritoR
                    }
                });
                localStorage.removeItem('id_producto_seleccionado_carrito');
            } catch (error) {
                console.error('Error al eliminar el producto del carrito:', error);
            }
        };
        eliminarProductoCarrito();
    }, []);




    return (
        <div>
            <HeaderUnoAdmin />
            <Informacion link1={"/PrincipalAdmin"} link2={'/CarritoAdmin'} />
            <HeaderDos link1={"/PrincipalAdmin"} link2={'/OfertasAdmin'} link3={'/AyudaAdmin'} />
            <section id="Titulo_categoria">
                {Titulo.map(Titulo => (
                    <h1 class="Contenido_Titulo" key={Titulo.id_titulo}>{Titulo.nombre_titulo}</h1>
                ))}
            </section>
            <br />
            {Carrito.map((carrito, index) => (
                <section key={index}>
                    <div class='ContenedorCarrito'>
                        <img class='ImagenCarrito' src={carrito.url_imagen_producto} alt="Logo" />

                        <div class='ConteNombreDescrip'>
                            <h4 class='NomProductoCarrito'>{carrito.nombre_producto}</h4>
                            <p class='DesProductoCarrito'>{carrito.descripcion}</p>
                        </div>

                        <h4 class='PrecioArticuloCarrito'>Precio: {carrito.precio}</h4>

                        <div class='ConteCantidaEliminar'>
                            <button onClick={() => { IdProductoCarrito(carrito.id_carrito_compras); window.location.reload(); }} id='BotEliminarCarrito' type="button" class="btn btn-danger">Eliminar producto</button>
                        </div>
                    </div>
                </section>

            ))}
            <PieUno />
            <PieDos />
        </div>
    )
}
export default Carrito;