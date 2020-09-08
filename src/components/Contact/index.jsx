import React from 'react';
import { FiYoutube } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';
import { AiFillLinkedin } from 'react-icons/ai';

import './styles.css';

export default function Contact(props) {
  return (
    <div className="contact">
      <img src={props.image} alt="" className="contact-img" />
      <p className="contact-name">{props.name}</p>
      <p className="contact-description">{props.children}</p>
      <div className="contact-links">
        {
          props.youtube !== undefined &&
          <a href={props.youtube} target="_blank" rel="noopener noreferrer">
            <FiYoutube size={30} color="#000" />
          </a>
        }
        {
          props.instagram !== undefined &&
          <a href={"https://www.instagram.com/" + props.instagram + "/"} target="_blank" rel="noopener noreferrer">
            <FiInstagram size={30} color="#000" />
          </a>
        }
        {
          props.email !== undefined &&
          <a href={"mailto:" + props.email} target="_blank" rel="noopener noreferrer">
            <SiGmail size={30} color="#000" />
          </a>
        }
        {
          props.linkedin !== undefined &&
          <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size={30} color="#000" />
          </a>
        }
      </div>
    </div>
  );
}