import React, { useState, useEffect } from 'react'
import axios from 'axios';
import HeaderUnoAdmin from '../../components/9.HeaderAdmin';
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';
import '../../Styles/StylesPages/4.PerfilAdmin.css';


function Perfil() {

    const [Datos, setDatos] = useState([]);
    const userData = JSON.parse(localStorage.getItem('userData'));

    useEffect(() => {
        const DatosAdmin = async () => {
            try {
                const Documento = JSON.parse(localStorage.getItem('documentoUsuario'));
                const response = await axios.get('http://localhost:4000/carcesorios/ADMIN/Perfil', {
                    params: {
                        Documento 
                    }
                });
                setDatos(response.data);
            } catch (error) {
                console.error('Error al llamar a la API:', error);
            }
        };
        DatosAdmin();
    }, []);

    function Mostrar() {
        document.getElementById('ContenedorFormularioEditarPerfil').style.display = 'block';
    }

    function Ocultar() {
        document.getElementById('ContenedorFormularioEditarPerfil').style.display = 'none';
    }




    const url = "http://localhost:4000/carcesorios/ADMIN/Perfil"
    const [data, setData] = useState({
        primer_nombre: "",
        segundo_nombre: "",
        primer_apellido: "",
        segundo_apellido: "",
        correo: "",
        telefono: "",
        direccion: "",
    })

    function submit(e) {
        e.preventDefault();
        axios.put(url, {
            primer_nombre: data.primer_nombre,
            segundo_nombre: data.segundo_nombre,
            primer_apellido: data.primer_apellido,
            segundo_apellido: data.segundo_apellido,
            correo: userData.correo,
            telefono: parseInt(data.telefono),
            direccion: data.direccion,
        })
            .then(res => {
                console.log(res.data)
                alert("Modificacion exitosa! Recargue la pagina")
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
                alert("Existen campos vacíos, por favor digítelos.");
            });
        
    }

    function handle(e) {
        const { id, value } = e.target;
        if (id === 'primer_nombre' && value.length > 40) {
            alert("El primer nombre no puede tener más de 40 caracteres");
        }
        else if (id === 'segundo_nombre' && value.length > 40) {
            alert("El segundo nombre no puede tener más de 40 caracteres");
        }
        else if (id === 'primer_apellido' && value.length > 40) {
            alert("El primer apellido no puede tener más de 40 caracteres");
        }
        else if (id === 'segundo_apellido' && value.length > 40) {
            alert("El segundo apellido no puede tener más de 40 caracteres");
        }
        else if (id === 'telefono' && value.length > 10) {
            alert("El número no puede tener más de 10 caracteres");
        }
        else if (id === 'direccion' && value.length > 80) {
            alert("La direccion no puede tener más de 80 caracteres");
        } else {
            const newdata = { ...data }
            newdata[e.target.id] = e.target.value
            setData(newdata)
            console.log(newdata)
        }
    }




    return (
        <div>
            <HeaderUnoAdmin />
            <Informacion link1={"/PrincipalAdmin"} link2={'/CarritoAdmin'} />
            <HeaderDos link1={"/PrincipalAdmin"} link2={'/OfertasAdmin'} link3={'/AyudaAdmin'}/>

            {Datos.map((DatosPefilAdmin, index) => (

                <section key={index}>
                    <div class='ContenedorNombreAdmin'>
                        <h1 class='NombrePerfilAdmin'>{DatosPefilAdmin.primer_nombre} {DatosPefilAdmin.segundo_nombre} {DatosPefilAdmin.primer_apellido} {DatosPefilAdmin.segundo_apellido}</h1>
                    </div>
                    <div class='ContenedorDocumentoAdmin'>
                        <h4 class='DocumentoPerfilAdmin'>Documento - {DatosPefilAdmin.tipo_documento} {DatosPefilAdmin.documento}</h4>
                    </div>
                    <div class='ContenedorCorreoAdmin'>
                        <h4 class='CorreoPerfilAdmin'>Correo - {DatosPefilAdmin.correo}</h4>
                    </div>
                    <div class='ContenedorTelefonoAdmin'>
                        <h4 class='TelefonoPerfilAdmin'>Telefeono - {DatosPefilAdmin.telefono}</h4>
                    </div>
                    <div class='ContenedorDireccionAdmin'>
                        <h4 class='DireccionPerfilAdmin'>Direccion - {DatosPefilAdmin.direccion}</h4>
                    </div>

                    <div class='ContenedorEditarDatosAdmin'>
                        <button type="button" onClick={Mostrar} class="btn btn-warning">Editar datos</button>
                    </div>

                    <div id='ContenedorFormularioEditarPerfil'>
                        <form class='FormularioEditarPerfil' onSubmit={(e) => submit(e)}>

                            <div class="form-group">
                                <label for="exampleInputEmail1" class='Nombre'>Primer nombre:</label>
                                <input onChange={(e) => handle(e)} id='primer_nombre' value={data.primer_nombre} type="text" class="form-control" placeholder="Primer nombre" />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1" class='Nombre'>Segundo nombre:</label>
                                <input onChange={(e) => handle(e)} id='segundo_nombre' value={data.segundo_nombre} type="text" class="form-control" placeholder="Segundo nombre" />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1" class='Nombre'>Primer apellido:</label>
                                <input onChange={(e) => handle(e)} id='primer_apellido' value={data.primer_apellido} type="text" class="form-control" placeholder="Primer apellido" />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1" class='Nombre'>Segundo apellido:</label>
                                <input onChange={(e) => handle(e)} id='segundo_apellido' value={data.segundo_apellido} type="text" class="form-control" placeholder="Segundo apellido" />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1" class='Nombre'>Telefono:</label>
                                <input onChange={(e) => handle(e)} id='telefono' value={data.telefono} type="number" class="form-control" placeholder="Telefono" />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1" class='Nombre'>Dirección:</label>
                                <input onChange={(e) => handle(e)} id='direccion' value={data.direccion} type="text" class="form-control" placeholder="Dirección" />
                            </div>
                            <br />
                            <button id='ModificarDatosAdmin' type="submit" class="btn btn-warning">Modificar</button>

                        </form>
                        <br />
                        <button id='BotonCerrar' onClick={Ocultar} type="button" class="btn btn-warning">Cerrar formulario</button>
                    </div>
                    <br />
                </section>

            ))}

            <PieUno />
            <PieDos />
        </div>
    )
}
export default Perfil;