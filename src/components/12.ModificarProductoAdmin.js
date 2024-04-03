import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../Styles/StylesComponents/12.ModificarProductoAdmin.css';

function EditarProducto() {

    const idProductoSeleccionado = JSON.parse(localStorage.getItem('id_producto_seleccionado'));

    function MostrarEditar() {
        document.getElementById('ContenedorEditarProducto').style.display = 'block';
    }

    function OcultarEditar() {
        document.getElementById('ContenedorEditarProducto').style.display = 'none';
    }

    const url = "http://localhost:4000/carcesorios/ADMIN/ModificarProducto"
    const [data, setData] = useState({
        id_producto: "",
        nombre_producto: "",
        precio: "",
        url_imagen_producto: "",
        stock: "",
        descripcion: "",
        descuento: "",
    })

    function submit(e) {
        e.preventDefault();
        axios.put(url, {
            id_producto: idProductoSeleccionado,
            nombre_producto: data.nombre_producto,
            precio: parseInt(data.precio),
            url_imagen_producto: data.url_imagen_producto,
            stock: parseInt(data.stock),
            descripcion: data.descripcion,
            descuento: parseInt(data.descuento),
        })
            .then(res => {
                console.log(res.data)
                alert("Producto modificado exitosamente! Recargue la pagina")
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

    return (
        <section>
            <div class='ConteModificar'>
                <button id='BotonModificar' onClick={MostrarEditar} type="button" class="btn btn-warning">Modificar producto</button>

                <div id='ContenedorEditarProducto'>
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
                        <button id='AgregarProducto' type="submit" class="btn btn-warning">Modificar producto</button>

                    </form>
                    <br />
                    <button id='BotonCerrarModificar' onClick={OcultarEditar} type="button" class="btn btn-danger">Cerrar formulario</button>

                </div>

            </div>
        </section>
    );
}

export default EditarProducto;