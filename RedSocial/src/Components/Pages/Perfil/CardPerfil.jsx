import './cardPerfil.css'
import Perfil from '../../../../public/img/perfil.jpeg'
import Face from '../../../../public/img/faces.jpeg'

function CardPerfil() {
    return ( 
        <>
            <section className='Perfil'>
            <div className="ContenedorPerfil">
                    <img src={Perfil} alt="Imagen de Fondo" className="ImagenFondo"/>
                    <img src={Face} alt="Imagen de Perfil" className="ImagenPerfil"/>
                </div>
                <div className='ContenedorTextoPerfil'>
                    <h3>Joanna Rosenbaum</h3>
                    <p>Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.</p>
                </div>
                <div className='ContenedorPublico'>
                    <div className='ContenedorPublicacion'>
                        <h3 className='margen'>24</h3>
                        <p>Publicaciones</p>
                    </div>
                    <div className='ContenedorArticulo'>
                        <h3 className='margen'>136</h3>
                        <p>Artículos</p>
                    </div>
                </div>
            </section>
        </>
     );}
export default CardPerfil;