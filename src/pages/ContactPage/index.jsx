import React from 'react';

import Navbar from '../../components/Navbar';
import Member from '../../components/Member';
import ProjectContact from '../../components/ProjectContact';

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
        <ProjectContact
          image={profileBc}
          name="Projeto BlindChess"
          email="projetoblindchess@gmail.com"
          youtube="https://www.youtube.com/channel/UCJiQn4j10Q7Wrre__OaaD-g"
        />

        <div>
          <h1>Membros</h1>
          <div className="members">
            <Member
              image={profileDani}
              name="Daniel Wojcickoski"
              formation="Técnico em Mecatrônica"
              institution="IFSul - Campus Charqueadas"
              instagram="denieu.u"
              email="dswojcickoski@gmail.com"
              linkedin="https://www.linkedin.com/in/daniel-wojcickoski-77356b191/"
            />

            <Member
              image={profileGusta}
              name="Gustavo Diersmann"
              formation="Técnico em Mecatrônica"
              institution="IFSul - Campus Charqueadas"
              instagram="gustavodiersmann_"
              email="gustavodier21@gmail.com"
              linkedin="https://www.linkedin.com/in/gustavo-diersmann-556624198/"
            />

            <Member
              image={profileRafa}
              name="Rafael Vargas"
              formation="Eng. Controle e Automação"
              institution="UFRGS"
              instagram="rafaobrs"
              email="rafaobrs@gmail.com"
              linkedin="https://www.linkedin.com/in/rafael-marquetto-vargas-a0020098/"
            />
          </div>
        </div>
      </section>
    </div >
  );
}