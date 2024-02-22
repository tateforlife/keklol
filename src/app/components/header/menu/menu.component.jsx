import React from 'react';

import './menu.styles.scss';

const Menu = () => {
  return (
    <nav className='menu-wrapper'>
      <ul>
        <li onClick={() => {
          const event = new Event('kek');
          document.dispatchEvent(event);
        }}>
          <a href="/#features">Key Features</a>
        </li>
        <li onClick={() => {
          const event = new Event('kek');
          document.dispatchEvent(event);
        }}>
          <a href="/#roadmap">Roadmap</a>
        </li>
        <li onClick={() => {
          const event = new Event('kek');
          document.dispatchEvent(event);
        }}>
          <a href="/#partners">Partners</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
