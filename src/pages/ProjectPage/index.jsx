import React from 'react';

import Navbar from '../../components/Navbar';

import './styles.css';

import ReportPT from '../../assets/ReportPT.pdf';

export default function ProjectPage() {
  return (
    <div className="container resume-page-content">
      <Navbar />

      <section className="content-body">
      <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Conteudo Futuro</h1>
        <br/>
        <br/>
        <br/>


        <div className="report-div">
          <h1>Artigo Completo</h1>
          <embed src={ReportPT} type="application/pdf" className="report-pdf" />
        </div>
      </section>
    </div >
  );
}