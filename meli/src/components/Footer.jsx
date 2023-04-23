import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <blockquote className="blockquote mb-0 col-6 d-none d-md-block fixed-bottom">
      <footer className="text-center">
      <Link to="https://amendocol.github.io/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faPlay} size='2x' className='fa-bounce'/></Link>
        <small>
          &nbsp;Arnulfo Mendoza Huertas <cite title="Source Title">2023</cite>
        </small>
      </footer>
    </blockquote>
  )
}