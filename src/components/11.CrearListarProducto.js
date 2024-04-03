import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../Styles/StylesComponents/11.CrearListarProducto.css';

function CrearListarProducto() {

    function MostrarCrear() {
        document.getElementById('ContenedorCrear').style.display = 'block';
    }

    function OcultarCrear() {
        document.getElementById('ContenedorCrear').style.display = 'none';
    }
    function MostrarEditar() {
        document.getElementById('ContenedorEditar').style.display = 'block';
    }

    function OcultarEditar() {
        document.getElementById('ContenedorEditar').style.display = 'none';
    }

    const url = "http://localhost:4000/carcesorios/ADMIN/AgregarProducto"
    const [data, setData] = useState({
        nombre_producto: "",
        precio: "",
        url_imagen_producto: "",
        stock: "",
        descripcion: "",
        descuento: "",
    })

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            nombre_producto: data.nombre_producto,
            precio: parseInt(data.precio),
            url_imagen_producto: data.url_imagen_producto,
            stock: parseInt(data.stock),
            descripcion: data.descripcion,
            descuento: parseInt(data.descuento),
        })
            .then(res => {
                console.log(res.data)
                alert("Producto creado exitosamente! Recargue la pagina")
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
                alert("Existen campos vacíos, por favor digítelos.");
            });

    }

    function handle(e) {
        const { id, value } = e.target;
        if (id === 'nombre_producto' && value.length > 50) {
            alert("El nombre no puede tener más de 50 caracteres");
        }
        else if (id === 'precio' && value.length > 15) {
            alert("El precio no puede tener más de 15 caracteres");
        }
        else if (id === 'url_imagen_producto' && value.length > 80) {
            alert("La Url de la imagen del producto no puede tener más de 80 caracteres");
        }
        else if (id === 'stock' && value.length > 10) {
            alert("El stock no puede tener más de 10 caracteres");
        }
        else if (id === 'descripcion' && value.length > 150) {
            alert("La descripcion no puede tener más de 150 caracteres");
        }
        else if (id === 'descuento' && value.length > 3) {
            alert("El descuento no puede tener más de 3 caracteres");
        } else {
            const newdata = { ...data }
            newdata[e.target.id] = e.target.value
            setData(newdata)
            console.log(newdata)
        }
    }

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const Productos = async () => {
            try {
                const response = await axios.get('http://localhost:4000/carcesorios/ADMIN/ListaProductos');
                setProductos(response.data);
            } catch (error) {
                console.error('Error al llamar a la API:', error);
            }
        };
        Productos();
    }, []);

    return (
        <section>
            <div class='BotonesCrearEditar'>

                <div class='ContenedorCrear'>
                    <button type="button" onClick={() => { MostrarCrear(); OcultarEditar(); }} class="btn btn-warning">Crear Producto</button>
                </div>

                <div class='ContenedorEditar'>
                    <button type="button" onClick={() => { MostrarEditar(); OcultarCrear(); }} class="btn btn-warning">Listar productos</button>
                </div>

            </div>


            <div id='ContenedorCrear'>
                <form class='FormularioEditarPerfil' onSubmit={(e) => submit(e)}>

                    <div class="form-group">
                        <label for="exampleInputEmail1" class='Nombre'>Nombre del producto:</label>
                        <input onChange={(e) => handle(e)} id='nombre_producto' value={data.nombre_producto} type="text" class="form-control" placeholder="Nombre del producto" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1" class='Nombre'>Precio:</label>
                        <input onChange={(e) => handle(e)} id='precio' value={data.precio} type="number" class="form-control" placeholder="Precio" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1" class='Nombre'>Url de la imagen del producto:</label>
                        <input onChange={(e) => handle(e)} id='url_imagen_producto' value={data.url_imagen_producto} type="text" class="form-control" placeholder="url imagen producto" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1" class='Nombre'>Stock:</label>
                        <input onChange={(e) => handle(e)} id='stock' value={data.stock} type="number" class="form-control" placeholder="Stock" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1" class='Nombre'>Descripcion:</label>
                        <input onChange={(e) => handle(e)} id='descripcion' value={data.descripcion} type="text" class="form-control" placeholder="Descripcion" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1" class='Nombre'>Descuento:</label>
                        <input onChange={(e) => handle(e)} id='descuento' value={data.descuento} type="number" class="form-control" placeholder="Descuento" />
                    </div>

                    <br />
                    <button id='AgregarProducto' type="submit" class="btn btn-warning">Agregar producto</button>

                </form>
                <br />

                <button id='BotonCerrarCrear' onClick={OcultarCrear} type="button" class="btn btn-danger">Cerrar formulario</button>
            </div>
            <div id='ContenedorEditar'>
                <table class="table table-bordered">
                    <thead class='CabeceraTitulo'>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Descuento</th>
                            <th scope="col">Iva</th>
                        </tr>
                    </thead>
                    {productos.map((producto, index) => (
                        <tbody key={index}>
                            <tr>
                                <td>{producto.id_producto}</td>
                                <td>{producto.nombre_producto}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.stock}</td>
                                <td>{producto.descripcion}</td>
                                <td>{producto.descuento}</td>
                                <td>{producto.iva}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
                <button id='BotonCerrarEditar' onClick={OcultarEditar} type="button" class="btn btn-danger">Cerrar lista de productos</button>
            </div>
        </section>
    );
}

export default CrearListarProducto;