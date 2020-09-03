import React from 'react';

import Navbar from '../../components/Navbar';
import Member from '../../components/Member';

import './styles.css';

import profileDani from '../../assets/images/profile-dani.jpeg';
import profileGusta from '../../assets/images/profile-gusta.jpeg';
import profileRafa from '../../assets/images/profile-rafa.jpeg';

export default function MembersPage() {
  return (
    <div className="members-page-content container">
      <Navbar />

      <section className="content-body">
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
          email="gustavolifestory@gmail.com"
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
      </section>
    </div >
  );
}