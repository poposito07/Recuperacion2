import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import faces from '../../../../public/img/faces.jpeg';
import Images from '../../../../public/img/perfil.jpeg'; // Reemplaza esta importación con la ruta correcta de tu imagen de perfil
import perfilH from '../../../../public/img/perfilH.jpeg'; // Reemplaza esta importación con la ruta correcta de tu imagen de perfil
import Header from '../../../Components/Pages/header/Header';

import Articuloss from '../../Pages/Articulos/Articuloss';
import CrearPublicacionn from '../../Pages/Publicar/CrearPublicacionn';
import '../input/Image.css'; // Asegúrate de importar tu archivo CSS
import '../publicacion/Perfil.css';


function Perfil() {
    return ( 
        <>
            <Header />
            <div className="image-container">
                <img src={faces} alt="overlay" className="overlay-image" />
            </div>
            <section className='body'>
                <div className='body-left'>
                    <div className='container-left'>
                        <div className='container-pefil'>
                            <img src={Images} alt="Perfil" />
                        </div>
                        <div className='container-info'>
                            <div className='info-left'>
                                <h2 className='text'>Joanna Rosenbaum</h2>
                                <h5 className='text'>Ing. Sistemas de la información</h5>
                                <h6 className='text'>Chiapas, México</h6>
                                <article className='container-redes'>
                              <ul>
                                <li>
                                    <FontAwesomeIcon icon={faInstagram} />
                                    <span><a href="https://instagram.com/JoannaRose">@JoannaRose</a></span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faFacebook} />
                                    <span><a href="https://facebook.com/JoannaRose">/JoannaRose</a></span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faTwitter} />
                                    <span><a href="https://twitter.com/JoannaRose">@JoannaRose</a></span>
                                </li>
                            </ul>
                              </article>
                           </div>
                            <div className='container-intereses'>
                                <h4 className='text2'>Intereses</h4>
                                <ul className='container-Lista'>
                                    <li className='Lista'>Materias</li>
                                    <li className='Lista'>Deportes</li>
                                    <li className='Lista'>Comida</li>
                                    <li className='Lista'>Hobbies</li>
                                    <li className='Lista'>Peliculas/series</li>
                                </ul>
                            </div>
                        </div>
                        <section className='section-info'>
                            <div className='Acerca-de-mi'>
                                <h2>Acerca de mí</h2>
                                <p>Figma ipsum component variant main layer. Reesizing undo figjam align inspect. Ipsum layer stroke slice frame italic background. Bold boolean duplicate layout overflow. Scale draft ipsum main background figma selection. Star ellipse comment figma content draft. Figma main main arrange strikethrough. List slice pixel ellipse figjam text. Arrow line variant boolean device star hand comment layer. Device shadow pixel comment scale figjam bold library font group. Arrow style slice reesizing underline prototype. Comment move underline arrange style slice move reesizing pixel.</p>
                            </div>
                            <div className='Amigos'>
                                <div className='info-amigos'>
                                    <h4 className='margin0'>Amigos</h4>
                                    <h6 className='margin1'>123 amigos <a href='#'>Buscar amigos</a></h6>
                                </div>
                                <div className='container-amigos'>
                                    <img className='image' src={faces} alt="Amigo" />
                                    <div className='text-amigos'>
                                        <h4 className='margin0'>Joan Rosenbaum</h4>
                                        <h6 className='margin0'>Ing. Sistemas computacionales</h6>
                                    </div>
                                </div>
                                <div className='container-amigos'>
                                    <img className='image' src={perfilH} alt="Amigo" />
                                    <div className='text-amigos'>
                                        <h4 className='margin0'>Joan Rosenbaum</h4>
                                        <h6 className='margin0'>Ing. Sistemas computacionales</h6>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <CrearPublicacionn/>
                    </div>
                </div>
                <Articuloss/>
                {}
            </section>
        </>
     );
}

export default Perfil;
