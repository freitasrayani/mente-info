import React from 'react';
import './ajuda.css';
import cellphone from './img-ajuda/cellphone.jpg';
import { Link } from 'react-router-dom';

const Ajuda = () => (

    <section className="box-ajuda">

        <div className="box-img-ajuda">
            <img className="img-ajuda" src={cellphone} alt="Imagem de um Smatphone" />
        </div>

        <div className="box-description">

            <div className="box-title">
                <h1 class="title-ajuda"> Busque ajuda com a plataforma Mente-Care </h1>
            </div>

            <div className="box-mente">
                <p className="description">O mente care é uma App gratuito, onde você consegue ajuda com especialistas.</p>
            </div>

            <div className="box-button">
                <Link className="button-ajuda" to="/">Buscar Ajuda</Link>
            </div>
        </div>

    </section>

);

export default Ajuda;