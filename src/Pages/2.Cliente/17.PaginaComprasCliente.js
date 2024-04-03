import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../../Styles/StylesPages/8.PedidosAdmin.css'
import HeaderUnoCliente from '../../components/10.HeaderCliente';
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';


function ComprasCliente() {

    const [PedidoPago, setPedidoPago] = useState([])

    useEffect(() => {
        const PedidoPago = async () => {
            try {
                const Documento = JSON.parse(localStorage.getItem('documentoUsuario'));
                const response = await axios.get('http://localhost:4000/carcesorios/Cliente/ComprasCliente', {
                    params: {
                        Documento
                    }
                });
                setPedidoPago(response.data);
            } catch (error) {
                console.error('Error al llamar a la API:', error);
            }
        };
        PedidoPago();
    }, []);

    return (
        <div>
            <HeaderUnoCliente />
            <Informacion link1={"/PrincipalCliente"} link2={'/CarritoCliente'} />
            <HeaderDos link1={"/PrincipalCliente"} link2={'/OfertasCliente'} link3={'/AyudaCliente'} />
            <section id="Titulo_categoria">
                <h1 class="Contenido_Titulo">Mis compras</h1>
            </section>
            <br />
            <section class='ContenidoPedidos'>
                <h2 class='TituloEstadoPago'>Hisotrial de compras</h2>
                <table class="table table-bordered">
                    <thead class='CabeceraTitulo'>
                        <tr>
                            <th scope="col">Factura N°</th>
                            <th scope="col">Documento titular</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Iva</th>
                            <th scope="col">Total</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    {PedidoPago.map((PedidoPago, index) => (
                        <tbody key={index}>
                            <tr>
                                <td>{PedidoPago.id_factura}</td>
                                <td>{PedidoPago.documento}</td>
                                <td>{PedidoPago.fecha}</td>
                                <td>{PedidoPago.nombre_producto}</td>
                                <td>{PedidoPago.precio}</td>
                                <td>{PedidoPago.cantidad}</td>
                                <td>{PedidoPago.iva}%</td>
                                <td>{PedidoPago.total}</td>
                                <td>{PedidoPago.estado_del_pago}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>

            </section>

            <PieUno />
            <PieDos />
        </div>
    )
}
export default ComprasCliente;