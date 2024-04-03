import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../../Styles/StylesPages/8.PedidosAdmin.css'
import HeaderUnoAdmin from '../../components/9.HeaderAdmin';
import Informacion from '../../components/2.Informacion';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';


function EditarPerfilesAdmin() {

    const [Cliente, setCliente] = useState([])

    useEffect(() => {
        const Cliente = async () => {
            try {
                const response = await axios.get('http://localhost:4000/carcesorios/ADMIN/EditarPerfilesAdmin');
                setCliente(response.data);
            } catch (error) {
                console.error('Error al llamar a la API:', error);
            }
        };
        Cliente();
    }, []);


    const Documento = (documento) => {
        localStorage.setItem('Documento', documento);
    };


    const [NuevoCorreo, setNuevoCorreo] = useState("");

    const Editar = () => {
        const documentoUsuario = localStorage.getItem('Documento');

        const url = "http://localhost:4000/carcesorios/ADMIN/EditarPerfilesAdmin"
        axios.put(url, {
            documento: documentoUsuario,
            correo: NuevoCorreo
        })
            .then(res => {
                console.log(res.data);
                localStorage.removeItem('Documento');
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
                alert("Hubo un error al modificar el correo.");
            });

    };




    const EliminarUsuarioCarrito = async () => {
        try {
            const documento = JSON.parse(localStorage.getItem('Documento'));
            await axios.delete('http://localhost:4000/carcesorios/ADMIN/EliminarUsuarioAdmin/Carrito', {
                params: {
                    documento
                }
            });

        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
        }
    };

    const EliminarUsuario = async () => {
        try {
            const documento = JSON.parse(localStorage.getItem('Documento'));
            await axios.delete('http://localhost:4000/carcesorios/ADMIN/EliminarUsuarioAdmin', {
                params: {
                    documento
                }
            });

        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
        }
    };



    return (
        <div>
            <HeaderUnoAdmin />
            <Informacion link1={"/PrincipalAdmin"} link2={'/CarritoAdmin'} />
            <section id="Titulo_categoria">
                <h1 class="Contenido_Titulo">Datos clientes</h1>
            </section>
            <br />
            <section class='ContenidoPedidos'>
                <h2 class='TituloEstadoPago'>Eliminar o editar usuarios</h2>
                <table class="table table-bordered">
                    <thead class='CabeceraTitulo'>
                        <tr>
                            <th scope="col">Documento</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">telefono</th>
                            <th scope="col">correo</th>
                            <th scope="col">Eliminar</th>
                            <th scope="col">Digite nuevo correo</th>
                            <th scope="col">Editar</th>
                        </tr>
                    </thead>
                    {Cliente.map((Cliente, index) => (
                        <tbody key={index}>
                            <tr>
                                <td>{Cliente.documento}</td>
                                <td>{Cliente.primer_nombre} {Cliente.segundo_nombre} {Cliente.primer_apellido} {Cliente.segundo_apellido}</td>
                                <td>{Cliente.telefono}</td>
                                <td>{Cliente.correo}</td>
                                <td><button onClick={() => { Documento(Cliente.documento); EliminarUsuarioCarrito();  EliminarUsuario(); window.location.reload(); }} type="button" class="btn btn-danger">Eliminar</button></td>
                                <td>
                                    <div class="form-group">
                                        <input onChange={(e) => setNuevoCorreo(e.target.value)} value={NuevoCorreo} id='correo' type="email" class="form-control" placeholder="Correo electronico" />
                                    </div>
                                </td>
                                <td><button onClick={() => { Documento(Cliente.documento); Editar(); window.location.reload(); }} type="button" class="btn btn-warning">Editar</button></td>
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
export default EditarPerfilesAdmin;

