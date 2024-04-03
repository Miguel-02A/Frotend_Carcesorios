import React from 'react';
import HeaderUno from '../../components/1.Header';
import Informacion from '../../components/2.Informacion';
import HeaderDos from '../../components/3.HeaderDos';
import Carrusel from '../../components/4.Carrusel';
import Titulo from '../../components/5.Titulo';
import ListaProductos from '../../components/6.ListaProductos';
import PieUno from '../../components/7.PieUno';
import PieDos from '../../components/8.PieDos';


function Principal() {

    return (
        <div>
            <HeaderUno />
            <Informacion link1={"/"} link2={'/iniciarsesion'} />
            <HeaderDos link1={"/"} link2={'/ofertas'} link3={'/ayuda'} />
            <Carrusel />
            <Titulo />
            <ListaProductos />
            <PieUno />
            <PieDos />
        </div>
    )
}
export default Principal;