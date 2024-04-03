import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../../Styles/StylesPages/8.PedidosAdmin.css'
import HeaderUnoAdmin from '../../components/9.HeaderAdmin';
import Informacion from '../../components/2.Informacion';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';


function PedidosAdmin() {

    const [PedidoPago, setPedidoPago] = useState([])

    useEffect(() => {
        const PedidoPago = async () => {
            try {
                const response = await axios.get('http://localhost:4000/carcesorios/ADMIN/EstadoPedido');
                setPedidoPago(response.data);
            } catch (error) {
                console.error('Error al llamar a la API:', error);
            }
        };
        PedidoPago();
    }, []);


    const idDeFactura = (id_factura) => {
        localStorage.setItem('id_factura_seleccionado', id_factura);
    };


    const [estadoPago, setEstadoPago] = useState("");

    const Editar = () => {
        const idFactura = localStorage.getItem('id_factura_seleccionado');
        
            const url = "http://localhost:4000/carcesorios/ADMIN/EstadoPedido"
            axios.put(url, {
                id_factura: idFactura,
                estado_del_pago: estadoPago
            })
                .then(res => {
                    console.log(res.data);
                    localStorage.removeItem('id_factura_seleccionado');
                })
                .catch(error => {
                    console.error('Error en la solicitud:', error);
                    alert("Hubo un error al modificar el estado de pago.");
                });
        
    };

    
    return (
        <div>
            <HeaderUnoAdmin />
            <Informacion link1={"/PrincipalAdmin"} link2={'/CarritoAdmin'} />
            <section id="Titulo_categoria">
                <h1 class="Contenido_Titulo">Pedidos clientes</h1>
            </section>
            <br />
            <section class='ContenidoPedidos'>
                <h2 class='TituloEstadoPago'>Estado de pago</h2>
                <table class="table table-bordered">
                    <thead class='CabeceraTitulo'>
                        <tr>
                            <th scope="col">Factura N°</th>
                            <th scope="col">Documento titular</th>
                            <th scope="col">Total</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Seleccione nuevo estado</th>
                        </tr>
                    </thead>
                    {PedidoPago.map((PedidoPago, index) => (
                        <tbody key={index}>
                            <tr>
                                <td>{PedidoPago.id_factura}</td>
                                <td>{PedidoPago.documento}</td>
                                <td>{PedidoPago.total}</td>
                                <td>{PedidoPago.estado_del_pago}</td>
                                <td><button onClick={() => {idDeFactura(PedidoPago.id_factura); Editar(); window.location.reload(); }} type="button" class="btn btn-warning">Editar</button></td>
                                <td>
                                    <select onChange={(e) => setEstadoPago(e.target.value)} value={estadoPago} id='tipo_documento' class="form-control" >
                                        <option>Estado</option>
                                        <option>Pendiente de pago</option>
                                        <option>Pago realizado</option>
                                    </select>
                                </td>
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
export default PedidosAdmin;


