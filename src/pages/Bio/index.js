import React from 'react';
import PropTypes from 'prop-types';

import TextScroll from '../../components/TextScroll';

import './bio.scss';

const Bio = () => {
  // return
  return (
    <div className="page bio">
      <div className="wrapper">
        <TextScroll width={500} height={300} type={2}>
          <h1>Bio</h1>
          <p>Cantora carioca formada em Musicoterapia pelo Conservatório Brasileiro de Música, onde estudou também canto lírico e violão. Porém, foi no samba, na bossa nova, na música brasileira que se encontrou e faz dela sua expressão artística.
            <br/><br/>Pollyanna estudou canto na Escola Portátil de Choro. Vocalista do Grupo Fala Brasil de samba e choro durante 10 anos.
            <br/><br/>Vocalista do  bloco Musicalidade, que leva carnaval para asilos de idosos. Compôs trilha sonora para documentários e peças teatrais.
            <br/><br/>Entrevistas para NY Times, Canal Futura, Programa Estrelas (Rede Globo), Documentário "Pollyanna Ferrari - Canto dos Cantos" (TV Pinel), Radio Multi Rio.
            <br/><br/>Tem se apresentado há 15 anos no Rio de Janeiro, além de shows na França em 2015, 2016 e 2017 e em Portugal em 2018.<br/><br/>  
          Graduou-se em Musicoterapia pelo Conservatório Brasileiro de Música, especializou-se em Saúde Mental pela UFRJ, onde também fez Mestrado em Psicologia Social.</p>
          <p>Assessora Técnica dos projetos de cultura e geração de renda da Rede de Saúde Mental Prefeitura (RJ) (2014-2017). Professora da disciplina "Musicoterapia e Cultura" da Pós Graduação em Musicoterapia (CBM-CEU). Consultora do Ecomuseu Nega Vilma ­ Comunidade Santa Marta (desde 2009).
            <br/><br/>Na Associação de Musicoterapia do Estado do Rio de Janeiro foi Presidente, Vice Presidente, 2ª Secretária e membro do Conselho Consultivo.
            <br/><br/>Coordenadora do Coletivo Carnavalesco Tá Pirando, Pirado, Pirou!, bloco de carnaval da rede pública de saúde mental durante 5 anos.
            <br/><br/>Membro Fundadora do Coletivo Porto Lúdico onde desenvolve musicoterapia comunitária com crianças e jovens do Instituto Profissional o Terço, no Porto.</p>
        </TextScroll>
      </div>
    </div>
  )
};

Bio.propTypes = {
  any: PropTypes.any,
}

export default Bio;