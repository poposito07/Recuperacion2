import '../articulo/CardArticuloo.css';

function CardArticulooq ({ username, text }) {
    return (
        <section className="contenedor-articulooq">
            <div className='contenedor-infooq'>
                <h3 className='espaciadooq'>{username}</h3>
                <p className='espaciadooq'>{text}</p>
                <button className='boton-saber-masq'>Saber Más</button>
            </div>
        </section>
    );
}

export default CardArticulooq;
