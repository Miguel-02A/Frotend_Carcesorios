import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../Styles/StylesComponents/6.ListaProductos.css'

function ListaProductos() {

        const direccion = ['/volantes','/PaginaPalancas','/Alerones','/TomasDeAire','/TubosEscape','/Rines','/Neumaticos','/Bodykyt'];

        const [productos, setProductos] = useState([]);

        useEffect(() => {
                const Productos = async () => {
                        try {
                                const response = await axios.get('http://localhost:4000/carcesorios');
                                setProductos(response.data);
                        } catch (error) {
                                console.error('Error al llamar a la API:', error);
                        }
                };
                Productos();
        }, []);
        return (
                <section id="ListaProductos">
                    {productos.map((producto, index) => (
                        <div className="caja" key={index}>
                            <a href={direccion[index]}><img src={producto.url_imagen_categoria} alt={producto.id_categorias}/><h2>{producto.nombre_categoria}</h2></a>
                        </div>
                    ))}
                </section>
            );
}
export default ListaProductos;