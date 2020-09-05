import React from 'react';
import { FiYoutube } from 'react-icons/fi';
import './styles.css';

export default function ProjectContact(props) {
  return (
    <div className="project">
      <img src={props.image} alt="" className="member-img" />
      <p className="project-name">{props.name}</p>
      <p className="project-email">{props.email}</p>
      <div className="project-contact">
        <a href={props.youtube} target="_blank" rel="noopener noreferrer">
          <FiYoutube size={30} color="#000" />
        </a>
      </div>
    </div>
  );
}