import React from 'react';
import laptop from '../../assets/laptop.png';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <img src={laptop} className='attribution__icon' alt="Magic Laptop Icon"></img>
      <p className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor, </a>
        Crafted by <a href="https://github.com/kmaalig" target="_blank" rel="noopener noreferrer">Cyphr Sylph</a>
      </p>
    </footer>
  );
}

export default Footer;