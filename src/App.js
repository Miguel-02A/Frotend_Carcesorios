import React from 'react';
import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Usuario
import Principal from './Pages/1.Usuario/1.PaginaPrincipal';
import Ofertas from './Pages/1.Usuario/2.Ofertas';
import Ayuda from './Pages/1.Usuario/3.Ayuda';
import Volantes from './Pages/1.Usuario/4.Volantes';
import IniciarSesion from './Pages/1.Usuario/5.IniciarSesion';
import CrearCuenta from './Pages/1.Usuario/6.CrearCuenta';
import PaginaPalancas from './Pages/1.Usuario/7.PaginaPalancas';
import Alerones from './Pages/1.Usuario/8.PaginaAlerones';
import TomasDeAire from './Pages/1.Usuario/9.PaginaTomasA';
import TubosEscape from './Pages/1.Usuario/10.PaginaTubosE';
import Rines from './Pages/1.Usuario/11.PaginaRines';
import Neumaticos from './Pages/1.Usuario/12.PaginaNeumaticos';
import Bodykyt from './Pages/1.Usuario/13.PaginaBodyKit';
import DescripcionProducto from './Pages/1.Usuario/14.DescripcionProducto';

// Admin

import PrincipalAdmin from './Pages/3.Administrador/1.PaginaPrincipalAdmin';
import PerfilAdmin from './Pages/3.Administrador/2.PerfilAdmin';
import OfertasAdmin from './Pages/3.Administrador/3.PaginaOfertasAdmin';
import AyudaAdmin from './Pages/3.Administrador/4.PaginaAyudaAdmin';
import VolantesAdmin from './Pages/3.Administrador/5.PaginaVolantesAdmin';
import PalancasAdmin from './Pages/3.Administrador/6.PaginaPalancasAdmin';
import AleronesAdmin from './Pages/3.Administrador/7.PaginaAleronesAdmin';
import TomasDeAireAdmin from './Pages/3.Administrador/8.PaginaTomasAAdmin';
import TubosEscapeAdmin from './Pages/3.Administrador/9.PaginaTubosEAdmin';
import RinesAdmin from './Pages/3.Administrador/10.PaginaRinesAdmin';
import NeumaticosAdmin from './Pages/3.Administrador/11.PaginaNeumaticosAdmin';
import BodykytAdmin from './Pages/3.Administrador/12.PaginaBodyKitAdmin';


import DescripcionProductoAdmin from './Pages/3.Administrador/13.DescripcionProductoAdmin';
import CarritoAdmin from './Pages/3.Administrador/14.CarritoAdmin';
import PedidosAdmin from './Pages/3.Administrador/15.PedidosAdmin';
import EditarPerfilesAdmin from './Pages/3.Administrador/16.EditarPerfilesAdmin';

// Cliente

import PrincipalCliente from './Pages/2.Cliente/1.PaginaPrincipalCliente';
import PerfilCliente from './Pages/2.Cliente/2.PerfilCliente';
import OfertasCliente from './Pages/2.Cliente/3.PaginaOfertasCliente';
import AyudaCliente from './Pages/2.Cliente/4.PaginaAyudaCliente';
import VolantesCliente from './Pages/2.Cliente/5.PaginaVolantesCliente';
import PalancasCliente from './Pages/2.Cliente/6.PaginaPalancasCliente';
import AleronesCliente from './Pages/2.Cliente/7.PaginaAleronesCliente';
import TomasDeAireCliente from './Pages/2.Cliente/8.PaginaTomasACliente';
import TubosEscapeCliente from './Pages/2.Cliente/9.PaginaTubosECliente';
import RinesCliente from './Pages/2.Cliente/10.PaginaRinesCliente';
import NeumaticosCliente from './Pages/2.Cliente/11.PaginaNeumaticosCliente';
import BodykytCliente from './Pages/2.Cliente/12.PaginaBodyKitCliente';

import DescripcionProductoCliente from './Pages/2.Cliente/14.DescripcionProductoCliente';
import CarritoCliente from './Pages/2.Cliente/15.CarritoCliente';
import ConfirmarCompra from './Pages/2.Cliente/16.ConfirmarCompra';
import ComprasCliente from './Pages/2.Cliente/17.PaginaComprasCliente';




function App() {
    return (
        <div>

            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Principal />} />
                    <Route path="/ofertas" element={<Ofertas />} />
                    <Route path="/volantes" element={<Volantes />} />
                    <Route path="/ayuda" element={<Ayuda />} />
                    <Route path="/iniciarsesion" element={<IniciarSesion />} />
                    <Route path="/CrearCuenta" element={<CrearCuenta />} />
                    <Route path="/PaginaPalancas" element={<PaginaPalancas />} />
                    <Route path="/Alerones" element={<Alerones />} />
                    <Route path="/TomasDeAire" element={<TomasDeAire />} />
                    <Route path="/TubosEscape" element={<TubosEscape />} />
                    <Route path="/Rines" element={<Rines />} />
                    <Route path="/Neumaticos" element={<Neumaticos />} />
                    <Route path="/Bodykyt" element={<Bodykyt />} />
                    <Route path="/DescripcionProducto" element={<DescripcionProducto />} />


                    <Route path="/PrincipalAdmin" element={<PrincipalAdmin />} />
                    <Route path="/PerfilAdmin" element={<PerfilAdmin />} />
                    <Route path="/OfertasAdmin" element={<OfertasAdmin />} />
                    <Route path="/AyudaAdmin" element={<AyudaAdmin />} />
                    <Route path="/VolantesAdmin" element={<VolantesAdmin />} />
                    <Route path="/PalancasAdmin" element={<PalancasAdmin />} />
                    <Route path="/AleronesAdmin" element={<AleronesAdmin />} />
                    <Route path="/TomasDeAireAdmin" element={<TomasDeAireAdmin />} />
                    <Route path="/TubosEscapeAdmin" element={<TubosEscapeAdmin />} />
                    <Route path="/RinesAdmin" element={<RinesAdmin />} />
                    <Route path="/NeumaticosAdmin" element={<NeumaticosAdmin />} />
                    <Route path="/BodykytAdmin" element={<BodykytAdmin />} />

                    <Route path="/DescripcionProductoAdmin" element={<DescripcionProductoAdmin />} />
                    <Route path="/CarritoAdmin" element={<CarritoAdmin />} />
                    <Route path="/PedidosAdmin" element={<PedidosAdmin />} />
                    <Route path="/EditarPerfilesAdmin" element={<EditarPerfilesAdmin />} />


                    <Route path="/PrincipalCliente" element={<PrincipalCliente />} />
                    <Route path="/PerfilCliente" element={<PerfilCliente />} />
                    <Route path="/OfertasCliente" element={<OfertasCliente />} />
                    <Route path="/AyudaCliente" element={<AyudaCliente />} />
                    <Route path="/VolantesCliente" element={<VolantesCliente />} />
                    <Route path="/PalancasCliente" element={<PalancasCliente />} />
                    <Route path="/AleronesCliente" element={<AleronesCliente />} />
                    <Route path="/TomasDeAireCliente" element={<TomasDeAireCliente />} />
                    <Route path="/TubosEscapeCliente" element={<TubosEscapeCliente />} />
                    <Route path="/RinesCliente" element={<RinesCliente />} />
                    <Route path="/NeumaticosCliente" element={<NeumaticosCliente />} />
                    <Route path="/BodykytCliente" element={<BodykytCliente />} />

                    <Route path="/DescripcionProductoCliente" element={<DescripcionProductoCliente />} />
                    <Route path="/CarritoCliente" element={<CarritoCliente />} />
                    <Route path="/ConfirmarCompra" element={<ConfirmarCompra />} />
                    <Route path="/ComprasCliente" element={<ComprasCliente />} />
                </Routes>

            </BrowserRouter>
        </div>
    )
}
export default App;