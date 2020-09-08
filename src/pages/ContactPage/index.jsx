import React from 'react';

import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';

import './styles.css';

import profileBc from '../../assets/images/logoSquare.png';
import profileDani from '../../assets/images/profile-dani.jpeg';
import profileGusta from '../../assets/images/profile-gusta.jpeg';
import profileRafa from '../../assets/images/profile-rafa.jpeg';

export default function ContactPage() {
  return (
    <div className="container contact-page-content">
      <Navbar />

      <section className="content-body">
        <Contact
          image={profileBc}
          name="Projeto BlindChess"
          email="projetoblindchess@gmail.com"
          youtube="https://www.youtube.com/channel/UCJiQn4j10Q7Wrre__OaaD-g"
        >
          projetoblindchess@gmail.com
        </Contact>

        <div>
          <h1>Membros</h1>
          <div className="members">
            <Contact
              image={profileDani}
              name="Daniel Wojcickoski"
              instagram="denieu.u"
              email="dswojcickoski@gmail.com"
              linkedin="https://www.linkedin.com/in/daniel-wojcickoski-77356b191/"
            >
              Técnico em Mecatrônica
              <br />
              IFSul - Campus Charqueadas
            </Contact>

            <Contact
              image={profileGusta}
              name="Gustavo Diersmann"
              instagram="gustavodiersmann_"
              email="gustavodier21@gmail.com"
              linkedin="https://www.linkedin.com/in/gustavo-diersmann-556624198/"
            >
              Técnico em Mecatrônica
              <br />
              IFSul - Campus Charqueadas
            </Contact>

            <Contact
              image={profileRafa}
              name="Rafael Vargas"
              instagram="rafaobrs"
              email="rafaobrs@gmail.com"
              linkedin="https://www.linkedin.com/in/rafael-marquetto-vargas-a0020098/"
            >
              Eng. Controle e Automação
              <br />
              UFRGS
            </Contact>
          </div>
        </div>
      </section>
    </div >
  );
}