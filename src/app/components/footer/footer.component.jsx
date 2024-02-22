import React from 'react';

import './footer.styles.scss';

import Social from '../header/social/social.component';
import Logo from '../header/logo/logo.component';
import environment from '../../../environment/environment';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer__wrapper'>
          <div className='footer__socials'>
            <div className="footer__left">
              <Logo />
              <div className="footer__buttons">
                <button className='footer__button' onClick={() => location.href = environment.telegram}>
                  Join Now
                </button>
              </div>
              <Social />
            </div>
            <div className="footer__right">
              <div className="footer__menu">
                <div className="footer__menu-item"><div className="footer__divider"></div><a href="#">Home</a></div>
                <div className="footer__menu-item"><a href="/staking">Staking</a></div>
                <div className="footer__menu-item"><a href="#features">Key Features</a></div>
                <div className="footer__menu-item"><a href="#roadmap">Roadmap</a></div>
                <div className="footer__menu-item"><a href="#partners">Partners</a></div>
              </div>
              <div className="footer__menu">
                <div className="footer__menu">
                  <div className="footer__menu-item"><div className="footer__divider"></div><a href="#">$CFC Token</a></div>
                  <div className="footer__menu-item"><a href="#">Raydium</a></div>
                  <div className="footer__menu-item"><a href="#">Jupiter</a></div>
                  <div className="footer__menu-item"><a href="#">DexScreener</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer__legal'>
            <p className='footer__legal-rights'>
              © 2024 CoinFlip, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
