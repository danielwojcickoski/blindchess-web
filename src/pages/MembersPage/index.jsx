import React from 'react';

import Navbar from '../../components/Navbar';

import './styles.css';

import profileDani from '../../assets/images/profile-dani.jpeg';
import profileGusta from '../../assets/images/profile-gusta.jpeg';
import profileRafa from '../../assets/images/profile-rafa.jpeg';

export default function MembersPage() {
  return (
    <div className="members-page-content container">
      <Navbar />

      <section className="content-body">
        <div className="member">
          <img src={profileDani} alt="" className="member-img" />
          <p className="member-name">Daniel Wojcickoski</p>
          <p className="member-description">Técnico em Mecatrônica<br/>IFSul - Campus Charqueadas</p>
        </div>

        <div className="member">
          <img src={profileGusta} alt="" className="member-img" />
          <p className="member-name">Gustavo Diersmann</p>
          <p className="member-description">Técnico em Mecatrônica<br/>IFSul - Campus Charqueadas</p>
        </div>

        <div className="member">
          <img src={profileRafa} alt="" className="member-img" />
          <p className="member-name">Rafael Vargas</p>
          <p className="member-description">Eng. Controle e Automação<br/>UFRGS</p>
        </div>
      </section>
    </div >
  );
}