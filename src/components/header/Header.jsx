import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <h1 className='logotype'><span className='detailedText'>Pedro</span>hr</h1>
        <ul>
          <li><a href="#about">PRESENTACIÓN</a></li>
          <li><a href="#projects">HABILIDADES</a></li>
          <li><a href="#contact">PROYECTOS</a></li>
          <li><a href="#contact">DOCUMENTOS</a></li>
        </ul>
        <a href="#" className='contactLink'>Contactar</a>
      </nav>
    </header>
  );
}

export default Header;
