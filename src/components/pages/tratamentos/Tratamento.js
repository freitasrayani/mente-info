import React from 'react';
import './tratamento.css';
import meditando from './img-tratamento/1.png';
import mentecuidado from "./img-tratamento/mental-health.jpg"

const Tratamento = () => (
    <section className="tratamento-section">
        <div className="tratamento-title-div">
           <h1 className="tratamento-title">Tratamentos</h1> 
        </div>
        <div className="tratamento-sub">
            <h3>Por que procurar o psicólogo no tratamento da ansiedade?</h3>
        </div>
        
        <div className="tratamento-txt1">
            <div className="img-tratamento-div">
                 <img className="img-tratamento1" src={meditando} alt="mulher meditando" />
                 </div>
            <div className="txt-tratamento-div-content">
            <p className="tratamento-content">
            Se você se identificou com os sintomas citados no site e sente que está mais difícil 
            lidar com os próprios sentimentos, saiba que a terapia é a intervenção mais 
            eficaz para melhorar a ansiedade. Muitos estudos comprovam que a psicoterapia 
            é o tratamento mais adequado para essas condições, e pode ser combinado,
             em alguns casos, com medicação prescrita por médicos. Na maioria das vezes a pessoa não consegue 
             avaliar a própria ansiedade sozinha. Com a ajuda do terapeuta é possível entrar em 
             contato consigo mesma e entender as raízes e os desdobramentos do  problema.
             Ao tratar o assunto na terapia, você o entende melhor. Vai conseguir perceber
              o que alimenta a sua ansiedade, identificar as possíveis causas e reconhecer as
             emoções e comportamentos que vêm dificultando a sua vida. Aumentar o autoconhecimento 
             é o primeiro passo para ficar bem.
            </p>
            </div>
            
        </div>
        
        <div className="tratamento-sub">
            <h3>Por que procurar o psicólogo no tratamento da depressão?</h3>
        </div>
        <div className="tratamento-txt2">
            <div className="img-tratamento-div">
                <img className="img-tratamento2" src={mentecuidado} alt="saúde mental" />
            </div>
            <div className="txt-tratamento-div-content">
            <p className="tratamento-content">
            O tratamento da depressão pode ser realizado por diversas abordagens
            em psicologia, por exemplo, alguns psicologos utilizam a psicanálise, 
            outros a terapia cognitiva comportamental, e assim por diante. 
            Muitas vezes o que ajuda na cura é a analise das vivências do paciente depressivo. 
            Retomar situações vividas pode dar uma luz na identificação da causa da depressão. 
            Até mesmo situações onde não se imaginava que poderiam ser a origem de um desconforto 
            emocional podem ser identificadas e resignificadas no processo terapêutico. 
            O psicólogo pode ajudar a dar um novo olhar para as situações vividas de modo a termos 
            uma nova visão de nós mesmos ou das pessoas significativas ao nosso redor.
            </p>
            </div>
        </div>
        
    </section>

)

export default Tratamento