import React, { useState, useEffect } from 'react'
import axios from 'axios';


import '../../Styles/StylesComponents/6.ListaProductos.css'
import '../../Styles/StylesComponents/5.Titulo.css'
import '../../Styles/StylesPages/7.ConfirmarCompra.css'

import HeaderUnoCliente from '../../components/10.HeaderCliente';
import Informacion from '../../components/2.Informacion';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';



const ConfirmarCompra = () => {

    const [Titulo, setTitulo] = useState([])

    useEffect(() => {
        const getTitulo = () => {
            fetch('http://localhost:4000/carcesorios/Cliente/Confirmar/Compra')
                .then(res => res.json())
                .then(res => setTitulo(res))
        }
        getTitulo()
    }, [])

    const [Datos, setDatos] = useState([]);
    const Documento = JSON.parse(localStorage.getItem('documentoUsuario'));

    useEffect(() => {
        const DatosAdmin = async () => {
            try {
                const response = await axios.get('http://localhost:4000/carcesorios/ADMIN/Perfil', {
                    params: {
                        Documento
                    }
                });
                setDatos(response.data);
                const datos = response.data[0];
                localStorage.setItem('DatosUsuarioFactura', JSON.stringify(datos));

            } catch (error) {
                console.error('Error al llamar a la API:', error);
            }
        };
        DatosAdmin();
    }, []);



    const [Productos, setProducto] = useState([]);
    const idProductoSeleccionado = JSON.parse(localStorage.getItem('id_producto_seleccionado'));

    useEffect(() => {
        const Productos = async () => {
            try {
                const response = await axios.get('http://localhost:4000/carcesorios/Descripcion/Producto', {
                    params: {
                        idProductoSeleccionado // Aquí asumo que userData tiene una propiedad llamada "correo"
                    }
                });
                setProducto(response.data);
                const datosProducto = response.data[0];
                localStorage.setItem('DatosProductosDetallesFactura', JSON.stringify(datosProducto));
            } catch (error) {
                console.error('Error al llamar a la API:', error);
            }
        };
        Productos();
    }, []);

    const currentDate = new Date();
    const Año = currentDate.getFullYear();
    const Mes = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const Dia = currentDate.getDate().toString().padStart(2, '0');
    const Fecha = `${Año}-${Mes}-${Dia}`;
    console.log(Fecha);


    const DatosUsuarioFactura = JSON.parse(localStorage.getItem('DatosUsuarioFactura'));

    const DatosFactura = () => {
        axios.post("http://localhost:4000/carcesorios/Cliente/Confirmar/Compra/DatosFactura", {
            fecha: Fecha,
            documento: DatosUsuarioFactura.documento,
            tipo_documento: DatosUsuarioFactura.tipo_documento,
            primer_nombre: DatosUsuarioFactura.primer_nombre,
            segundo_nombre: DatosUsuarioFactura.segundo_nombre,
            primer_apellido: DatosUsuarioFactura.primer_apellido,
            segundo_apellido: DatosUsuarioFactura.segundo_apellido,
            correo: DatosUsuarioFactura.correo,
            telefono: DatosUsuarioFactura.telefono,
            direccion: DatosUsuarioFactura.direccion,
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
                alert("Error al realizar la compra.");
            });

    };

    useEffect(() => {
        const IdFactura = async () => {
            try {
                const response = await axios.get('http://localhost:4000/carcesorios/Cliente/Confirmar/Compra/IdFactura');
                const IdFatcura = response.data[0].id_factura;
                localStorage.setItem('IdFatcura', JSON.stringify(IdFatcura));
            } catch (error) {
                console.error('Error al llamar a la API:', error);
            }
        };
        IdFactura();
    }, []);

    const IdFatcura = JSON.parse(localStorage.getItem('IdFatcura'));

    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);

    const datosProducto = JSON.parse(localStorage.getItem('DatosProductosDetallesFactura'));
    const Subtotal = ((datosProducto.precio * (datosProducto.iva / 100)) + datosProducto.precio)
    const Descuento = Subtotal * (datosProducto.descuento / 100)
    const Total = (Subtotal - Descuento) * cantidadSeleccionada

    const handleCantidadChange = (event) => {
        setCantidadSeleccionada(parseInt(event.target.value));
    };

    const DestallesFactura = () => {
        axios.post("http://localhost:4000/carcesorios/Cliente/Confirmar/Compra/DetallesFactura", {
            id_factura_f: IdFatcura,
            id_producto_f: idProductoSeleccionado,
            cantidad: cantidadSeleccionada,
            total: Total

        })
            .then(res => {
                console.log(res.data)
                alert("Producto comprado")
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
                alert("Error al realizar la compra.");
            });

    };

    const stock = JSON.parse(localStorage.getItem('DatosProductosDetallesFactura'));
    const NuevoStock = (stock.stock - cantidadSeleccionada)

    const CantidadProducto = () => {
        axios.put("http://localhost:4000/carcesorios/Cliente/Confirmar/Compra/CantidadProducto", {
            id_producto: idProductoSeleccionado,
            stock: NuevoStock
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
                alert("Error al realizar la compra.");
            });

    };


    const Comprar = () => {
        if (NuevoStock < 0) {
            alert('No hay stock')
        }
        else {
            CantidadProducto();
            DatosFactura();
            DestallesFactura();
        };
    };

    function Mostrar() {
        document.getElementById('InfoDePago').style.display = 'block';
    }

    function Ocultar() {
        document.getElementById('InfoDePago').style.display = 'none';
    }

    return (
        <div>
            <HeaderUnoCliente />
            <Informacion link1={"/PrincipalCliente"} link2={'/CarritoCliente'} />
            <section id="Titulo_categoria">
                {Titulo.map(Titulo => (
                    <h1 class="Contenido_Titulo" key={Titulo.id_titulo}>{Titulo.nombre_titulo}</h1>
                ))}
            </section>

            <section class='TituloDatPer'>
                <h1 class='TituloDatPer'>Datos personales:</h1>
            </section>


            {Datos.map((Datos, index) => (
                <section class='ConfComDatosCliente' key={index}>
                    <p>Nombre: {Datos.primer_nombre} {Datos.segundo_nombre} {Datos.primer_apellido} {Datos.segundo_apellido}</p>
                    <p>Documento: {Datos.tipo_documento} {Datos.documento}</p>
                    <p>Correo: {Datos.correo}</p>
                    <p>Telefeono: {Datos.telefono}</p>
                    <p>Direccion: {Datos.direccion}</p>
                </section>
            ))}

            <section class='TituloDatPer'>
                <h1 class='TituloDatPer'>Detalles del pedido:</h1>
            </section>

            <section class='TitulosFactura'>
                <p class='TituloDescrip'>Descripcion</p>
                <p class='TituloCant'>Cantidad</p>
                <p class='TituloDescuen'>descuento</p>
                <p class='TituloIva'>Iva</p>
                <p class='TituloPrecio'>Precio unidad</p>
            </section>

            {Productos.map((Productos, index) => (
                <section key={index}>
                    <div class='DescripcionProductos'>
                        <p class='NombreProducto'>{Productos.nombre_producto}</p>
                        <select onChange={handleCantidadChange} class="form-select" aria-label="Default select example">
                            <option selected>Cantidad</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <p class='DescuentoProducto'>{Productos.descuento}%</p>
                        <p class='DescuentoIva'>{Productos.iva}%</p>
                        <p class='PrecioProducto'>$ {Productos.precio}</p>
                    </div>
                </section>
            ))}

            <section id='ConteBotones'>
                <button id='BtnConfirmar' href='/admin' onClick={Comprar} type="button" class="btn btn-warning"><a>Comprar</a></button>
                <button id='BtnCancelar' type="button" class="btn btn-danger"><a href='/DescripcionProductoCliente'>Cancelar</a></button>
            </section>

            <section class='ConteBotonComoPagar'>
                <button type="button" onClick={Mostrar} class="btn btn-link">¿Como realizar el pago?</button>
            </section>

            <section id='InfoDePago'>
                <p>Señor(a) usuario, para realizar el pago de su pedido, debe dirigirse al apartado de mis compras, ubicar la compra realizada y realizar la consignación a los siguientes canales por el valor total:</p>
                <h6>Efecty: 123456789</h6>
                <h6>Nequi: 1234567890</h6>
                <h6>Davivienda: 12345678909876</h6>
                <h6>Bancolombia ahorros: 1234567890987</h6>
                <p>Una vez realizado el pago, deberá enviar el comprobante de pago, número de factura y documento de identidad al siguiente correo Carcesorio@hotmail.com. Si el pago se realizó de manera exitosa, el estado de su pedido cambiará en 2 días hábiles, de lo contrario será enviado un correo de respuesta.</p>
                
                <button type="button" onClick={Ocultar} class="btn btn-link">▲</button>
            </section>

            <PieUno />
            <PieDos />
        </div>
    )
}
export default ConfirmarCompra;