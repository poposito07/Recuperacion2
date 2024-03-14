import React from 'react';
import './cardArticulo.css';

function CardArticulo({ username, text }) {
    // Estados para controlar las clases de las imágenes

    return (
        <section className="contenedor-articuloq">
            <div className='contenedor-info'>
                <h3 className='espaciado'>{username}</h3>
                <p className='espaciado'>{text}</p>
            </div>
       
        </section>
    );
}

export default CardArticulo;
