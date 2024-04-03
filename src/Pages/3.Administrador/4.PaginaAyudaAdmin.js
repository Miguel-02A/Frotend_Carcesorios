import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react'
import '../../Styles/StylesPages/1.Ayuda.css'
import HeaderUnoAdmin from '../../components/9.HeaderAdmin';
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';


function Ayuda() {

    const [Titulo, setTitulo] = useState([])

    useEffect(() => {
        const getTitulo = () => {
            fetch('http://localhost:4000/carcesorios/Ayuda')
                .then(res => res.json())
                .then(res => setTitulo(res))
        }
        getTitulo()
    }, [])

    return (
        <div>
            <HeaderUnoAdmin />
            <Informacion link1={"/PrincipalAdmin"} link2={'/CarritoAdmin'} />
            <HeaderDos link1={"/PrincipalAdmin"} link2={'/OfertasAdmin'} link3={'/AyudaAdmin'} />

            <section>
                {Titulo.map(Titulo => (
                    <h1 class="ContenidoTituloAyuda" key={Titulo.id_titulo}>{Titulo.nombre_titulo}</h1>
                ))}
            </section>

            <div id="ConteAyuda">
                <article class="ConteInformacion">
                    <h4>Preguntas frecuentes sobre pagos</h4>

                    <details>
                        <summary>¿Es seguro usar mi tarjeta de credito en el sitio web?</summary>
                        <p>Claro que si, nuestro sitio web cuenta con todas las medidas de seguridad al usar tu targeta para efectuar un pago.</p>
                    </details>

                    <details>
                        <summary>¿Que pasa si mi pago no se completa?</summary>
                        <p>Nuestro sitio web cuenta el las medidas de seguridad y calidad necesarias para que problemas como ese no sucedan, aun asi puedes acudir a servicio al clinete para ms ayuda.</p>
                    </details>

                    <details>
                        <summary>¿Es seguro comprar en la pagina web?</summary>
                        <p>Claro que si, contamos con un historial impecable, el cual demuestra que nuestra web es mas que confiable.</p>
                    </details>


                </article>

                <article class="ConteInformacion">
                    <h4>Envió</h4>

                    <details>
                        <summary>¿Puedo cancelar un pedido?</summary>
                        <p>Claso que si, solo si tu pedido aun no pasa la fase de envio, de lo contrario no sera posible.</p>
                    </details>

                    <details>
                        <summary>¿Que hacer si el artículo recibido no es lo que pedí?</summary>
                        <p>Puedes comunicar tu queja en servicio al cliente, ahi podras dar detalles y explicar tu problema con el envio.</p>
                    </details>

                    <details>
                        <summary>¿Qué hacer si el articulo que recibí tiene defectos?</summary>
                        <p>Puedes comunicar tu queja en servicio al cliente, ahi podras dar detalles y explicar tu problema con el envio</p>
                    </details>

                    <details>
                        <summary>¿Cúanto tiempo tarda en llegar mi pedido?</summary>
                        <p>Dependera que de tu ubicacion, aun asi hacemos todo lo posible para que tu pedido llegue en el menor tiempo posible. </p>
                    </details>

                </article>

                <article class="ConteInformacion">
                    <h4>Remplazos y devoluciones</h4>

                    <details>
                        <summary>¿Es posible cambiar mis atículos?</summary>
                        <p>Claro que si, esto solo es posible si tu pedido aun no pasa a la fase de envio</p>
                    </details>

                    <details>
                        <summary>¿Qué plazo tengo disponible para hacer una devolución?</summary>
                        <p>Tienes plazo para hacer una devolucion antes de completar la fasae de envio.</p>
                    </details>

                    <details>
                        <summary>¿Cómo debo proceder para devolver un producto a la tienda online?</summary>
                        <p>Ve a servicioal cliente para tener una informacion mas detallada de como devolver un producto.</p>
                    </details>

                    <details>
                        <summary>¿Tengo que pagar algo por la devolución?</summary>
                        <p>Si el producto no paso de las 24 horas desde que fue entregado o si el producto no se a usado, devolver el prodcuto no tiene costo.</p>
                    </details>

                </article>

                <article class="ConteInformacion">
                    <h4>Formulario PQR</h4>
                    <p><a href="#">Da clic aquí para llenar el formulario PQR</a></p>
                </article>
            </div>

            <PieUno />
            <PieDos />
        </div>
    )
}
export default Ayuda;