import CardArticulo from '../../ui/articulo/CardArticulo';
import '../Articulos/Articuloss.css';
function Articuloss() {
    return ( 
    <>
        <section className='Articuloq'>
            <div className='contenedor-articulo'>
                <h2 className='marg'>Artículos recientes</h2>
                <p>Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.</p>
                <CardArticulo username={'Samuel Morales'} text={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'}/>
                <CardArticulo username={'Martin Estrada'} text={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'}/>
                <CardArticulo username={'Martin Estrada'} text={'Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.'}/>
            </div>
        </section>
    </>
    );
}

export default Articuloss;