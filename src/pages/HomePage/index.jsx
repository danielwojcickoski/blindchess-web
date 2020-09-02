import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import Navbar from '../../components/Navbar';

import './styles.css';

export default function Homepage() {
  return (
    <div className="home-page-content container">
      <Navbar />

      <section className="content-body">
        <div className="home-video">
          <iframe src="https://www.youtube.com/embed/01_nMeqNm1g?start=0" width="560" height="315" frameborder="0" title="yt-video"></iframe>
        </div>

        <div className="home-text">
          <article>
            <p>
              A inspiração para este projeto foi a entrada de uma aluna com deficiência visual na nossa escola, que gerou uma grande curiosidade em desenvolver algo na área de acessibilidade. O problema que decidimos resolver foi a adaptação do jogo de xadrez
            </p>
            <p>
              Durante a pesquisa, vimos que os jogos de xadrez adaptados eram apenas adaptados ao tato e que isso poderia ser melhorado. A partir disso, formulamos a seguinte hipótese, fazer um xadrez áudio guiado tornaria mais fácil para os jogadores usar o tabuleiro. Para concluir este objetivo decidimos criar um dispositivo que pudesse ler as ações do jogador e transformá-las em áudio.
            </p>
            <p>
              Para ler as ações são utilizados sensores de campo magnético, que podem reconhecer onde estão as peças. Um módulo bluetooth junto com um arduino é usado para enviar as ações do jogador para um aplicativo no celular. O aplicativo desenvolvido transforma as ações recebidas, pelo bluetooth, em áudio por meio de uma API do google.
            </p>
            <p>
              Em algumas feiras que participamos fizemos testes com deficientes visuais e eles gostaram muito dos recursos implementados. Com os protótipos produzidos, também conseguimos confirmar que é possível criar placas adaptadas com tecnologia simples e barata, cada uma custando por volta de 100 reais.
            </p>
          </article>

          <Link className="resume-link text" to="/resume" >
            Clique aqui para ver o resumo completo
            <FiArrowRight size={16} color="#000" />
          </Link>
        </div>
      </section>
    </div >
  );
};
