import React from 'react'
import '../Styles/StylesComponents/4.Carrusel.css'
import LogoChevrolet from '../Assets/3.Carrusel/Logo_Chevrolet.jpg'
import LogoMazda from '../Assets/3.Carrusel/Logo_Mazda.jpg'
import LogoMercedes from '../Assets/3.Carrusel/Logo_Mercedes.jpg'
import LogoVolkswagen from '../Assets/3.Carrusel/Logo_Volkswagen.jpg'
import LogoToyota from '../Assets/3.Carrusel/Logo_Toyota.jpg'


function Carrusel(){
    return(
        <section id="Fondos">

            <img src={LogoChevrolet} alt=""/>
            <img src={LogoMazda} alt=""/>
            <img src={LogoMercedes} alt=""/>
            <img src={LogoVolkswagen} alt=""/>
            <img src={LogoToyota} alt=""/>

        </section>
    )
}
export default Carrusel;