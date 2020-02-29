import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useSwipeable } from 'react-swipeable';

import GalleryMin from '../../components/GalleryMin';
import TextScroll from '../../components/TextScroll';

import './bio.scss';

const Bio = () => {
  // current
  const [ current, setCurrent ] = useState(0);
  // last
  const [ last, setLast ] = useState(0);

  // props
  //const { page: { gallery } } = props;

  const gallery = [
    {
      title: '1',
      src: process.env.PUBLIC_URL + '/images/pollyanna-bio-gallery.jpg'
    }, {
      title: '2',
      src: process.env.PUBLIC_URL + '/images/pollyanna-bio-gallery-2.jpg'
    }, {
      title: '2',
      src: process.env.PUBLIC_URL + '/images/pollyanna-bio-gallery-3.jpg'
    }, {
      title: '2',
      src: process.env.PUBLIC_URL + '/images/pollyanna-bio-gallery-4.jpg'
    }, {
      title: '2',
      src: process.env.PUBLIC_URL + '/images/pollyanna-bio-gallery-5.jpg'
    }, {
      title: '2',
      src: process.env.PUBLIC_URL + '/images/pollyanna-bio-gallery-7.jpg'
    }, {
      title: '2',
      src: process.env.PUBLIC_URL + '/images/pollyanna-bio-gallery-9.jpg'
    }, {
      title: '2',
      src: process.env.PUBLIC_URL + '/images/pollyanna-bio-gallery-11.jpg'
    }
  ];

  // on set item
  const onSetItem = (index) => {
    if (Number.isInteger(index) === true) {
      setLast(current);
      setCurrent(index);
    }
  };

  // on next prev
  const onNextPrev = (e = 'prev') => {
    let index = 0;
    const total = gallery.length - 1;

    if (e === 'prev') {
      index = (current - 1) < 0 ? total : current - 1;
    } else if (e === 'next') {
      index = (current + 1) > total ? 0 : (current + 1);
    }

    onSetItem(index);
  };

  // handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => onNextPrev('next'),
    onSwipedRight: () => onNextPrev('prev'),
    onSwipedDown: () => onNextPrev('prev'),
    onSwipedUp: () => onNextPrev('next'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // return
  return (
    <div className="page bio" {...handlers}>
      <ReactScrollWheelHandler
        upHandler={() => onNextPrev('prev')}
        downHandler={() => onNextPrev('next')}>
          <div className="wrapper">
            <GalleryMin
              current={current}
              last={last}
              onNextPrev={onNextPrev}
              setCurrent={setCurrent}
              items={gallery}
              type={2} />

            <div className="bio--scroll">
              <span className="scroll-icon">
                <span className="scroll-icon__wheel-outer">
                  <span className="scroll-icon__wheel-inner"></span>
                </span>
              </span>
            </div>

            <TextScroll height={300} type={2}>
              <p>
                Cantora carioca formada em Musicoterapia pelo &nbsp;
                <a href="http://www.cbmmusica.edu.br/" className="link">Conservatório Brasileiro de Música</a>, onde estudou também canto lírico e violão. Porém, foi no samba, na bossa nova, na música brasileira que se encontrou e faz dela sua expressão artística.
              </p>
              <p>
                Pollyanna estudou canto na &nbsp;
                <a href="http://www.casadochoro.com.br/portal/view/escola_portatil" className="link">Escola Portátil de Choro</a>.&nbsp;
                Vocalista do <strong>Grupo Fala Brasil</strong> de samba e choro durante 10 anos.</p>
              <p>Vocalista do bloco Musicalidade, que leva carnaval para asilos de idosos. Compôs trilha sonora para documentários e peças teatrais.</p>
              <p>Entrevistas para <strong>NY Times</strong>, <strong>Canal Futura</strong>, <strong>Programa Estrelas (Rede Globo)</strong>, <strong>Documentário "Pollyanna Ferrari - Canto dos Cantos" (TV Pinel), Radio Multi Rio</strong>.</p>
              <p>Tem se apresentado há 15 anos no Rio de Janeiro, além de shows na França em 2015, 2016 e 2017 e em Portugal em 2018.</p>  
              <p>Graduou-se em Musicoterapia pelo Conservatório Brasileiro de Música, especializou-se em Saúde Mental pela UFRJ, onde também fez Mestrado em Psicologia Social.</p>
              <p>Assessora Técnica dos projetos de cultura e geração de renda da Rede de Saúde Mental Prefeitura (RJ) (2014-2017). Professora da disciplina "Musicoterapia e Cultura" da Pós Graduação em Musicoterapia (CBM-CEU). Consultora do Ecomuseu Nega Vilma ­ Comunidade Santa Marta (desde 2009).</p>
              <p>Na <a href="http://www.amtrj.com.br/" className="link">Associação de Musicoterapia do Estado do Rio de Janeiro</a> foi Presidente, Vice Presidente, 2ª Secretária e membro do Conselho Consultivo.</p>
              <p>Coordenadora do Coletivo Carnavalesco Tá Pirando, Pirado, Pirou!, bloco de carnaval da rede pública de saúde mental durante 5 anos.</p>
              <p>Membro <strong>Fundadora do Coletivo Porto Lúdico</strong> onde desenvolve musicoterapia comunitária com crianças e jovens do Instituto Profissional o Terço, no Porto.</p>
            </TextScroll>
          </div>
      </ReactScrollWheelHandler>
    </div>
  )
};

Bio.propTypes = {
  any: PropTypes.any,
}

export default Bio;