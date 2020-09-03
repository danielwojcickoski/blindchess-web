import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';
import { AiFillLinkedin } from 'react-icons/ai';

import './styles.css';

export default function Member(props) {
  return (
    <div className="member">
      <img src={props.image} alt="" className="member-img" />
      <p className="member-name">{props.name}</p>
      <p className="member-description">{props.formation}<br />{props.institution}</p>
      <div className="member-contact">
        <a href={"https://www.instagram.com/" + props.instagram + "/"} target="_blank" rel="noopener noreferrer">
          <FiInstagram size={30} color="#000" />
        </a>
        <a href={"mailto:" + props.email} target="_blank" rel="noopener noreferrer">
          <SiGmail size={30} color="#000" />
        </a>
        <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin size={30} color="#000" />
        </a>
      </div>
    </div>
  );
}