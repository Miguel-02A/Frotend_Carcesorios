import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../../Styles/StylesPages/3.Registro.css'
import HeaderUno from '../../components/1.Header';
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';


function CrearCuenta() {

    const url = "http://localhost:4000/carcesorios/CrearCuenta"
    const [data, setData] = useState({
        documento: "",
        tipo_documento: "",
        primer_nombre: "",
        segundo_nombre: "",
        primer_apellido: "",
        segundo_apellido: "",
        correo: "",
        telefono: "",
        direccion: "",
        contraseña: "",
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            documento: parseInt(data.documento),
            tipo_documento: data.tipo_documento,
            primer_nombre: data.primer_nombre,
            segundo_nombre: data.segundo_nombre,
            primer_apellido: data.primer_apellido,
            segundo_apellido: data.segundo_apellido,
            correo: data.correo,
            telefono: parseInt(data.telefono),
            direccion: data.direccion,
            contraseña: data.contraseña,
        })
            .then(res => {
                console.log(res.data)
                alert("¡Validación exitosa!")
            })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    const [Titulo, setTitulo] = useState([])

    useEffect(() => {
        const getTitulo = () => {
            fetch('http://localhost:4000/carcesorios/CrearCuenta')
                .then(res => res.json())
                .then(res => setTitulo(res))
        }
        getTitulo()
    }, [])


    return (
        <div>
            <HeaderUno />
            <Informacion link1={"/"} link2={'/iniciarsesion'}/>
            <HeaderDos link1={"/"} link2={'/ofertas'} link3={'/ayuda'}/>
            <section id="Titulo_categoria">
                {Titulo.map(Titulo => (
                    <h1 class="Contenido_Titulo" key={Titulo.id_titulo}>{Titulo.nombre_titulo}</h1>
                ))}
            </section>

            <div id='ContePrincipalIniciarSesion'>
                <div id='ConteIniciarSesion'>
                    <form onSubmit={(e) => submit(e)} class='FormularioInicio'>
                        <h1 class='TituloSesion'>carcesorios</h1>

                        <div class="form-group">
                            <label for="exampleInputEmail1" class='Nombre'>Documento:</label>
                            <input onChange={(e) => handle(e)} id='documento' value={data.documento} type="number" class="form-control" placeholder="Documento" />
                        </div>
                        <br />
                        <label for="exampleInputEmail1" class='Nombre'>Tipo de documento:</label>
                        <select onChange={(e) => handle(e)} id='tipo_documento' value={data.tipo_documento} class="form-control" >
                            <option>Seleccione tipo de documento</option>
                            <option>C.C</option>
                            <option>C.E</option>
                        </select>
                        <br />
                        <div class="form-group">
                            <label for="exampleInputEmail1" class='Nombre'>Primer nombre:</label>
                            <input onChange={(e) => handle(e)} id='primer_nombre' value={data.primer_nombre} type="text" class="form-control" placeholder="Primer nombre" />
                        </div>
                        <br />
                        <div class="form-group">
                            <label for="exampleInputEmail1" class='Nombre'>Segundo nombre:</label>
                            <input onChange={(e) => handle(e)} id='segundo_nombre' value={data.segundo_nombre} type="text" class="form-control" placeholder="Segundo nombre" />
                        </div>
                        <br />
                        <div class="form-group">
                            <label for="exampleInputEmail1" class='Nombre'>Primer apellido:</label>
                            <input onChange={(e) => handle(e)} id='primer_apellido' value={data.primer_apellido} type="text" class="form-control" placeholder="Primer apellido" />
                        </div>
                        <br />
                        <div class="form-group">
                            <label for="exampleInputEmail1" class='Nombre'>Segundo apellido:</label>
                            <input onChange={(e) => handle(e)} id='segundo_apellido' value={data.segundo_apellido} type="text" class="form-control" placeholder="Segundo apellido" />
                        </div>
                        <br />
                        <div class="form-group">
                            <label for="exampleInputEmail1" class='Nombre'>Correo electronico:</label>
                            <input onChange={(e) => handle(e)} id='correo' value={data.correo} type="email" class="form-control" placeholder="Correo electronico" />
                        </div>
                        <br />
                        <div class="form-group">
                            <label for="exampleInputEmail1" class='Nombre'>Telefono:</label>
                            <input onChange={(e) => handle(e)} id='telefono' value={data.telefono} type="number" class="form-control" placeholder="Telefono" />
                        </div>
                        <br />
                        <div class="form-group">
                            <label for="exampleInputEmail1" class='Nombre'>Dirección:</label>
                            <input onChange={(e) => handle(e)} id='direccion' value={data.direccion} type="text" class="form-control" placeholder="Dirección" />
                        </div>
                        <br />
                        <div class="form-group">
                            <label for="exampleInputEmail1" class='Nombre'>Contraseña:</label>
                            <input onChange={(e) => handle(e)} id='contraseña' value={data.contraseña} type="password" class="form-control" placeholder="Contraseña" />
                        </div>
                        <br />
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                            <label class="Nombre" for="inlineCheckbox1">¿Acepta los terminos y condiciones?</label>
                        </div>
                        <br />
                        <br />
                        <br />

                        <button type="submit" class="btn btn-warning">Crear Cuenta</button>
                    </form>
                </div>
            </div>

            <PieUno />
            <PieDos />
        </div>
    )
}
export default CrearCuenta;