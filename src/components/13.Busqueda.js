import '../Styles/StylesComponents/13.Busqueda.css'

const Busqueda = () => {
    const search= e=>{
    let input = e.target.value;  {}
        input=input.toLowerCase(); {}
        let x = document.getElementsByClassName('caja');
        for (let i = 0; i < x.length; i++) { 
                if (!x[i].innerHTML.toLowerCase().includes(input)) { {}
                        x[i].style.display="none";
                }
                else {
                        x[i].style.display="list-item";                 
                }
        }
    }

    return (
        <section class='contenedor'>
            <div class="BarraNavegacion">
                <input class="form-control" id="searchbar" autoComplete='off' onChange={search} type="text" name="search" placeholder="Busca lo que necesites aquí"></input>
            </div>
        </section>
    )
}

export default Busqueda;