import React, { useState, useEffect } from 'react'
import '../../Styles/StylesPages/2.IniciarSesion.css'
import HeaderUno from '../../components/1.Header';
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';
import validation from './5.1.Validacion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function IniciarSesion() {

    const [Titulo, setTitulo] = useState([])

    useEffect(() => {
        const getTitulo = () => {
            fetch('http://localhost:4000/carcesorios/IniciarSesion')
                .then(res => res.json())
                .then(res => setTitulo(res))
        }
        getTitulo()
    }, [])

    const [errors, setErrors] = useState({})

    const [values, setValues] = useState({
        correo:'',
        contraseña:''
    })

    const navigate = useNavigate();

    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value] }))

    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(validation(values));
        if(errors.correo === "" && errors.contraseña === ""){
            axios.post('http://localhost:4000/carcesorios/IniciarSesion', values)
            .then(res => {
                const { status, rol } = res.data;
                    if (status === 'Aprobado') {
                        if (rol) {
                            localStorage.setItem('userData', JSON.stringify({ correo: values.correo }));
                            if (rol === 'Administrador') {
                                navigate('/PrincipalAdmin');
                            } else if (rol === 'Cliente') {
                                navigate('/PrincipalCliente');
                            }
                        }
                    } else {
                        alert("El usuario no existe");
                    }
                })
            .catch(err => console.log(err));
        }
    }


    return (
        <div>
            <HeaderUno />
            <Informacion link1={"/"} link2={'/iniciarsesion'} />
            <HeaderDos  link1={"/"} link2={'/ofertas'} link3={'/ayuda'}/>
            <section id="Titulo_categoria">
                {Titulo.map(Titulo => (
                    <h1 class="Contenido_Titulo" key={Titulo.id_titulo}>{Titulo.nombre_titulo}</h1>
                ))}
            </section>

            <div id='ContePrincipalIniciarSesion'>
                <div id='ConteIniciarSesion'>
                    <form class='FormularioInicio' onSubmit={handleSubmit}>
                        <h1 class='TituloSesion'>carcesorios</h1>
                        <div class="form-group">
                            <label for="exampleInputEmail1" class='Nombre'>Correo:</label>
                            <input name='correo' onChange={handleInput} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo" />
                            {errors.correo && <span className='text-danger'>{errors.correo}</span>}
                        </div>
                        <br/>
                        <div class="form-group">
                            <label for="exampleInputPassword1" class='Nombre'>Contraseña:</label>
                            <input name='contraseña' onChange={handleInput} type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
                            {errors.contraseña && <span className='text-danger'>{errors.contraseña}</span>}
                        </div>
                        <br/>
                        <button type="submit" class="btn btn-warning">Iniciar Sesión</button>
                    </form>
                </div>
            </div>

            <PieUno />
            <PieDos />
        </div>
    )
}
export default IniciarSesion;