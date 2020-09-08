import React from 'react';

import Navbar from '../../components/Navbar';

import './styles.css';

import profileGusta from '../../assets/images/profile-gusta.jpeg';

export default function ProjectPage() {
  return (
    <div className="container resume-page-content">
      <Navbar />

      <section className="content-body">
        <section className="section-chapter">
          <h1 className="chapter-title">Introdução</h1>
          <article className="chapter-article">
            <p>
            Como se sabe, pessoas com deficiências visuais têm muitas dificuldades em vários pontos da vida, um desses pontos, que é o foco deste trabalho, é o lazer. O entretenimento é uma parte da vida de um deficiente visual em que existe uma certa escassez possibilidades, assim como jogos de computador adaptados, jogos de tabuleiro adaptados também já são realidade porém ainda são pouco comuns.
            </p>
            {/*<p>Dentre os jogos de tabuleiro, o Xadrez é um dos mais jogados do mundo. É considerado por muitos uma arte ou até mesmo uma ciência, e este foi o jogo escolhido para este trabalho.
            </p><p>O Xadrez traz diversos benefícios a seus jogadores, segundo Santos et. Al, o Xadrez contribui para o desenvolvimento intelectual, torna o raciocínio lógico mais aguçado, melhora as capacidades de análise, de síntese e de resolução de problemas. Dentre todos os jogos, o Xadrez tem grande prestígio por ser um esporte voltado para o desenvolvimento do raciocínio lógico, da concentração e da atenção (SANTOS, 2015).
            </p><p>Além disso os jogos e brincadeiras servem de estímulo para que as crianças possam interagir com novos conhecimentos e desenvolver habilidades, o que é fundamental para o fortalecimento de vínculos afetivos, relacionamentos interpessoais, na vida em sociedade e na sua constituição de ser humano (BLANCO, 2014).
            </p><p>O artigo de Santos et. Al trata de um estudo cujo objetivo foi apontar benefícios do Xadrez como ferramenta pedagógica. Foi feita uma pesquisa que obteve participação de oito alunos e três profissionais, entre eles professores e orientadores pedagógicos, todos de uma escola localizada em SC. Uma das professoras que trabalhou junto ao estudo, indica um resultado dizendo que os alunos que praticam Xadrez desde as séries iniciais têm melhor desempenho, além da capacidade de concentração maior (SANTOS, 2015).
            </p><p>No estudo de Blanco et. Al foram confeccionados jogos de tabuleiros adaptados a deficientes visuais, utilizando materiais que estimulam os recursos táteis. Neste estudo foi concluído que jogos e brincadeiras têm uma grande importância no processo de aprendizagem e que ajudam a desenvolver funções psicológicas e fortalecer as relações interpessoais entre os alunos, sejam deficientes visuais ou videntes (BLANCO, 2014).
            </p><p>No estudo de Blanco et. Al e de Santos et. Al são mostradas algumas das vantagens do jogo de xadrez e da existência de um tabuleiro adaptado, mas assim como no caso citado mesmo os tabuleiros que são adaptados, só dispõem de recursos táteis como método de comunicação com o jogador, assim não oferecendo a melhor experiência possível aos jogadores.
            </p><p>No trabalho de Torres et. Al é realizado  um estudo sobre as formas de substituição sensorial para deficientes visuais, estes são meios usados por pessoas com deficiência para trocar o método como as informações são adquiridas. Com isso existem duas formas de substituição sensorial para deficientes visuais, Visuo-Tátil e Visual-Auditiva(TORRES, 2016).
            </p><p>A substituição Visuo-Tátil é aquela em que a visão é substituída pelo tato, o sistema mais acessível e conhecido de substituição visuo-tátil é o Sistema Braille.
            </p><p>A substituição Visuo-Auditiva, aquela em que a visão é substituída pela audição, já é comumente usada em dispositivos eletrônicos como Smartphones e Notebooks, nestes dispositivos quando a função está ativada a interface é totalmente narrada através de uma voz artificial.
            </p><p>Um exemplo de substituição Visuo-Auditiva são os audiogames, estes são jogos que utilizam recursos sonoros para determinar as ações que o jogador precisa tomar. Devido a sua característica de usar sons como principal forma de orientação ao usuário, este tipo de jogo acaba se tornando acessível para pessoas com deficiência visual que, devido as suas limitações, não conseguem ter uma boa experiência de jogabilidade em títulos tradicionais (JOGANDO ÀS CEGAS, 2014).
            </p><p>Outra questão sensível aos deficientes visuais é o acesso à informação, que tem se tornado mais comum na sociedade mas nem sempre é fácil viabilizar isto para todos os indivíduos (GIRÃO, 2014).
            </p><p>Os deficientes visuais enfrentam diversas dificuldades para ter esse acesso à informação, os audiogames  podem disponibilizar isso para esse público. O primeiro desafio para a produção de áudio games é customizar e desenvolver jogos que possam envolver os jogadores de uma forma lúdica. Observando que os audiogames existentes são muito restritos e negligenciados pelos profissionais da área enquanto fonte de informação e entretenimento para deficientes visuais, Girão et. Al conclui que os audiogames podem representar um verdadeiro divisor de águas na disponibilidade e acesso a informação para deficientes visuais(GIRÃO, 2014).
            </p>*/}
          </article>
        </section>
        <section className="section-chapter">
          <h1 className="chapter-title">Desenvolvimento</h1>
          <article className="chapter-article">
            <p>
            Como se sabe, pessoas com deficiências visuais têm muitas dificuldades em vários pontos da vida, um desses pontos, que é o foco deste trabalho, é o lazer. O entretenimento é uma parte da vida de um deficiente visual em que existe uma certa escassez possibilidades, assim como jogos de computador adaptados, jogos de tabuleiro adaptados também já são realidade porém ainda são pouco comuns.
            </p>
          </article>
        </section>
        <section className="section-chapter">
          <h1 className="chapter-title">Resultados</h1>
          <article className="chapter-article">
            <p>
            Como se sabe, pessoas com deficiências visuais têm muitas dificuldades em vários pontos da vida, um desses pontos, que é o foco deste trabalho, é o lazer. O entretenimento é uma parte da vida de um deficiente visual em que existe uma certa escassez possibilidades, assim como jogos de computador adaptados, jogos de tabuleiro adaptados também já são realidade porém ainda são pouco comuns.
            </p>
            <div className="chapter-image">
              <img src={profileGusta} alt="Gustavo Diersmann"/>
              <p className="chapter-image-desc">Gusta in the Mexico (Autoria propria)</p>
            </div>
          </article>
        </section>
        <section className="section-chapter">
          <h1 className="chapter-title">Conclusões</h1>
          <article className="chapter-article">
            <p>
            Como se sabe, pessoas com deficiências visuais têm muitas dificuldades em vários pontos da vida, um desses pontos, que é o foco deste trabalho, é o lazer. O entretenimento é uma parte da vida de um deficiente visual em que existe uma certa escassez possibilidades, assim como jogos de computador adaptados, jogos de tabuleiro adaptados também já são realidade porém ainda são pouco comuns.
            </p>
          </article>
        </section>
      </section>
    </div >
  );
}