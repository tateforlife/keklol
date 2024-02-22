import React from 'react';

import Menu from '../menu/menu.component';
import Social from '../social/social.component';

import './mobile-menu.styles.scss';
import environment from '../../../../environment/environment';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener('kek', () => {
      setIsOpen(false);
      document.getElementById('root').style.overflow = 'visible';
    }, false);

    return () => document.removeEventListener('kek', () => null);
  }, []);

  const toggleSwitch = (value) => {
    document.getElementById('root').style.overflow = value ? 'hidden' : 'visible';
    setIsOpen(value);
  };

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}
        onClick={() => toggleSwitch(!isOpen)}
      >
        <div className='bar1'></div>
        <div className='bar2' style={{ opacity: isOpen ? '0' : '1' }}></div>
        <div className='bar3'></div>
      </div>
      <div className={`mobile-menu__overlay ${isOpen ? 'mobile-menu__overlay--visible' : ''}`}>
        <div className='mobile-menu__wrapper'>
          <Menu />
          <div className="mobile-menu__buttons">
            <button className='mobile-menu__button' onClick={() => location.href = environment.telegram}>
              Join Now
            </button>
          </div>
          <Social />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
