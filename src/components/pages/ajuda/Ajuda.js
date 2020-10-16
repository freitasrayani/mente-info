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
                <p className="description"> O Mente Care é um aplicativo que tem por objetivo ajudar pessoas a encontrar atendimento psicológico acessível e próximo a sua localidade. Assim como também ajudar os profissionais da área com a falta de pacientes e a servir a sociedade os seus serviços de forma eficiente e sem barreiras.</p>
            </div>

            <div className="box-button">
                <a className="button-ajuda" href="https://mente-careapp.vercel.app/" target="_blank">Buscar Ajuda</a>
               
            </div>
        </div>

    </section>

);

export default Ajuda;